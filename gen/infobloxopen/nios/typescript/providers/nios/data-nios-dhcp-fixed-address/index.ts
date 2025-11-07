// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosDhcpFixedAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * The body of the request to Search Fixed Address using Microsoft Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#body DataNiosDhcpFixedAddress#body}
  */
  readonly body?: DataNiosDhcpFixedAddressBody;
  /**
  * External Attribute Filters are used to return a more specific list of results by filtering on external attributes. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#extattrfilters DataNiosDhcpFixedAddress#extattrfilters}
  */
  readonly extattrfilters?: { [key: string]: string };
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#filters DataNiosDhcpFixedAddress#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#max_results DataNiosDhcpFixedAddress#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#paging DataNiosDhcpFixedAddress#paging}
  */
  readonly paging?: number;
}
export interface DataNiosDhcpFixedAddressBodyMsServer {
  /**
  * The IPv4 address to perform the search with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#ipv4addr DataNiosDhcpFixedAddress#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Struct Field for MS Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#struct DataNiosDhcpFixedAddress#struct}
  */
  readonly struct?: string;
}

export function dataNiosDhcpFixedAddressBodyMsServerToTerraform(struct?: DataNiosDhcpFixedAddressBodyMsServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    struct: cdktf.stringToTerraform(struct!.struct),
  }
}


export function dataNiosDhcpFixedAddressBodyMsServerToHclTerraform(struct?: DataNiosDhcpFixedAddressBodyMsServer): any {
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
    struct: {
      value: cdktf.stringToHclTerraform(struct!.struct),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpFixedAddressBodyMsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpFixedAddressBodyMsServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._struct !== undefined) {
      hasAnyValues = true;
      internalValueResult.struct = this._struct;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpFixedAddressBodyMsServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4Addr = undefined;
      this._struct = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4Addr = value.ipv4Addr;
      this._struct = value.struct;
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

  // struct - computed: true, optional: true, required: false
  private _struct?: string; 
  public get struct() {
    return this.getStringAttribute('struct');
  }
  public set struct(value: string) {
    this._struct = value;
  }
  public resetStruct() {
    this._struct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structInput() {
    return this._struct;
  }
}
export interface DataNiosDhcpFixedAddressBody {
  /**
  * Microsoft server information for the fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#ms_server DataNiosDhcpFixedAddress#ms_server}
  */
  readonly msServer: DataNiosDhcpFixedAddressBodyMsServer;
}

export function dataNiosDhcpFixedAddressBodyToTerraform(struct?: DataNiosDhcpFixedAddressBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ms_server: dataNiosDhcpFixedAddressBodyMsServerToTerraform(struct!.msServer),
  }
}


export function dataNiosDhcpFixedAddressBodyToHclTerraform(struct?: DataNiosDhcpFixedAddressBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ms_server: {
      value: dataNiosDhcpFixedAddressBodyMsServerToHclTerraform(struct!.msServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpFixedAddressBodyMsServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpFixedAddressBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpFixedAddressBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._msServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msServer = this._msServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpFixedAddressBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._msServer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._msServer.internalValue = value.msServer;
    }
  }

  // ms_server - computed: true, optional: false, required: true
  private _msServer = new DataNiosDhcpFixedAddressBodyMsServerOutputReference(this, "ms_server");
  public get msServer() {
    return this._msServer;
  }
  public putMsServer(value: DataNiosDhcpFixedAddressBodyMsServer) {
    this._msServer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msServerInput() {
    return this._msServer.internalValue;
  }
}
export interface DataNiosDhcpFixedAddressResultCliCredentials {
  /**
  * The comment for the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#comment DataNiosDhcpFixedAddress#comment}
  */
  readonly comment?: string;
  /**
  * Group for the CLI credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#credential_group DataNiosDhcpFixedAddress#credential_group}
  */
  readonly credentialGroup?: string;
  /**
  * The type of the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#credential_type DataNiosDhcpFixedAddress#credential_type}
  */
  readonly credentialType: string;
  /**
  * The CLI password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#password DataNiosDhcpFixedAddress#password}
  */
  readonly password?: string;
  /**
  * The CLI user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#user DataNiosDhcpFixedAddress#user}
  */
  readonly user?: string;
}

export function dataNiosDhcpFixedAddressResultCliCredentialsToTerraform(struct?: DataNiosDhcpFixedAddressResultCliCredentials | cdktf.IResolvable): any {
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


export function dataNiosDhcpFixedAddressResultCliCredentialsToHclTerraform(struct?: DataNiosDhcpFixedAddressResultCliCredentials | cdktf.IResolvable): any {
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

export class DataNiosDhcpFixedAddressResultCliCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpFixedAddressResultCliCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpFixedAddressResultCliCredentials | cdktf.IResolvable | undefined) {
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

  // credential_type - computed: true, optional: false, required: true
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
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

export class DataNiosDhcpFixedAddressResultCliCredentialsList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpFixedAddressResultCliCredentials[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpFixedAddressResultCliCredentialsOutputReference {
    return new DataNiosDhcpFixedAddressResultCliCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpFixedAddressResultCloudInfoDelegatedMember {
}

export function dataNiosDhcpFixedAddressResultCloudInfoDelegatedMemberToTerraform(struct?: DataNiosDhcpFixedAddressResultCloudInfoDelegatedMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosDhcpFixedAddressResultCloudInfoDelegatedMemberToHclTerraform(struct?: DataNiosDhcpFixedAddressResultCloudInfoDelegatedMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosDhcpFixedAddressResultCloudInfoDelegatedMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpFixedAddressResultCloudInfoDelegatedMember | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpFixedAddressResultCloudInfoDelegatedMember | undefined) {
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
export interface DataNiosDhcpFixedAddressResultCloudInfo {
}

export function dataNiosDhcpFixedAddressResultCloudInfoToTerraform(struct?: DataNiosDhcpFixedAddressResultCloudInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosDhcpFixedAddressResultCloudInfoToHclTerraform(struct?: DataNiosDhcpFixedAddressResultCloudInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosDhcpFixedAddressResultCloudInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpFixedAddressResultCloudInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpFixedAddressResultCloudInfo | undefined) {
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
  private _delegatedMember = new DataNiosDhcpFixedAddressResultCloudInfoDelegatedMemberOutputReference(this, "delegated_member");
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
export interface DataNiosDhcpFixedAddressResultDiscoveredData {
}

export function dataNiosDhcpFixedAddressResultDiscoveredDataToTerraform(struct?: DataNiosDhcpFixedAddressResultDiscoveredData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosDhcpFixedAddressResultDiscoveredDataToHclTerraform(struct?: DataNiosDhcpFixedAddressResultDiscoveredData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosDhcpFixedAddressResultDiscoveredDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpFixedAddressResultDiscoveredData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpFixedAddressResultDiscoveredData | undefined) {
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
export interface DataNiosDhcpFixedAddressResultFuncCall {
  /**
  * The attribute to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#attribute_name DataNiosDhcpFixedAddress#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The object to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#object DataNiosDhcpFixedAddress#object}
  */
  readonly object?: string;
  /**
  * The function to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#object_function DataNiosDhcpFixedAddress#object_function}
  */
  readonly objectFunction?: string;
  /**
  * The parameters for the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#object_parameters DataNiosDhcpFixedAddress#object_parameters}
  */
  readonly objectParameters?: { [key: string]: string };
  /**
  * The parameters for the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#parameters DataNiosDhcpFixedAddress#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The result field of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#result_field DataNiosDhcpFixedAddress#result_field}
  */
  readonly resultField?: string;
}

export function dataNiosDhcpFixedAddressResultFuncCallToTerraform(struct?: DataNiosDhcpFixedAddressResultFuncCall | cdktf.IResolvable): any {
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


export function dataNiosDhcpFixedAddressResultFuncCallToHclTerraform(struct?: DataNiosDhcpFixedAddressResultFuncCall | cdktf.IResolvable): any {
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

export class DataNiosDhcpFixedAddressResultFuncCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpFixedAddressResultFuncCall | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpFixedAddressResultFuncCall | cdktf.IResolvable | undefined) {
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
export interface DataNiosDhcpFixedAddressResultLogicFilterRules {
  /**
  * The filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#filter DataNiosDhcpFixedAddress#filter}
  */
  readonly filter: string;
  /**
  * The filter type. Valid values are: * MAC * NAC * Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#type DataNiosDhcpFixedAddress#type}
  */
  readonly type: string;
}

export function dataNiosDhcpFixedAddressResultLogicFilterRulesToTerraform(struct?: DataNiosDhcpFixedAddressResultLogicFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataNiosDhcpFixedAddressResultLogicFilterRulesToHclTerraform(struct?: DataNiosDhcpFixedAddressResultLogicFilterRules | cdktf.IResolvable): any {
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

export class DataNiosDhcpFixedAddressResultLogicFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpFixedAddressResultLogicFilterRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpFixedAddressResultLogicFilterRules | cdktf.IResolvable | undefined) {
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

  // filter - computed: true, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataNiosDhcpFixedAddressResultLogicFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpFixedAddressResultLogicFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpFixedAddressResultLogicFilterRulesOutputReference {
    return new DataNiosDhcpFixedAddressResultLogicFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpFixedAddressResultMsAdUserData {
}

export function dataNiosDhcpFixedAddressResultMsAdUserDataToTerraform(struct?: DataNiosDhcpFixedAddressResultMsAdUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosDhcpFixedAddressResultMsAdUserDataToHclTerraform(struct?: DataNiosDhcpFixedAddressResultMsAdUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosDhcpFixedAddressResultMsAdUserDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpFixedAddressResultMsAdUserData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpFixedAddressResultMsAdUserData | undefined) {
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
export interface DataNiosDhcpFixedAddressResultMsOptions {
  /**
  * The name of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#name DataNiosDhcpFixedAddress#name}
  */
  readonly name?: string;
  /**
  * The code of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#num DataNiosDhcpFixedAddress#num}
  */
  readonly num?: number;
  /**
  * The name of the user class with which this DHCP option is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#user_class DataNiosDhcpFixedAddress#user_class}
  */
  readonly userClass?: string;
  /**
  * Value of the DHCP option. Required to be set for all options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#value DataNiosDhcpFixedAddress#value}
  */
  readonly value: string;
  /**
  * The name of the vendor class with which this DHCP option is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#vendor_class DataNiosDhcpFixedAddress#vendor_class}
  */
  readonly vendorClass?: string;
}

export function dataNiosDhcpFixedAddressResultMsOptionsToTerraform(struct?: DataNiosDhcpFixedAddressResultMsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    num: cdktf.numberToTerraform(struct!.num),
    user_class: cdktf.stringToTerraform(struct!.userClass),
    value: cdktf.stringToTerraform(struct!.value),
    vendor_class: cdktf.stringToTerraform(struct!.vendorClass),
  }
}


export function dataNiosDhcpFixedAddressResultMsOptionsToHclTerraform(struct?: DataNiosDhcpFixedAddressResultMsOptions | cdktf.IResolvable): any {
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
    user_class: {
      value: cdktf.stringToHclTerraform(struct!.userClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataNiosDhcpFixedAddressResultMsOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpFixedAddressResultMsOptions | cdktf.IResolvable | undefined {
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
    if (this._userClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.userClass = this._userClass;
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

  public set internalValue(value: DataNiosDhcpFixedAddressResultMsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._num = undefined;
      this._userClass = undefined;
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
      this._userClass = value.userClass;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_class - computed: true, optional: true, required: false
  private _userClass?: string; 
  public get userClass() {
    return this.getStringAttribute('user_class');
  }
  public set userClass(value: string) {
    this._userClass = value;
  }
  public resetUserClass() {
    this._userClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userClassInput() {
    return this._userClass;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
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

export class DataNiosDhcpFixedAddressResultMsOptionsList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpFixedAddressResultMsOptions[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpFixedAddressResultMsOptionsOutputReference {
    return new DataNiosDhcpFixedAddressResultMsOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpFixedAddressResultMsServer {
  /**
  * The IPv4 Address or FQDN of the Microsoft server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#ipv4addr DataNiosDhcpFixedAddress#ipv4addr}
  */
  readonly ipv4Addr: string;
}

export function dataNiosDhcpFixedAddressResultMsServerToTerraform(struct?: DataNiosDhcpFixedAddressResultMsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4addr: cdktf.stringToTerraform(struct!.ipv4Addr),
  }
}


export function dataNiosDhcpFixedAddressResultMsServerToHclTerraform(struct?: DataNiosDhcpFixedAddressResultMsServer | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpFixedAddressResultMsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpFixedAddressResultMsServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpFixedAddressResultMsServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Addr = value.ipv4Addr;
    }
  }

  // ipv4addr - computed: true, optional: false, required: true
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }
}
export interface DataNiosDhcpFixedAddressResultOptions {
  /**
  * Name of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#name DataNiosDhcpFixedAddress#name}
  */
  readonly name?: string;
  /**
  * The code of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#num DataNiosDhcpFixedAddress#num}
  */
  readonly num?: number;
  /**
  * Only applies to special options that are displayed separately from other options and have a use flag. These options are: * routers * router-templates * domain-name-servers * domain-name * broadcast-address * broadcast-address-offset * dhcp-lease-time * dhcp6.name-servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#use_option DataNiosDhcpFixedAddress#use_option}
  */
  readonly useOption?: boolean | cdktf.IResolvable;
  /**
  * Value of the DHCP option. Required to be set for all options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#value DataNiosDhcpFixedAddress#value}
  */
  readonly value?: string;
  /**
  * The name of the space this DHCP option is associated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#vendor_class DataNiosDhcpFixedAddress#vendor_class}
  */
  readonly vendorClass?: string;
}

export function dataNiosDhcpFixedAddressResultOptionsToTerraform(struct?: DataNiosDhcpFixedAddressResultOptions | cdktf.IResolvable): any {
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


export function dataNiosDhcpFixedAddressResultOptionsToHclTerraform(struct?: DataNiosDhcpFixedAddressResultOptions | cdktf.IResolvable): any {
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

export class DataNiosDhcpFixedAddressResultOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpFixedAddressResultOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpFixedAddressResultOptions | cdktf.IResolvable | undefined) {
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

export class DataNiosDhcpFixedAddressResultOptionsList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpFixedAddressResultOptions[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpFixedAddressResultOptionsOutputReference {
    return new DataNiosDhcpFixedAddressResultOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpFixedAddressResultSnmp3Credential {
  /**
  * Authentication password for the SNMPv3 user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#authentication_password DataNiosDhcpFixedAddress#authentication_password}
  */
  readonly authenticationPassword?: string;
  /**
  * Authentication protocol for the SNMPv3 user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#authentication_protocol DataNiosDhcpFixedAddress#authentication_protocol}
  */
  readonly authenticationProtocol: string;
  /**
  * Comments for the SNMPv3 user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#comment DataNiosDhcpFixedAddress#comment}
  */
  readonly comment?: string;
  /**
  * Group for the SNMPv3 credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#credential_group DataNiosDhcpFixedAddress#credential_group}
  */
  readonly credentialGroup?: string;
  /**
  * Privacy password for the SNMPv3 user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#privacy_password DataNiosDhcpFixedAddress#privacy_password}
  */
  readonly privacyPassword?: string;
  /**
  * Privacy protocol for the SNMPv3 user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#privacy_protocol DataNiosDhcpFixedAddress#privacy_protocol}
  */
  readonly privacyProtocol: string;
  /**
  * The SNMPv3 user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#user DataNiosDhcpFixedAddress#user}
  */
  readonly user: string;
}

export function dataNiosDhcpFixedAddressResultSnmp3CredentialToTerraform(struct?: DataNiosDhcpFixedAddressResultSnmp3Credential | cdktf.IResolvable): any {
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


export function dataNiosDhcpFixedAddressResultSnmp3CredentialToHclTerraform(struct?: DataNiosDhcpFixedAddressResultSnmp3Credential | cdktf.IResolvable): any {
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

export class DataNiosDhcpFixedAddressResultSnmp3CredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpFixedAddressResultSnmp3Credential | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpFixedAddressResultSnmp3Credential | cdktf.IResolvable | undefined) {
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

  // authentication_protocol - computed: true, optional: false, required: true
  private _authenticationProtocol?: string; 
  public get authenticationProtocol() {
    return this.getStringAttribute('authentication_protocol');
  }
  public set authenticationProtocol(value: string) {
    this._authenticationProtocol = value;
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

  // privacy_protocol - computed: true, optional: false, required: true
  private _privacyProtocol?: string; 
  public get privacyProtocol() {
    return this.getStringAttribute('privacy_protocol');
  }
  public set privacyProtocol(value: string) {
    this._privacyProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyProtocolInput() {
    return this._privacyProtocol;
  }

  // user - computed: true, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataNiosDhcpFixedAddressResultSnmpCredential {
  /**
  * Comments for the SNMPv1 and SNMPv2 users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#comment DataNiosDhcpFixedAddress#comment}
  */
  readonly comment?: string;
  /**
  * The public community string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#community_string DataNiosDhcpFixedAddress#community_string}
  */
  readonly communityString: string;
  /**
  * Group for the SNMPv1 and SNMPv2 credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#credential_group DataNiosDhcpFixedAddress#credential_group}
  */
  readonly credentialGroup?: string;
}

export function dataNiosDhcpFixedAddressResultSnmpCredentialToTerraform(struct?: DataNiosDhcpFixedAddressResultSnmpCredential | cdktf.IResolvable): any {
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


export function dataNiosDhcpFixedAddressResultSnmpCredentialToHclTerraform(struct?: DataNiosDhcpFixedAddressResultSnmpCredential | cdktf.IResolvable): any {
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

export class DataNiosDhcpFixedAddressResultSnmpCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpFixedAddressResultSnmpCredential | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpFixedAddressResultSnmpCredential | cdktf.IResolvable | undefined) {
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

  // community_string - computed: true, optional: false, required: true
  private _communityString?: string; 
  public get communityString() {
    return this.getStringAttribute('community_string');
  }
  public set communityString(value: string) {
    this._communityString = value;
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
export interface DataNiosDhcpFixedAddressResult {
  /**
  * The agent circuit ID for the fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#agent_circuit_id DataNiosDhcpFixedAddress#agent_circuit_id}
  */
  readonly agentCircuitId?: string;
  /**
  * The agent remote ID for the fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#agent_remote_id DataNiosDhcpFixedAddress#agent_remote_id}
  */
  readonly agentRemoteId?: string;
  /**
  * This field controls whether the credential is used for both the Telnet and SSH credentials. If set to False, the credential is used only for SSH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#allow_telnet DataNiosDhcpFixedAddress#allow_telnet}
  */
  readonly allowTelnet?: boolean | cdktf.IResolvable;
  /**
  * This field controls whether only the DHCP server is allowed to update DNS, regardless of the DHCP client requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#always_update_dns DataNiosDhcpFixedAddress#always_update_dns}
  */
  readonly alwaysUpdateDns?: boolean | cdktf.IResolvable;
  /**
  * The bootfile name for the fixed address. You can configure the DHCP server to support clients that use the boot file name option in their DHCPREQUEST messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#bootfile DataNiosDhcpFixedAddress#bootfile}
  */
  readonly bootfile?: string;
  /**
  * The bootserver address for the fixed address. You can specify the name and/or IP address of the boot server that the host needs to boot. The boot server IPv4 Address or name in FQDN format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#bootserver DataNiosDhcpFixedAddress#bootserver}
  */
  readonly bootserver?: string;
  /**
  * The CLI credentials for the fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#cli_credentials DataNiosDhcpFixedAddress#cli_credentials}
  */
  readonly cliCredentials?: DataNiosDhcpFixedAddressResultCliCredentials[] | cdktf.IResolvable;
  /**
  * This field controls whether there is a prepend for the dhcp-client-identifier of a fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#client_identifier_prepend_zero DataNiosDhcpFixedAddress#client_identifier_prepend_zero}
  */
  readonly clientIdentifierPrependZero?: boolean | cdktf.IResolvable;
  /**
  * Comment for the fixed address; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#comment DataNiosDhcpFixedAddress#comment}
  */
  readonly comment?: string;
  /**
  * The dynamic DNS domain name the appliance uses specifically for DDNS updates for this fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#ddns_domainname DataNiosDhcpFixedAddress#ddns_domainname}
  */
  readonly ddnsDomainname?: string;
  /**
  * The DDNS host name for this fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#ddns_hostname DataNiosDhcpFixedAddress#ddns_hostname}
  */
  readonly ddnsHostname?: string;
  /**
  * If set to true, BOOTP settings are disabled and BOOTP requests will be denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#deny_bootp DataNiosDhcpFixedAddress#deny_bootp}
  */
  readonly denyBootp?: boolean | cdktf.IResolvable;
  /**
  * The description of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#device_description DataNiosDhcpFixedAddress#device_description}
  */
  readonly deviceDescription?: string;
  /**
  * The location of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#device_location DataNiosDhcpFixedAddress#device_location}
  */
  readonly deviceLocation?: string;
  /**
  * The type of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#device_type DataNiosDhcpFixedAddress#device_type}
  */
  readonly deviceType?: string;
  /**
  * The vendor of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#device_vendor DataNiosDhcpFixedAddress#device_vendor}
  */
  readonly deviceVendor?: string;
  /**
  * The DHCP client ID for the fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#dhcp_client_identifier DataNiosDhcpFixedAddress#dhcp_client_identifier}
  */
  readonly dhcpClientIdentifier?: string;
  /**
  * Determines whether a fixed address is disabled or not. When this is set to False, the fixed address is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#disable DataNiosDhcpFixedAddress#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Determines if the discovery for this fixed address is disabled or not. False means that the discovery is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#disable_discovery DataNiosDhcpFixedAddress#disable_discovery}
  */
  readonly disableDiscovery?: boolean | cdktf.IResolvable;
  /**
  * The dynamic DNS updates flag of a DHCP Fixed Address object. If set to True, the DHCP server sends DDNS updates to DNS servers in the same Grid, and to external DNS servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#enable_ddns DataNiosDhcpFixedAddress#enable_ddns}
  */
  readonly enableDdns?: boolean | cdktf.IResolvable;
  /**
  * Determines if the discovery for the fixed address should be immediately enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#enable_immediate_discovery DataNiosDhcpFixedAddress#enable_immediate_discovery}
  */
  readonly enableImmediateDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Set this to True if you want the DHCP server to use a different lease time for PXE clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#enable_pxe_lease_time DataNiosDhcpFixedAddress#enable_pxe_lease_time}
  */
  readonly enablePxeLeaseTime?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#extattrs DataNiosDhcpFixedAddress#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * Specifies the function call to execute. The `next_available_ip` function is supported for Fixed Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#func_call DataNiosDhcpFixedAddress#func_call}
  */
  readonly funcCall?: DataNiosDhcpFixedAddressResultFuncCall;
  /**
  * If this field is set to False, the appliance returns all DHCP options the client is eligible to receive, rather than only the list of options the client has requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#ignore_dhcp_option_list_request DataNiosDhcpFixedAddress#ignore_dhcp_option_list_request}
  */
  readonly ignoreDhcpOptionListRequest?: boolean | cdktf.IResolvable;
  /**
  * The IPv4 address for the Fixed Address. This field is `required` unless a `func_call` is specified to invoke `next_available_ip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#ipv4addr DataNiosDhcpFixedAddress#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * This field contains the logic filters to be applied on the this fixed address. This list corresponds to the match rules that are written to the dhcpd configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#logic_filter_rules DataNiosDhcpFixedAddress#logic_filter_rules}
  */
  readonly logicFilterRules?: DataNiosDhcpFixedAddressResultLogicFilterRules[] | cdktf.IResolvable;
  /**
  * The MAC address value for this fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#mac DataNiosDhcpFixedAddress#mac}
  */
  readonly mac?: string;
  /**
  * The match_client value for this fixed address. Valid values are: "MAC_ADDRESS": The fixed IP address is leased to the matching MAC address. "CLIENT_ID": The fixed IP address is leased to the matching DHCP client identifier. "RESERVED": The fixed IP address is reserved for later use with a MAC address that only has zeros. "CIRCUIT_ID": The fixed IP address is leased to the DHCP client with a matching circuit ID. Note that the "agent_circuit_id" field must be set in this case. "REMOTE_ID": The fixed IP address is leased to the DHCP client with a matching remote ID. Note that the "agent_remote_id" field must be set in this case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#match_client DataNiosDhcpFixedAddress#match_client}
  */
  readonly matchClient?: string;
  /**
  * This field contains the Microsoft DHCP options for this fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#ms_options DataNiosDhcpFixedAddress#ms_options}
  */
  readonly msOptions?: DataNiosDhcpFixedAddressResultMsOptions[] | cdktf.IResolvable;
  /**
  * The Microsoft server associated with this fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#ms_server DataNiosDhcpFixedAddress#ms_server}
  */
  readonly msServer?: DataNiosDhcpFixedAddressResultMsServer;
  /**
  * This field contains the name of this fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#name DataNiosDhcpFixedAddress#name}
  */
  readonly name?: string;
  /**
  * The network to which this fixed address belongs, in IPv4 Address/CIDR format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#network DataNiosDhcpFixedAddress#network}
  */
  readonly network?: string;
  /**
  * The name of the network view in which this fixed address resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#network_view DataNiosDhcpFixedAddress#network_view}
  */
  readonly networkView?: string;
  /**
  * The name in FQDN and/or IPv4 Address format of the next server that the host needs to boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#nextserver DataNiosDhcpFixedAddress#nextserver}
  */
  readonly nextserver?: string;
  /**
  * An array of DHCP option dhcpoption structs that lists the DHCP options associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#options DataNiosDhcpFixedAddress#options}
  */
  readonly options?: DataNiosDhcpFixedAddressResultOptions[] | cdktf.IResolvable;
  /**
  * The PXE lease time value for a DHCP Fixed Address object. Some hosts use PXE (Preboot Execution Environment) to boot remotely from a server. To better manage your IP resources, set a different lease time for PXE boot requests. You can configure the DHCP server to allocate an IP address with a shorter lease time to hosts that send PXE boot requests, so IP addresses are not leased longer than necessary. A 32-bit unsigned integer that represents the duration, in seconds, for which the update is cached. Zero indicates that the update is not cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#pxe_lease_time DataNiosDhcpFixedAddress#pxe_lease_time}
  */
  readonly pxeLeaseTime?: number;
  /**
  * The ref to the reserved interface to which the device belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#reserved_interface DataNiosDhcpFixedAddress#reserved_interface}
  */
  readonly reservedInterface?: string;
  /**
  * Restarts the member service. The restart_if_needed flag can trigger a restart on DHCP services only when it is enabled on CP member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#restart_if_needed DataNiosDhcpFixedAddress#restart_if_needed}
  */
  readonly restartIfNeeded?: boolean | cdktf.IResolvable;
  /**
  * The SNMPv3 credential for this fixed address.For SNMP3 Credentials to be applied to this fixed address,use_snmp3_credential and use_cli_credentials must be true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#snmp3_credential DataNiosDhcpFixedAddress#snmp3_credential}
  */
  readonly snmp3Credential?: DataNiosDhcpFixedAddressResultSnmp3Credential;
  /**
  * The SNMP credential for this fixed address. If set to true, the SNMP credential will override member-level settings..For SNMP Credentials to be applied to this fixed address,use_snmp_credential must be true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#snmp_credential DataNiosDhcpFixedAddress#snmp_credential}
  */
  readonly snmpCredential?: DataNiosDhcpFixedAddressResultSnmpCredential;
  /**
  * If set on creation, the fixed address will be created according to the values specified in the named template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#template DataNiosDhcpFixedAddress#template}
  */
  readonly template?: string;
  /**
  * Use flag for: bootfile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#use_bootfile DataNiosDhcpFixedAddress#use_bootfile}
  */
  readonly useBootfile?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: bootserver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#use_bootserver DataNiosDhcpFixedAddress#use_bootserver}
  */
  readonly useBootserver?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the CLI credential will override member-level settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#use_cli_credentials DataNiosDhcpFixedAddress#use_cli_credentials}
  */
  readonly useCliCredentials?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_domainname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#use_ddns_domainname DataNiosDhcpFixedAddress#use_ddns_domainname}
  */
  readonly useDdnsDomainname?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: deny_bootp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#use_deny_bootp DataNiosDhcpFixedAddress#use_deny_bootp}
  */
  readonly useDenyBootp?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: enable_ddns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#use_enable_ddns DataNiosDhcpFixedAddress#use_enable_ddns}
  */
  readonly useEnableDdns?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ignore_dhcp_option_list_request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#use_ignore_dhcp_option_list_request DataNiosDhcpFixedAddress#use_ignore_dhcp_option_list_request}
  */
  readonly useIgnoreDhcpOptionListRequest?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: logic_filter_rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#use_logic_filter_rules DataNiosDhcpFixedAddress#use_logic_filter_rules}
  */
  readonly useLogicFilterRules?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ms_options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#use_ms_options DataNiosDhcpFixedAddress#use_ms_options}
  */
  readonly useMsOptions?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: nextserver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#use_nextserver DataNiosDhcpFixedAddress#use_nextserver}
  */
  readonly useNextserver?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#use_options DataNiosDhcpFixedAddress#use_options}
  */
  readonly useOptions?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: pxe_lease_time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#use_pxe_lease_time DataNiosDhcpFixedAddress#use_pxe_lease_time}
  */
  readonly usePxeLeaseTime?: boolean | cdktf.IResolvable;
  /**
  * Determines if the SNMPv3 credential should be used for the fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#use_snmp3_credential DataNiosDhcpFixedAddress#use_snmp3_credential}
  */
  readonly useSnmp3Credential?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the SNMP credential will override member-level settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#use_snmp_credential DataNiosDhcpFixedAddress#use_snmp_credential}
  */
  readonly useSnmpCredential?: boolean | cdktf.IResolvable;
}

export function dataNiosDhcpFixedAddressResultToTerraform(struct?: DataNiosDhcpFixedAddressResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_circuit_id: cdktf.stringToTerraform(struct!.agentCircuitId),
    agent_remote_id: cdktf.stringToTerraform(struct!.agentRemoteId),
    allow_telnet: cdktf.booleanToTerraform(struct!.allowTelnet),
    always_update_dns: cdktf.booleanToTerraform(struct!.alwaysUpdateDns),
    bootfile: cdktf.stringToTerraform(struct!.bootfile),
    bootserver: cdktf.stringToTerraform(struct!.bootserver),
    cli_credentials: cdktf.listMapper(dataNiosDhcpFixedAddressResultCliCredentialsToTerraform, false)(struct!.cliCredentials),
    client_identifier_prepend_zero: cdktf.booleanToTerraform(struct!.clientIdentifierPrependZero),
    comment: cdktf.stringToTerraform(struct!.comment),
    ddns_domainname: cdktf.stringToTerraform(struct!.ddnsDomainname),
    ddns_hostname: cdktf.stringToTerraform(struct!.ddnsHostname),
    deny_bootp: cdktf.booleanToTerraform(struct!.denyBootp),
    device_description: cdktf.stringToTerraform(struct!.deviceDescription),
    device_location: cdktf.stringToTerraform(struct!.deviceLocation),
    device_type: cdktf.stringToTerraform(struct!.deviceType),
    device_vendor: cdktf.stringToTerraform(struct!.deviceVendor),
    dhcp_client_identifier: cdktf.stringToTerraform(struct!.dhcpClientIdentifier),
    disable: cdktf.booleanToTerraform(struct!.disable),
    disable_discovery: cdktf.booleanToTerraform(struct!.disableDiscovery),
    enable_ddns: cdktf.booleanToTerraform(struct!.enableDdns),
    enable_immediate_discovery: cdktf.booleanToTerraform(struct!.enableImmediateDiscovery),
    enable_pxe_lease_time: cdktf.booleanToTerraform(struct!.enablePxeLeaseTime),
    extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extattrs),
    func_call: dataNiosDhcpFixedAddressResultFuncCallToTerraform(struct!.funcCall),
    ignore_dhcp_option_list_request: cdktf.booleanToTerraform(struct!.ignoreDhcpOptionListRequest),
    ipv4addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    logic_filter_rules: cdktf.listMapper(dataNiosDhcpFixedAddressResultLogicFilterRulesToTerraform, false)(struct!.logicFilterRules),
    mac: cdktf.stringToTerraform(struct!.mac),
    match_client: cdktf.stringToTerraform(struct!.matchClient),
    ms_options: cdktf.listMapper(dataNiosDhcpFixedAddressResultMsOptionsToTerraform, false)(struct!.msOptions),
    ms_server: dataNiosDhcpFixedAddressResultMsServerToTerraform(struct!.msServer),
    name: cdktf.stringToTerraform(struct!.name),
    network: cdktf.stringToTerraform(struct!.network),
    network_view: cdktf.stringToTerraform(struct!.networkView),
    nextserver: cdktf.stringToTerraform(struct!.nextserver),
    options: cdktf.listMapper(dataNiosDhcpFixedAddressResultOptionsToTerraform, false)(struct!.options),
    pxe_lease_time: cdktf.numberToTerraform(struct!.pxeLeaseTime),
    reserved_interface: cdktf.stringToTerraform(struct!.reservedInterface),
    restart_if_needed: cdktf.booleanToTerraform(struct!.restartIfNeeded),
    snmp3_credential: dataNiosDhcpFixedAddressResultSnmp3CredentialToTerraform(struct!.snmp3Credential),
    snmp_credential: dataNiosDhcpFixedAddressResultSnmpCredentialToTerraform(struct!.snmpCredential),
    template: cdktf.stringToTerraform(struct!.template),
    use_bootfile: cdktf.booleanToTerraform(struct!.useBootfile),
    use_bootserver: cdktf.booleanToTerraform(struct!.useBootserver),
    use_cli_credentials: cdktf.booleanToTerraform(struct!.useCliCredentials),
    use_ddns_domainname: cdktf.booleanToTerraform(struct!.useDdnsDomainname),
    use_deny_bootp: cdktf.booleanToTerraform(struct!.useDenyBootp),
    use_enable_ddns: cdktf.booleanToTerraform(struct!.useEnableDdns),
    use_ignore_dhcp_option_list_request: cdktf.booleanToTerraform(struct!.useIgnoreDhcpOptionListRequest),
    use_logic_filter_rules: cdktf.booleanToTerraform(struct!.useLogicFilterRules),
    use_ms_options: cdktf.booleanToTerraform(struct!.useMsOptions),
    use_nextserver: cdktf.booleanToTerraform(struct!.useNextserver),
    use_options: cdktf.booleanToTerraform(struct!.useOptions),
    use_pxe_lease_time: cdktf.booleanToTerraform(struct!.usePxeLeaseTime),
    use_snmp3_credential: cdktf.booleanToTerraform(struct!.useSnmp3Credential),
    use_snmp_credential: cdktf.booleanToTerraform(struct!.useSnmpCredential),
  }
}


export function dataNiosDhcpFixedAddressResultToHclTerraform(struct?: DataNiosDhcpFixedAddressResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_circuit_id: {
      value: cdktf.stringToHclTerraform(struct!.agentCircuitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_remote_id: {
      value: cdktf.stringToHclTerraform(struct!.agentRemoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_telnet: {
      value: cdktf.booleanToHclTerraform(struct!.allowTelnet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    always_update_dns: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysUpdateDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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
    cli_credentials: {
      value: cdktf.listMapperHcl(dataNiosDhcpFixedAddressResultCliCredentialsToHclTerraform, false)(struct!.cliCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpFixedAddressResultCliCredentialsList",
    },
    client_identifier_prepend_zero: {
      value: cdktf.booleanToHclTerraform(struct!.clientIdentifierPrependZero),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_domainname: {
      value: cdktf.stringToHclTerraform(struct!.ddnsDomainname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_hostname: {
      value: cdktf.stringToHclTerraform(struct!.ddnsHostname),
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
    dhcp_client_identifier: {
      value: cdktf.stringToHclTerraform(struct!.dhcpClientIdentifier),
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
    enable_ddns: {
      value: cdktf.booleanToHclTerraform(struct!.enableDdns),
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
    enable_pxe_lease_time: {
      value: cdktf.booleanToHclTerraform(struct!.enablePxeLeaseTime),
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
    func_call: {
      value: dataNiosDhcpFixedAddressResultFuncCallToHclTerraform(struct!.funcCall),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpFixedAddressResultFuncCall",
    },
    ignore_dhcp_option_list_request: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreDhcpOptionListRequest),
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
      value: cdktf.listMapperHcl(dataNiosDhcpFixedAddressResultLogicFilterRulesToHclTerraform, false)(struct!.logicFilterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpFixedAddressResultLogicFilterRulesList",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_client: {
      value: cdktf.stringToHclTerraform(struct!.matchClient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ms_options: {
      value: cdktf.listMapperHcl(dataNiosDhcpFixedAddressResultMsOptionsToHclTerraform, false)(struct!.msOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpFixedAddressResultMsOptionsList",
    },
    ms_server: {
      value: dataNiosDhcpFixedAddressResultMsServerToHclTerraform(struct!.msServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpFixedAddressResultMsServer",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
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
    nextserver: {
      value: cdktf.stringToHclTerraform(struct!.nextserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(dataNiosDhcpFixedAddressResultOptionsToHclTerraform, false)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpFixedAddressResultOptionsList",
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
    restart_if_needed: {
      value: cdktf.booleanToHclTerraform(struct!.restartIfNeeded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snmp3_credential: {
      value: dataNiosDhcpFixedAddressResultSnmp3CredentialToHclTerraform(struct!.snmp3Credential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpFixedAddressResultSnmp3Credential",
    },
    snmp_credential: {
      value: dataNiosDhcpFixedAddressResultSnmpCredentialToHclTerraform(struct!.snmpCredential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpFixedAddressResultSnmpCredential",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
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
    use_cli_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.useCliCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ddns_domainname: {
      value: cdktf.booleanToHclTerraform(struct!.useDdnsDomainname),
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
    use_enable_ddns: {
      value: cdktf.booleanToHclTerraform(struct!.useEnableDdns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ignore_dhcp_option_list_request: {
      value: cdktf.booleanToHclTerraform(struct!.useIgnoreDhcpOptionListRequest),
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
    use_ms_options: {
      value: cdktf.booleanToHclTerraform(struct!.useMsOptions),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpFixedAddressResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpFixedAddressResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentCircuitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentCircuitId = this._agentCircuitId;
    }
    if (this._agentRemoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentRemoteId = this._agentRemoteId;
    }
    if (this._allowTelnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowTelnet = this._allowTelnet;
    }
    if (this._alwaysUpdateDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysUpdateDns = this._alwaysUpdateDns;
    }
    if (this._bootfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootfile = this._bootfile;
    }
    if (this._bootserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootserver = this._bootserver;
    }
    if (this._cliCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliCredentials = this._cliCredentials?.internalValue;
    }
    if (this._clientIdentifierPrependZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdentifierPrependZero = this._clientIdentifierPrependZero;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._ddnsDomainname !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsDomainname = this._ddnsDomainname;
    }
    if (this._ddnsHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsHostname = this._ddnsHostname;
    }
    if (this._denyBootp !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyBootp = this._denyBootp;
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
    if (this._dhcpClientIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpClientIdentifier = this._dhcpClientIdentifier;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._disableDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDiscovery = this._disableDiscovery;
    }
    if (this._enableDdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDdns = this._enableDdns;
    }
    if (this._enableImmediateDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableImmediateDiscovery = this._enableImmediateDiscovery;
    }
    if (this._enablePxeLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePxeLeaseTime = this._enablePxeLeaseTime;
    }
    if (this._extattrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extattrs = this._extattrs;
    }
    if (this._funcCall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.funcCall = this._funcCall?.internalValue;
    }
    if (this._ignoreDhcpOptionListRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDhcpOptionListRequest = this._ignoreDhcpOptionListRequest;
    }
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._logicFilterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicFilterRules = this._logicFilterRules?.internalValue;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._matchClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchClient = this._matchClient;
    }
    if (this._msOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msOptions = this._msOptions?.internalValue;
    }
    if (this._msServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msServer = this._msServer?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._networkView !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkView = this._networkView;
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
    if (this._restartIfNeeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartIfNeeded = this._restartIfNeeded;
    }
    if (this._snmp3Credential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmp3Credential = this._snmp3Credential?.internalValue;
    }
    if (this._snmpCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpCredential = this._snmpCredential?.internalValue;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._useBootfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBootfile = this._useBootfile;
    }
    if (this._useBootserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBootserver = this._useBootserver;
    }
    if (this._useCliCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCliCredentials = this._useCliCredentials;
    }
    if (this._useDdnsDomainname !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDdnsDomainname = this._useDdnsDomainname;
    }
    if (this._useDenyBootp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDenyBootp = this._useDenyBootp;
    }
    if (this._useEnableDdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEnableDdns = this._useEnableDdns;
    }
    if (this._useIgnoreDhcpOptionListRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.useIgnoreDhcpOptionListRequest = this._useIgnoreDhcpOptionListRequest;
    }
    if (this._useLogicFilterRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLogicFilterRules = this._useLogicFilterRules;
    }
    if (this._useMsOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMsOptions = this._useMsOptions;
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
    if (this._useSnmp3Credential !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSnmp3Credential = this._useSnmp3Credential;
    }
    if (this._useSnmpCredential !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSnmpCredential = this._useSnmpCredential;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpFixedAddressResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentCircuitId = undefined;
      this._agentRemoteId = undefined;
      this._allowTelnet = undefined;
      this._alwaysUpdateDns = undefined;
      this._bootfile = undefined;
      this._bootserver = undefined;
      this._cliCredentials.internalValue = undefined;
      this._clientIdentifierPrependZero = undefined;
      this._comment = undefined;
      this._ddnsDomainname = undefined;
      this._ddnsHostname = undefined;
      this._denyBootp = undefined;
      this._deviceDescription = undefined;
      this._deviceLocation = undefined;
      this._deviceType = undefined;
      this._deviceVendor = undefined;
      this._dhcpClientIdentifier = undefined;
      this._disable = undefined;
      this._disableDiscovery = undefined;
      this._enableDdns = undefined;
      this._enableImmediateDiscovery = undefined;
      this._enablePxeLeaseTime = undefined;
      this._extattrs = undefined;
      this._funcCall.internalValue = undefined;
      this._ignoreDhcpOptionListRequest = undefined;
      this._ipv4Addr = undefined;
      this._logicFilterRules.internalValue = undefined;
      this._mac = undefined;
      this._matchClient = undefined;
      this._msOptions.internalValue = undefined;
      this._msServer.internalValue = undefined;
      this._name = undefined;
      this._network = undefined;
      this._networkView = undefined;
      this._nextserver = undefined;
      this._options.internalValue = undefined;
      this._pxeLeaseTime = undefined;
      this._reservedInterface = undefined;
      this._restartIfNeeded = undefined;
      this._snmp3Credential.internalValue = undefined;
      this._snmpCredential.internalValue = undefined;
      this._template = undefined;
      this._useBootfile = undefined;
      this._useBootserver = undefined;
      this._useCliCredentials = undefined;
      this._useDdnsDomainname = undefined;
      this._useDenyBootp = undefined;
      this._useEnableDdns = undefined;
      this._useIgnoreDhcpOptionListRequest = undefined;
      this._useLogicFilterRules = undefined;
      this._useMsOptions = undefined;
      this._useNextserver = undefined;
      this._useOptions = undefined;
      this._usePxeLeaseTime = undefined;
      this._useSnmp3Credential = undefined;
      this._useSnmpCredential = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentCircuitId = value.agentCircuitId;
      this._agentRemoteId = value.agentRemoteId;
      this._allowTelnet = value.allowTelnet;
      this._alwaysUpdateDns = value.alwaysUpdateDns;
      this._bootfile = value.bootfile;
      this._bootserver = value.bootserver;
      this._cliCredentials.internalValue = value.cliCredentials;
      this._clientIdentifierPrependZero = value.clientIdentifierPrependZero;
      this._comment = value.comment;
      this._ddnsDomainname = value.ddnsDomainname;
      this._ddnsHostname = value.ddnsHostname;
      this._denyBootp = value.denyBootp;
      this._deviceDescription = value.deviceDescription;
      this._deviceLocation = value.deviceLocation;
      this._deviceType = value.deviceType;
      this._deviceVendor = value.deviceVendor;
      this._dhcpClientIdentifier = value.dhcpClientIdentifier;
      this._disable = value.disable;
      this._disableDiscovery = value.disableDiscovery;
      this._enableDdns = value.enableDdns;
      this._enableImmediateDiscovery = value.enableImmediateDiscovery;
      this._enablePxeLeaseTime = value.enablePxeLeaseTime;
      this._extattrs = value.extattrs;
      this._funcCall.internalValue = value.funcCall;
      this._ignoreDhcpOptionListRequest = value.ignoreDhcpOptionListRequest;
      this._ipv4Addr = value.ipv4Addr;
      this._logicFilterRules.internalValue = value.logicFilterRules;
      this._mac = value.mac;
      this._matchClient = value.matchClient;
      this._msOptions.internalValue = value.msOptions;
      this._msServer.internalValue = value.msServer;
      this._name = value.name;
      this._network = value.network;
      this._networkView = value.networkView;
      this._nextserver = value.nextserver;
      this._options.internalValue = value.options;
      this._pxeLeaseTime = value.pxeLeaseTime;
      this._reservedInterface = value.reservedInterface;
      this._restartIfNeeded = value.restartIfNeeded;
      this._snmp3Credential.internalValue = value.snmp3Credential;
      this._snmpCredential.internalValue = value.snmpCredential;
      this._template = value.template;
      this._useBootfile = value.useBootfile;
      this._useBootserver = value.useBootserver;
      this._useCliCredentials = value.useCliCredentials;
      this._useDdnsDomainname = value.useDdnsDomainname;
      this._useDenyBootp = value.useDenyBootp;
      this._useEnableDdns = value.useEnableDdns;
      this._useIgnoreDhcpOptionListRequest = value.useIgnoreDhcpOptionListRequest;
      this._useLogicFilterRules = value.useLogicFilterRules;
      this._useMsOptions = value.useMsOptions;
      this._useNextserver = value.useNextserver;
      this._useOptions = value.useOptions;
      this._usePxeLeaseTime = value.usePxeLeaseTime;
      this._useSnmp3Credential = value.useSnmp3Credential;
      this._useSnmpCredential = value.useSnmpCredential;
    }
  }

  // agent_circuit_id - computed: true, optional: true, required: false
  private _agentCircuitId?: string; 
  public get agentCircuitId() {
    return this.getStringAttribute('agent_circuit_id');
  }
  public set agentCircuitId(value: string) {
    this._agentCircuitId = value;
  }
  public resetAgentCircuitId() {
    this._agentCircuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentCircuitIdInput() {
    return this._agentCircuitId;
  }

  // agent_remote_id - computed: true, optional: true, required: false
  private _agentRemoteId?: string; 
  public get agentRemoteId() {
    return this.getStringAttribute('agent_remote_id');
  }
  public set agentRemoteId(value: string) {
    this._agentRemoteId = value;
  }
  public resetAgentRemoteId() {
    this._agentRemoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentRemoteIdInput() {
    return this._agentRemoteId;
  }

  // allow_telnet - computed: true, optional: true, required: false
  private _allowTelnet?: boolean | cdktf.IResolvable; 
  public get allowTelnet() {
    return this.getBooleanAttribute('allow_telnet');
  }
  public set allowTelnet(value: boolean | cdktf.IResolvable) {
    this._allowTelnet = value;
  }
  public resetAllowTelnet() {
    this._allowTelnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTelnetInput() {
    return this._allowTelnet;
  }

  // always_update_dns - computed: true, optional: true, required: false
  private _alwaysUpdateDns?: boolean | cdktf.IResolvable; 
  public get alwaysUpdateDns() {
    return this.getBooleanAttribute('always_update_dns');
  }
  public set alwaysUpdateDns(value: boolean | cdktf.IResolvable) {
    this._alwaysUpdateDns = value;
  }
  public resetAlwaysUpdateDns() {
    this._alwaysUpdateDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysUpdateDnsInput() {
    return this._alwaysUpdateDns;
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

  // cli_credentials - computed: true, optional: true, required: false
  private _cliCredentials = new DataNiosDhcpFixedAddressResultCliCredentialsList(this, "cli_credentials", false);
  public get cliCredentials() {
    return this._cliCredentials;
  }
  public putCliCredentials(value: DataNiosDhcpFixedAddressResultCliCredentials[] | cdktf.IResolvable) {
    this._cliCredentials.internalValue = value;
  }
  public resetCliCredentials() {
    this._cliCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliCredentialsInput() {
    return this._cliCredentials.internalValue;
  }

  // client_identifier_prepend_zero - computed: true, optional: true, required: false
  private _clientIdentifierPrependZero?: boolean | cdktf.IResolvable; 
  public get clientIdentifierPrependZero() {
    return this.getBooleanAttribute('client_identifier_prepend_zero');
  }
  public set clientIdentifierPrependZero(value: boolean | cdktf.IResolvable) {
    this._clientIdentifierPrependZero = value;
  }
  public resetClientIdentifierPrependZero() {
    this._clientIdentifierPrependZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdentifierPrependZeroInput() {
    return this._clientIdentifierPrependZero;
  }

  // cloud_info - computed: true, optional: false, required: false
  private _cloudInfo = new DataNiosDhcpFixedAddressResultCloudInfoOutputReference(this, "cloud_info");
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

  // ddns_domainname - computed: true, optional: true, required: false
  private _ddnsDomainname?: string; 
  public get ddnsDomainname() {
    return this.getStringAttribute('ddns_domainname');
  }
  public set ddnsDomainname(value: string) {
    this._ddnsDomainname = value;
  }
  public resetDdnsDomainname() {
    this._ddnsDomainname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsDomainnameInput() {
    return this._ddnsDomainname;
  }

  // ddns_hostname - computed: true, optional: true, required: false
  private _ddnsHostname?: string; 
  public get ddnsHostname() {
    return this.getStringAttribute('ddns_hostname');
  }
  public set ddnsHostname(value: string) {
    this._ddnsHostname = value;
  }
  public resetDdnsHostname() {
    this._ddnsHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsHostnameInput() {
    return this._ddnsHostname;
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

  // dhcp_client_identifier - computed: true, optional: true, required: false
  private _dhcpClientIdentifier?: string; 
  public get dhcpClientIdentifier() {
    return this.getStringAttribute('dhcp_client_identifier');
  }
  public set dhcpClientIdentifier(value: string) {
    this._dhcpClientIdentifier = value;
  }
  public resetDhcpClientIdentifier() {
    this._dhcpClientIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientIdentifierInput() {
    return this._dhcpClientIdentifier;
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

  // discover_now_status - computed: true, optional: false, required: false
  public get discoverNowStatus() {
    return this.getStringAttribute('discover_now_status');
  }

  // discovered_data - computed: true, optional: false, required: false
  private _discoveredData = new DataNiosDhcpFixedAddressResultDiscoveredDataOutputReference(this, "discovered_data");
  public get discoveredData() {
    return this._discoveredData;
  }

  // enable_ddns - computed: true, optional: true, required: false
  private _enableDdns?: boolean | cdktf.IResolvable; 
  public get enableDdns() {
    return this.getBooleanAttribute('enable_ddns');
  }
  public set enableDdns(value: boolean | cdktf.IResolvable) {
    this._enableDdns = value;
  }
  public resetEnableDdns() {
    this._enableDdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDdnsInput() {
    return this._enableDdns;
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

  // func_call - computed: true, optional: true, required: false
  private _funcCall = new DataNiosDhcpFixedAddressResultFuncCallOutputReference(this, "func_call");
  public get funcCall() {
    return this._funcCall;
  }
  public putFuncCall(value: DataNiosDhcpFixedAddressResultFuncCall) {
    this._funcCall.internalValue = value;
  }
  public resetFuncCall() {
    this._funcCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funcCallInput() {
    return this._funcCall.internalValue;
  }

  // ignore_dhcp_option_list_request - computed: true, optional: true, required: false
  private _ignoreDhcpOptionListRequest?: boolean | cdktf.IResolvable; 
  public get ignoreDhcpOptionListRequest() {
    return this.getBooleanAttribute('ignore_dhcp_option_list_request');
  }
  public set ignoreDhcpOptionListRequest(value: boolean | cdktf.IResolvable) {
    this._ignoreDhcpOptionListRequest = value;
  }
  public resetIgnoreDhcpOptionListRequest() {
    this._ignoreDhcpOptionListRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDhcpOptionListRequestInput() {
    return this._ignoreDhcpOptionListRequest;
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

  // logic_filter_rules - computed: true, optional: true, required: false
  private _logicFilterRules = new DataNiosDhcpFixedAddressResultLogicFilterRulesList(this, "logic_filter_rules", false);
  public get logicFilterRules() {
    return this._logicFilterRules;
  }
  public putLogicFilterRules(value: DataNiosDhcpFixedAddressResultLogicFilterRules[] | cdktf.IResolvable) {
    this._logicFilterRules.internalValue = value;
  }
  public resetLogicFilterRules() {
    this._logicFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicFilterRulesInput() {
    return this._logicFilterRules.internalValue;
  }

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
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

  // ms_ad_user_data - computed: true, optional: false, required: false
  private _msAdUserData = new DataNiosDhcpFixedAddressResultMsAdUserDataOutputReference(this, "ms_ad_user_data");
  public get msAdUserData() {
    return this._msAdUserData;
  }

  // ms_options - computed: true, optional: true, required: false
  private _msOptions = new DataNiosDhcpFixedAddressResultMsOptionsList(this, "ms_options", false);
  public get msOptions() {
    return this._msOptions;
  }
  public putMsOptions(value: DataNiosDhcpFixedAddressResultMsOptions[] | cdktf.IResolvable) {
    this._msOptions.internalValue = value;
  }
  public resetMsOptions() {
    this._msOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msOptionsInput() {
    return this._msOptions.internalValue;
  }

  // ms_server - computed: true, optional: true, required: false
  private _msServer = new DataNiosDhcpFixedAddressResultMsServerOutputReference(this, "ms_server");
  public get msServer() {
    return this._msServer;
  }
  public putMsServer(value: DataNiosDhcpFixedAddressResultMsServer) {
    this._msServer.internalValue = value;
  }
  public resetMsServer() {
    this._msServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msServerInput() {
    return this._msServer.internalValue;
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

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
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
  private _options = new DataNiosDhcpFixedAddressResultOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: DataNiosDhcpFixedAddressResultOptions[] | cdktf.IResolvable) {
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

  // snmp3_credential - computed: true, optional: true, required: false
  private _snmp3Credential = new DataNiosDhcpFixedAddressResultSnmp3CredentialOutputReference(this, "snmp3_credential");
  public get snmp3Credential() {
    return this._snmp3Credential;
  }
  public putSnmp3Credential(value: DataNiosDhcpFixedAddressResultSnmp3Credential) {
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
  private _snmpCredential = new DataNiosDhcpFixedAddressResultSnmpCredentialOutputReference(this, "snmp_credential");
  public get snmpCredential() {
    return this._snmpCredential;
  }
  public putSnmpCredential(value: DataNiosDhcpFixedAddressResultSnmpCredential) {
    this._snmpCredential.internalValue = value;
  }
  public resetSnmpCredential() {
    this._snmpCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpCredentialInput() {
    return this._snmpCredential.internalValue;
  }

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
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

  // use_ddns_domainname - computed: true, optional: true, required: false
  private _useDdnsDomainname?: boolean | cdktf.IResolvable; 
  public get useDdnsDomainname() {
    return this.getBooleanAttribute('use_ddns_domainname');
  }
  public set useDdnsDomainname(value: boolean | cdktf.IResolvable) {
    this._useDdnsDomainname = value;
  }
  public resetUseDdnsDomainname() {
    this._useDdnsDomainname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsDomainnameInput() {
    return this._useDdnsDomainname;
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

  // use_enable_ddns - computed: true, optional: true, required: false
  private _useEnableDdns?: boolean | cdktf.IResolvable; 
  public get useEnableDdns() {
    return this.getBooleanAttribute('use_enable_ddns');
  }
  public set useEnableDdns(value: boolean | cdktf.IResolvable) {
    this._useEnableDdns = value;
  }
  public resetUseEnableDdns() {
    this._useEnableDdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEnableDdnsInput() {
    return this._useEnableDdns;
  }

  // use_ignore_dhcp_option_list_request - computed: true, optional: true, required: false
  private _useIgnoreDhcpOptionListRequest?: boolean | cdktf.IResolvable; 
  public get useIgnoreDhcpOptionListRequest() {
    return this.getBooleanAttribute('use_ignore_dhcp_option_list_request');
  }
  public set useIgnoreDhcpOptionListRequest(value: boolean | cdktf.IResolvable) {
    this._useIgnoreDhcpOptionListRequest = value;
  }
  public resetUseIgnoreDhcpOptionListRequest() {
    this._useIgnoreDhcpOptionListRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIgnoreDhcpOptionListRequestInput() {
    return this._useIgnoreDhcpOptionListRequest;
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

  // use_ms_options - computed: true, optional: true, required: false
  private _useMsOptions?: boolean | cdktf.IResolvable; 
  public get useMsOptions() {
    return this.getBooleanAttribute('use_ms_options');
  }
  public set useMsOptions(value: boolean | cdktf.IResolvable) {
    this._useMsOptions = value;
  }
  public resetUseMsOptions() {
    this._useMsOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMsOptionsInput() {
    return this._useMsOptions;
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
}

export class DataNiosDhcpFixedAddressResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpFixedAddressResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpFixedAddressResultOutputReference {
    return new DataNiosDhcpFixedAddressResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address nios_dhcp_fixed_address}
*/
export class DataNiosDhcpFixedAddress extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dhcp_fixed_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosDhcpFixedAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosDhcpFixedAddress to import
  * @param importFromId The id of the existing DataNiosDhcpFixedAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosDhcpFixedAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dhcp_fixed_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dhcp_fixed_address nios_dhcp_fixed_address} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosDhcpFixedAddressConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosDhcpFixedAddressConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_dhcp_fixed_address',
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
    this._body.internalValue = config.body;
    this._extattrfilters = config.extattrfilters;
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: true, optional: true, required: false
  private _body = new DataNiosDhcpFixedAddressBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: DataNiosDhcpFixedAddressBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

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
  private _result = new DataNiosDhcpFixedAddressResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: dataNiosDhcpFixedAddressBodyToTerraform(this._body.internalValue),
      extattrfilters: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrfilters),
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body: {
        value: dataNiosDhcpFixedAddressBodyToHclTerraform(this._body.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataNiosDhcpFixedAddressBody",
      },
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
