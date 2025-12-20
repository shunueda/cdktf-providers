// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmManagementInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface#device DataScmManagementInterface#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface#folder DataScmManagementInterface#folder}
  */
  readonly folder?: string;
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface#id DataScmManagementInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface#snippet DataScmManagementInterface#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmManagementInterfaceManagementInterfaceMgmtTypeDhcpClient {
}

export function dataScmManagementInterfaceManagementInterfaceMgmtTypeDhcpClientToTerraform(struct?: DataScmManagementInterfaceManagementInterfaceMgmtTypeDhcpClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmManagementInterfaceManagementInterfaceMgmtTypeDhcpClientToHclTerraform(struct?: DataScmManagementInterfaceManagementInterfaceMgmtTypeDhcpClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmManagementInterfaceManagementInterfaceMgmtTypeDhcpClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmManagementInterfaceManagementInterfaceMgmtTypeDhcpClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmManagementInterfaceManagementInterfaceMgmtTypeDhcpClient | undefined) {
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
export interface DataScmManagementInterfaceManagementInterfaceMgmtTypeStatic {
}

export function dataScmManagementInterfaceManagementInterfaceMgmtTypeStaticToTerraform(struct?: DataScmManagementInterfaceManagementInterfaceMgmtTypeStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmManagementInterfaceManagementInterfaceMgmtTypeStaticToHclTerraform(struct?: DataScmManagementInterfaceManagementInterfaceMgmtTypeStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmManagementInterfaceManagementInterfaceMgmtTypeStaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmManagementInterfaceManagementInterfaceMgmtTypeStatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmManagementInterfaceManagementInterfaceMgmtTypeStatic | undefined) {
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
export interface DataScmManagementInterfaceManagementInterfaceMgmtType {
}

export function dataScmManagementInterfaceManagementInterfaceMgmtTypeToTerraform(struct?: DataScmManagementInterfaceManagementInterfaceMgmtType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmManagementInterfaceManagementInterfaceMgmtTypeToHclTerraform(struct?: DataScmManagementInterfaceManagementInterfaceMgmtType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmManagementInterfaceManagementInterfaceMgmtTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmManagementInterfaceManagementInterfaceMgmtType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmManagementInterfaceManagementInterfaceMgmtType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dhcp_client - computed: true, optional: false, required: false
  private _dhcpClient = new DataScmManagementInterfaceManagementInterfaceMgmtTypeDhcpClientOutputReference(this, "dhcp_client");
  public get dhcpClient() {
    return this._dhcpClient;
  }

  // static - computed: true, optional: false, required: false
  private _static = new DataScmManagementInterfaceManagementInterfaceMgmtTypeStaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
}
export interface DataScmManagementInterfaceManagementInterfacePermittedIp {
}

export function dataScmManagementInterfaceManagementInterfacePermittedIpToTerraform(struct?: DataScmManagementInterfaceManagementInterfacePermittedIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmManagementInterfaceManagementInterfacePermittedIpToHclTerraform(struct?: DataScmManagementInterfaceManagementInterfacePermittedIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmManagementInterfaceManagementInterfacePermittedIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmManagementInterfaceManagementInterfacePermittedIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmManagementInterfaceManagementInterfacePermittedIp | undefined) {
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

export class DataScmManagementInterfaceManagementInterfacePermittedIpList extends cdktf.ComplexList {

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
  public get(index: number): DataScmManagementInterfaceManagementInterfacePermittedIpOutputReference {
    return new DataScmManagementInterfaceManagementInterfacePermittedIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmManagementInterfaceManagementInterfaceService {
}

export function dataScmManagementInterfaceManagementInterfaceServiceToTerraform(struct?: DataScmManagementInterfaceManagementInterfaceService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmManagementInterfaceManagementInterfaceServiceToHclTerraform(struct?: DataScmManagementInterfaceManagementInterfaceService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmManagementInterfaceManagementInterfaceServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmManagementInterfaceManagementInterfaceService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmManagementInterfaceManagementInterfaceService | undefined) {
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
export interface DataScmManagementInterfaceManagementInterface {
}

export function dataScmManagementInterfaceManagementInterfaceToTerraform(struct?: DataScmManagementInterfaceManagementInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmManagementInterfaceManagementInterfaceToHclTerraform(struct?: DataScmManagementInterfaceManagementInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmManagementInterfaceManagementInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmManagementInterfaceManagementInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmManagementInterfaceManagementInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mgmt_type - computed: true, optional: false, required: false
  private _mgmtType = new DataScmManagementInterfaceManagementInterfaceMgmtTypeOutputReference(this, "mgmt_type");
  public get mgmtType() {
    return this._mgmtType;
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // permitted_ip - computed: true, optional: false, required: false
  private _permittedIp = new DataScmManagementInterfaceManagementInterfacePermittedIpList(this, "permitted_ip", false);
  public get permittedIp() {
    return this._permittedIp;
  }

  // service - computed: true, optional: false, required: false
  private _service = new DataScmManagementInterfaceManagementInterfaceServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }

  // speed_duplex - computed: true, optional: false, required: false
  public get speedDuplex() {
    return this.getStringAttribute('speed_duplex');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface scm_management_interface}
*/
export class DataScmManagementInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_management_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmManagementInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmManagementInterface to import
  * @param importFromId The id of the existing DataScmManagementInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmManagementInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_management_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/management_interface scm_management_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmManagementInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmManagementInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_management_interface',
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
    this._id = config.id;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: false, optional: false, required: true
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
  private _managementInterface = new DataScmManagementInterfaceManagementInterfaceOutputReference(this, "management_interface");
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      id: cdktf.stringToTerraform(this._id),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
