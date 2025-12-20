// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmManagementInterfaceListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface_list#device DataScmManagementInterfaceList#device}
  */
  readonly device?: string;
  /**
  * The folder of the item. Default: Shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface_list#folder DataScmManagementInterfaceList#folder}
  */
  readonly folder?: string;
  /**
  * The max number of items to return. Default: 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface_list#limit DataScmManagementInterfaceList#limit}
  */
  readonly limit?: number;
  /**
  * The name of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface_list#name DataScmManagementInterfaceList#name}
  */
  readonly name?: string;
  /**
  * The offset of the first item to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface_list#offset DataScmManagementInterfaceList#offset}
  */
  readonly offset?: number;
  /**
  * The snippet of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface_list#snippet DataScmManagementInterfaceList#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmManagementInterfaceListDataManagementInterfaceMgmtTypeDhcpClient {
}

export function dataScmManagementInterfaceListDataManagementInterfaceMgmtTypeDhcpClientToTerraform(struct?: DataScmManagementInterfaceListDataManagementInterfaceMgmtTypeDhcpClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmManagementInterfaceListDataManagementInterfaceMgmtTypeDhcpClientToHclTerraform(struct?: DataScmManagementInterfaceListDataManagementInterfaceMgmtTypeDhcpClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmManagementInterfaceListDataManagementInterfaceMgmtTypeDhcpClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmManagementInterfaceListDataManagementInterfaceMgmtTypeDhcpClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmManagementInterfaceListDataManagementInterfaceMgmtTypeDhcpClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accept_dhcp_domain - computed: true, optional: false, required: false
  public get acceptDhcpDomain() {
    return this.getBooleanAttribute('accept_dhcp_domain');
  }

  // accept_dhcp_hostname - computed: true, optional: false, required: false
  public get acceptDhcpHostname() {
    return this.getBooleanAttribute('accept_dhcp_hostname');
  }

  // send_client_id - computed: true, optional: false, required: false
  public get sendClientId() {
    return this.getBooleanAttribute('send_client_id');
  }

  // send_hostname - computed: true, optional: false, required: false
  public get sendHostname() {
    return this.getBooleanAttribute('send_hostname');
  }
}
export interface DataScmManagementInterfaceListDataManagementInterfaceMgmtTypeStatic {
}

export function dataScmManagementInterfaceListDataManagementInterfaceMgmtTypeStaticToTerraform(struct?: DataScmManagementInterfaceListDataManagementInterfaceMgmtTypeStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmManagementInterfaceListDataManagementInterfaceMgmtTypeStaticToHclTerraform(struct?: DataScmManagementInterfaceListDataManagementInterfaceMgmtTypeStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmManagementInterfaceListDataManagementInterfaceMgmtTypeStaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmManagementInterfaceListDataManagementInterfaceMgmtTypeStatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmManagementInterfaceListDataManagementInterfaceMgmtTypeStatic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_gateway - computed: true, optional: false, required: false
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
}
export interface DataScmManagementInterfaceListDataManagementInterfaceMgmtType {
}

export function dataScmManagementInterfaceListDataManagementInterfaceMgmtTypeToTerraform(struct?: DataScmManagementInterfaceListDataManagementInterfaceMgmtType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmManagementInterfaceListDataManagementInterfaceMgmtTypeToHclTerraform(struct?: DataScmManagementInterfaceListDataManagementInterfaceMgmtType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmManagementInterfaceListDataManagementInterfaceMgmtTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmManagementInterfaceListDataManagementInterfaceMgmtType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmManagementInterfaceListDataManagementInterfaceMgmtType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dhcp_client - computed: true, optional: false, required: false
  private _dhcpClient = new DataScmManagementInterfaceListDataManagementInterfaceMgmtTypeDhcpClientOutputReference(this, "dhcp_client");
  public get dhcpClient() {
    return this._dhcpClient;
  }

  // static - computed: true, optional: false, required: false
  private _static = new DataScmManagementInterfaceListDataManagementInterfaceMgmtTypeStaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
}
export interface DataScmManagementInterfaceListDataManagementInterfacePermittedIp {
}

export function dataScmManagementInterfaceListDataManagementInterfacePermittedIpToTerraform(struct?: DataScmManagementInterfaceListDataManagementInterfacePermittedIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmManagementInterfaceListDataManagementInterfacePermittedIpToHclTerraform(struct?: DataScmManagementInterfaceListDataManagementInterfacePermittedIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmManagementInterfaceListDataManagementInterfacePermittedIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmManagementInterfaceListDataManagementInterfacePermittedIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmManagementInterfaceListDataManagementInterfacePermittedIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmManagementInterfaceListDataManagementInterfacePermittedIpList extends cdktf.ComplexList {

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
  public get(index: number): DataScmManagementInterfaceListDataManagementInterfacePermittedIpOutputReference {
    return new DataScmManagementInterfaceListDataManagementInterfacePermittedIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmManagementInterfaceListDataManagementInterfaceService {
}

export function dataScmManagementInterfaceListDataManagementInterfaceServiceToTerraform(struct?: DataScmManagementInterfaceListDataManagementInterfaceService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmManagementInterfaceListDataManagementInterfaceServiceToHclTerraform(struct?: DataScmManagementInterfaceListDataManagementInterfaceService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmManagementInterfaceListDataManagementInterfaceServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmManagementInterfaceListDataManagementInterfaceService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmManagementInterfaceListDataManagementInterfaceService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_http - computed: true, optional: false, required: false
  public get disableHttp() {
    return this.getBooleanAttribute('disable_http');
  }

  // disable_http_ocsp - computed: true, optional: false, required: false
  public get disableHttpOcsp() {
    return this.getBooleanAttribute('disable_http_ocsp');
  }

  // disable_https - computed: true, optional: false, required: false
  public get disableHttps() {
    return this.getBooleanAttribute('disable_https');
  }

  // disable_icmp - computed: true, optional: false, required: false
  public get disableIcmp() {
    return this.getBooleanAttribute('disable_icmp');
  }

  // disable_snmp - computed: true, optional: false, required: false
  public get disableSnmp() {
    return this.getBooleanAttribute('disable_snmp');
  }

  // disable_ssh - computed: true, optional: false, required: false
  public get disableSsh() {
    return this.getBooleanAttribute('disable_ssh');
  }

  // disable_telnet - computed: true, optional: false, required: false
  public get disableTelnet() {
    return this.getBooleanAttribute('disable_telnet');
  }

  // disable_userid_service - computed: true, optional: false, required: false
  public get disableUseridService() {
    return this.getBooleanAttribute('disable_userid_service');
  }

  // disable_userid_syslog_listener_ssl - computed: true, optional: false, required: false
  public get disableUseridSyslogListenerSsl() {
    return this.getBooleanAttribute('disable_userid_syslog_listener_ssl');
  }

  // disable_userid_syslog_listener_udp - computed: true, optional: false, required: false
  public get disableUseridSyslogListenerUdp() {
    return this.getBooleanAttribute('disable_userid_syslog_listener_udp');
  }
}
export interface DataScmManagementInterfaceListDataManagementInterface {
}

export function dataScmManagementInterfaceListDataManagementInterfaceToTerraform(struct?: DataScmManagementInterfaceListDataManagementInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmManagementInterfaceListDataManagementInterfaceToHclTerraform(struct?: DataScmManagementInterfaceListDataManagementInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmManagementInterfaceListDataManagementInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmManagementInterfaceListDataManagementInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmManagementInterfaceListDataManagementInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mgmt_type - computed: true, optional: false, required: false
  private _mgmtType = new DataScmManagementInterfaceListDataManagementInterfaceMgmtTypeOutputReference(this, "mgmt_type");
  public get mgmtType() {
    return this._mgmtType;
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // permitted_ip - computed: true, optional: false, required: false
  private _permittedIp = new DataScmManagementInterfaceListDataManagementInterfacePermittedIpList(this, "permitted_ip", false);
  public get permittedIp() {
    return this._permittedIp;
  }

  // service - computed: true, optional: false, required: false
  private _service = new DataScmManagementInterfaceListDataManagementInterfaceServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }

  // speed_duplex - computed: true, optional: false, required: false
  public get speedDuplex() {
    return this.getStringAttribute('speed_duplex');
  }
}
export interface DataScmManagementInterfaceListData {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface_list#device DataScmManagementInterfaceList#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface_list#folder DataScmManagementInterfaceList#folder}
  */
  readonly folder?: string;
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface_list#id DataScmManagementInterfaceList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface_list#snippet DataScmManagementInterfaceList#snippet}
  */
  readonly snippet?: string;
}

export function dataScmManagementInterfaceListDataToTerraform(struct?: DataScmManagementInterfaceListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    folder: cdktf.stringToTerraform(struct!.folder),
    id: cdktf.stringToTerraform(struct!.id),
    snippet: cdktf.stringToTerraform(struct!.snippet),
  }
}


export function dataScmManagementInterfaceListDataToHclTerraform(struct?: DataScmManagementInterfaceListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snippet: {
      value: cdktf.stringToHclTerraform(struct!.snippet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataScmManagementInterfaceListDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmManagementInterfaceListData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._snippet !== undefined) {
      hasAnyValues = true;
      internalValueResult.snippet = this._snippet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmManagementInterfaceListData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._folder = undefined;
      this._id = undefined;
      this._snippet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._folder = value.folder;
      this._id = value.id;
      this._snippet = value.snippet;
    }
  }

  // device - computed: true, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: true, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // management_interface - computed: true, optional: false, required: false
  private _managementInterface = new DataScmManagementInterfaceListDataManagementInterfaceOutputReference(this, "management_interface");
  public get managementInterface() {
    return this._managementInterface;
  }

  // snippet - computed: true, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }
}

export class DataScmManagementInterfaceListDataList extends cdktf.ComplexList {
  public internalValue? : DataScmManagementInterfaceListData[] | cdktf.IResolvable

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
  public get(index: number): DataScmManagementInterfaceListDataOutputReference {
    return new DataScmManagementInterfaceListDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface_list scm_management_interface_list}
*/
export class DataScmManagementInterfaceList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_management_interface_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmManagementInterfaceList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmManagementInterfaceList to import
  * @param importFromId The id of the existing DataScmManagementInterfaceList that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmManagementInterfaceList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_management_interface_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface_list scm_management_interface_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmManagementInterfaceListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataScmManagementInterfaceListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_management_interface_list',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._limit = config.limit;
    this._name = config.name;
    this._offset = config.offset;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataScmManagementInterfaceListDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      offset: cdktf.numberToTerraform(this._offset),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
