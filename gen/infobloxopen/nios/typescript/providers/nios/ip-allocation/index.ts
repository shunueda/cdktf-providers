// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpAllocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * This is a list of aliases for the host. The aliases must be in FQDN format. This value can be in unicode format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#aliases IpAllocation#aliases}
  */
  readonly aliases?: string[];
  /**
  * The CLI credentials for the host record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#cli_credentials IpAllocation#cli_credentials}
  */
  readonly cliCredentials?: IpAllocationCliCredentials[] | cdktf.IResolvable;
  /**
  * Comment for the record; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#comment IpAllocation#comment}
  */
  readonly comment?: string;
  /**
  * When configure_for_dns is false, the host does not have parent zone information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#configure_for_dns IpAllocation#configure_for_dns}
  */
  readonly configureForDns?: boolean | cdktf.IResolvable;
  /**
  * Determines if the DDNS updates for this record are allowed or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#ddns_protected IpAllocation#ddns_protected}
  */
  readonly ddnsProtected?: boolean | cdktf.IResolvable;
  /**
  * The description of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#device_description IpAllocation#device_description}
  */
  readonly deviceDescription?: string;
  /**
  * The location of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#device_location IpAllocation#device_location}
  */
  readonly deviceLocation?: string;
  /**
  * The type of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#device_type IpAllocation#device_type}
  */
  readonly deviceType?: string;
  /**
  * The vendor of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#device_vendor IpAllocation#device_vendor}
  */
  readonly deviceVendor?: string;
  /**
  * Determines if the record is disabled or not. False means that the record is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#disable IpAllocation#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Determines if the discovery for the record is disabled or not. False means that the discovery is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#disable_discovery IpAllocation#disable_discovery}
  */
  readonly disableDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Determines if the discovery for the record should be immediately enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#enable_immediate_discovery IpAllocation#enable_immediate_discovery}
  */
  readonly enableImmediateDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#extattrs IpAllocation#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * This is a list of IPv4 Addresses for the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#ipv4addrs IpAllocation#ipv4addrs}
  */
  readonly ipv4Addrs?: IpAllocationIpv4Addrs[] | cdktf.IResolvable;
  /**
  * This is a list of IPv6 Addresses for the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#ipv6addrs IpAllocation#ipv6addrs}
  */
  readonly ipv6Addrs?: IpAllocationIpv6Addrs[] | cdktf.IResolvable;
  /**
  * The host name in FQDN format This value can be in unicode format. Regular expression search is not supported for unicode values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#name IpAllocation#name}
  */
  readonly name: string;
  /**
  * The name of the network view in which the host record resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#network_view IpAllocation#network_view}
  */
  readonly networkView?: string;
  /**
  * Restarts the member service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#restart_if_needed IpAllocation#restart_if_needed}
  */
  readonly restartIfNeeded?: boolean | cdktf.IResolvable;
  /**
  * The value of this field specifies the order in which resource record sets are returned. The possible values are "cyclic", "random" and "fixed".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#rrset_order IpAllocation#rrset_order}
  */
  readonly rrsetOrder?: string;
  /**
  * The SNMPv3 credential for this host record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#snmp3_credential IpAllocation#snmp3_credential}
  */
  readonly snmp3Credential?: IpAllocationSnmp3Credential;
  /**
  * The SNMP credential for this host record. If set to true, the SNMP credential will override member-level settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#snmp_credential IpAllocation#snmp_credential}
  */
  readonly snmpCredential?: IpAllocationSnmpCredential;
  /**
  * The Time To Live (TTL) value for record. A 32-bit unsigned integer that represents the duration, in seconds, for which the record is valid (cached). Zero indicates that the record should not be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#ttl IpAllocation#ttl}
  */
  readonly ttl?: number;
  /**
  * If set to true, the CLI credential will override member-level settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_cli_credentials IpAllocation#use_cli_credentials}
  */
  readonly useCliCredentials?: boolean | cdktf.IResolvable;
  /**
  * When use_dns_ea_inheritance is True, the EA is inherited from associated zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_dns_ea_inheritance IpAllocation#use_dns_ea_inheritance}
  */
  readonly useDnsEaInheritance?: boolean | cdktf.IResolvable;
  /**
  * Determines if the SNMPv3 credential should be used for the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_snmp3_credential IpAllocation#use_snmp3_credential}
  */
  readonly useSnmp3Credential?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the SNMP credential will override member-level settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_snmp_credential IpAllocation#use_snmp_credential}
  */
  readonly useSnmpCredential?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ttl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_ttl IpAllocation#use_ttl}
  */
  readonly useTtl?: boolean | cdktf.IResolvable;
  /**
  * The name of the DNS view in which the record resides. Example: "external".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#view IpAllocation#view}
  */
  readonly view?: string;
}
export interface IpAllocationCliCredentials {
  /**
  * The commment for the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#comment IpAllocation#comment}
  */
  readonly comment?: string;
  /**
  * Group for the CLI credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#credential_group IpAllocation#credential_group}
  */
  readonly credentialGroup?: string;
  /**
  * The type of the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#credential_type IpAllocation#credential_type}
  */
  readonly credentialType?: string;
  /**
  * The CLI password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#password IpAllocation#password}
  */
  readonly password?: string;
  /**
  * The CLI user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#user IpAllocation#user}
  */
  readonly user?: string;
}

export function ipAllocationCliCredentialsToTerraform(struct?: IpAllocationCliCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    credential_group: cdktf.stringToTerraform(struct!.credentialGroup),
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    password: cdktf.stringToTerraform(struct!.password),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function ipAllocationCliCredentialsToHclTerraform(struct?: IpAllocationCliCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_group: {
      value: cdktf.stringToHclTerraform(struct!.credentialGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAllocationCliCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpAllocationCliCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._credentialGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialGroup = this._credentialGroup;
    }
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAllocationCliCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._credentialGroup = undefined;
      this._credentialType = undefined;
      this._password = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._credentialGroup = value.credentialGroup;
      this._credentialType = value.credentialType;
      this._password = value.password;
      this._user = value.user;
    }
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // credential_group - computed: true, optional: true, required: false
  private _credentialGroup?: string; 
  public get credentialGroup() {
    return this.getStringAttribute('credential_group');
  }
  public set credentialGroup(value: string) {
    this._credentialGroup = value;
  }
  public resetCredentialGroup() {
    this._credentialGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialGroupInput() {
    return this._credentialGroup;
  }

  // credential_type - computed: true, optional: true, required: false
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  public resetCredentialType() {
    this._credentialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class IpAllocationCliCredentialsList extends cdktf.ComplexList {
  public internalValue? : IpAllocationCliCredentials[] | cdktf.IResolvable

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
  public get(index: number): IpAllocationCliCredentialsOutputReference {
    return new IpAllocationCliCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpAllocationCloudInfoDelegatedMember {
  /**
  * The IPv4 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#ipv4addr IpAllocation#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * The IPv6 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#ipv6addr IpAllocation#ipv6addr}
  */
  readonly ipv6Addr?: string;
  /**
  * The Grid member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#name IpAllocation#name}
  */
  readonly name?: string;
}

export function ipAllocationCloudInfoDelegatedMemberToTerraform(struct?: IpAllocationCloudInfoDelegatedMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ipAllocationCloudInfoDelegatedMemberToHclTerraform(struct?: IpAllocationCloudInfoDelegatedMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAllocationCloudInfoDelegatedMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpAllocationCloudInfoDelegatedMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAllocationCloudInfoDelegatedMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._name = value.name;
    }
  }

  // ipv4addr - computed: true, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv6addr - computed: true, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
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
}
export interface IpAllocationCloudInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#delegated_member IpAllocation#delegated_member}
  */
  readonly delegatedMember?: IpAllocationCloudInfoDelegatedMember;
}

export function ipAllocationCloudInfoToTerraform(struct?: IpAllocationCloudInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegated_member: ipAllocationCloudInfoDelegatedMemberToTerraform(struct!.delegatedMember),
  }
}


export function ipAllocationCloudInfoToHclTerraform(struct?: IpAllocationCloudInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delegated_member: {
      value: ipAllocationCloudInfoDelegatedMemberToHclTerraform(struct!.delegatedMember),
      isBlock: true,
      type: "struct",
      storageClassType: "IpAllocationCloudInfoDelegatedMember",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAllocationCloudInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpAllocationCloudInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delegatedMember?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegatedMember = this._delegatedMember?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAllocationCloudInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delegatedMember.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delegatedMember.internalValue = value.delegatedMember;
    }
  }

  // authority_type - computed: true, optional: false, required: false
  public get authorityType() {
    return this.getStringAttribute('authority_type');
  }

  // delegated_member - computed: true, optional: true, required: false
  private _delegatedMember = new IpAllocationCloudInfoDelegatedMemberOutputReference(this, "delegated_member");
  public get delegatedMember() {
    return this._delegatedMember;
  }
  public putDelegatedMember(value: IpAllocationCloudInfoDelegatedMember) {
    this._delegatedMember.internalValue = value;
  }
  public resetDelegatedMember() {
    this._delegatedMember.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedMemberInput() {
    return this._delegatedMember.internalValue;
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
export interface IpAllocationIpv4AddrsDiscoveredData {
}

export function ipAllocationIpv4AddrsDiscoveredDataToTerraform(struct?: IpAllocationIpv4AddrsDiscoveredData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipAllocationIpv4AddrsDiscoveredDataToHclTerraform(struct?: IpAllocationIpv4AddrsDiscoveredData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpAllocationIpv4AddrsDiscoveredDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpAllocationIpv4AddrsDiscoveredData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAllocationIpv4AddrsDiscoveredData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ap_ip_address - computed: true, optional: false, required: false
  public get apIpAddress() {
    return this.getStringAttribute('ap_ip_address');
  }

  // ap_name - computed: true, optional: false, required: false
  public get apName() {
    return this.getStringAttribute('ap_name');
  }

  // ap_ssid - computed: true, optional: false, required: false
  public get apSsid() {
    return this.getStringAttribute('ap_ssid');
  }

  // bgp_as - computed: true, optional: false, required: false
  public get bgpAs() {
    return this.getNumberAttribute('bgp_as');
  }

  // bridge_domain - computed: true, optional: false, required: false
  public get bridgeDomain() {
    return this.getStringAttribute('bridge_domain');
  }

  // cisco_ise_endpoint_profile - computed: true, optional: false, required: false
  public get ciscoIseEndpointProfile() {
    return this.getStringAttribute('cisco_ise_endpoint_profile');
  }

  // cisco_ise_security_group - computed: true, optional: false, required: false
  public get ciscoIseSecurityGroup() {
    return this.getStringAttribute('cisco_ise_security_group');
  }

  // cisco_ise_session_state - computed: true, optional: false, required: false
  public get ciscoIseSessionState() {
    return this.getStringAttribute('cisco_ise_session_state');
  }

  // cisco_ise_ssid - computed: true, optional: false, required: false
  public get ciscoIseSsid() {
    return this.getStringAttribute('cisco_ise_ssid');
  }

  // cmp_type - computed: true, optional: false, required: false
  public get cmpType() {
    return this.getStringAttribute('cmp_type');
  }

  // device_contact - computed: true, optional: false, required: false
  public get deviceContact() {
    return this.getStringAttribute('device_contact');
  }

  // device_location - computed: true, optional: false, required: false
  public get deviceLocation() {
    return this.getStringAttribute('device_location');
  }

  // device_model - computed: true, optional: false, required: false
  public get deviceModel() {
    return this.getStringAttribute('device_model');
  }

  // device_port_name - computed: true, optional: false, required: false
  public get devicePortName() {
    return this.getStringAttribute('device_port_name');
  }

  // device_port_type - computed: true, optional: false, required: false
  public get devicePortType() {
    return this.getStringAttribute('device_port_type');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // device_vendor - computed: true, optional: false, required: false
  public get deviceVendor() {
    return this.getStringAttribute('device_vendor');
  }

  // discovered_name - computed: true, optional: false, required: false
  public get discoveredName() {
    return this.getStringAttribute('discovered_name');
  }

  // discoverer - computed: true, optional: false, required: false
  public get discoverer() {
    return this.getStringAttribute('discoverer');
  }

  // duid - computed: true, optional: false, required: false
  public get duid() {
    return this.getStringAttribute('duid');
  }

  // endpoint_groups - computed: true, optional: false, required: false
  public get endpointGroups() {
    return this.getStringAttribute('endpoint_groups');
  }

  // first_discovered - computed: true, optional: false, required: false
  public get firstDiscovered() {
    return this.getNumberAttribute('first_discovered');
  }

  // iprg_no - computed: true, optional: false, required: false
  public get iprgNo() {
    return this.getNumberAttribute('iprg_no');
  }

  // iprg_state - computed: true, optional: false, required: false
  public get iprgState() {
    return this.getStringAttribute('iprg_state');
  }

  // iprg_type - computed: true, optional: false, required: false
  public get iprgType() {
    return this.getStringAttribute('iprg_type');
  }

  // last_discovered - computed: true, optional: false, required: false
  public get lastDiscovered() {
    return this.getNumberAttribute('last_discovered');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // mgmt_ip_address - computed: true, optional: false, required: false
  public get mgmtIpAddress() {
    return this.getStringAttribute('mgmt_ip_address');
  }

  // netbios_name - computed: true, optional: false, required: false
  public get netbiosName() {
    return this.getStringAttribute('netbios_name');
  }

  // network_component_contact - computed: true, optional: false, required: false
  public get networkComponentContact() {
    return this.getStringAttribute('network_component_contact');
  }

  // network_component_description - computed: true, optional: false, required: false
  public get networkComponentDescription() {
    return this.getStringAttribute('network_component_description');
  }

  // network_component_ip - computed: true, optional: false, required: false
  public get networkComponentIp() {
    return this.getStringAttribute('network_component_ip');
  }

  // network_component_location - computed: true, optional: false, required: false
  public get networkComponentLocation() {
    return this.getStringAttribute('network_component_location');
  }

  // network_component_model - computed: true, optional: false, required: false
  public get networkComponentModel() {
    return this.getStringAttribute('network_component_model');
  }

  // network_component_name - computed: true, optional: false, required: false
  public get networkComponentName() {
    return this.getStringAttribute('network_component_name');
  }

  // network_component_port_description - computed: true, optional: false, required: false
  public get networkComponentPortDescription() {
    return this.getStringAttribute('network_component_port_description');
  }

  // network_component_port_name - computed: true, optional: false, required: false
  public get networkComponentPortName() {
    return this.getStringAttribute('network_component_port_name');
  }

  // network_component_port_number - computed: true, optional: false, required: false
  public get networkComponentPortNumber() {
    return this.getStringAttribute('network_component_port_number');
  }

  // network_component_type - computed: true, optional: false, required: false
  public get networkComponentType() {
    return this.getStringAttribute('network_component_type');
  }

  // network_component_vendor - computed: true, optional: false, required: false
  public get networkComponentVendor() {
    return this.getStringAttribute('network_component_vendor');
  }

  // open_ports - computed: true, optional: false, required: false
  public get openPorts() {
    return this.getStringAttribute('open_ports');
  }

  // os - computed: true, optional: false, required: false
  public get os() {
    return this.getStringAttribute('os');
  }

  // port_duplex - computed: true, optional: false, required: false
  public get portDuplex() {
    return this.getStringAttribute('port_duplex');
  }

  // port_link_status - computed: true, optional: false, required: false
  public get portLinkStatus() {
    return this.getStringAttribute('port_link_status');
  }

  // port_speed - computed: true, optional: false, required: false
  public get portSpeed() {
    return this.getStringAttribute('port_speed');
  }

  // port_status - computed: true, optional: false, required: false
  public get portStatus() {
    return this.getStringAttribute('port_status');
  }

  // port_type - computed: true, optional: false, required: false
  public get portType() {
    return this.getStringAttribute('port_type');
  }

  // port_vlan_description - computed: true, optional: false, required: false
  public get portVlanDescription() {
    return this.getStringAttribute('port_vlan_description');
  }

  // port_vlan_name - computed: true, optional: false, required: false
  public get portVlanName() {
    return this.getStringAttribute('port_vlan_name');
  }

  // port_vlan_number - computed: true, optional: false, required: false
  public get portVlanNumber() {
    return this.getStringAttribute('port_vlan_number');
  }

  // task_name - computed: true, optional: false, required: false
  public get taskName() {
    return this.getStringAttribute('task_name');
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }

  // v_adapter - computed: true, optional: false, required: false
  public get vAdapter() {
    return this.getStringAttribute('v_adapter');
  }

  // v_cluster - computed: true, optional: false, required: false
  public get vCluster() {
    return this.getStringAttribute('v_cluster');
  }

  // v_datacenter - computed: true, optional: false, required: false
  public get vDatacenter() {
    return this.getStringAttribute('v_datacenter');
  }

  // v_entity_name - computed: true, optional: false, required: false
  public get vEntityName() {
    return this.getStringAttribute('v_entity_name');
  }

  // v_entity_type - computed: true, optional: false, required: false
  public get vEntityType() {
    return this.getStringAttribute('v_entity_type');
  }

  // v_host - computed: true, optional: false, required: false
  public get vHost() {
    return this.getStringAttribute('v_host');
  }

  // v_switch - computed: true, optional: false, required: false
  public get vSwitch() {
    return this.getStringAttribute('v_switch');
  }

  // vlan_port_group - computed: true, optional: false, required: false
  public get vlanPortGroup() {
    return this.getStringAttribute('vlan_port_group');
  }

  // vmhost_ip_address - computed: true, optional: false, required: false
  public get vmhostIpAddress() {
    return this.getStringAttribute('vmhost_ip_address');
  }

  // vmhost_mac_address - computed: true, optional: false, required: false
  public get vmhostMacAddress() {
    return this.getStringAttribute('vmhost_mac_address');
  }

  // vmhost_name - computed: true, optional: false, required: false
  public get vmhostName() {
    return this.getStringAttribute('vmhost_name');
  }

  // vmhost_nic_names - computed: true, optional: false, required: false
  public get vmhostNicNames() {
    return this.getStringAttribute('vmhost_nic_names');
  }

  // vmhost_subnet_cidr - computed: true, optional: false, required: false
  public get vmhostSubnetCidr() {
    return this.getNumberAttribute('vmhost_subnet_cidr');
  }

  // vmi_id - computed: true, optional: false, required: false
  public get vmiId() {
    return this.getStringAttribute('vmi_id');
  }

  // vmi_ip_type - computed: true, optional: false, required: false
  public get vmiIpType() {
    return this.getStringAttribute('vmi_ip_type');
  }

  // vmi_is_public_address - computed: true, optional: false, required: false
  public get vmiIsPublicAddress() {
    return this.getBooleanAttribute('vmi_is_public_address');
  }

  // vmi_name - computed: true, optional: false, required: false
  public get vmiName() {
    return this.getStringAttribute('vmi_name');
  }

  // vmi_private_address - computed: true, optional: false, required: false
  public get vmiPrivateAddress() {
    return this.getStringAttribute('vmi_private_address');
  }

  // vmi_tenant_id - computed: true, optional: false, required: false
  public get vmiTenantId() {
    return this.getStringAttribute('vmi_tenant_id');
  }

  // vport_conf_mode - computed: true, optional: false, required: false
  public get vportConfMode() {
    return this.getStringAttribute('vport_conf_mode');
  }

  // vport_conf_speed - computed: true, optional: false, required: false
  public get vportConfSpeed() {
    return this.getStringAttribute('vport_conf_speed');
  }

  // vport_link_status - computed: true, optional: false, required: false
  public get vportLinkStatus() {
    return this.getStringAttribute('vport_link_status');
  }

  // vport_mac_address - computed: true, optional: false, required: false
  public get vportMacAddress() {
    return this.getStringAttribute('vport_mac_address');
  }

  // vport_mode - computed: true, optional: false, required: false
  public get vportMode() {
    return this.getStringAttribute('vport_mode');
  }

  // vport_name - computed: true, optional: false, required: false
  public get vportName() {
    return this.getStringAttribute('vport_name');
  }

  // vport_speed - computed: true, optional: false, required: false
  public get vportSpeed() {
    return this.getStringAttribute('vport_speed');
  }

  // vrf_description - computed: true, optional: false, required: false
  public get vrfDescription() {
    return this.getStringAttribute('vrf_description');
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }

  // vrf_rd - computed: true, optional: false, required: false
  public get vrfRd() {
    return this.getStringAttribute('vrf_rd');
  }

  // vswitch_available_ports_count - computed: true, optional: false, required: false
  public get vswitchAvailablePortsCount() {
    return this.getNumberAttribute('vswitch_available_ports_count');
  }

  // vswitch_id - computed: true, optional: false, required: false
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }

  // vswitch_ipv6_enabled - computed: true, optional: false, required: false
  public get vswitchIpv6Enabled() {
    return this.getBooleanAttribute('vswitch_ipv6_enabled');
  }

  // vswitch_name - computed: true, optional: false, required: false
  public get vswitchName() {
    return this.getStringAttribute('vswitch_name');
  }

  // vswitch_segment_id - computed: true, optional: false, required: false
  public get vswitchSegmentId() {
    return this.getStringAttribute('vswitch_segment_id');
  }

  // vswitch_segment_name - computed: true, optional: false, required: false
  public get vswitchSegmentName() {
    return this.getStringAttribute('vswitch_segment_name');
  }

  // vswitch_segment_port_group - computed: true, optional: false, required: false
  public get vswitchSegmentPortGroup() {
    return this.getStringAttribute('vswitch_segment_port_group');
  }

  // vswitch_segment_type - computed: true, optional: false, required: false
  public get vswitchSegmentType() {
    return this.getStringAttribute('vswitch_segment_type');
  }

  // vswitch_tep_dhcp_server - computed: true, optional: false, required: false
  public get vswitchTepDhcpServer() {
    return this.getStringAttribute('vswitch_tep_dhcp_server');
  }

  // vswitch_tep_ip - computed: true, optional: false, required: false
  public get vswitchTepIp() {
    return this.getStringAttribute('vswitch_tep_ip');
  }

  // vswitch_tep_multicast - computed: true, optional: false, required: false
  public get vswitchTepMulticast() {
    return this.getStringAttribute('vswitch_tep_multicast');
  }

  // vswitch_tep_port_group - computed: true, optional: false, required: false
  public get vswitchTepPortGroup() {
    return this.getStringAttribute('vswitch_tep_port_group');
  }

  // vswitch_tep_type - computed: true, optional: false, required: false
  public get vswitchTepType() {
    return this.getStringAttribute('vswitch_tep_type');
  }

  // vswitch_tep_vlan - computed: true, optional: false, required: false
  public get vswitchTepVlan() {
    return this.getStringAttribute('vswitch_tep_vlan');
  }

  // vswitch_type - computed: true, optional: false, required: false
  public get vswitchType() {
    return this.getStringAttribute('vswitch_type');
  }
}
export interface IpAllocationIpv4AddrsFuncCall {
  /**
  * The attribute to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#attribute_name IpAllocation#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The object to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#object IpAllocation#object}
  */
  readonly object?: string;
  /**
  * The function to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#object_function IpAllocation#object_function}
  */
  readonly objectFunction?: string;
  /**
  * The parameters for the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#object_parameters IpAllocation#object_parameters}
  */
  readonly objectParameters?: { [key: string]: string };
  /**
  * The parameters for the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#parameters IpAllocation#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The result field of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#result_field IpAllocation#result_field}
  */
  readonly resultField?: string;
}

export function ipAllocationIpv4AddrsFuncCallToTerraform(struct?: IpAllocationIpv4AddrsFuncCall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    object: cdktf.stringToTerraform(struct!.object),
    object_function: cdktf.stringToTerraform(struct!.objectFunction),
    object_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.objectParameters),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    result_field: cdktf.stringToTerraform(struct!.resultField),
  }
}


export function ipAllocationIpv4AddrsFuncCallToHclTerraform(struct?: IpAllocationIpv4AddrsFuncCall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_function: {
      value: cdktf.stringToHclTerraform(struct!.objectFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.objectParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    result_field: {
      value: cdktf.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAllocationIpv4AddrsFuncCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpAllocationIpv4AddrsFuncCall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._objectFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectFunction = this._objectFunction;
    }
    if (this._objectParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectParameters = this._objectParameters;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAllocationIpv4AddrsFuncCall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._object = undefined;
      this._objectFunction = undefined;
      this._objectParameters = undefined;
      this._parameters = undefined;
      this._resultField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._object = value.object;
      this._objectFunction = value.objectFunction;
      this._objectParameters = value.objectParameters;
      this._parameters = value.parameters;
      this._resultField = value.resultField;
    }
  }

  // attribute_name - computed: false, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // object - computed: false, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // object_function - computed: false, optional: true, required: false
  private _objectFunction?: string; 
  public get objectFunction() {
    return this.getStringAttribute('object_function');
  }
  public set objectFunction(value: string) {
    this._objectFunction = value;
  }
  public resetObjectFunction() {
    this._objectFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectFunctionInput() {
    return this._objectFunction;
  }

  // object_parameters - computed: false, optional: true, required: false
  private _objectParameters?: { [key: string]: string }; 
  public get objectParameters() {
    return this.getStringMapAttribute('object_parameters');
  }
  public set objectParameters(value: { [key: string]: string }) {
    this._objectParameters = value;
  }
  public resetObjectParameters() {
    this._objectParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectParametersInput() {
    return this._objectParameters;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // result_field - computed: false, optional: true, required: false
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  public resetResultField() {
    this._resultField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}
export interface IpAllocationIpv4AddrsLogicFilterRules {
  /**
  * The filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#filter IpAllocation#filter}
  */
  readonly filter?: string;
  /**
  * The filter type. Valid values are: * MAC * NAC * Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#type IpAllocation#type}
  */
  readonly type?: string;
}

export function ipAllocationIpv4AddrsLogicFilterRulesToTerraform(struct?: IpAllocationIpv4AddrsLogicFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ipAllocationIpv4AddrsLogicFilterRulesToHclTerraform(struct?: IpAllocationIpv4AddrsLogicFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAllocationIpv4AddrsLogicFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpAllocationIpv4AddrsLogicFilterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAllocationIpv4AddrsLogicFilterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._type = value.type;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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
}

export class IpAllocationIpv4AddrsLogicFilterRulesList extends cdktf.ComplexList {
  public internalValue? : IpAllocationIpv4AddrsLogicFilterRules[] | cdktf.IResolvable

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
  public get(index: number): IpAllocationIpv4AddrsLogicFilterRulesOutputReference {
    return new IpAllocationIpv4AddrsLogicFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpAllocationIpv4AddrsMsAdUserData {
}

export function ipAllocationIpv4AddrsMsAdUserDataToTerraform(struct?: IpAllocationIpv4AddrsMsAdUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipAllocationIpv4AddrsMsAdUserDataToHclTerraform(struct?: IpAllocationIpv4AddrsMsAdUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpAllocationIpv4AddrsMsAdUserDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpAllocationIpv4AddrsMsAdUserData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAllocationIpv4AddrsMsAdUserData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // active_users_count - computed: true, optional: false, required: false
  public get activeUsersCount() {
    return this.getNumberAttribute('active_users_count');
  }
}
export interface IpAllocationIpv4AddrsOptions {
  /**
  * Name of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#name IpAllocation#name}
  */
  readonly name?: string;
  /**
  * The code of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#num IpAllocation#num}
  */
  readonly num?: number;
  /**
  * Only applies to special options that are displayed separately from other options and have a use flag. These options are: * routers * router-templates * domain-name-servers * domain-name * broadcast-address * broadcast-address-offset * dhcp-lease-time * dhcp6.name-servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_option IpAllocation#use_option}
  */
  readonly useOption?: boolean | cdktf.IResolvable;
  /**
  * Value of the DHCP option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#value IpAllocation#value}
  */
  readonly value?: string;
  /**
  * The name of the space this DHCP option is associated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#vendor_class IpAllocation#vendor_class}
  */
  readonly vendorClass?: string;
}

export function ipAllocationIpv4AddrsOptionsToTerraform(struct?: IpAllocationIpv4AddrsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    num: cdktf.numberToTerraform(struct!.num),
    use_option: cdktf.booleanToTerraform(struct!.useOption),
    value: cdktf.stringToTerraform(struct!.value),
    vendor_class: cdktf.stringToTerraform(struct!.vendorClass),
  }
}


export function ipAllocationIpv4AddrsOptionsToHclTerraform(struct?: IpAllocationIpv4AddrsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num: {
      value: cdktf.numberToHclTerraform(struct!.num),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_option: {
      value: cdktf.booleanToHclTerraform(struct!.useOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_class: {
      value: cdktf.stringToHclTerraform(struct!.vendorClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAllocationIpv4AddrsOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpAllocationIpv4AddrsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._num !== undefined) {
      hasAnyValues = true;
      internalValueResult.num = this._num;
    }
    if (this._useOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOption = this._useOption;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._vendorClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorClass = this._vendorClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAllocationIpv4AddrsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._num = undefined;
      this._useOption = undefined;
      this._value = undefined;
      this._vendorClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._num = value.num;
      this._useOption = value.useOption;
      this._value = value.value;
      this._vendorClass = value.vendorClass;
    }
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

  // num - computed: false, optional: true, required: false
  private _num?: number; 
  public get num() {
    return this.getNumberAttribute('num');
  }
  public set num(value: number) {
    this._num = value;
  }
  public resetNum() {
    this._num = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInput() {
    return this._num;
  }

  // use_option - computed: false, optional: true, required: false
  private _useOption?: boolean | cdktf.IResolvable; 
  public get useOption() {
    return this.getBooleanAttribute('use_option');
  }
  public set useOption(value: boolean | cdktf.IResolvable) {
    this._useOption = value;
  }
  public resetUseOption() {
    this._useOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOptionInput() {
    return this._useOption;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // vendor_class - computed: false, optional: true, required: false
  private _vendorClass?: string; 
  public get vendorClass() {
    return this.getStringAttribute('vendor_class');
  }
  public set vendorClass(value: string) {
    this._vendorClass = value;
  }
  public resetVendorClass() {
    this._vendorClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorClassInput() {
    return this._vendorClass;
  }
}

export class IpAllocationIpv4AddrsOptionsList extends cdktf.ComplexList {
  public internalValue? : IpAllocationIpv4AddrsOptions[] | cdktf.IResolvable

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
  public get(index: number): IpAllocationIpv4AddrsOptionsOutputReference {
    return new IpAllocationIpv4AddrsOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpAllocationIpv4Addrs {
  /**
  * The name of the boot file the client must download.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#bootfile IpAllocation#bootfile}
  */
  readonly bootfile?: string;
  /**
  * The IP address or hostname of the boot file server where the boot file is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#bootserver IpAllocation#bootserver}
  */
  readonly bootserver?: string;
  /**
  * Set this to True to disable the BOOTP settings and deny BOOTP boot requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#deny_bootp IpAllocation#deny_bootp}
  */
  readonly denyBootp?: boolean | cdktf.IResolvable;
  /**
  * Set this to True if you want the DHCP server to use a different lease time for PXE clients. You can specify the duration of time it takes a host to connect to a boot server, such as a TFTP server, and download the file it needs to boot. For example, set a longer lease time if the client downloads an OS (operating system) or configuration file, or set a shorter lease time if the client downloads only configuration changes. Enter the lease time for the preboot execution environment for hosts to boot remotely from a server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#enable_pxe_lease_time IpAllocation#enable_pxe_lease_time}
  */
  readonly enablePxeLeaseTime?: boolean | cdktf.IResolvable;
  /**
  * Function call to be executed for Fixed Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#func_call IpAllocation#func_call}
  */
  readonly funcCall?: IpAllocationIpv4AddrsFuncCall;
  /**
  * If this field is set to false, the appliance returns all DHCP options the client is eligible to receive, rather than only the list of options the client has requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#ignore_client_requested_options IpAllocation#ignore_client_requested_options}
  */
  readonly ignoreClientRequestedOptions?: boolean | cdktf.IResolvable;
  /**
  * The IPv4 Address of the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#ipv4addr IpAllocation#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * This field contains the logic filters to be applied on the this host address. This list corresponds to the match rules that are written to the dhcpd configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#logic_filter_rules IpAllocation#logic_filter_rules}
  */
  readonly logicFilterRules?: IpAllocationIpv4AddrsLogicFilterRules[] | cdktf.IResolvable;
  /**
  * Set this to 'MAC_ADDRESS' to assign the IP address to the selected host, provided that the MAC address of the requesting host matches the MAC address that you specify in the field. Set this to 'RESERVED' to reserve this particular IP address for future use, or if the IP address is statically configured on a system (the Infoblox server does not assign the address from a DHCP request).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#match_client IpAllocation#match_client}
  */
  readonly matchClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#ms_ad_user_data IpAllocation#ms_ad_user_data}
  */
  readonly msAdUserData?: IpAllocationIpv4AddrsMsAdUserData;
  /**
  * The name in FQDN format and/or IPv4 Address of the next server that the host needs to boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#nextserver IpAllocation#nextserver}
  */
  readonly nextserver?: string;
  /**
  * An array of DHCP option dhcpoption structs that lists the DHCP options associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#options IpAllocation#options}
  */
  readonly options?: IpAllocationIpv4AddrsOptions[] | cdktf.IResolvable;
  /**
  * The lease time for PXE clients, see *enable_pxe_lease_time* for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#pxe_lease_time IpAllocation#pxe_lease_time}
  */
  readonly pxeLeaseTime?: number;
  /**
  * The reference to the reserved interface to which the device belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#reserved_interface IpAllocation#reserved_interface}
  */
  readonly reservedInterface?: string;
  /**
  * Use flag for: bootfile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_bootfile IpAllocation#use_bootfile}
  */
  readonly useBootfile?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: bootserver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_bootserver IpAllocation#use_bootserver}
  */
  readonly useBootserver?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: deny_bootp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_deny_bootp IpAllocation#use_deny_bootp}
  */
  readonly useDenyBootp?: boolean | cdktf.IResolvable;
  /**
  * Set this to True when using this host address for EA inheritance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_for_ea_inheritance IpAllocation#use_for_ea_inheritance}
  */
  readonly useForEaInheritance?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ignore_client_requested_options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_ignore_client_requested_options IpAllocation#use_ignore_client_requested_options}
  */
  readonly useIgnoreClientRequestedOptions?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: logic_filter_rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_logic_filter_rules IpAllocation#use_logic_filter_rules}
  */
  readonly useLogicFilterRules?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: nextserver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_nextserver IpAllocation#use_nextserver}
  */
  readonly useNextserver?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_options IpAllocation#use_options}
  */
  readonly useOptions?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: pxe_lease_time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_pxe_lease_time IpAllocation#use_pxe_lease_time}
  */
  readonly usePxeLeaseTime?: boolean | cdktf.IResolvable;
}

export function ipAllocationIpv4AddrsToTerraform(struct?: IpAllocationIpv4Addrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootfile: cdktf.stringToTerraform(struct!.bootfile),
    bootserver: cdktf.stringToTerraform(struct!.bootserver),
    deny_bootp: cdktf.booleanToTerraform(struct!.denyBootp),
    enable_pxe_lease_time: cdktf.booleanToTerraform(struct!.enablePxeLeaseTime),
    func_call: ipAllocationIpv4AddrsFuncCallToTerraform(struct!.funcCall),
    ignore_client_requested_options: cdktf.booleanToTerraform(struct!.ignoreClientRequestedOptions),
    ipv4addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    logic_filter_rules: cdktf.listMapper(ipAllocationIpv4AddrsLogicFilterRulesToTerraform, false)(struct!.logicFilterRules),
    match_client: cdktf.stringToTerraform(struct!.matchClient),
    ms_ad_user_data: ipAllocationIpv4AddrsMsAdUserDataToTerraform(struct!.msAdUserData),
    nextserver: cdktf.stringToTerraform(struct!.nextserver),
    options: cdktf.listMapper(ipAllocationIpv4AddrsOptionsToTerraform, false)(struct!.options),
    pxe_lease_time: cdktf.numberToTerraform(struct!.pxeLeaseTime),
    reserved_interface: cdktf.stringToTerraform(struct!.reservedInterface),
    use_bootfile: cdktf.booleanToTerraform(struct!.useBootfile),
    use_bootserver: cdktf.booleanToTerraform(struct!.useBootserver),
    use_deny_bootp: cdktf.booleanToTerraform(struct!.useDenyBootp),
    use_for_ea_inheritance: cdktf.booleanToTerraform(struct!.useForEaInheritance),
    use_ignore_client_requested_options: cdktf.booleanToTerraform(struct!.useIgnoreClientRequestedOptions),
    use_logic_filter_rules: cdktf.booleanToTerraform(struct!.useLogicFilterRules),
    use_nextserver: cdktf.booleanToTerraform(struct!.useNextserver),
    use_options: cdktf.booleanToTerraform(struct!.useOptions),
    use_pxe_lease_time: cdktf.booleanToTerraform(struct!.usePxeLeaseTime),
  }
}


export function ipAllocationIpv4AddrsToHclTerraform(struct?: IpAllocationIpv4Addrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootfile: {
      value: cdktf.stringToHclTerraform(struct!.bootfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bootserver: {
      value: cdktf.stringToHclTerraform(struct!.bootserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_bootp: {
      value: cdktf.booleanToHclTerraform(struct!.denyBootp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_pxe_lease_time: {
      value: cdktf.booleanToHclTerraform(struct!.enablePxeLeaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    func_call: {
      value: ipAllocationIpv4AddrsFuncCallToHclTerraform(struct!.funcCall),
      isBlock: true,
      type: "struct",
      storageClassType: "IpAllocationIpv4AddrsFuncCall",
    },
    ignore_client_requested_options: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreClientRequestedOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv4addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logic_filter_rules: {
      value: cdktf.listMapperHcl(ipAllocationIpv4AddrsLogicFilterRulesToHclTerraform, false)(struct!.logicFilterRules),
      isBlock: true,
      type: "list",
      storageClassType: "IpAllocationIpv4AddrsLogicFilterRulesList",
    },
    match_client: {
      value: cdktf.stringToHclTerraform(struct!.matchClient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ms_ad_user_data: {
      value: ipAllocationIpv4AddrsMsAdUserDataToHclTerraform(struct!.msAdUserData),
      isBlock: true,
      type: "struct",
      storageClassType: "IpAllocationIpv4AddrsMsAdUserData",
    },
    nextserver: {
      value: cdktf.stringToHclTerraform(struct!.nextserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(ipAllocationIpv4AddrsOptionsToHclTerraform, false)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "IpAllocationIpv4AddrsOptionsList",
    },
    pxe_lease_time: {
      value: cdktf.numberToHclTerraform(struct!.pxeLeaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reserved_interface: {
      value: cdktf.stringToHclTerraform(struct!.reservedInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_bootfile: {
      value: cdktf.booleanToHclTerraform(struct!.useBootfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_bootserver: {
      value: cdktf.booleanToHclTerraform(struct!.useBootserver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_deny_bootp: {
      value: cdktf.booleanToHclTerraform(struct!.useDenyBootp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_for_ea_inheritance: {
      value: cdktf.booleanToHclTerraform(struct!.useForEaInheritance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ignore_client_requested_options: {
      value: cdktf.booleanToHclTerraform(struct!.useIgnoreClientRequestedOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_logic_filter_rules: {
      value: cdktf.booleanToHclTerraform(struct!.useLogicFilterRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_nextserver: {
      value: cdktf.booleanToHclTerraform(struct!.useNextserver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_options: {
      value: cdktf.booleanToHclTerraform(struct!.useOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_pxe_lease_time: {
      value: cdktf.booleanToHclTerraform(struct!.usePxeLeaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAllocationIpv4AddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpAllocationIpv4Addrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootfile = this._bootfile;
    }
    if (this._bootserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootserver = this._bootserver;
    }
    if (this._denyBootp !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyBootp = this._denyBootp;
    }
    if (this._enablePxeLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePxeLeaseTime = this._enablePxeLeaseTime;
    }
    if (this._funcCall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.funcCall = this._funcCall?.internalValue;
    }
    if (this._ignoreClientRequestedOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreClientRequestedOptions = this._ignoreClientRequestedOptions;
    }
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._logicFilterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicFilterRules = this._logicFilterRules?.internalValue;
    }
    if (this._matchClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchClient = this._matchClient;
    }
    if (this._msAdUserData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msAdUserData = this._msAdUserData?.internalValue;
    }
    if (this._nextserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextserver = this._nextserver;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._pxeLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.pxeLeaseTime = this._pxeLeaseTime;
    }
    if (this._reservedInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedInterface = this._reservedInterface;
    }
    if (this._useBootfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBootfile = this._useBootfile;
    }
    if (this._useBootserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBootserver = this._useBootserver;
    }
    if (this._useDenyBootp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDenyBootp = this._useDenyBootp;
    }
    if (this._useForEaInheritance !== undefined) {
      hasAnyValues = true;
      internalValueResult.useForEaInheritance = this._useForEaInheritance;
    }
    if (this._useIgnoreClientRequestedOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.useIgnoreClientRequestedOptions = this._useIgnoreClientRequestedOptions;
    }
    if (this._useLogicFilterRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLogicFilterRules = this._useLogicFilterRules;
    }
    if (this._useNextserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.useNextserver = this._useNextserver;
    }
    if (this._useOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOptions = this._useOptions;
    }
    if (this._usePxeLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePxeLeaseTime = this._usePxeLeaseTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAllocationIpv4Addrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootfile = undefined;
      this._bootserver = undefined;
      this._denyBootp = undefined;
      this._enablePxeLeaseTime = undefined;
      this._funcCall.internalValue = undefined;
      this._ignoreClientRequestedOptions = undefined;
      this._ipv4Addr = undefined;
      this._logicFilterRules.internalValue = undefined;
      this._matchClient = undefined;
      this._msAdUserData.internalValue = undefined;
      this._nextserver = undefined;
      this._options.internalValue = undefined;
      this._pxeLeaseTime = undefined;
      this._reservedInterface = undefined;
      this._useBootfile = undefined;
      this._useBootserver = undefined;
      this._useDenyBootp = undefined;
      this._useForEaInheritance = undefined;
      this._useIgnoreClientRequestedOptions = undefined;
      this._useLogicFilterRules = undefined;
      this._useNextserver = undefined;
      this._useOptions = undefined;
      this._usePxeLeaseTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootfile = value.bootfile;
      this._bootserver = value.bootserver;
      this._denyBootp = value.denyBootp;
      this._enablePxeLeaseTime = value.enablePxeLeaseTime;
      this._funcCall.internalValue = value.funcCall;
      this._ignoreClientRequestedOptions = value.ignoreClientRequestedOptions;
      this._ipv4Addr = value.ipv4Addr;
      this._logicFilterRules.internalValue = value.logicFilterRules;
      this._matchClient = value.matchClient;
      this._msAdUserData.internalValue = value.msAdUserData;
      this._nextserver = value.nextserver;
      this._options.internalValue = value.options;
      this._pxeLeaseTime = value.pxeLeaseTime;
      this._reservedInterface = value.reservedInterface;
      this._useBootfile = value.useBootfile;
      this._useBootserver = value.useBootserver;
      this._useDenyBootp = value.useDenyBootp;
      this._useForEaInheritance = value.useForEaInheritance;
      this._useIgnoreClientRequestedOptions = value.useIgnoreClientRequestedOptions;
      this._useLogicFilterRules = value.useLogicFilterRules;
      this._useNextserver = value.useNextserver;
      this._useOptions = value.useOptions;
      this._usePxeLeaseTime = value.usePxeLeaseTime;
    }
  }

  // bootfile - computed: true, optional: true, required: false
  private _bootfile?: string; 
  public get bootfile() {
    return this.getStringAttribute('bootfile');
  }
  public set bootfile(value: string) {
    this._bootfile = value;
  }
  public resetBootfile() {
    this._bootfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootfileInput() {
    return this._bootfile;
  }

  // bootserver - computed: true, optional: true, required: false
  private _bootserver?: string; 
  public get bootserver() {
    return this.getStringAttribute('bootserver');
  }
  public set bootserver(value: string) {
    this._bootserver = value;
  }
  public resetBootserver() {
    this._bootserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootserverInput() {
    return this._bootserver;
  }

  // configure_for_dhcp - computed: true, optional: false, required: false
  public get configureForDhcp() {
    return this.getBooleanAttribute('configure_for_dhcp');
  }

  // deny_bootp - computed: true, optional: true, required: false
  private _denyBootp?: boolean | cdktf.IResolvable; 
  public get denyBootp() {
    return this.getBooleanAttribute('deny_bootp');
  }
  public set denyBootp(value: boolean | cdktf.IResolvable) {
    this._denyBootp = value;
  }
  public resetDenyBootp() {
    this._denyBootp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyBootpInput() {
    return this._denyBootp;
  }

  // discover_now_status - computed: true, optional: false, required: false
  public get discoverNowStatus() {
    return this.getStringAttribute('discover_now_status');
  }

  // discovered_data - computed: true, optional: false, required: false
  private _discoveredData = new IpAllocationIpv4AddrsDiscoveredDataOutputReference(this, "discovered_data");
  public get discoveredData() {
    return this._discoveredData;
  }

  // enable_pxe_lease_time - computed: false, optional: true, required: false
  private _enablePxeLeaseTime?: boolean | cdktf.IResolvable; 
  public get enablePxeLeaseTime() {
    return this.getBooleanAttribute('enable_pxe_lease_time');
  }
  public set enablePxeLeaseTime(value: boolean | cdktf.IResolvable) {
    this._enablePxeLeaseTime = value;
  }
  public resetEnablePxeLeaseTime() {
    this._enablePxeLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePxeLeaseTimeInput() {
    return this._enablePxeLeaseTime;
  }

  // func_call - computed: false, optional: true, required: false
  private _funcCall = new IpAllocationIpv4AddrsFuncCallOutputReference(this, "func_call");
  public get funcCall() {
    return this._funcCall;
  }
  public putFuncCall(value: IpAllocationIpv4AddrsFuncCall) {
    this._funcCall.internalValue = value;
  }
  public resetFuncCall() {
    this._funcCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funcCallInput() {
    return this._funcCall.internalValue;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // ignore_client_requested_options - computed: false, optional: true, required: false
  private _ignoreClientRequestedOptions?: boolean | cdktf.IResolvable; 
  public get ignoreClientRequestedOptions() {
    return this.getBooleanAttribute('ignore_client_requested_options');
  }
  public set ignoreClientRequestedOptions(value: boolean | cdktf.IResolvable) {
    this._ignoreClientRequestedOptions = value;
  }
  public resetIgnoreClientRequestedOptions() {
    this._ignoreClientRequestedOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreClientRequestedOptionsInput() {
    return this._ignoreClientRequestedOptions;
  }

  // ipv4addr - computed: true, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // is_invalid_mac - computed: true, optional: false, required: false
  public get isInvalidMac() {
    return this.getBooleanAttribute('is_invalid_mac');
  }

  // last_queried - computed: true, optional: false, required: false
  public get lastQueried() {
    return this.getNumberAttribute('last_queried');
  }

  // logic_filter_rules - computed: false, optional: true, required: false
  private _logicFilterRules = new IpAllocationIpv4AddrsLogicFilterRulesList(this, "logic_filter_rules", false);
  public get logicFilterRules() {
    return this._logicFilterRules;
  }
  public putLogicFilterRules(value: IpAllocationIpv4AddrsLogicFilterRules[] | cdktf.IResolvable) {
    this._logicFilterRules.internalValue = value;
  }
  public resetLogicFilterRules() {
    this._logicFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicFilterRulesInput() {
    return this._logicFilterRules.internalValue;
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // match_client - computed: true, optional: true, required: false
  private _matchClient?: string; 
  public get matchClient() {
    return this.getStringAttribute('match_client');
  }
  public set matchClient(value: string) {
    this._matchClient = value;
  }
  public resetMatchClient() {
    this._matchClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchClientInput() {
    return this._matchClient;
  }

  // ms_ad_user_data - computed: false, optional: true, required: false
  private _msAdUserData = new IpAllocationIpv4AddrsMsAdUserDataOutputReference(this, "ms_ad_user_data");
  public get msAdUserData() {
    return this._msAdUserData;
  }
  public putMsAdUserData(value: IpAllocationIpv4AddrsMsAdUserData) {
    this._msAdUserData.internalValue = value;
  }
  public resetMsAdUserData() {
    this._msAdUserData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msAdUserDataInput() {
    return this._msAdUserData.internalValue;
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // network_view - computed: true, optional: false, required: false
  public get networkView() {
    return this.getStringAttribute('network_view');
  }

  // nextserver - computed: true, optional: true, required: false
  private _nextserver?: string; 
  public get nextserver() {
    return this.getStringAttribute('nextserver');
  }
  public set nextserver(value: string) {
    this._nextserver = value;
  }
  public resetNextserver() {
    this._nextserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextserverInput() {
    return this._nextserver;
  }

  // options - computed: false, optional: true, required: false
  private _options = new IpAllocationIpv4AddrsOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: IpAllocationIpv4AddrsOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // pxe_lease_time - computed: false, optional: true, required: false
  private _pxeLeaseTime?: number; 
  public get pxeLeaseTime() {
    return this.getNumberAttribute('pxe_lease_time');
  }
  public set pxeLeaseTime(value: number) {
    this._pxeLeaseTime = value;
  }
  public resetPxeLeaseTime() {
    this._pxeLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pxeLeaseTimeInput() {
    return this._pxeLeaseTime;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // reserved_interface - computed: true, optional: true, required: false
  private _reservedInterface?: string; 
  public get reservedInterface() {
    return this.getStringAttribute('reserved_interface');
  }
  public set reservedInterface(value: string) {
    this._reservedInterface = value;
  }
  public resetReservedInterface() {
    this._reservedInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedInterfaceInput() {
    return this._reservedInterface;
  }

  // use_bootfile - computed: false, optional: true, required: false
  private _useBootfile?: boolean | cdktf.IResolvable; 
  public get useBootfile() {
    return this.getBooleanAttribute('use_bootfile');
  }
  public set useBootfile(value: boolean | cdktf.IResolvable) {
    this._useBootfile = value;
  }
  public resetUseBootfile() {
    this._useBootfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBootfileInput() {
    return this._useBootfile;
  }

  // use_bootserver - computed: false, optional: true, required: false
  private _useBootserver?: boolean | cdktf.IResolvable; 
  public get useBootserver() {
    return this.getBooleanAttribute('use_bootserver');
  }
  public set useBootserver(value: boolean | cdktf.IResolvable) {
    this._useBootserver = value;
  }
  public resetUseBootserver() {
    this._useBootserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBootserverInput() {
    return this._useBootserver;
  }

  // use_deny_bootp - computed: false, optional: true, required: false
  private _useDenyBootp?: boolean | cdktf.IResolvable; 
  public get useDenyBootp() {
    return this.getBooleanAttribute('use_deny_bootp');
  }
  public set useDenyBootp(value: boolean | cdktf.IResolvable) {
    this._useDenyBootp = value;
  }
  public resetUseDenyBootp() {
    this._useDenyBootp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDenyBootpInput() {
    return this._useDenyBootp;
  }

  // use_for_ea_inheritance - computed: false, optional: true, required: false
  private _useForEaInheritance?: boolean | cdktf.IResolvable; 
  public get useForEaInheritance() {
    return this.getBooleanAttribute('use_for_ea_inheritance');
  }
  public set useForEaInheritance(value: boolean | cdktf.IResolvable) {
    this._useForEaInheritance = value;
  }
  public resetUseForEaInheritance() {
    this._useForEaInheritance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useForEaInheritanceInput() {
    return this._useForEaInheritance;
  }

  // use_ignore_client_requested_options - computed: false, optional: true, required: false
  private _useIgnoreClientRequestedOptions?: boolean | cdktf.IResolvable; 
  public get useIgnoreClientRequestedOptions() {
    return this.getBooleanAttribute('use_ignore_client_requested_options');
  }
  public set useIgnoreClientRequestedOptions(value: boolean | cdktf.IResolvable) {
    this._useIgnoreClientRequestedOptions = value;
  }
  public resetUseIgnoreClientRequestedOptions() {
    this._useIgnoreClientRequestedOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIgnoreClientRequestedOptionsInput() {
    return this._useIgnoreClientRequestedOptions;
  }

  // use_logic_filter_rules - computed: false, optional: true, required: false
  private _useLogicFilterRules?: boolean | cdktf.IResolvable; 
  public get useLogicFilterRules() {
    return this.getBooleanAttribute('use_logic_filter_rules');
  }
  public set useLogicFilterRules(value: boolean | cdktf.IResolvable) {
    this._useLogicFilterRules = value;
  }
  public resetUseLogicFilterRules() {
    this._useLogicFilterRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLogicFilterRulesInput() {
    return this._useLogicFilterRules;
  }

  // use_nextserver - computed: false, optional: true, required: false
  private _useNextserver?: boolean | cdktf.IResolvable; 
  public get useNextserver() {
    return this.getBooleanAttribute('use_nextserver');
  }
  public set useNextserver(value: boolean | cdktf.IResolvable) {
    this._useNextserver = value;
  }
  public resetUseNextserver() {
    this._useNextserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNextserverInput() {
    return this._useNextserver;
  }

  // use_options - computed: false, optional: true, required: false
  private _useOptions?: boolean | cdktf.IResolvable; 
  public get useOptions() {
    return this.getBooleanAttribute('use_options');
  }
  public set useOptions(value: boolean | cdktf.IResolvable) {
    this._useOptions = value;
  }
  public resetUseOptions() {
    this._useOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOptionsInput() {
    return this._useOptions;
  }

  // use_pxe_lease_time - computed: false, optional: true, required: false
  private _usePxeLeaseTime?: boolean | cdktf.IResolvable; 
  public get usePxeLeaseTime() {
    return this.getBooleanAttribute('use_pxe_lease_time');
  }
  public set usePxeLeaseTime(value: boolean | cdktf.IResolvable) {
    this._usePxeLeaseTime = value;
  }
  public resetUsePxeLeaseTime() {
    this._usePxeLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePxeLeaseTimeInput() {
    return this._usePxeLeaseTime;
  }
}

export class IpAllocationIpv4AddrsList extends cdktf.ComplexList {
  public internalValue? : IpAllocationIpv4Addrs[] | cdktf.IResolvable

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
  public get(index: number): IpAllocationIpv4AddrsOutputReference {
    return new IpAllocationIpv4AddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpAllocationIpv6AddrsDiscoveredData {
}

export function ipAllocationIpv6AddrsDiscoveredDataToTerraform(struct?: IpAllocationIpv6AddrsDiscoveredData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipAllocationIpv6AddrsDiscoveredDataToHclTerraform(struct?: IpAllocationIpv6AddrsDiscoveredData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpAllocationIpv6AddrsDiscoveredDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpAllocationIpv6AddrsDiscoveredData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAllocationIpv6AddrsDiscoveredData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ap_ip_address - computed: true, optional: false, required: false
  public get apIpAddress() {
    return this.getStringAttribute('ap_ip_address');
  }

  // ap_name - computed: true, optional: false, required: false
  public get apName() {
    return this.getStringAttribute('ap_name');
  }

  // ap_ssid - computed: true, optional: false, required: false
  public get apSsid() {
    return this.getStringAttribute('ap_ssid');
  }

  // bgp_as - computed: true, optional: false, required: false
  public get bgpAs() {
    return this.getNumberAttribute('bgp_as');
  }

  // bridge_domain - computed: true, optional: false, required: false
  public get bridgeDomain() {
    return this.getStringAttribute('bridge_domain');
  }

  // cisco_ise_endpoint_profile - computed: true, optional: false, required: false
  public get ciscoIseEndpointProfile() {
    return this.getStringAttribute('cisco_ise_endpoint_profile');
  }

  // cisco_ise_security_group - computed: true, optional: false, required: false
  public get ciscoIseSecurityGroup() {
    return this.getStringAttribute('cisco_ise_security_group');
  }

  // cisco_ise_session_state - computed: true, optional: false, required: false
  public get ciscoIseSessionState() {
    return this.getStringAttribute('cisco_ise_session_state');
  }

  // cisco_ise_ssid - computed: true, optional: false, required: false
  public get ciscoIseSsid() {
    return this.getStringAttribute('cisco_ise_ssid');
  }

  // cmp_type - computed: true, optional: false, required: false
  public get cmpType() {
    return this.getStringAttribute('cmp_type');
  }

  // device_contact - computed: true, optional: false, required: false
  public get deviceContact() {
    return this.getStringAttribute('device_contact');
  }

  // device_location - computed: true, optional: false, required: false
  public get deviceLocation() {
    return this.getStringAttribute('device_location');
  }

  // device_model - computed: true, optional: false, required: false
  public get deviceModel() {
    return this.getStringAttribute('device_model');
  }

  // device_port_name - computed: true, optional: false, required: false
  public get devicePortName() {
    return this.getStringAttribute('device_port_name');
  }

  // device_port_type - computed: true, optional: false, required: false
  public get devicePortType() {
    return this.getStringAttribute('device_port_type');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // device_vendor - computed: true, optional: false, required: false
  public get deviceVendor() {
    return this.getStringAttribute('device_vendor');
  }

  // discovered_name - computed: true, optional: false, required: false
  public get discoveredName() {
    return this.getStringAttribute('discovered_name');
  }

  // discoverer - computed: true, optional: false, required: false
  public get discoverer() {
    return this.getStringAttribute('discoverer');
  }

  // duid - computed: true, optional: false, required: false
  public get duid() {
    return this.getStringAttribute('duid');
  }

  // endpoint_groups - computed: true, optional: false, required: false
  public get endpointGroups() {
    return this.getStringAttribute('endpoint_groups');
  }

  // first_discovered - computed: true, optional: false, required: false
  public get firstDiscovered() {
    return this.getNumberAttribute('first_discovered');
  }

  // iprg_no - computed: true, optional: false, required: false
  public get iprgNo() {
    return this.getNumberAttribute('iprg_no');
  }

  // iprg_state - computed: true, optional: false, required: false
  public get iprgState() {
    return this.getStringAttribute('iprg_state');
  }

  // iprg_type - computed: true, optional: false, required: false
  public get iprgType() {
    return this.getStringAttribute('iprg_type');
  }

  // last_discovered - computed: true, optional: false, required: false
  public get lastDiscovered() {
    return this.getNumberAttribute('last_discovered');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // mgmt_ip_address - computed: true, optional: false, required: false
  public get mgmtIpAddress() {
    return this.getStringAttribute('mgmt_ip_address');
  }

  // netbios_name - computed: true, optional: false, required: false
  public get netbiosName() {
    return this.getStringAttribute('netbios_name');
  }

  // network_component_contact - computed: true, optional: false, required: false
  public get networkComponentContact() {
    return this.getStringAttribute('network_component_contact');
  }

  // network_component_description - computed: true, optional: false, required: false
  public get networkComponentDescription() {
    return this.getStringAttribute('network_component_description');
  }

  // network_component_ip - computed: true, optional: false, required: false
  public get networkComponentIp() {
    return this.getStringAttribute('network_component_ip');
  }

  // network_component_location - computed: true, optional: false, required: false
  public get networkComponentLocation() {
    return this.getStringAttribute('network_component_location');
  }

  // network_component_model - computed: true, optional: false, required: false
  public get networkComponentModel() {
    return this.getStringAttribute('network_component_model');
  }

  // network_component_name - computed: true, optional: false, required: false
  public get networkComponentName() {
    return this.getStringAttribute('network_component_name');
  }

  // network_component_port_description - computed: true, optional: false, required: false
  public get networkComponentPortDescription() {
    return this.getStringAttribute('network_component_port_description');
  }

  // network_component_port_name - computed: true, optional: false, required: false
  public get networkComponentPortName() {
    return this.getStringAttribute('network_component_port_name');
  }

  // network_component_port_number - computed: true, optional: false, required: false
  public get networkComponentPortNumber() {
    return this.getStringAttribute('network_component_port_number');
  }

  // network_component_type - computed: true, optional: false, required: false
  public get networkComponentType() {
    return this.getStringAttribute('network_component_type');
  }

  // network_component_vendor - computed: true, optional: false, required: false
  public get networkComponentVendor() {
    return this.getStringAttribute('network_component_vendor');
  }

  // open_ports - computed: true, optional: false, required: false
  public get openPorts() {
    return this.getStringAttribute('open_ports');
  }

  // os - computed: true, optional: false, required: false
  public get os() {
    return this.getStringAttribute('os');
  }

  // port_duplex - computed: true, optional: false, required: false
  public get portDuplex() {
    return this.getStringAttribute('port_duplex');
  }

  // port_link_status - computed: true, optional: false, required: false
  public get portLinkStatus() {
    return this.getStringAttribute('port_link_status');
  }

  // port_speed - computed: true, optional: false, required: false
  public get portSpeed() {
    return this.getStringAttribute('port_speed');
  }

  // port_status - computed: true, optional: false, required: false
  public get portStatus() {
    return this.getStringAttribute('port_status');
  }

  // port_type - computed: true, optional: false, required: false
  public get portType() {
    return this.getStringAttribute('port_type');
  }

  // port_vlan_description - computed: true, optional: false, required: false
  public get portVlanDescription() {
    return this.getStringAttribute('port_vlan_description');
  }

  // port_vlan_name - computed: true, optional: false, required: false
  public get portVlanName() {
    return this.getStringAttribute('port_vlan_name');
  }

  // port_vlan_number - computed: true, optional: false, required: false
  public get portVlanNumber() {
    return this.getStringAttribute('port_vlan_number');
  }

  // task_name - computed: true, optional: false, required: false
  public get taskName() {
    return this.getStringAttribute('task_name');
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }

  // v_adapter - computed: true, optional: false, required: false
  public get vAdapter() {
    return this.getStringAttribute('v_adapter');
  }

  // v_cluster - computed: true, optional: false, required: false
  public get vCluster() {
    return this.getStringAttribute('v_cluster');
  }

  // v_datacenter - computed: true, optional: false, required: false
  public get vDatacenter() {
    return this.getStringAttribute('v_datacenter');
  }

  // v_entity_name - computed: true, optional: false, required: false
  public get vEntityName() {
    return this.getStringAttribute('v_entity_name');
  }

  // v_entity_type - computed: true, optional: false, required: false
  public get vEntityType() {
    return this.getStringAttribute('v_entity_type');
  }

  // v_host - computed: true, optional: false, required: false
  public get vHost() {
    return this.getStringAttribute('v_host');
  }

  // v_switch - computed: true, optional: false, required: false
  public get vSwitch() {
    return this.getStringAttribute('v_switch');
  }

  // vlan_port_group - computed: true, optional: false, required: false
  public get vlanPortGroup() {
    return this.getStringAttribute('vlan_port_group');
  }

  // vmhost_ip_address - computed: true, optional: false, required: false
  public get vmhostIpAddress() {
    return this.getStringAttribute('vmhost_ip_address');
  }

  // vmhost_mac_address - computed: true, optional: false, required: false
  public get vmhostMacAddress() {
    return this.getStringAttribute('vmhost_mac_address');
  }

  // vmhost_name - computed: true, optional: false, required: false
  public get vmhostName() {
    return this.getStringAttribute('vmhost_name');
  }

  // vmhost_nic_names - computed: true, optional: false, required: false
  public get vmhostNicNames() {
    return this.getStringAttribute('vmhost_nic_names');
  }

  // vmhost_subnet_cidr - computed: true, optional: false, required: false
  public get vmhostSubnetCidr() {
    return this.getNumberAttribute('vmhost_subnet_cidr');
  }

  // vmi_id - computed: true, optional: false, required: false
  public get vmiId() {
    return this.getStringAttribute('vmi_id');
  }

  // vmi_ip_type - computed: true, optional: false, required: false
  public get vmiIpType() {
    return this.getStringAttribute('vmi_ip_type');
  }

  // vmi_is_public_address - computed: true, optional: false, required: false
  public get vmiIsPublicAddress() {
    return this.getBooleanAttribute('vmi_is_public_address');
  }

  // vmi_name - computed: true, optional: false, required: false
  public get vmiName() {
    return this.getStringAttribute('vmi_name');
  }

  // vmi_private_address - computed: true, optional: false, required: false
  public get vmiPrivateAddress() {
    return this.getStringAttribute('vmi_private_address');
  }

  // vmi_tenant_id - computed: true, optional: false, required: false
  public get vmiTenantId() {
    return this.getStringAttribute('vmi_tenant_id');
  }

  // vport_conf_mode - computed: true, optional: false, required: false
  public get vportConfMode() {
    return this.getStringAttribute('vport_conf_mode');
  }

  // vport_conf_speed - computed: true, optional: false, required: false
  public get vportConfSpeed() {
    return this.getStringAttribute('vport_conf_speed');
  }

  // vport_link_status - computed: true, optional: false, required: false
  public get vportLinkStatus() {
    return this.getStringAttribute('vport_link_status');
  }

  // vport_mac_address - computed: true, optional: false, required: false
  public get vportMacAddress() {
    return this.getStringAttribute('vport_mac_address');
  }

  // vport_mode - computed: true, optional: false, required: false
  public get vportMode() {
    return this.getStringAttribute('vport_mode');
  }

  // vport_name - computed: true, optional: false, required: false
  public get vportName() {
    return this.getStringAttribute('vport_name');
  }

  // vport_speed - computed: true, optional: false, required: false
  public get vportSpeed() {
    return this.getStringAttribute('vport_speed');
  }

  // vrf_description - computed: true, optional: false, required: false
  public get vrfDescription() {
    return this.getStringAttribute('vrf_description');
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }

  // vrf_rd - computed: true, optional: false, required: false
  public get vrfRd() {
    return this.getStringAttribute('vrf_rd');
  }

  // vswitch_available_ports_count - computed: true, optional: false, required: false
  public get vswitchAvailablePortsCount() {
    return this.getNumberAttribute('vswitch_available_ports_count');
  }

  // vswitch_id - computed: true, optional: false, required: false
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }

  // vswitch_ipv6_enabled - computed: true, optional: false, required: false
  public get vswitchIpv6Enabled() {
    return this.getBooleanAttribute('vswitch_ipv6_enabled');
  }

  // vswitch_name - computed: true, optional: false, required: false
  public get vswitchName() {
    return this.getStringAttribute('vswitch_name');
  }

  // vswitch_segment_id - computed: true, optional: false, required: false
  public get vswitchSegmentId() {
    return this.getStringAttribute('vswitch_segment_id');
  }

  // vswitch_segment_name - computed: true, optional: false, required: false
  public get vswitchSegmentName() {
    return this.getStringAttribute('vswitch_segment_name');
  }

  // vswitch_segment_port_group - computed: true, optional: false, required: false
  public get vswitchSegmentPortGroup() {
    return this.getStringAttribute('vswitch_segment_port_group');
  }

  // vswitch_segment_type - computed: true, optional: false, required: false
  public get vswitchSegmentType() {
    return this.getStringAttribute('vswitch_segment_type');
  }

  // vswitch_tep_dhcp_server - computed: true, optional: false, required: false
  public get vswitchTepDhcpServer() {
    return this.getStringAttribute('vswitch_tep_dhcp_server');
  }

  // vswitch_tep_ip - computed: true, optional: false, required: false
  public get vswitchTepIp() {
    return this.getStringAttribute('vswitch_tep_ip');
  }

  // vswitch_tep_multicast - computed: true, optional: false, required: false
  public get vswitchTepMulticast() {
    return this.getStringAttribute('vswitch_tep_multicast');
  }

  // vswitch_tep_port_group - computed: true, optional: false, required: false
  public get vswitchTepPortGroup() {
    return this.getStringAttribute('vswitch_tep_port_group');
  }

  // vswitch_tep_type - computed: true, optional: false, required: false
  public get vswitchTepType() {
    return this.getStringAttribute('vswitch_tep_type');
  }

  // vswitch_tep_vlan - computed: true, optional: false, required: false
  public get vswitchTepVlan() {
    return this.getStringAttribute('vswitch_tep_vlan');
  }

  // vswitch_type - computed: true, optional: false, required: false
  public get vswitchType() {
    return this.getStringAttribute('vswitch_type');
  }
}
export interface IpAllocationIpv6AddrsFuncCall {
  /**
  * The attribute to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#attribute_name IpAllocation#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The object to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#object IpAllocation#object}
  */
  readonly object?: string;
  /**
  * The function to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#object_function IpAllocation#object_function}
  */
  readonly objectFunction?: string;
  /**
  * The parameters for the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#object_parameters IpAllocation#object_parameters}
  */
  readonly objectParameters?: { [key: string]: string };
  /**
  * The parameters for the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#parameters IpAllocation#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The result field of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#result_field IpAllocation#result_field}
  */
  readonly resultField?: string;
}

export function ipAllocationIpv6AddrsFuncCallToTerraform(struct?: IpAllocationIpv6AddrsFuncCall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    object: cdktf.stringToTerraform(struct!.object),
    object_function: cdktf.stringToTerraform(struct!.objectFunction),
    object_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.objectParameters),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    result_field: cdktf.stringToTerraform(struct!.resultField),
  }
}


export function ipAllocationIpv6AddrsFuncCallToHclTerraform(struct?: IpAllocationIpv6AddrsFuncCall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_function: {
      value: cdktf.stringToHclTerraform(struct!.objectFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.objectParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    result_field: {
      value: cdktf.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAllocationIpv6AddrsFuncCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpAllocationIpv6AddrsFuncCall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._objectFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectFunction = this._objectFunction;
    }
    if (this._objectParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectParameters = this._objectParameters;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAllocationIpv6AddrsFuncCall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._object = undefined;
      this._objectFunction = undefined;
      this._objectParameters = undefined;
      this._parameters = undefined;
      this._resultField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._object = value.object;
      this._objectFunction = value.objectFunction;
      this._objectParameters = value.objectParameters;
      this._parameters = value.parameters;
      this._resultField = value.resultField;
    }
  }

  // attribute_name - computed: false, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // object - computed: false, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // object_function - computed: false, optional: true, required: false
  private _objectFunction?: string; 
  public get objectFunction() {
    return this.getStringAttribute('object_function');
  }
  public set objectFunction(value: string) {
    this._objectFunction = value;
  }
  public resetObjectFunction() {
    this._objectFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectFunctionInput() {
    return this._objectFunction;
  }

  // object_parameters - computed: false, optional: true, required: false
  private _objectParameters?: { [key: string]: string }; 
  public get objectParameters() {
    return this.getStringMapAttribute('object_parameters');
  }
  public set objectParameters(value: { [key: string]: string }) {
    this._objectParameters = value;
  }
  public resetObjectParameters() {
    this._objectParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectParametersInput() {
    return this._objectParameters;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // result_field - computed: false, optional: true, required: false
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  public resetResultField() {
    this._resultField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}
export interface IpAllocationIpv6AddrsLogicFilterRules {
  /**
  * The filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#filter IpAllocation#filter}
  */
  readonly filter?: string;
  /**
  * The filter type. Valid values are: * MAC * NAC * Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#type IpAllocation#type}
  */
  readonly type?: string;
}

export function ipAllocationIpv6AddrsLogicFilterRulesToTerraform(struct?: IpAllocationIpv6AddrsLogicFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ipAllocationIpv6AddrsLogicFilterRulesToHclTerraform(struct?: IpAllocationIpv6AddrsLogicFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAllocationIpv6AddrsLogicFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpAllocationIpv6AddrsLogicFilterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAllocationIpv6AddrsLogicFilterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._type = value.type;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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
}

export class IpAllocationIpv6AddrsLogicFilterRulesList extends cdktf.ComplexList {
  public internalValue? : IpAllocationIpv6AddrsLogicFilterRules[] | cdktf.IResolvable

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
  public get(index: number): IpAllocationIpv6AddrsLogicFilterRulesOutputReference {
    return new IpAllocationIpv6AddrsLogicFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpAllocationIpv6AddrsMsAdUserData {
}

export function ipAllocationIpv6AddrsMsAdUserDataToTerraform(struct?: IpAllocationIpv6AddrsMsAdUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipAllocationIpv6AddrsMsAdUserDataToHclTerraform(struct?: IpAllocationIpv6AddrsMsAdUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpAllocationIpv6AddrsMsAdUserDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpAllocationIpv6AddrsMsAdUserData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAllocationIpv6AddrsMsAdUserData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // active_users_count - computed: true, optional: false, required: false
  public get activeUsersCount() {
    return this.getNumberAttribute('active_users_count');
  }
}
export interface IpAllocationIpv6AddrsOptions {
  /**
  * Name of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#name IpAllocation#name}
  */
  readonly name?: string;
  /**
  * The code of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#num IpAllocation#num}
  */
  readonly num?: number;
  /**
  * Only applies to special options that are displayed separately from other options and have a use flag. These options are: * routers * router-templates * domain-name-servers * domain-name * broadcast-address * broadcast-address-offset * dhcp-lease-time * dhcp6.name-servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_option IpAllocation#use_option}
  */
  readonly useOption?: boolean | cdktf.IResolvable;
  /**
  * Value of the DHCP option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#value IpAllocation#value}
  */
  readonly value?: string;
  /**
  * The name of the space this DHCP option is associated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#vendor_class IpAllocation#vendor_class}
  */
  readonly vendorClass?: string;
}

export function ipAllocationIpv6AddrsOptionsToTerraform(struct?: IpAllocationIpv6AddrsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    num: cdktf.numberToTerraform(struct!.num),
    use_option: cdktf.booleanToTerraform(struct!.useOption),
    value: cdktf.stringToTerraform(struct!.value),
    vendor_class: cdktf.stringToTerraform(struct!.vendorClass),
  }
}


export function ipAllocationIpv6AddrsOptionsToHclTerraform(struct?: IpAllocationIpv6AddrsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num: {
      value: cdktf.numberToHclTerraform(struct!.num),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_option: {
      value: cdktf.booleanToHclTerraform(struct!.useOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_class: {
      value: cdktf.stringToHclTerraform(struct!.vendorClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAllocationIpv6AddrsOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpAllocationIpv6AddrsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._num !== undefined) {
      hasAnyValues = true;
      internalValueResult.num = this._num;
    }
    if (this._useOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOption = this._useOption;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._vendorClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorClass = this._vendorClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAllocationIpv6AddrsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._num = undefined;
      this._useOption = undefined;
      this._value = undefined;
      this._vendorClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._num = value.num;
      this._useOption = value.useOption;
      this._value = value.value;
      this._vendorClass = value.vendorClass;
    }
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

  // num - computed: false, optional: true, required: false
  private _num?: number; 
  public get num() {
    return this.getNumberAttribute('num');
  }
  public set num(value: number) {
    this._num = value;
  }
  public resetNum() {
    this._num = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInput() {
    return this._num;
  }

  // use_option - computed: false, optional: true, required: false
  private _useOption?: boolean | cdktf.IResolvable; 
  public get useOption() {
    return this.getBooleanAttribute('use_option');
  }
  public set useOption(value: boolean | cdktf.IResolvable) {
    this._useOption = value;
  }
  public resetUseOption() {
    this._useOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOptionInput() {
    return this._useOption;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // vendor_class - computed: false, optional: true, required: false
  private _vendorClass?: string; 
  public get vendorClass() {
    return this.getStringAttribute('vendor_class');
  }
  public set vendorClass(value: string) {
    this._vendorClass = value;
  }
  public resetVendorClass() {
    this._vendorClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorClassInput() {
    return this._vendorClass;
  }
}

export class IpAllocationIpv6AddrsOptionsList extends cdktf.ComplexList {
  public internalValue? : IpAllocationIpv6AddrsOptions[] | cdktf.IResolvable

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
  public get(index: number): IpAllocationIpv6AddrsOptionsOutputReference {
    return new IpAllocationIpv6AddrsOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpAllocationIpv6Addrs {
  /**
  * Type of the DHCP IPv6 Host Address object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#address_type IpAllocation#address_type}
  */
  readonly addressType?: string;
  /**
  * Use this method to set or retrieve the domain_name value of the DHCP IPv6 Host Address object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#domain_name IpAllocation#domain_name}
  */
  readonly domainName?: string;
  /**
  * The IPv6 addresses of DNS recursive name servers to which the DHCP client can send name resolution requests. The DHCP server includes this information in the DNS Recursive Name Server option in Advertise, Rebind, Information-Request, and Reply messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#domain_name_servers IpAllocation#domain_name_servers}
  */
  readonly domainNameServers?: string[];
  /**
  * Function call to be executed for Fixed Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#func_call IpAllocation#func_call}
  */
  readonly funcCall?: IpAllocationIpv6AddrsFuncCall;
  /**
  * The IPv6 Address of the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#ipv6addr IpAllocation#ipv6addr}
  */
  readonly ipv6Addr?: string;
  /**
  * The IPv6 Address prefix of the DHCP IPv6 Host Address object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#ipv6prefix IpAllocation#ipv6prefix}
  */
  readonly ipv6Prefix?: string;
  /**
  * Prefix bits of the DHCP IPv6 Host Address object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#ipv6prefix_bits IpAllocation#ipv6prefix_bits}
  */
  readonly ipv6PrefixBits?: number;
  /**
  * This field contains the logic filters to be applied on the this host address. This list corresponds to the match rules that are written to the dhcpd configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#logic_filter_rules IpAllocation#logic_filter_rules}
  */
  readonly logicFilterRules?: IpAllocationIpv6AddrsLogicFilterRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#ms_ad_user_data IpAllocation#ms_ad_user_data}
  */
  readonly msAdUserData?: IpAllocationIpv6AddrsMsAdUserData;
  /**
  * An array of DHCP option dhcpoption structs that lists the DHCP options associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#options IpAllocation#options}
  */
  readonly options?: IpAllocationIpv6AddrsOptions[] | cdktf.IResolvable;
  /**
  * Use this method to set or retrieve the preferred lifetime value of the DHCP IPv6 Host Address object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#preferred_lifetime IpAllocation#preferred_lifetime}
  */
  readonly preferredLifetime?: number;
  /**
  * The reference to the reserved interface to which the device belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#reserved_interface IpAllocation#reserved_interface}
  */
  readonly reservedInterface?: string;
  /**
  * Use flag for: domain_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_domain_name IpAllocation#use_domain_name}
  */
  readonly useDomainName?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: domain_name_servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_domain_name_servers IpAllocation#use_domain_name_servers}
  */
  readonly useDomainNameServers?: boolean | cdktf.IResolvable;
  /**
  * Set this to True when using this host address for EA inheritance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_for_ea_inheritance IpAllocation#use_for_ea_inheritance}
  */
  readonly useForEaInheritance?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: logic_filter_rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_logic_filter_rules IpAllocation#use_logic_filter_rules}
  */
  readonly useLogicFilterRules?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_options IpAllocation#use_options}
  */
  readonly useOptions?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: preferred_lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_preferred_lifetime IpAllocation#use_preferred_lifetime}
  */
  readonly usePreferredLifetime?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: valid_lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#use_valid_lifetime IpAllocation#use_valid_lifetime}
  */
  readonly useValidLifetime?: boolean | cdktf.IResolvable;
  /**
  * Use this method to set or retrieve the valid lifetime value of the DHCP IPv6 Host Address object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#valid_lifetime IpAllocation#valid_lifetime}
  */
  readonly validLifetime?: number;
}

export function ipAllocationIpv6AddrsToTerraform(struct?: IpAllocationIpv6Addrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_type: cdktf.stringToTerraform(struct!.addressType),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    domain_name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainNameServers),
    func_call: ipAllocationIpv6AddrsFuncCallToTerraform(struct!.funcCall),
    ipv6addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    ipv6prefix: cdktf.stringToTerraform(struct!.ipv6Prefix),
    ipv6prefix_bits: cdktf.numberToTerraform(struct!.ipv6PrefixBits),
    logic_filter_rules: cdktf.listMapper(ipAllocationIpv6AddrsLogicFilterRulesToTerraform, false)(struct!.logicFilterRules),
    ms_ad_user_data: ipAllocationIpv6AddrsMsAdUserDataToTerraform(struct!.msAdUserData),
    options: cdktf.listMapper(ipAllocationIpv6AddrsOptionsToTerraform, false)(struct!.options),
    preferred_lifetime: cdktf.numberToTerraform(struct!.preferredLifetime),
    reserved_interface: cdktf.stringToTerraform(struct!.reservedInterface),
    use_domain_name: cdktf.booleanToTerraform(struct!.useDomainName),
    use_domain_name_servers: cdktf.booleanToTerraform(struct!.useDomainNameServers),
    use_for_ea_inheritance: cdktf.booleanToTerraform(struct!.useForEaInheritance),
    use_logic_filter_rules: cdktf.booleanToTerraform(struct!.useLogicFilterRules),
    use_options: cdktf.booleanToTerraform(struct!.useOptions),
    use_preferred_lifetime: cdktf.booleanToTerraform(struct!.usePreferredLifetime),
    use_valid_lifetime: cdktf.booleanToTerraform(struct!.useValidLifetime),
    valid_lifetime: cdktf.numberToTerraform(struct!.validLifetime),
  }
}


export function ipAllocationIpv6AddrsToHclTerraform(struct?: IpAllocationIpv6Addrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_type: {
      value: cdktf.stringToHclTerraform(struct!.addressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainNameServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    func_call: {
      value: ipAllocationIpv6AddrsFuncCallToHclTerraform(struct!.funcCall),
      isBlock: true,
      type: "struct",
      storageClassType: "IpAllocationIpv6AddrsFuncCall",
    },
    ipv6addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6prefix_bits: {
      value: cdktf.numberToHclTerraform(struct!.ipv6PrefixBits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logic_filter_rules: {
      value: cdktf.listMapperHcl(ipAllocationIpv6AddrsLogicFilterRulesToHclTerraform, false)(struct!.logicFilterRules),
      isBlock: true,
      type: "list",
      storageClassType: "IpAllocationIpv6AddrsLogicFilterRulesList",
    },
    ms_ad_user_data: {
      value: ipAllocationIpv6AddrsMsAdUserDataToHclTerraform(struct!.msAdUserData),
      isBlock: true,
      type: "struct",
      storageClassType: "IpAllocationIpv6AddrsMsAdUserData",
    },
    options: {
      value: cdktf.listMapperHcl(ipAllocationIpv6AddrsOptionsToHclTerraform, false)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "IpAllocationIpv6AddrsOptionsList",
    },
    preferred_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.preferredLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reserved_interface: {
      value: cdktf.stringToHclTerraform(struct!.reservedInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_domain_name: {
      value: cdktf.booleanToHclTerraform(struct!.useDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_domain_name_servers: {
      value: cdktf.booleanToHclTerraform(struct!.useDomainNameServers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_for_ea_inheritance: {
      value: cdktf.booleanToHclTerraform(struct!.useForEaInheritance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_logic_filter_rules: {
      value: cdktf.booleanToHclTerraform(struct!.useLogicFilterRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_options: {
      value: cdktf.booleanToHclTerraform(struct!.useOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_preferred_lifetime: {
      value: cdktf.booleanToHclTerraform(struct!.usePreferredLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_valid_lifetime: {
      value: cdktf.booleanToHclTerraform(struct!.useValidLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    valid_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.validLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAllocationIpv6AddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpAllocationIpv6Addrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressType = this._addressType;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._domainNameServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNameServers = this._domainNameServers;
    }
    if (this._funcCall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.funcCall = this._funcCall?.internalValue;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._ipv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefix = this._ipv6Prefix;
    }
    if (this._ipv6PrefixBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6PrefixBits = this._ipv6PrefixBits;
    }
    if (this._logicFilterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicFilterRules = this._logicFilterRules?.internalValue;
    }
    if (this._msAdUserData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msAdUserData = this._msAdUserData?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._preferredLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLifetime = this._preferredLifetime;
    }
    if (this._reservedInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedInterface = this._reservedInterface;
    }
    if (this._useDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDomainName = this._useDomainName;
    }
    if (this._useDomainNameServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDomainNameServers = this._useDomainNameServers;
    }
    if (this._useForEaInheritance !== undefined) {
      hasAnyValues = true;
      internalValueResult.useForEaInheritance = this._useForEaInheritance;
    }
    if (this._useLogicFilterRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLogicFilterRules = this._useLogicFilterRules;
    }
    if (this._useOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOptions = this._useOptions;
    }
    if (this._usePreferredLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePreferredLifetime = this._usePreferredLifetime;
    }
    if (this._useValidLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.useValidLifetime = this._useValidLifetime;
    }
    if (this._validLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.validLifetime = this._validLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAllocationIpv6Addrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressType = undefined;
      this._domainName = undefined;
      this._domainNameServers = undefined;
      this._funcCall.internalValue = undefined;
      this._ipv6Addr = undefined;
      this._ipv6Prefix = undefined;
      this._ipv6PrefixBits = undefined;
      this._logicFilterRules.internalValue = undefined;
      this._msAdUserData.internalValue = undefined;
      this._options.internalValue = undefined;
      this._preferredLifetime = undefined;
      this._reservedInterface = undefined;
      this._useDomainName = undefined;
      this._useDomainNameServers = undefined;
      this._useForEaInheritance = undefined;
      this._useLogicFilterRules = undefined;
      this._useOptions = undefined;
      this._usePreferredLifetime = undefined;
      this._useValidLifetime = undefined;
      this._validLifetime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressType = value.addressType;
      this._domainName = value.domainName;
      this._domainNameServers = value.domainNameServers;
      this._funcCall.internalValue = value.funcCall;
      this._ipv6Addr = value.ipv6Addr;
      this._ipv6Prefix = value.ipv6Prefix;
      this._ipv6PrefixBits = value.ipv6PrefixBits;
      this._logicFilterRules.internalValue = value.logicFilterRules;
      this._msAdUserData.internalValue = value.msAdUserData;
      this._options.internalValue = value.options;
      this._preferredLifetime = value.preferredLifetime;
      this._reservedInterface = value.reservedInterface;
      this._useDomainName = value.useDomainName;
      this._useDomainNameServers = value.useDomainNameServers;
      this._useForEaInheritance = value.useForEaInheritance;
      this._useLogicFilterRules = value.useLogicFilterRules;
      this._useOptions = value.useOptions;
      this._usePreferredLifetime = value.usePreferredLifetime;
      this._useValidLifetime = value.useValidLifetime;
      this._validLifetime = value.validLifetime;
    }
  }

  // address_type - computed: true, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // configure_for_dhcp - computed: true, optional: false, required: false
  public get configureForDhcp() {
    return this.getBooleanAttribute('configure_for_dhcp');
  }

  // discover_now_status - computed: true, optional: false, required: false
  public get discoverNowStatus() {
    return this.getStringAttribute('discover_now_status');
  }

  // discovered_data - computed: true, optional: false, required: false
  private _discoveredData = new IpAllocationIpv6AddrsDiscoveredDataOutputReference(this, "discovered_data");
  public get discoveredData() {
    return this._discoveredData;
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_name_servers - computed: false, optional: true, required: false
  private _domainNameServers?: string[]; 
  public get domainNameServers() {
    return this.getListAttribute('domain_name_servers');
  }
  public set domainNameServers(value: string[]) {
    this._domainNameServers = value;
  }
  public resetDomainNameServers() {
    this._domainNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameServersInput() {
    return this._domainNameServers;
  }

  // duid - computed: true, optional: false, required: false
  public get duid() {
    return this.getStringAttribute('duid');
  }

  // func_call - computed: false, optional: true, required: false
  private _funcCall = new IpAllocationIpv6AddrsFuncCallOutputReference(this, "func_call");
  public get funcCall() {
    return this._funcCall;
  }
  public putFuncCall(value: IpAllocationIpv6AddrsFuncCall) {
    this._funcCall.internalValue = value;
  }
  public resetFuncCall() {
    this._funcCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funcCallInput() {
    return this._funcCall.internalValue;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // ipv6addr - computed: true, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // ipv6prefix - computed: true, optional: true, required: false
  private _ipv6Prefix?: string; 
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6prefix');
  }
  public set ipv6Prefix(value: string) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // ipv6prefix_bits - computed: false, optional: true, required: false
  private _ipv6PrefixBits?: number; 
  public get ipv6PrefixBits() {
    return this.getNumberAttribute('ipv6prefix_bits');
  }
  public set ipv6PrefixBits(value: number) {
    this._ipv6PrefixBits = value;
  }
  public resetIpv6PrefixBits() {
    this._ipv6PrefixBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixBitsInput() {
    return this._ipv6PrefixBits;
  }

  // last_queried - computed: true, optional: false, required: false
  public get lastQueried() {
    return this.getNumberAttribute('last_queried');
  }

  // logic_filter_rules - computed: false, optional: true, required: false
  private _logicFilterRules = new IpAllocationIpv6AddrsLogicFilterRulesList(this, "logic_filter_rules", false);
  public get logicFilterRules() {
    return this._logicFilterRules;
  }
  public putLogicFilterRules(value: IpAllocationIpv6AddrsLogicFilterRules[] | cdktf.IResolvable) {
    this._logicFilterRules.internalValue = value;
  }
  public resetLogicFilterRules() {
    this._logicFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicFilterRulesInput() {
    return this._logicFilterRules.internalValue;
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // match_client - computed: true, optional: false, required: false
  public get matchClient() {
    return this.getStringAttribute('match_client');
  }

  // ms_ad_user_data - computed: false, optional: true, required: false
  private _msAdUserData = new IpAllocationIpv6AddrsMsAdUserDataOutputReference(this, "ms_ad_user_data");
  public get msAdUserData() {
    return this._msAdUserData;
  }
  public putMsAdUserData(value: IpAllocationIpv6AddrsMsAdUserData) {
    this._msAdUserData.internalValue = value;
  }
  public resetMsAdUserData() {
    this._msAdUserData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msAdUserDataInput() {
    return this._msAdUserData.internalValue;
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // network_view - computed: true, optional: false, required: false
  public get networkView() {
    return this.getStringAttribute('network_view');
  }

  // options - computed: false, optional: true, required: false
  private _options = new IpAllocationIpv6AddrsOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: IpAllocationIpv6AddrsOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // preferred_lifetime - computed: false, optional: true, required: false
  private _preferredLifetime?: number; 
  public get preferredLifetime() {
    return this.getNumberAttribute('preferred_lifetime');
  }
  public set preferredLifetime(value: number) {
    this._preferredLifetime = value;
  }
  public resetPreferredLifetime() {
    this._preferredLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLifetimeInput() {
    return this._preferredLifetime;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // reserved_interface - computed: true, optional: true, required: false
  private _reservedInterface?: string; 
  public get reservedInterface() {
    return this.getStringAttribute('reserved_interface');
  }
  public set reservedInterface(value: string) {
    this._reservedInterface = value;
  }
  public resetReservedInterface() {
    this._reservedInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedInterfaceInput() {
    return this._reservedInterface;
  }

  // use_domain_name - computed: false, optional: true, required: false
  private _useDomainName?: boolean | cdktf.IResolvable; 
  public get useDomainName() {
    return this.getBooleanAttribute('use_domain_name');
  }
  public set useDomainName(value: boolean | cdktf.IResolvable) {
    this._useDomainName = value;
  }
  public resetUseDomainName() {
    this._useDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDomainNameInput() {
    return this._useDomainName;
  }

  // use_domain_name_servers - computed: false, optional: true, required: false
  private _useDomainNameServers?: boolean | cdktf.IResolvable; 
  public get useDomainNameServers() {
    return this.getBooleanAttribute('use_domain_name_servers');
  }
  public set useDomainNameServers(value: boolean | cdktf.IResolvable) {
    this._useDomainNameServers = value;
  }
  public resetUseDomainNameServers() {
    this._useDomainNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDomainNameServersInput() {
    return this._useDomainNameServers;
  }

  // use_for_ea_inheritance - computed: false, optional: true, required: false
  private _useForEaInheritance?: boolean | cdktf.IResolvable; 
  public get useForEaInheritance() {
    return this.getBooleanAttribute('use_for_ea_inheritance');
  }
  public set useForEaInheritance(value: boolean | cdktf.IResolvable) {
    this._useForEaInheritance = value;
  }
  public resetUseForEaInheritance() {
    this._useForEaInheritance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useForEaInheritanceInput() {
    return this._useForEaInheritance;
  }

  // use_logic_filter_rules - computed: false, optional: true, required: false
  private _useLogicFilterRules?: boolean | cdktf.IResolvable; 
  public get useLogicFilterRules() {
    return this.getBooleanAttribute('use_logic_filter_rules');
  }
  public set useLogicFilterRules(value: boolean | cdktf.IResolvable) {
    this._useLogicFilterRules = value;
  }
  public resetUseLogicFilterRules() {
    this._useLogicFilterRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLogicFilterRulesInput() {
    return this._useLogicFilterRules;
  }

  // use_options - computed: false, optional: true, required: false
  private _useOptions?: boolean | cdktf.IResolvable; 
  public get useOptions() {
    return this.getBooleanAttribute('use_options');
  }
  public set useOptions(value: boolean | cdktf.IResolvable) {
    this._useOptions = value;
  }
  public resetUseOptions() {
    this._useOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOptionsInput() {
    return this._useOptions;
  }

  // use_preferred_lifetime - computed: false, optional: true, required: false
  private _usePreferredLifetime?: boolean | cdktf.IResolvable; 
  public get usePreferredLifetime() {
    return this.getBooleanAttribute('use_preferred_lifetime');
  }
  public set usePreferredLifetime(value: boolean | cdktf.IResolvable) {
    this._usePreferredLifetime = value;
  }
  public resetUsePreferredLifetime() {
    this._usePreferredLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePreferredLifetimeInput() {
    return this._usePreferredLifetime;
  }

  // use_valid_lifetime - computed: false, optional: true, required: false
  private _useValidLifetime?: boolean | cdktf.IResolvable; 
  public get useValidLifetime() {
    return this.getBooleanAttribute('use_valid_lifetime');
  }
  public set useValidLifetime(value: boolean | cdktf.IResolvable) {
    this._useValidLifetime = value;
  }
  public resetUseValidLifetime() {
    this._useValidLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useValidLifetimeInput() {
    return this._useValidLifetime;
  }

  // valid_lifetime - computed: false, optional: true, required: false
  private _validLifetime?: number; 
  public get validLifetime() {
    return this.getNumberAttribute('valid_lifetime');
  }
  public set validLifetime(value: number) {
    this._validLifetime = value;
  }
  public resetValidLifetime() {
    this._validLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validLifetimeInput() {
    return this._validLifetime;
  }
}

export class IpAllocationIpv6AddrsList extends cdktf.ComplexList {
  public internalValue? : IpAllocationIpv6Addrs[] | cdktf.IResolvable

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
  public get(index: number): IpAllocationIpv6AddrsOutputReference {
    return new IpAllocationIpv6AddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpAllocationMsAdUserData {
}

export function ipAllocationMsAdUserDataToTerraform(struct?: IpAllocationMsAdUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipAllocationMsAdUserDataToHclTerraform(struct?: IpAllocationMsAdUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpAllocationMsAdUserDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpAllocationMsAdUserData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAllocationMsAdUserData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_users_count - computed: true, optional: false, required: false
  public get activeUsersCount() {
    return this.getNumberAttribute('active_users_count');
  }
}
export interface IpAllocationSnmp3Credential {
  /**
  * Authentication password for the SNMPv3 user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#authentication_password IpAllocation#authentication_password}
  */
  readonly authenticationPassword?: string;
  /**
  * Authentication protocol for the SNMPv3 user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#authentication_protocol IpAllocation#authentication_protocol}
  */
  readonly authenticationProtocol?: string;
  /**
  * Comments for the SNMPv3 user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#comment IpAllocation#comment}
  */
  readonly comment?: string;
  /**
  * Group for the SNMPv3 credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#credential_group IpAllocation#credential_group}
  */
  readonly credentialGroup?: string;
  /**
  * Privacy password for the SNMPv3 user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#privacy_password IpAllocation#privacy_password}
  */
  readonly privacyPassword?: string;
  /**
  * Privacy protocol for the SNMPv3 user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#privacy_protocol IpAllocation#privacy_protocol}
  */
  readonly privacyProtocol?: string;
  /**
  * The SNMPv3 user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#user IpAllocation#user}
  */
  readonly user?: string;
}

export function ipAllocationSnmp3CredentialToTerraform(struct?: IpAllocationSnmp3Credential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_password: cdktf.stringToTerraform(struct!.authenticationPassword),
    authentication_protocol: cdktf.stringToTerraform(struct!.authenticationProtocol),
    comment: cdktf.stringToTerraform(struct!.comment),
    credential_group: cdktf.stringToTerraform(struct!.credentialGroup),
    privacy_password: cdktf.stringToTerraform(struct!.privacyPassword),
    privacy_protocol: cdktf.stringToTerraform(struct!.privacyProtocol),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function ipAllocationSnmp3CredentialToHclTerraform(struct?: IpAllocationSnmp3Credential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_password: {
      value: cdktf.stringToHclTerraform(struct!.authenticationPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_protocol: {
      value: cdktf.stringToHclTerraform(struct!.authenticationProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_group: {
      value: cdktf.stringToHclTerraform(struct!.credentialGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_password: {
      value: cdktf.stringToHclTerraform(struct!.privacyPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_protocol: {
      value: cdktf.stringToHclTerraform(struct!.privacyProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAllocationSnmp3CredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpAllocationSnmp3Credential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationPassword = this._authenticationPassword;
    }
    if (this._authenticationProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationProtocol = this._authenticationProtocol;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._credentialGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialGroup = this._credentialGroup;
    }
    if (this._privacyPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyPassword = this._privacyPassword;
    }
    if (this._privacyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyProtocol = this._privacyProtocol;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAllocationSnmp3Credential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationPassword = undefined;
      this._authenticationProtocol = undefined;
      this._comment = undefined;
      this._credentialGroup = undefined;
      this._privacyPassword = undefined;
      this._privacyProtocol = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationPassword = value.authenticationPassword;
      this._authenticationProtocol = value.authenticationProtocol;
      this._comment = value.comment;
      this._credentialGroup = value.credentialGroup;
      this._privacyPassword = value.privacyPassword;
      this._privacyProtocol = value.privacyProtocol;
      this._user = value.user;
    }
  }

  // authentication_password - computed: false, optional: true, required: false
  private _authenticationPassword?: string; 
  public get authenticationPassword() {
    return this.getStringAttribute('authentication_password');
  }
  public set authenticationPassword(value: string) {
    this._authenticationPassword = value;
  }
  public resetAuthenticationPassword() {
    this._authenticationPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPasswordInput() {
    return this._authenticationPassword;
  }

  // authentication_protocol - computed: false, optional: true, required: false
  private _authenticationProtocol?: string; 
  public get authenticationProtocol() {
    return this.getStringAttribute('authentication_protocol');
  }
  public set authenticationProtocol(value: string) {
    this._authenticationProtocol = value;
  }
  public resetAuthenticationProtocol() {
    this._authenticationProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProtocolInput() {
    return this._authenticationProtocol;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // credential_group - computed: false, optional: true, required: false
  private _credentialGroup?: string; 
  public get credentialGroup() {
    return this.getStringAttribute('credential_group');
  }
  public set credentialGroup(value: string) {
    this._credentialGroup = value;
  }
  public resetCredentialGroup() {
    this._credentialGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialGroupInput() {
    return this._credentialGroup;
  }

  // privacy_password - computed: false, optional: true, required: false
  private _privacyPassword?: string; 
  public get privacyPassword() {
    return this.getStringAttribute('privacy_password');
  }
  public set privacyPassword(value: string) {
    this._privacyPassword = value;
  }
  public resetPrivacyPassword() {
    this._privacyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPasswordInput() {
    return this._privacyPassword;
  }

  // privacy_protocol - computed: false, optional: true, required: false
  private _privacyProtocol?: string; 
  public get privacyProtocol() {
    return this.getStringAttribute('privacy_protocol');
  }
  public set privacyProtocol(value: string) {
    this._privacyProtocol = value;
  }
  public resetPrivacyProtocol() {
    this._privacyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyProtocolInput() {
    return this._privacyProtocol;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface IpAllocationSnmpCredential {
  /**
  * Comments for the SNMPv1 and SNMPv2 users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#comment IpAllocation#comment}
  */
  readonly comment?: string;
  /**
  * The public community string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#community_string IpAllocation#community_string}
  */
  readonly communityString?: string;
  /**
  * Group for the SNMPv1 and SNMPv2 credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#credential_group IpAllocation#credential_group}
  */
  readonly credentialGroup?: string;
}

export function ipAllocationSnmpCredentialToTerraform(struct?: IpAllocationSnmpCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    community_string: cdktf.stringToTerraform(struct!.communityString),
    credential_group: cdktf.stringToTerraform(struct!.credentialGroup),
  }
}


export function ipAllocationSnmpCredentialToHclTerraform(struct?: IpAllocationSnmpCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    community_string: {
      value: cdktf.stringToHclTerraform(struct!.communityString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_group: {
      value: cdktf.stringToHclTerraform(struct!.credentialGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAllocationSnmpCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpAllocationSnmpCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._communityString !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityString = this._communityString;
    }
    if (this._credentialGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialGroup = this._credentialGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAllocationSnmpCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._communityString = undefined;
      this._credentialGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._communityString = value.communityString;
      this._credentialGroup = value.credentialGroup;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // community_string - computed: false, optional: true, required: false
  private _communityString?: string; 
  public get communityString() {
    return this.getStringAttribute('community_string');
  }
  public set communityString(value: string) {
    this._communityString = value;
  }
  public resetCommunityString() {
    this._communityString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityStringInput() {
    return this._communityString;
  }

  // credential_group - computed: false, optional: true, required: false
  private _credentialGroup?: string; 
  public get credentialGroup() {
    return this.getStringAttribute('credential_group');
  }
  public set credentialGroup(value: string) {
    this._credentialGroup = value;
  }
  public resetCredentialGroup() {
    this._credentialGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialGroupInput() {
    return this._credentialGroup;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation nios_ip_allocation}
*/
export class IpAllocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_ip_allocation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpAllocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpAllocation to import
  * @param importFromId The id of the existing IpAllocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpAllocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_ip_allocation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_allocation nios_ip_allocation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpAllocationConfig
  */
  public constructor(scope: Construct, id: string, config: IpAllocationConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_ip_allocation',
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
    this._aliases = config.aliases;
    this._cliCredentials.internalValue = config.cliCredentials;
    this._comment = config.comment;
    this._configureForDns = config.configureForDns;
    this._ddnsProtected = config.ddnsProtected;
    this._deviceDescription = config.deviceDescription;
    this._deviceLocation = config.deviceLocation;
    this._deviceType = config.deviceType;
    this._deviceVendor = config.deviceVendor;
    this._disable = config.disable;
    this._disableDiscovery = config.disableDiscovery;
    this._enableImmediateDiscovery = config.enableImmediateDiscovery;
    this._extattrs = config.extattrs;
    this._ipv4Addrs.internalValue = config.ipv4Addrs;
    this._ipv6Addrs.internalValue = config.ipv6Addrs;
    this._name = config.name;
    this._networkView = config.networkView;
    this._restartIfNeeded = config.restartIfNeeded;
    this._rrsetOrder = config.rrsetOrder;
    this._snmp3Credential.internalValue = config.snmp3Credential;
    this._snmpCredential.internalValue = config.snmpCredential;
    this._ttl = config.ttl;
    this._useCliCredentials = config.useCliCredentials;
    this._useDnsEaInheritance = config.useDnsEaInheritance;
    this._useSnmp3Credential = config.useSnmp3Credential;
    this._useSnmpCredential = config.useSnmpCredential;
    this._useTtl = config.useTtl;
    this._view = config.view;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aliases - computed: true, optional: true, required: false
  private _aliases?: string[]; 
  public get aliases() {
    return this.getListAttribute('aliases');
  }
  public set aliases(value: string[]) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // allow_telnet - computed: true, optional: false, required: false
  public get allowTelnet() {
    return this.getBooleanAttribute('allow_telnet');
  }

  // cli_credentials - computed: true, optional: true, required: false
  private _cliCredentials = new IpAllocationCliCredentialsList(this, "cli_credentials", false);
  public get cliCredentials() {
    return this._cliCredentials;
  }
  public putCliCredentials(value: IpAllocationCliCredentials[] | cdktf.IResolvable) {
    this._cliCredentials.internalValue = value;
  }
  public resetCliCredentials() {
    this._cliCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliCredentialsInput() {
    return this._cliCredentials.internalValue;
  }

  // cloud_info - computed: true, optional: false, required: false
  private _cloudInfo = new IpAllocationCloudInfoOutputReference(this, "cloud_info");
  public get cloudInfo() {
    return this._cloudInfo;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // configure_for_dns - computed: true, optional: true, required: false
  private _configureForDns?: boolean | cdktf.IResolvable; 
  public get configureForDns() {
    return this.getBooleanAttribute('configure_for_dns');
  }
  public set configureForDns(value: boolean | cdktf.IResolvable) {
    this._configureForDns = value;
  }
  public resetConfigureForDns() {
    this._configureForDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureForDnsInput() {
    return this._configureForDns;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // ddns_protected - computed: true, optional: true, required: false
  private _ddnsProtected?: boolean | cdktf.IResolvable; 
  public get ddnsProtected() {
    return this.getBooleanAttribute('ddns_protected');
  }
  public set ddnsProtected(value: boolean | cdktf.IResolvable) {
    this._ddnsProtected = value;
  }
  public resetDdnsProtected() {
    this._ddnsProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsProtectedInput() {
    return this._ddnsProtected;
  }

  // device_description - computed: true, optional: true, required: false
  private _deviceDescription?: string; 
  public get deviceDescription() {
    return this.getStringAttribute('device_description');
  }
  public set deviceDescription(value: string) {
    this._deviceDescription = value;
  }
  public resetDeviceDescription() {
    this._deviceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDescriptionInput() {
    return this._deviceDescription;
  }

  // device_location - computed: true, optional: true, required: false
  private _deviceLocation?: string; 
  public get deviceLocation() {
    return this.getStringAttribute('device_location');
  }
  public set deviceLocation(value: string) {
    this._deviceLocation = value;
  }
  public resetDeviceLocation() {
    this._deviceLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceLocationInput() {
    return this._deviceLocation;
  }

  // device_type - computed: true, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // device_vendor - computed: true, optional: true, required: false
  private _deviceVendor?: string; 
  public get deviceVendor() {
    return this.getStringAttribute('device_vendor');
  }
  public set deviceVendor(value: string) {
    this._deviceVendor = value;
  }
  public resetDeviceVendor() {
    this._deviceVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVendorInput() {
    return this._deviceVendor;
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // disable_discovery - computed: true, optional: true, required: false
  private _disableDiscovery?: boolean | cdktf.IResolvable; 
  public get disableDiscovery() {
    return this.getBooleanAttribute('disable_discovery');
  }
  public set disableDiscovery(value: boolean | cdktf.IResolvable) {
    this._disableDiscovery = value;
  }
  public resetDisableDiscovery() {
    this._disableDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDiscoveryInput() {
    return this._disableDiscovery;
  }

  // dns_aliases - computed: true, optional: false, required: false
  public get dnsAliases() {
    return this.getListAttribute('dns_aliases');
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // enable_immediate_discovery - computed: false, optional: true, required: false
  private _enableImmediateDiscovery?: boolean | cdktf.IResolvable; 
  public get enableImmediateDiscovery() {
    return this.getBooleanAttribute('enable_immediate_discovery');
  }
  public set enableImmediateDiscovery(value: boolean | cdktf.IResolvable) {
    this._enableImmediateDiscovery = value;
  }
  public resetEnableImmediateDiscovery() {
    this._enableImmediateDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableImmediateDiscoveryInput() {
    return this._enableImmediateDiscovery;
  }

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
  }

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
  }

  // ipv4addrs - computed: false, optional: true, required: false
  private _ipv4Addrs = new IpAllocationIpv4AddrsList(this, "ipv4addrs", false);
  public get ipv4Addrs() {
    return this._ipv4Addrs;
  }
  public putIpv4Addrs(value: IpAllocationIpv4Addrs[] | cdktf.IResolvable) {
    this._ipv4Addrs.internalValue = value;
  }
  public resetIpv4Addrs() {
    this._ipv4Addrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrsInput() {
    return this._ipv4Addrs.internalValue;
  }

  // ipv6addrs - computed: false, optional: true, required: false
  private _ipv6Addrs = new IpAllocationIpv6AddrsList(this, "ipv6addrs", false);
  public get ipv6Addrs() {
    return this._ipv6Addrs;
  }
  public putIpv6Addrs(value: IpAllocationIpv6Addrs[] | cdktf.IResolvable) {
    this._ipv6Addrs.internalValue = value;
  }
  public resetIpv6Addrs() {
    this._ipv6Addrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrsInput() {
    return this._ipv6Addrs.internalValue;
  }

  // last_queried - computed: true, optional: false, required: false
  public get lastQueried() {
    return this.getNumberAttribute('last_queried');
  }

  // ms_ad_user_data - computed: true, optional: false, required: false
  private _msAdUserData = new IpAllocationMsAdUserDataOutputReference(this, "ms_ad_user_data");
  public get msAdUserData() {
    return this._msAdUserData;
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

  // network_view - computed: true, optional: true, required: false
  private _networkView?: string; 
  public get networkView() {
    return this.getStringAttribute('network_view');
  }
  public set networkView(value: string) {
    this._networkView = value;
  }
  public resetNetworkView() {
    this._networkView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkViewInput() {
    return this._networkView;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // restart_if_needed - computed: false, optional: true, required: false
  private _restartIfNeeded?: boolean | cdktf.IResolvable; 
  public get restartIfNeeded() {
    return this.getBooleanAttribute('restart_if_needed');
  }
  public set restartIfNeeded(value: boolean | cdktf.IResolvable) {
    this._restartIfNeeded = value;
  }
  public resetRestartIfNeeded() {
    this._restartIfNeeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartIfNeededInput() {
    return this._restartIfNeeded;
  }

  // rrset_order - computed: true, optional: true, required: false
  private _rrsetOrder?: string; 
  public get rrsetOrder() {
    return this.getStringAttribute('rrset_order');
  }
  public set rrsetOrder(value: string) {
    this._rrsetOrder = value;
  }
  public resetRrsetOrder() {
    this._rrsetOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrsetOrderInput() {
    return this._rrsetOrder;
  }

  // snmp3_credential - computed: false, optional: true, required: false
  private _snmp3Credential = new IpAllocationSnmp3CredentialOutputReference(this, "snmp3_credential");
  public get snmp3Credential() {
    return this._snmp3Credential;
  }
  public putSnmp3Credential(value: IpAllocationSnmp3Credential) {
    this._snmp3Credential.internalValue = value;
  }
  public resetSnmp3Credential() {
    this._snmp3Credential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmp3CredentialInput() {
    return this._snmp3Credential.internalValue;
  }

  // snmp_credential - computed: false, optional: true, required: false
  private _snmpCredential = new IpAllocationSnmpCredentialOutputReference(this, "snmp_credential");
  public get snmpCredential() {
    return this._snmpCredential;
  }
  public putSnmpCredential(value: IpAllocationSnmpCredential) {
    this._snmpCredential.internalValue = value;
  }
  public resetSnmpCredential() {
    this._snmpCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpCredentialInput() {
    return this._snmpCredential.internalValue;
  }

  // ttl - computed: true, optional: true, required: false
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

  // use_cli_credentials - computed: true, optional: true, required: false
  private _useCliCredentials?: boolean | cdktf.IResolvable; 
  public get useCliCredentials() {
    return this.getBooleanAttribute('use_cli_credentials');
  }
  public set useCliCredentials(value: boolean | cdktf.IResolvable) {
    this._useCliCredentials = value;
  }
  public resetUseCliCredentials() {
    this._useCliCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCliCredentialsInput() {
    return this._useCliCredentials;
  }

  // use_dns_ea_inheritance - computed: true, optional: true, required: false
  private _useDnsEaInheritance?: boolean | cdktf.IResolvable; 
  public get useDnsEaInheritance() {
    return this.getBooleanAttribute('use_dns_ea_inheritance');
  }
  public set useDnsEaInheritance(value: boolean | cdktf.IResolvable) {
    this._useDnsEaInheritance = value;
  }
  public resetUseDnsEaInheritance() {
    this._useDnsEaInheritance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDnsEaInheritanceInput() {
    return this._useDnsEaInheritance;
  }

  // use_snmp3_credential - computed: true, optional: true, required: false
  private _useSnmp3Credential?: boolean | cdktf.IResolvable; 
  public get useSnmp3Credential() {
    return this.getBooleanAttribute('use_snmp3_credential');
  }
  public set useSnmp3Credential(value: boolean | cdktf.IResolvable) {
    this._useSnmp3Credential = value;
  }
  public resetUseSnmp3Credential() {
    this._useSnmp3Credential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSnmp3CredentialInput() {
    return this._useSnmp3Credential;
  }

  // use_snmp_credential - computed: true, optional: true, required: false
  private _useSnmpCredential?: boolean | cdktf.IResolvable; 
  public get useSnmpCredential() {
    return this.getBooleanAttribute('use_snmp_credential');
  }
  public set useSnmpCredential(value: boolean | cdktf.IResolvable) {
    this._useSnmpCredential = value;
  }
  public resetUseSnmpCredential() {
    this._useSnmpCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSnmpCredentialInput() {
    return this._useSnmpCredential;
  }

  // use_ttl - computed: true, optional: true, required: false
  private _useTtl?: boolean | cdktf.IResolvable; 
  public get useTtl() {
    return this.getBooleanAttribute('use_ttl');
  }
  public set useTtl(value: boolean | cdktf.IResolvable) {
    this._useTtl = value;
  }
  public resetUseTtl() {
    this._useTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTtlInput() {
    return this._useTtl;
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
      aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aliases),
      cli_credentials: cdktf.listMapper(ipAllocationCliCredentialsToTerraform, false)(this._cliCredentials.internalValue),
      comment: cdktf.stringToTerraform(this._comment),
      configure_for_dns: cdktf.booleanToTerraform(this._configureForDns),
      ddns_protected: cdktf.booleanToTerraform(this._ddnsProtected),
      device_description: cdktf.stringToTerraform(this._deviceDescription),
      device_location: cdktf.stringToTerraform(this._deviceLocation),
      device_type: cdktf.stringToTerraform(this._deviceType),
      device_vendor: cdktf.stringToTerraform(this._deviceVendor),
      disable: cdktf.booleanToTerraform(this._disable),
      disable_discovery: cdktf.booleanToTerraform(this._disableDiscovery),
      enable_immediate_discovery: cdktf.booleanToTerraform(this._enableImmediateDiscovery),
      extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrs),
      ipv4addrs: cdktf.listMapper(ipAllocationIpv4AddrsToTerraform, false)(this._ipv4Addrs.internalValue),
      ipv6addrs: cdktf.listMapper(ipAllocationIpv6AddrsToTerraform, false)(this._ipv6Addrs.internalValue),
      name: cdktf.stringToTerraform(this._name),
      network_view: cdktf.stringToTerraform(this._networkView),
      restart_if_needed: cdktf.booleanToTerraform(this._restartIfNeeded),
      rrset_order: cdktf.stringToTerraform(this._rrsetOrder),
      snmp3_credential: ipAllocationSnmp3CredentialToTerraform(this._snmp3Credential.internalValue),
      snmp_credential: ipAllocationSnmpCredentialToTerraform(this._snmpCredential.internalValue),
      ttl: cdktf.numberToTerraform(this._ttl),
      use_cli_credentials: cdktf.booleanToTerraform(this._useCliCredentials),
      use_dns_ea_inheritance: cdktf.booleanToTerraform(this._useDnsEaInheritance),
      use_snmp3_credential: cdktf.booleanToTerraform(this._useSnmp3Credential),
      use_snmp_credential: cdktf.booleanToTerraform(this._useSnmpCredential),
      use_ttl: cdktf.booleanToTerraform(this._useTtl),
      view: cdktf.stringToTerraform(this._view),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aliases: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aliases),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cli_credentials: {
        value: cdktf.listMapperHcl(ipAllocationCliCredentialsToHclTerraform, false)(this._cliCredentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpAllocationCliCredentialsList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configure_for_dns: {
        value: cdktf.booleanToHclTerraform(this._configureForDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ddns_protected: {
        value: cdktf.booleanToHclTerraform(this._ddnsProtected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      device_description: {
        value: cdktf.stringToHclTerraform(this._deviceDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_location: {
        value: cdktf.stringToHclTerraform(this._deviceLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vendor: {
        value: cdktf.stringToHclTerraform(this._deviceVendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_discovery: {
        value: cdktf.booleanToHclTerraform(this._disableDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_immediate_discovery: {
        value: cdktf.booleanToHclTerraform(this._enableImmediateDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extattrs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ipv4addrs: {
        value: cdktf.listMapperHcl(ipAllocationIpv4AddrsToHclTerraform, false)(this._ipv4Addrs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpAllocationIpv4AddrsList",
      },
      ipv6addrs: {
        value: cdktf.listMapperHcl(ipAllocationIpv6AddrsToHclTerraform, false)(this._ipv6Addrs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpAllocationIpv6AddrsList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_view: {
        value: cdktf.stringToHclTerraform(this._networkView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restart_if_needed: {
        value: cdktf.booleanToHclTerraform(this._restartIfNeeded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rrset_order: {
        value: cdktf.stringToHclTerraform(this._rrsetOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp3_credential: {
        value: ipAllocationSnmp3CredentialToHclTerraform(this._snmp3Credential.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpAllocationSnmp3Credential",
      },
      snmp_credential: {
        value: ipAllocationSnmpCredentialToHclTerraform(this._snmpCredential.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpAllocationSnmpCredential",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_cli_credentials: {
        value: cdktf.booleanToHclTerraform(this._useCliCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_dns_ea_inheritance: {
        value: cdktf.booleanToHclTerraform(this._useDnsEaInheritance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_snmp3_credential: {
        value: cdktf.booleanToHclTerraform(this._useSnmp3Credential),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_snmp_credential: {
        value: cdktf.booleanToHclTerraform(this._useSnmpCredential),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ttl: {
        value: cdktf.booleanToHclTerraform(this._useTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
