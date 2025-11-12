// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosRecordHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * External Attribute Filters are used to return a more specific list of results by filtering on external attributes. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#extattrfilters DataNiosRecordHost#extattrfilters}
  */
  readonly extattrfilters?: { [key: string]: string };
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#filters DataNiosRecordHost#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#max_results DataNiosRecordHost#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#paging DataNiosRecordHost#paging}
  */
  readonly paging?: number;
}
export interface DataNiosRecordHostResultCliCredentials {
  /**
  * The commment for the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#comment DataNiosRecordHost#comment}
  */
  readonly comment?: string;
  /**
  * Group for the CLI credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#credential_group DataNiosRecordHost#credential_group}
  */
  readonly credentialGroup?: string;
  /**
  * The type of the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#credential_type DataNiosRecordHost#credential_type}
  */
  readonly credentialType?: string;
  /**
  * The CLI password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#password DataNiosRecordHost#password}
  */
  readonly password?: string;
  /**
  * The CLI user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#user DataNiosRecordHost#user}
  */
  readonly user?: string;
}

export function dataNiosRecordHostResultCliCredentialsToTerraform(struct?: DataNiosRecordHostResultCliCredentials | cdktf.IResolvable): any {
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


export function dataNiosRecordHostResultCliCredentialsToHclTerraform(struct?: DataNiosRecordHostResultCliCredentials | cdktf.IResolvable): any {
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

export class DataNiosRecordHostResultCliCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosRecordHostResultCliCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosRecordHostResultCliCredentials | cdktf.IResolvable | undefined) {
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

export class DataNiosRecordHostResultCliCredentialsList extends cdktf.ComplexList {
  public internalValue? : DataNiosRecordHostResultCliCredentials[] | cdktf.IResolvable

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
  public get(index: number): DataNiosRecordHostResultCliCredentialsOutputReference {
    return new DataNiosRecordHostResultCliCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosRecordHostResultCloudInfoDelegatedMember {
  /**
  * The IPv4 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#ipv4addr DataNiosRecordHost#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * The IPv6 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#ipv6addr DataNiosRecordHost#ipv6addr}
  */
  readonly ipv6Addr?: string;
  /**
  * The Grid member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#name DataNiosRecordHost#name}
  */
  readonly name?: string;
}

export function dataNiosRecordHostResultCloudInfoDelegatedMemberToTerraform(struct?: DataNiosRecordHostResultCloudInfoDelegatedMember | cdktf.IResolvable): any {
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


export function dataNiosRecordHostResultCloudInfoDelegatedMemberToHclTerraform(struct?: DataNiosRecordHostResultCloudInfoDelegatedMember | cdktf.IResolvable): any {
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

export class DataNiosRecordHostResultCloudInfoDelegatedMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosRecordHostResultCloudInfoDelegatedMember | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosRecordHostResultCloudInfoDelegatedMember | cdktf.IResolvable | undefined) {
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
export interface DataNiosRecordHostResultCloudInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#delegated_member DataNiosRecordHost#delegated_member}
  */
  readonly delegatedMember?: DataNiosRecordHostResultCloudInfoDelegatedMember;
}

export function dataNiosRecordHostResultCloudInfoToTerraform(struct?: DataNiosRecordHostResultCloudInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegated_member: dataNiosRecordHostResultCloudInfoDelegatedMemberToTerraform(struct!.delegatedMember),
  }
}


export function dataNiosRecordHostResultCloudInfoToHclTerraform(struct?: DataNiosRecordHostResultCloudInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delegated_member: {
      value: dataNiosRecordHostResultCloudInfoDelegatedMemberToHclTerraform(struct!.delegatedMember),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosRecordHostResultCloudInfoDelegatedMember",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosRecordHostResultCloudInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosRecordHostResultCloudInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delegatedMember?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegatedMember = this._delegatedMember?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosRecordHostResultCloudInfo | undefined) {
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
  private _delegatedMember = new DataNiosRecordHostResultCloudInfoDelegatedMemberOutputReference(this, "delegated_member");
  public get delegatedMember() {
    return this._delegatedMember;
  }
  public putDelegatedMember(value: DataNiosRecordHostResultCloudInfoDelegatedMember) {
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
export interface DataNiosRecordHostResultIpv4AddrsDiscoveredData {
}

export function dataNiosRecordHostResultIpv4AddrsDiscoveredDataToTerraform(struct?: DataNiosRecordHostResultIpv4AddrsDiscoveredData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosRecordHostResultIpv4AddrsDiscoveredDataToHclTerraform(struct?: DataNiosRecordHostResultIpv4AddrsDiscoveredData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosRecordHostResultIpv4AddrsDiscoveredDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosRecordHostResultIpv4AddrsDiscoveredData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosRecordHostResultIpv4AddrsDiscoveredData | undefined) {
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
export interface DataNiosRecordHostResultIpv4AddrsFuncCall {
  /**
  * The attribute to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#attribute_name DataNiosRecordHost#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The object to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#object DataNiosRecordHost#object}
  */
  readonly object?: string;
  /**
  * The function to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#object_function DataNiosRecordHost#object_function}
  */
  readonly objectFunction?: string;
  /**
  * The parameters for the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#object_parameters DataNiosRecordHost#object_parameters}
  */
  readonly objectParameters?: { [key: string]: string };
  /**
  * The parameters for the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#parameters DataNiosRecordHost#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The result field of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#result_field DataNiosRecordHost#result_field}
  */
  readonly resultField?: string;
}

export function dataNiosRecordHostResultIpv4AddrsFuncCallToTerraform(struct?: DataNiosRecordHostResultIpv4AddrsFuncCall | cdktf.IResolvable): any {
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


export function dataNiosRecordHostResultIpv4AddrsFuncCallToHclTerraform(struct?: DataNiosRecordHostResultIpv4AddrsFuncCall | cdktf.IResolvable): any {
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

export class DataNiosRecordHostResultIpv4AddrsFuncCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosRecordHostResultIpv4AddrsFuncCall | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosRecordHostResultIpv4AddrsFuncCall | cdktf.IResolvable | undefined) {
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

  // attribute_name - computed: true, optional: false, required: true
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

  // object - computed: true, optional: true, required: false
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

  // object_function - computed: true, optional: true, required: false
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

  // object_parameters - computed: true, optional: true, required: false
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

  // parameters - computed: true, optional: true, required: false
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

  // result_field - computed: true, optional: true, required: false
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
export interface DataNiosRecordHostResultIpv4AddrsLogicFilterRules {
  /**
  * The filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#filter DataNiosRecordHost#filter}
  */
  readonly filter?: string;
  /**
  * The filter type. Valid values are: * MAC * NAC * Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#type DataNiosRecordHost#type}
  */
  readonly type?: string;
}

export function dataNiosRecordHostResultIpv4AddrsLogicFilterRulesToTerraform(struct?: DataNiosRecordHostResultIpv4AddrsLogicFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataNiosRecordHostResultIpv4AddrsLogicFilterRulesToHclTerraform(struct?: DataNiosRecordHostResultIpv4AddrsLogicFilterRules | cdktf.IResolvable): any {
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

export class DataNiosRecordHostResultIpv4AddrsLogicFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosRecordHostResultIpv4AddrsLogicFilterRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosRecordHostResultIpv4AddrsLogicFilterRules | cdktf.IResolvable | undefined) {
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

  // filter - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
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

export class DataNiosRecordHostResultIpv4AddrsLogicFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataNiosRecordHostResultIpv4AddrsLogicFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataNiosRecordHostResultIpv4AddrsLogicFilterRulesOutputReference {
    return new DataNiosRecordHostResultIpv4AddrsLogicFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosRecordHostResultIpv4AddrsMsAdUserData {
}

export function dataNiosRecordHostResultIpv4AddrsMsAdUserDataToTerraform(struct?: DataNiosRecordHostResultIpv4AddrsMsAdUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosRecordHostResultIpv4AddrsMsAdUserDataToHclTerraform(struct?: DataNiosRecordHostResultIpv4AddrsMsAdUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosRecordHostResultIpv4AddrsMsAdUserDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosRecordHostResultIpv4AddrsMsAdUserData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosRecordHostResultIpv4AddrsMsAdUserData | cdktf.IResolvable | undefined) {
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
export interface DataNiosRecordHostResultIpv4AddrsOptions {
  /**
  * Name of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#name DataNiosRecordHost#name}
  */
  readonly name?: string;
  /**
  * The code of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#num DataNiosRecordHost#num}
  */
  readonly num?: number;
  /**
  * Only applies to special options that are displayed separately from other options and have a use flag. These options are: * routers * router-templates * domain-name-servers * domain-name * broadcast-address * broadcast-address-offset * dhcp-lease-time * dhcp6.name-servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_option DataNiosRecordHost#use_option}
  */
  readonly useOption?: boolean | cdktf.IResolvable;
  /**
  * Value of the DHCP option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#value DataNiosRecordHost#value}
  */
  readonly value?: string;
  /**
  * The name of the space this DHCP option is associated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#vendor_class DataNiosRecordHost#vendor_class}
  */
  readonly vendorClass?: string;
}

export function dataNiosRecordHostResultIpv4AddrsOptionsToTerraform(struct?: DataNiosRecordHostResultIpv4AddrsOptions | cdktf.IResolvable): any {
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


export function dataNiosRecordHostResultIpv4AddrsOptionsToHclTerraform(struct?: DataNiosRecordHostResultIpv4AddrsOptions | cdktf.IResolvable): any {
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

export class DataNiosRecordHostResultIpv4AddrsOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosRecordHostResultIpv4AddrsOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosRecordHostResultIpv4AddrsOptions | cdktf.IResolvable | undefined) {
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

  // num - computed: true, optional: true, required: false
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

  // use_option - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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

  // vendor_class - computed: true, optional: true, required: false
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

export class DataNiosRecordHostResultIpv4AddrsOptionsList extends cdktf.ComplexList {
  public internalValue? : DataNiosRecordHostResultIpv4AddrsOptions[] | cdktf.IResolvable

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
  public get(index: number): DataNiosRecordHostResultIpv4AddrsOptionsOutputReference {
    return new DataNiosRecordHostResultIpv4AddrsOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosRecordHostResultIpv4Addrs {
  /**
  * The name of the boot file the client must download.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#bootfile DataNiosRecordHost#bootfile}
  */
  readonly bootfile?: string;
  /**
  * The IP address or hostname of the boot file server where the boot file is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#bootserver DataNiosRecordHost#bootserver}
  */
  readonly bootserver?: string;
  /**
  * Set this to True to disable the BOOTP settings and deny BOOTP boot requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#deny_bootp DataNiosRecordHost#deny_bootp}
  */
  readonly denyBootp?: boolean | cdktf.IResolvable;
  /**
  * Set this to True if you want the DHCP server to use a different lease time for PXE clients. You can specify the duration of time it takes a host to connect to a boot server, such as a TFTP server, and download the file it needs to boot. For example, set a longer lease time if the client downloads an OS (operating system) or configuration file, or set a shorter lease time if the client downloads only configuration changes. Enter the lease time for the preboot execution environment for hosts to boot remotely from a server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#enable_pxe_lease_time DataNiosRecordHost#enable_pxe_lease_time}
  */
  readonly enablePxeLeaseTime?: boolean | cdktf.IResolvable;
  /**
  * Function call to be executed for Fixed Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#func_call DataNiosRecordHost#func_call}
  */
  readonly funcCall?: DataNiosRecordHostResultIpv4AddrsFuncCall;
  /**
  * If this field is set to false, the appliance returns all DHCP options the client is eligible to receive, rather than only the list of options the client has requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#ignore_client_requested_options DataNiosRecordHost#ignore_client_requested_options}
  */
  readonly ignoreClientRequestedOptions?: boolean | cdktf.IResolvable;
  /**
  * The IPv4 Address of the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#ipv4addr DataNiosRecordHost#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * This field contains the logic filters to be applied on the this host address. This list corresponds to the match rules that are written to the dhcpd configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#logic_filter_rules DataNiosRecordHost#logic_filter_rules}
  */
  readonly logicFilterRules?: DataNiosRecordHostResultIpv4AddrsLogicFilterRules[] | cdktf.IResolvable;
  /**
  * Set this to 'MAC_ADDRESS' to assign the IP address to the selected host, provided that the MAC address of the requesting host matches the MAC address that you specify in the field. Set this to 'RESERVED' to reserve this particular IP address for future use, or if the IP address is statically configured on a system (the Infoblox server does not assign the address from a DHCP request).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#match_client DataNiosRecordHost#match_client}
  */
  readonly matchClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#ms_ad_user_data DataNiosRecordHost#ms_ad_user_data}
  */
  readonly msAdUserData?: DataNiosRecordHostResultIpv4AddrsMsAdUserData;
  /**
  * The name in FQDN format and/or IPv4 Address of the next server that the host needs to boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#nextserver DataNiosRecordHost#nextserver}
  */
  readonly nextserver?: string;
  /**
  * An array of DHCP option dhcpoption structs that lists the DHCP options associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#options DataNiosRecordHost#options}
  */
  readonly options?: DataNiosRecordHostResultIpv4AddrsOptions[] | cdktf.IResolvable;
  /**
  * The lease time for PXE clients, see *enable_pxe_lease_time* for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#pxe_lease_time DataNiosRecordHost#pxe_lease_time}
  */
  readonly pxeLeaseTime?: number;
  /**
  * The reference to the reserved interface to which the device belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#reserved_interface DataNiosRecordHost#reserved_interface}
  */
  readonly reservedInterface?: string;
  /**
  * Use flag for: bootfile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_bootfile DataNiosRecordHost#use_bootfile}
  */
  readonly useBootfile?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: bootserver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_bootserver DataNiosRecordHost#use_bootserver}
  */
  readonly useBootserver?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: deny_bootp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_deny_bootp DataNiosRecordHost#use_deny_bootp}
  */
  readonly useDenyBootp?: boolean | cdktf.IResolvable;
  /**
  * Set this to True when using this host address for EA inheritance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_for_ea_inheritance DataNiosRecordHost#use_for_ea_inheritance}
  */
  readonly useForEaInheritance?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ignore_client_requested_options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_ignore_client_requested_options DataNiosRecordHost#use_ignore_client_requested_options}
  */
  readonly useIgnoreClientRequestedOptions?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: logic_filter_rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_logic_filter_rules DataNiosRecordHost#use_logic_filter_rules}
  */
  readonly useLogicFilterRules?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: nextserver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_nextserver DataNiosRecordHost#use_nextserver}
  */
  readonly useNextserver?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_options DataNiosRecordHost#use_options}
  */
  readonly useOptions?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: pxe_lease_time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_pxe_lease_time DataNiosRecordHost#use_pxe_lease_time}
  */
  readonly usePxeLeaseTime?: boolean | cdktf.IResolvable;
}

export function dataNiosRecordHostResultIpv4AddrsToTerraform(struct?: DataNiosRecordHostResultIpv4Addrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootfile: cdktf.stringToTerraform(struct!.bootfile),
    bootserver: cdktf.stringToTerraform(struct!.bootserver),
    deny_bootp: cdktf.booleanToTerraform(struct!.denyBootp),
    enable_pxe_lease_time: cdktf.booleanToTerraform(struct!.enablePxeLeaseTime),
    func_call: dataNiosRecordHostResultIpv4AddrsFuncCallToTerraform(struct!.funcCall),
    ignore_client_requested_options: cdktf.booleanToTerraform(struct!.ignoreClientRequestedOptions),
    ipv4addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    logic_filter_rules: cdktf.listMapper(dataNiosRecordHostResultIpv4AddrsLogicFilterRulesToTerraform, false)(struct!.logicFilterRules),
    match_client: cdktf.stringToTerraform(struct!.matchClient),
    ms_ad_user_data: dataNiosRecordHostResultIpv4AddrsMsAdUserDataToTerraform(struct!.msAdUserData),
    nextserver: cdktf.stringToTerraform(struct!.nextserver),
    options: cdktf.listMapper(dataNiosRecordHostResultIpv4AddrsOptionsToTerraform, false)(struct!.options),
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


export function dataNiosRecordHostResultIpv4AddrsToHclTerraform(struct?: DataNiosRecordHostResultIpv4Addrs | cdktf.IResolvable): any {
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
      value: dataNiosRecordHostResultIpv4AddrsFuncCallToHclTerraform(struct!.funcCall),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosRecordHostResultIpv4AddrsFuncCall",
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
      value: cdktf.listMapperHcl(dataNiosRecordHostResultIpv4AddrsLogicFilterRulesToHclTerraform, false)(struct!.logicFilterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosRecordHostResultIpv4AddrsLogicFilterRulesList",
    },
    match_client: {
      value: cdktf.stringToHclTerraform(struct!.matchClient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ms_ad_user_data: {
      value: dataNiosRecordHostResultIpv4AddrsMsAdUserDataToHclTerraform(struct!.msAdUserData),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosRecordHostResultIpv4AddrsMsAdUserData",
    },
    nextserver: {
      value: cdktf.stringToHclTerraform(struct!.nextserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(dataNiosRecordHostResultIpv4AddrsOptionsToHclTerraform, false)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosRecordHostResultIpv4AddrsOptionsList",
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

export class DataNiosRecordHostResultIpv4AddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosRecordHostResultIpv4Addrs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosRecordHostResultIpv4Addrs | cdktf.IResolvable | undefined) {
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
  private _discoveredData = new DataNiosRecordHostResultIpv4AddrsDiscoveredDataOutputReference(this, "discovered_data");
  public get discoveredData() {
    return this._discoveredData;
  }

  // enable_pxe_lease_time - computed: true, optional: true, required: false
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

  // func_call - computed: true, optional: true, required: false
  private _funcCall = new DataNiosRecordHostResultIpv4AddrsFuncCallOutputReference(this, "func_call");
  public get funcCall() {
    return this._funcCall;
  }
  public putFuncCall(value: DataNiosRecordHostResultIpv4AddrsFuncCall) {
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

  // ignore_client_requested_options - computed: true, optional: true, required: false
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

  // logic_filter_rules - computed: true, optional: true, required: false
  private _logicFilterRules = new DataNiosRecordHostResultIpv4AddrsLogicFilterRulesList(this, "logic_filter_rules", false);
  public get logicFilterRules() {
    return this._logicFilterRules;
  }
  public putLogicFilterRules(value: DataNiosRecordHostResultIpv4AddrsLogicFilterRules[] | cdktf.IResolvable) {
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

  // ms_ad_user_data - computed: true, optional: true, required: false
  private _msAdUserData = new DataNiosRecordHostResultIpv4AddrsMsAdUserDataOutputReference(this, "ms_ad_user_data");
  public get msAdUserData() {
    return this._msAdUserData;
  }
  public putMsAdUserData(value: DataNiosRecordHostResultIpv4AddrsMsAdUserData) {
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

  // options - computed: true, optional: true, required: false
  private _options = new DataNiosRecordHostResultIpv4AddrsOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: DataNiosRecordHostResultIpv4AddrsOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // pxe_lease_time - computed: true, optional: true, required: false
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

  // use_bootfile - computed: true, optional: true, required: false
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

  // use_bootserver - computed: true, optional: true, required: false
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

  // use_deny_bootp - computed: true, optional: true, required: false
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

  // use_for_ea_inheritance - computed: true, optional: true, required: false
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

  // use_ignore_client_requested_options - computed: true, optional: true, required: false
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

  // use_logic_filter_rules - computed: true, optional: true, required: false
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

  // use_nextserver - computed: true, optional: true, required: false
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

  // use_options - computed: true, optional: true, required: false
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

  // use_pxe_lease_time - computed: true, optional: true, required: false
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

export class DataNiosRecordHostResultIpv4AddrsList extends cdktf.ComplexList {
  public internalValue? : DataNiosRecordHostResultIpv4Addrs[] | cdktf.IResolvable

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
  public get(index: number): DataNiosRecordHostResultIpv4AddrsOutputReference {
    return new DataNiosRecordHostResultIpv4AddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosRecordHostResultIpv6AddrsDiscoveredData {
}

export function dataNiosRecordHostResultIpv6AddrsDiscoveredDataToTerraform(struct?: DataNiosRecordHostResultIpv6AddrsDiscoveredData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosRecordHostResultIpv6AddrsDiscoveredDataToHclTerraform(struct?: DataNiosRecordHostResultIpv6AddrsDiscoveredData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosRecordHostResultIpv6AddrsDiscoveredDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosRecordHostResultIpv6AddrsDiscoveredData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosRecordHostResultIpv6AddrsDiscoveredData | undefined) {
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
export interface DataNiosRecordHostResultIpv6AddrsFuncCall {
  /**
  * The attribute to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#attribute_name DataNiosRecordHost#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The object to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#object DataNiosRecordHost#object}
  */
  readonly object?: string;
  /**
  * The function to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#object_function DataNiosRecordHost#object_function}
  */
  readonly objectFunction?: string;
  /**
  * The parameters for the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#object_parameters DataNiosRecordHost#object_parameters}
  */
  readonly objectParameters?: { [key: string]: string };
  /**
  * The parameters for the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#parameters DataNiosRecordHost#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The result field of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#result_field DataNiosRecordHost#result_field}
  */
  readonly resultField?: string;
}

export function dataNiosRecordHostResultIpv6AddrsFuncCallToTerraform(struct?: DataNiosRecordHostResultIpv6AddrsFuncCall | cdktf.IResolvable): any {
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


export function dataNiosRecordHostResultIpv6AddrsFuncCallToHclTerraform(struct?: DataNiosRecordHostResultIpv6AddrsFuncCall | cdktf.IResolvable): any {
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

export class DataNiosRecordHostResultIpv6AddrsFuncCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosRecordHostResultIpv6AddrsFuncCall | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosRecordHostResultIpv6AddrsFuncCall | cdktf.IResolvable | undefined) {
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

  // attribute_name - computed: true, optional: false, required: true
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

  // object - computed: true, optional: true, required: false
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

  // object_function - computed: true, optional: true, required: false
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

  // object_parameters - computed: true, optional: true, required: false
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

  // parameters - computed: true, optional: true, required: false
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

  // result_field - computed: true, optional: true, required: false
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
export interface DataNiosRecordHostResultIpv6AddrsLogicFilterRules {
  /**
  * The filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#filter DataNiosRecordHost#filter}
  */
  readonly filter?: string;
  /**
  * The filter type. Valid values are: * MAC * NAC * Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#type DataNiosRecordHost#type}
  */
  readonly type?: string;
}

export function dataNiosRecordHostResultIpv6AddrsLogicFilterRulesToTerraform(struct?: DataNiosRecordHostResultIpv6AddrsLogicFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataNiosRecordHostResultIpv6AddrsLogicFilterRulesToHclTerraform(struct?: DataNiosRecordHostResultIpv6AddrsLogicFilterRules | cdktf.IResolvable): any {
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

export class DataNiosRecordHostResultIpv6AddrsLogicFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosRecordHostResultIpv6AddrsLogicFilterRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosRecordHostResultIpv6AddrsLogicFilterRules | cdktf.IResolvable | undefined) {
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

  // filter - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
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

export class DataNiosRecordHostResultIpv6AddrsLogicFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataNiosRecordHostResultIpv6AddrsLogicFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataNiosRecordHostResultIpv6AddrsLogicFilterRulesOutputReference {
    return new DataNiosRecordHostResultIpv6AddrsLogicFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosRecordHostResultIpv6AddrsMsAdUserData {
}

export function dataNiosRecordHostResultIpv6AddrsMsAdUserDataToTerraform(struct?: DataNiosRecordHostResultIpv6AddrsMsAdUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosRecordHostResultIpv6AddrsMsAdUserDataToHclTerraform(struct?: DataNiosRecordHostResultIpv6AddrsMsAdUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosRecordHostResultIpv6AddrsMsAdUserDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosRecordHostResultIpv6AddrsMsAdUserData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosRecordHostResultIpv6AddrsMsAdUserData | cdktf.IResolvable | undefined) {
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
export interface DataNiosRecordHostResultIpv6AddrsOptions {
  /**
  * Name of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#name DataNiosRecordHost#name}
  */
  readonly name?: string;
  /**
  * The code of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#num DataNiosRecordHost#num}
  */
  readonly num?: number;
  /**
  * Only applies to special options that are displayed separately from other options and have a use flag. These options are: * routers * router-templates * domain-name-servers * domain-name * broadcast-address * broadcast-address-offset * dhcp-lease-time * dhcp6.name-servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_option DataNiosRecordHost#use_option}
  */
  readonly useOption?: boolean | cdktf.IResolvable;
  /**
  * Value of the DHCP option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#value DataNiosRecordHost#value}
  */
  readonly value?: string;
  /**
  * The name of the space this DHCP option is associated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#vendor_class DataNiosRecordHost#vendor_class}
  */
  readonly vendorClass?: string;
}

export function dataNiosRecordHostResultIpv6AddrsOptionsToTerraform(struct?: DataNiosRecordHostResultIpv6AddrsOptions | cdktf.IResolvable): any {
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


export function dataNiosRecordHostResultIpv6AddrsOptionsToHclTerraform(struct?: DataNiosRecordHostResultIpv6AddrsOptions | cdktf.IResolvable): any {
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

export class DataNiosRecordHostResultIpv6AddrsOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosRecordHostResultIpv6AddrsOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosRecordHostResultIpv6AddrsOptions | cdktf.IResolvable | undefined) {
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

  // num - computed: true, optional: true, required: false
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

  // use_option - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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

  // vendor_class - computed: true, optional: true, required: false
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

export class DataNiosRecordHostResultIpv6AddrsOptionsList extends cdktf.ComplexList {
  public internalValue? : DataNiosRecordHostResultIpv6AddrsOptions[] | cdktf.IResolvable

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
  public get(index: number): DataNiosRecordHostResultIpv6AddrsOptionsOutputReference {
    return new DataNiosRecordHostResultIpv6AddrsOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosRecordHostResultIpv6Addrs {
  /**
  * Type of the DHCP IPv6 Host Address object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#address_type DataNiosRecordHost#address_type}
  */
  readonly addressType?: string;
  /**
  * Use this method to set or retrieve the domain_name value of the DHCP IPv6 Host Address object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#domain_name DataNiosRecordHost#domain_name}
  */
  readonly domainName?: string;
  /**
  * The IPv6 addresses of DNS recursive name servers to which the DHCP client can send name resolution requests. The DHCP server includes this information in the DNS Recursive Name Server option in Advertise, Rebind, Information-Request, and Reply messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#domain_name_servers DataNiosRecordHost#domain_name_servers}
  */
  readonly domainNameServers?: string[];
  /**
  * Function call to be executed for Fixed Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#func_call DataNiosRecordHost#func_call}
  */
  readonly funcCall?: DataNiosRecordHostResultIpv6AddrsFuncCall;
  /**
  * The IPv6 Address of the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#ipv6addr DataNiosRecordHost#ipv6addr}
  */
  readonly ipv6Addr?: string;
  /**
  * The IPv6 Address prefix of the DHCP IPv6 Host Address object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#ipv6prefix DataNiosRecordHost#ipv6prefix}
  */
  readonly ipv6Prefix?: string;
  /**
  * Prefix bits of the DHCP IPv6 Host Address object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#ipv6prefix_bits DataNiosRecordHost#ipv6prefix_bits}
  */
  readonly ipv6PrefixBits?: number;
  /**
  * This field contains the logic filters to be applied on the this host address. This list corresponds to the match rules that are written to the dhcpd configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#logic_filter_rules DataNiosRecordHost#logic_filter_rules}
  */
  readonly logicFilterRules?: DataNiosRecordHostResultIpv6AddrsLogicFilterRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#ms_ad_user_data DataNiosRecordHost#ms_ad_user_data}
  */
  readonly msAdUserData?: DataNiosRecordHostResultIpv6AddrsMsAdUserData;
  /**
  * An array of DHCP option dhcpoption structs that lists the DHCP options associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#options DataNiosRecordHost#options}
  */
  readonly options?: DataNiosRecordHostResultIpv6AddrsOptions[] | cdktf.IResolvable;
  /**
  * Use this method to set or retrieve the preferred lifetime value of the DHCP IPv6 Host Address object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#preferred_lifetime DataNiosRecordHost#preferred_lifetime}
  */
  readonly preferredLifetime?: number;
  /**
  * The reference to the reserved interface to which the device belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#reserved_interface DataNiosRecordHost#reserved_interface}
  */
  readonly reservedInterface?: string;
  /**
  * Use flag for: domain_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_domain_name DataNiosRecordHost#use_domain_name}
  */
  readonly useDomainName?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: domain_name_servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_domain_name_servers DataNiosRecordHost#use_domain_name_servers}
  */
  readonly useDomainNameServers?: boolean | cdktf.IResolvable;
  /**
  * Set this to True when using this host address for EA inheritance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_for_ea_inheritance DataNiosRecordHost#use_for_ea_inheritance}
  */
  readonly useForEaInheritance?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: logic_filter_rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_logic_filter_rules DataNiosRecordHost#use_logic_filter_rules}
  */
  readonly useLogicFilterRules?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_options DataNiosRecordHost#use_options}
  */
  readonly useOptions?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: preferred_lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_preferred_lifetime DataNiosRecordHost#use_preferred_lifetime}
  */
  readonly usePreferredLifetime?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: valid_lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_valid_lifetime DataNiosRecordHost#use_valid_lifetime}
  */
  readonly useValidLifetime?: boolean | cdktf.IResolvable;
  /**
  * Use this method to set or retrieve the valid lifetime value of the DHCP IPv6 Host Address object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#valid_lifetime DataNiosRecordHost#valid_lifetime}
  */
  readonly validLifetime?: number;
}

export function dataNiosRecordHostResultIpv6AddrsToTerraform(struct?: DataNiosRecordHostResultIpv6Addrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_type: cdktf.stringToTerraform(struct!.addressType),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    domain_name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainNameServers),
    func_call: dataNiosRecordHostResultIpv6AddrsFuncCallToTerraform(struct!.funcCall),
    ipv6addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    ipv6prefix: cdktf.stringToTerraform(struct!.ipv6Prefix),
    ipv6prefix_bits: cdktf.numberToTerraform(struct!.ipv6PrefixBits),
    logic_filter_rules: cdktf.listMapper(dataNiosRecordHostResultIpv6AddrsLogicFilterRulesToTerraform, false)(struct!.logicFilterRules),
    ms_ad_user_data: dataNiosRecordHostResultIpv6AddrsMsAdUserDataToTerraform(struct!.msAdUserData),
    options: cdktf.listMapper(dataNiosRecordHostResultIpv6AddrsOptionsToTerraform, false)(struct!.options),
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


export function dataNiosRecordHostResultIpv6AddrsToHclTerraform(struct?: DataNiosRecordHostResultIpv6Addrs | cdktf.IResolvable): any {
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
      value: dataNiosRecordHostResultIpv6AddrsFuncCallToHclTerraform(struct!.funcCall),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosRecordHostResultIpv6AddrsFuncCall",
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
      value: cdktf.listMapperHcl(dataNiosRecordHostResultIpv6AddrsLogicFilterRulesToHclTerraform, false)(struct!.logicFilterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosRecordHostResultIpv6AddrsLogicFilterRulesList",
    },
    ms_ad_user_data: {
      value: dataNiosRecordHostResultIpv6AddrsMsAdUserDataToHclTerraform(struct!.msAdUserData),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosRecordHostResultIpv6AddrsMsAdUserData",
    },
    options: {
      value: cdktf.listMapperHcl(dataNiosRecordHostResultIpv6AddrsOptionsToHclTerraform, false)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosRecordHostResultIpv6AddrsOptionsList",
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

export class DataNiosRecordHostResultIpv6AddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosRecordHostResultIpv6Addrs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosRecordHostResultIpv6Addrs | cdktf.IResolvable | undefined) {
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
  private _discoveredData = new DataNiosRecordHostResultIpv6AddrsDiscoveredDataOutputReference(this, "discovered_data");
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

  // domain_name_servers - computed: true, optional: true, required: false
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

  // func_call - computed: true, optional: true, required: false
  private _funcCall = new DataNiosRecordHostResultIpv6AddrsFuncCallOutputReference(this, "func_call");
  public get funcCall() {
    return this._funcCall;
  }
  public putFuncCall(value: DataNiosRecordHostResultIpv6AddrsFuncCall) {
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

  // ipv6prefix_bits - computed: true, optional: true, required: false
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

  // logic_filter_rules - computed: true, optional: true, required: false
  private _logicFilterRules = new DataNiosRecordHostResultIpv6AddrsLogicFilterRulesList(this, "logic_filter_rules", false);
  public get logicFilterRules() {
    return this._logicFilterRules;
  }
  public putLogicFilterRules(value: DataNiosRecordHostResultIpv6AddrsLogicFilterRules[] | cdktf.IResolvable) {
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

  // ms_ad_user_data - computed: true, optional: true, required: false
  private _msAdUserData = new DataNiosRecordHostResultIpv6AddrsMsAdUserDataOutputReference(this, "ms_ad_user_data");
  public get msAdUserData() {
    return this._msAdUserData;
  }
  public putMsAdUserData(value: DataNiosRecordHostResultIpv6AddrsMsAdUserData) {
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

  // options - computed: true, optional: true, required: false
  private _options = new DataNiosRecordHostResultIpv6AddrsOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: DataNiosRecordHostResultIpv6AddrsOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // preferred_lifetime - computed: true, optional: true, required: false
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

  // use_domain_name - computed: true, optional: true, required: false
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

  // use_domain_name_servers - computed: true, optional: true, required: false
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

  // use_for_ea_inheritance - computed: true, optional: true, required: false
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

  // use_logic_filter_rules - computed: true, optional: true, required: false
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

  // use_options - computed: true, optional: true, required: false
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

  // use_preferred_lifetime - computed: true, optional: true, required: false
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

  // use_valid_lifetime - computed: true, optional: true, required: false
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

  // valid_lifetime - computed: true, optional: true, required: false
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

export class DataNiosRecordHostResultIpv6AddrsList extends cdktf.ComplexList {
  public internalValue? : DataNiosRecordHostResultIpv6Addrs[] | cdktf.IResolvable

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
  public get(index: number): DataNiosRecordHostResultIpv6AddrsOutputReference {
    return new DataNiosRecordHostResultIpv6AddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosRecordHostResultMsAdUserData {
}

export function dataNiosRecordHostResultMsAdUserDataToTerraform(struct?: DataNiosRecordHostResultMsAdUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosRecordHostResultMsAdUserDataToHclTerraform(struct?: DataNiosRecordHostResultMsAdUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosRecordHostResultMsAdUserDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosRecordHostResultMsAdUserData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosRecordHostResultMsAdUserData | undefined) {
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
export interface DataNiosRecordHostResultSnmp3Credential {
  /**
  * Authentication password for the SNMPv3 user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#authentication_password DataNiosRecordHost#authentication_password}
  */
  readonly authenticationPassword?: string;
  /**
  * Authentication protocol for the SNMPv3 user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#authentication_protocol DataNiosRecordHost#authentication_protocol}
  */
  readonly authenticationProtocol?: string;
  /**
  * Comments for the SNMPv3 user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#comment DataNiosRecordHost#comment}
  */
  readonly comment?: string;
  /**
  * Group for the SNMPv3 credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#credential_group DataNiosRecordHost#credential_group}
  */
  readonly credentialGroup?: string;
  /**
  * Privacy password for the SNMPv3 user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#privacy_password DataNiosRecordHost#privacy_password}
  */
  readonly privacyPassword?: string;
  /**
  * Privacy protocol for the SNMPv3 user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#privacy_protocol DataNiosRecordHost#privacy_protocol}
  */
  readonly privacyProtocol?: string;
  /**
  * The SNMPv3 user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#user DataNiosRecordHost#user}
  */
  readonly user?: string;
}

export function dataNiosRecordHostResultSnmp3CredentialToTerraform(struct?: DataNiosRecordHostResultSnmp3Credential | cdktf.IResolvable): any {
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


export function dataNiosRecordHostResultSnmp3CredentialToHclTerraform(struct?: DataNiosRecordHostResultSnmp3Credential | cdktf.IResolvable): any {
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

export class DataNiosRecordHostResultSnmp3CredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosRecordHostResultSnmp3Credential | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosRecordHostResultSnmp3Credential | cdktf.IResolvable | undefined) {
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

  // authentication_password - computed: true, optional: true, required: false
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

  // authentication_protocol - computed: true, optional: true, required: false
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

  // privacy_password - computed: true, optional: true, required: false
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

  // privacy_protocol - computed: true, optional: true, required: false
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
export interface DataNiosRecordHostResultSnmpCredential {
  /**
  * Comments for the SNMPv1 and SNMPv2 users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#comment DataNiosRecordHost#comment}
  */
  readonly comment?: string;
  /**
  * The public community string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#community_string DataNiosRecordHost#community_string}
  */
  readonly communityString?: string;
  /**
  * Group for the SNMPv1 and SNMPv2 credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#credential_group DataNiosRecordHost#credential_group}
  */
  readonly credentialGroup?: string;
}

export function dataNiosRecordHostResultSnmpCredentialToTerraform(struct?: DataNiosRecordHostResultSnmpCredential | cdktf.IResolvable): any {
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


export function dataNiosRecordHostResultSnmpCredentialToHclTerraform(struct?: DataNiosRecordHostResultSnmpCredential | cdktf.IResolvable): any {
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

export class DataNiosRecordHostResultSnmpCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosRecordHostResultSnmpCredential | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosRecordHostResultSnmpCredential | cdktf.IResolvable | undefined) {
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

  // community_string - computed: true, optional: true, required: false
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
}
export interface DataNiosRecordHostResult {
  /**
  * This is a list of aliases for the host. The aliases must be in FQDN format. This value can be in unicode format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#aliases DataNiosRecordHost#aliases}
  */
  readonly aliases?: string[];
  /**
  * The CLI credentials for the host record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#cli_credentials DataNiosRecordHost#cli_credentials}
  */
  readonly cliCredentials?: DataNiosRecordHostResultCliCredentials[] | cdktf.IResolvable;
  /**
  * Comment for the record; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#comment DataNiosRecordHost#comment}
  */
  readonly comment?: string;
  /**
  * When configure_for_dns is false, the host does not have parent zone information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#configure_for_dns DataNiosRecordHost#configure_for_dns}
  */
  readonly configureForDns?: boolean | cdktf.IResolvable;
  /**
  * Determines if the DDNS updates for this record are allowed or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#ddns_protected DataNiosRecordHost#ddns_protected}
  */
  readonly ddnsProtected?: boolean | cdktf.IResolvable;
  /**
  * The description of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#device_description DataNiosRecordHost#device_description}
  */
  readonly deviceDescription?: string;
  /**
  * The location of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#device_location DataNiosRecordHost#device_location}
  */
  readonly deviceLocation?: string;
  /**
  * The type of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#device_type DataNiosRecordHost#device_type}
  */
  readonly deviceType?: string;
  /**
  * The vendor of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#device_vendor DataNiosRecordHost#device_vendor}
  */
  readonly deviceVendor?: string;
  /**
  * Determines if the record is disabled or not. False means that the record is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#disable DataNiosRecordHost#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Determines if the discovery for the record is disabled or not. False means that the discovery is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#disable_discovery DataNiosRecordHost#disable_discovery}
  */
  readonly disableDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Determines if the discovery for the record should be immediately enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#enable_immediate_discovery DataNiosRecordHost#enable_immediate_discovery}
  */
  readonly enableImmediateDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#extattrs DataNiosRecordHost#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * This is a list of IPv4 Addresses for the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#ipv4addrs DataNiosRecordHost#ipv4addrs}
  */
  readonly ipv4Addrs?: DataNiosRecordHostResultIpv4Addrs[] | cdktf.IResolvable;
  /**
  * This is a list of IPv6 Addresses for the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#ipv6addrs DataNiosRecordHost#ipv6addrs}
  */
  readonly ipv6Addrs?: DataNiosRecordHostResultIpv6Addrs[] | cdktf.IResolvable;
  /**
  * The host name in FQDN format This value can be in unicode format. Regular expression search is not supported for unicode values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#name DataNiosRecordHost#name}
  */
  readonly name: string;
  /**
  * The name of the network view in which the host record resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#network_view DataNiosRecordHost#network_view}
  */
  readonly networkView?: string;
  /**
  * Restarts the member service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#restart_if_needed DataNiosRecordHost#restart_if_needed}
  */
  readonly restartIfNeeded?: boolean | cdktf.IResolvable;
  /**
  * The value of this field specifies the order in which resource record sets are returned. The possible values are "cyclic", "random" and "fixed".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#rrset_order DataNiosRecordHost#rrset_order}
  */
  readonly rrsetOrder?: string;
  /**
  * The SNMPv3 credential for this host record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#snmp3_credential DataNiosRecordHost#snmp3_credential}
  */
  readonly snmp3Credential?: DataNiosRecordHostResultSnmp3Credential;
  /**
  * The SNMP credential for this host record. If set to true, the SNMP credential will override member-level settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#snmp_credential DataNiosRecordHost#snmp_credential}
  */
  readonly snmpCredential?: DataNiosRecordHostResultSnmpCredential;
  /**
  * The Time To Live (TTL) value for record. A 32-bit unsigned integer that represents the duration, in seconds, for which the record is valid (cached). Zero indicates that the record should not be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#ttl DataNiosRecordHost#ttl}
  */
  readonly ttl?: number;
  /**
  * If set to true, the CLI credential will override member-level settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_cli_credentials DataNiosRecordHost#use_cli_credentials}
  */
  readonly useCliCredentials?: boolean | cdktf.IResolvable;
  /**
  * When use_dns_ea_inheritance is True, the EA is inherited from associated zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_dns_ea_inheritance DataNiosRecordHost#use_dns_ea_inheritance}
  */
  readonly useDnsEaInheritance?: boolean | cdktf.IResolvable;
  /**
  * Determines if the SNMPv3 credential should be used for the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_snmp3_credential DataNiosRecordHost#use_snmp3_credential}
  */
  readonly useSnmp3Credential?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the SNMP credential will override member-level settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_snmp_credential DataNiosRecordHost#use_snmp_credential}
  */
  readonly useSnmpCredential?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ttl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#use_ttl DataNiosRecordHost#use_ttl}
  */
  readonly useTtl?: boolean | cdktf.IResolvable;
  /**
  * The name of the DNS view in which the record resides. Example: "external".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#view DataNiosRecordHost#view}
  */
  readonly view?: string;
}

export function dataNiosRecordHostResultToTerraform(struct?: DataNiosRecordHostResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aliases),
    cli_credentials: cdktf.listMapper(dataNiosRecordHostResultCliCredentialsToTerraform, false)(struct!.cliCredentials),
    comment: cdktf.stringToTerraform(struct!.comment),
    configure_for_dns: cdktf.booleanToTerraform(struct!.configureForDns),
    ddns_protected: cdktf.booleanToTerraform(struct!.ddnsProtected),
    device_description: cdktf.stringToTerraform(struct!.deviceDescription),
    device_location: cdktf.stringToTerraform(struct!.deviceLocation),
    device_type: cdktf.stringToTerraform(struct!.deviceType),
    device_vendor: cdktf.stringToTerraform(struct!.deviceVendor),
    disable: cdktf.booleanToTerraform(struct!.disable),
    disable_discovery: cdktf.booleanToTerraform(struct!.disableDiscovery),
    enable_immediate_discovery: cdktf.booleanToTerraform(struct!.enableImmediateDiscovery),
    extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extattrs),
    ipv4addrs: cdktf.listMapper(dataNiosRecordHostResultIpv4AddrsToTerraform, false)(struct!.ipv4Addrs),
    ipv6addrs: cdktf.listMapper(dataNiosRecordHostResultIpv6AddrsToTerraform, false)(struct!.ipv6Addrs),
    name: cdktf.stringToTerraform(struct!.name),
    network_view: cdktf.stringToTerraform(struct!.networkView),
    restart_if_needed: cdktf.booleanToTerraform(struct!.restartIfNeeded),
    rrset_order: cdktf.stringToTerraform(struct!.rrsetOrder),
    snmp3_credential: dataNiosRecordHostResultSnmp3CredentialToTerraform(struct!.snmp3Credential),
    snmp_credential: dataNiosRecordHostResultSnmpCredentialToTerraform(struct!.snmpCredential),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    use_cli_credentials: cdktf.booleanToTerraform(struct!.useCliCredentials),
    use_dns_ea_inheritance: cdktf.booleanToTerraform(struct!.useDnsEaInheritance),
    use_snmp3_credential: cdktf.booleanToTerraform(struct!.useSnmp3Credential),
    use_snmp_credential: cdktf.booleanToTerraform(struct!.useSnmpCredential),
    use_ttl: cdktf.booleanToTerraform(struct!.useTtl),
    view: cdktf.stringToTerraform(struct!.view),
  }
}


export function dataNiosRecordHostResultToHclTerraform(struct?: DataNiosRecordHostResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aliases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aliases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cli_credentials: {
      value: cdktf.listMapperHcl(dataNiosRecordHostResultCliCredentialsToHclTerraform, false)(struct!.cliCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosRecordHostResultCliCredentialsList",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configure_for_dns: {
      value: cdktf.booleanToHclTerraform(struct!.configureForDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_protected: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsProtected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_description: {
      value: cdktf.stringToHclTerraform(struct!.deviceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_location: {
      value: cdktf.stringToHclTerraform(struct!.deviceLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_type: {
      value: cdktf.stringToHclTerraform(struct!.deviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_vendor: {
      value: cdktf.stringToHclTerraform(struct!.deviceVendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.disableDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_immediate_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.enableImmediateDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extattrs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extattrs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ipv4addrs: {
      value: cdktf.listMapperHcl(dataNiosRecordHostResultIpv4AddrsToHclTerraform, false)(struct!.ipv4Addrs),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosRecordHostResultIpv4AddrsList",
    },
    ipv6addrs: {
      value: cdktf.listMapperHcl(dataNiosRecordHostResultIpv6AddrsToHclTerraform, false)(struct!.ipv6Addrs),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosRecordHostResultIpv6AddrsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_view: {
      value: cdktf.stringToHclTerraform(struct!.networkView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restart_if_needed: {
      value: cdktf.booleanToHclTerraform(struct!.restartIfNeeded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rrset_order: {
      value: cdktf.stringToHclTerraform(struct!.rrsetOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp3_credential: {
      value: dataNiosRecordHostResultSnmp3CredentialToHclTerraform(struct!.snmp3Credential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosRecordHostResultSnmp3Credential",
    },
    snmp_credential: {
      value: dataNiosRecordHostResultSnmpCredentialToHclTerraform(struct!.snmpCredential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosRecordHostResultSnmpCredential",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_cli_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.useCliCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_dns_ea_inheritance: {
      value: cdktf.booleanToHclTerraform(struct!.useDnsEaInheritance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_snmp3_credential: {
      value: cdktf.booleanToHclTerraform(struct!.useSnmp3Credential),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_snmp_credential: {
      value: cdktf.booleanToHclTerraform(struct!.useSnmpCredential),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ttl: {
      value: cdktf.booleanToHclTerraform(struct!.useTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    view: {
      value: cdktf.stringToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosRecordHostResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosRecordHostResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliases = this._aliases;
    }
    if (this._cliCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliCredentials = this._cliCredentials?.internalValue;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._configureForDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureForDns = this._configureForDns;
    }
    if (this._ddnsProtected !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsProtected = this._ddnsProtected;
    }
    if (this._deviceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDescription = this._deviceDescription;
    }
    if (this._deviceLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceLocation = this._deviceLocation;
    }
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._deviceVendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceVendor = this._deviceVendor;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._disableDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDiscovery = this._disableDiscovery;
    }
    if (this._enableImmediateDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableImmediateDiscovery = this._enableImmediateDiscovery;
    }
    if (this._extattrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extattrs = this._extattrs;
    }
    if (this._ipv4Addrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addrs = this._ipv4Addrs?.internalValue;
    }
    if (this._ipv6Addrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addrs = this._ipv6Addrs?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkView !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkView = this._networkView;
    }
    if (this._restartIfNeeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartIfNeeded = this._restartIfNeeded;
    }
    if (this._rrsetOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrsetOrder = this._rrsetOrder;
    }
    if (this._snmp3Credential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmp3Credential = this._snmp3Credential?.internalValue;
    }
    if (this._snmpCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpCredential = this._snmpCredential?.internalValue;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._useCliCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCliCredentials = this._useCliCredentials;
    }
    if (this._useDnsEaInheritance !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDnsEaInheritance = this._useDnsEaInheritance;
    }
    if (this._useSnmp3Credential !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSnmp3Credential = this._useSnmp3Credential;
    }
    if (this._useSnmpCredential !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSnmpCredential = this._useSnmpCredential;
    }
    if (this._useTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTtl = this._useTtl;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosRecordHostResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aliases = undefined;
      this._cliCredentials.internalValue = undefined;
      this._comment = undefined;
      this._configureForDns = undefined;
      this._ddnsProtected = undefined;
      this._deviceDescription = undefined;
      this._deviceLocation = undefined;
      this._deviceType = undefined;
      this._deviceVendor = undefined;
      this._disable = undefined;
      this._disableDiscovery = undefined;
      this._enableImmediateDiscovery = undefined;
      this._extattrs = undefined;
      this._ipv4Addrs.internalValue = undefined;
      this._ipv6Addrs.internalValue = undefined;
      this._name = undefined;
      this._networkView = undefined;
      this._restartIfNeeded = undefined;
      this._rrsetOrder = undefined;
      this._snmp3Credential.internalValue = undefined;
      this._snmpCredential.internalValue = undefined;
      this._ttl = undefined;
      this._useCliCredentials = undefined;
      this._useDnsEaInheritance = undefined;
      this._useSnmp3Credential = undefined;
      this._useSnmpCredential = undefined;
      this._useTtl = undefined;
      this._view = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aliases = value.aliases;
      this._cliCredentials.internalValue = value.cliCredentials;
      this._comment = value.comment;
      this._configureForDns = value.configureForDns;
      this._ddnsProtected = value.ddnsProtected;
      this._deviceDescription = value.deviceDescription;
      this._deviceLocation = value.deviceLocation;
      this._deviceType = value.deviceType;
      this._deviceVendor = value.deviceVendor;
      this._disable = value.disable;
      this._disableDiscovery = value.disableDiscovery;
      this._enableImmediateDiscovery = value.enableImmediateDiscovery;
      this._extattrs = value.extattrs;
      this._ipv4Addrs.internalValue = value.ipv4Addrs;
      this._ipv6Addrs.internalValue = value.ipv6Addrs;
      this._name = value.name;
      this._networkView = value.networkView;
      this._restartIfNeeded = value.restartIfNeeded;
      this._rrsetOrder = value.rrsetOrder;
      this._snmp3Credential.internalValue = value.snmp3Credential;
      this._snmpCredential.internalValue = value.snmpCredential;
      this._ttl = value.ttl;
      this._useCliCredentials = value.useCliCredentials;
      this._useDnsEaInheritance = value.useDnsEaInheritance;
      this._useSnmp3Credential = value.useSnmp3Credential;
      this._useSnmpCredential = value.useSnmpCredential;
      this._useTtl = value.useTtl;
      this._view = value.view;
    }
  }

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
  private _cliCredentials = new DataNiosRecordHostResultCliCredentialsList(this, "cli_credentials", false);
  public get cliCredentials() {
    return this._cliCredentials;
  }
  public putCliCredentials(value: DataNiosRecordHostResultCliCredentials[] | cdktf.IResolvable) {
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
  private _cloudInfo = new DataNiosRecordHostResultCloudInfoOutputReference(this, "cloud_info");
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

  // enable_immediate_discovery - computed: true, optional: true, required: false
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

  // ipv4addrs - computed: true, optional: true, required: false
  private _ipv4Addrs = new DataNiosRecordHostResultIpv4AddrsList(this, "ipv4addrs", false);
  public get ipv4Addrs() {
    return this._ipv4Addrs;
  }
  public putIpv4Addrs(value: DataNiosRecordHostResultIpv4Addrs[] | cdktf.IResolvable) {
    this._ipv4Addrs.internalValue = value;
  }
  public resetIpv4Addrs() {
    this._ipv4Addrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrsInput() {
    return this._ipv4Addrs.internalValue;
  }

  // ipv6addrs - computed: true, optional: true, required: false
  private _ipv6Addrs = new DataNiosRecordHostResultIpv6AddrsList(this, "ipv6addrs", false);
  public get ipv6Addrs() {
    return this._ipv6Addrs;
  }
  public putIpv6Addrs(value: DataNiosRecordHostResultIpv6Addrs[] | cdktf.IResolvable) {
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
  private _msAdUserData = new DataNiosRecordHostResultMsAdUserDataOutputReference(this, "ms_ad_user_data");
  public get msAdUserData() {
    return this._msAdUserData;
  }

  // name - computed: true, optional: false, required: true
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

  // restart_if_needed - computed: true, optional: true, required: false
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

  // snmp3_credential - computed: true, optional: true, required: false
  private _snmp3Credential = new DataNiosRecordHostResultSnmp3CredentialOutputReference(this, "snmp3_credential");
  public get snmp3Credential() {
    return this._snmp3Credential;
  }
  public putSnmp3Credential(value: DataNiosRecordHostResultSnmp3Credential) {
    this._snmp3Credential.internalValue = value;
  }
  public resetSnmp3Credential() {
    this._snmp3Credential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmp3CredentialInput() {
    return this._snmp3Credential.internalValue;
  }

  // snmp_credential - computed: true, optional: true, required: false
  private _snmpCredential = new DataNiosRecordHostResultSnmpCredentialOutputReference(this, "snmp_credential");
  public get snmpCredential() {
    return this._snmpCredential;
  }
  public putSnmpCredential(value: DataNiosRecordHostResultSnmpCredential) {
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
}

export class DataNiosRecordHostResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosRecordHostResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosRecordHostResultOutputReference {
    return new DataNiosRecordHostResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host nios_record_host}
*/
export class DataNiosRecordHost extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_record_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosRecordHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosRecordHost to import
  * @param importFromId The id of the existing DataNiosRecordHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosRecordHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_record_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/record_host nios_record_host} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosRecordHostConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosRecordHostConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_record_host',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extattrfilters = config.extattrfilters;
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extattrfilters - computed: false, optional: true, required: false
  private _extattrfilters?: { [key: string]: string }; 
  public get extattrfilters() {
    return this.getStringMapAttribute('extattrfilters');
  }
  public set extattrfilters(value: { [key: string]: string }) {
    this._extattrfilters = value;
  }
  public resetExtattrfilters() {
    this._extattrfilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrfiltersInput() {
    return this._extattrfilters;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // paging - computed: false, optional: true, required: false
  private _paging?: number; 
  public get paging() {
    return this.getNumberAttribute('paging');
  }
  public set paging(value: number) {
    this._paging = value;
  }
  public resetPaging() {
    this._paging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingInput() {
    return this._paging;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataNiosRecordHostResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extattrfilters: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrfilters),
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extattrfilters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrfilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paging: {
        value: cdktf.numberToHclTerraform(this._paging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
