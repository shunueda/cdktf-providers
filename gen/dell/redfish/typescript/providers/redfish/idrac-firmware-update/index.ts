// https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdracFirmwareUpdateConfig extends cdktf.TerraformMetaArguments {
  /**
  * If ApplyUpdate is set to true, the updatable packages from Catalog XML are staged. If it is set to False, no updates are applied but the list of updatable packages can be seen in the UpdateList.Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#apply_update IdracFirmwareUpdate#apply_update}
  */
  readonly applyUpdate?: boolean | cdktf.IResolvable;
  /**
  * Name of the catalog file on the repository. Default is Catalog.xml.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#catalog_file_name IdracFirmwareUpdate#catalog_file_name}
  */
  readonly catalogFileName?: string;
  /**
  * Specifies if certificate warning should be ignored when HTTPS is used. If ignore_cert_warning is On,warnings are ignored. Default is On.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#ignore_cert_warning IdracFirmwareUpdate#ignore_cert_warning}
  */
  readonly ignoreCertWarning?: string;
  /**
  * IP address for the remote share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#ip_address IdracFirmwareUpdate#ip_address}
  */
  readonly ipAddress: string;
  /**
  * The local directory where the share should be mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#mount_point IdracFirmwareUpdate#mount_point}
  */
  readonly mountPoint?: string;
  /**
  * The password for the proxy server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#proxy_password IdracFirmwareUpdate#proxy_password}
  */
  readonly proxyPassword?: string;
  /**
  * The Port for the proxy server.Default is set to 80.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#proxy_port IdracFirmwareUpdate#proxy_port}
  */
  readonly proxyPort?: number;
  /**
  * The IP address of the proxy server.This IP will not be validated. The download job will be created even forinvalid proxy_server.Please check the results of the job for error details.This is required when proxy_support is ParametersProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#proxy_server IdracFirmwareUpdate#proxy_server}
  */
  readonly proxyServer?: string;
  /**
  * Specifies if a proxy should be used. Default is Off. This option is only used for HTTP, HTTPS, and FTP shares.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#proxy_support IdracFirmwareUpdate#proxy_support}
  */
  readonly proxySupport?: string;
  /**
  * The proxy type of the proxy server. Default is (HTTP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#proxy_type IdracFirmwareUpdate#proxy_type}
  */
  readonly proxyType?: string;
  /**
  * The user name for the proxy server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#proxy_username IdracFirmwareUpdate#proxy_username}
  */
  readonly proxyUsername?: string;
  /**
  * This property indicates if a reboot should be performed. True indicates that the system (host) is rebooted duringthe update process. False indicates that the updates take effect after the system is rebooted the next time.Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#reboot_needed IdracFirmwareUpdate#reboot_needed}
  */
  readonly rebootNeeded?: boolean | cdktf.IResolvable;
  /**
  * Name of the CIFS share or full path to the NFS share. Optional for HTTP/HTTPS share (if supported)this may be treated as the path of the directory containing the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#share_name IdracFirmwareUpdate#share_name}
  */
  readonly shareName?: string;
  /**
  * Network share user password. This option is mandatory for CIFS Network Share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#share_password IdracFirmwareUpdate#share_password}
  */
  readonly sharePassword?: string;
  /**
  * Type of the Network Share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#share_type IdracFirmwareUpdate#share_type}
  */
  readonly shareType: string;
  /**
  * Network share user in the format 'user@domain' or 'domain\user' if user is part of a domain else 'user'.This option is mandatory for CIFS Network Share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#share_user IdracFirmwareUpdate#share_user}
  */
  readonly shareUser?: string;
  /**
  * System ID of the system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#system_id IdracFirmwareUpdate#system_id}
  */
  readonly systemId?: string;
  /**
  * redfish_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#redfish_server IdracFirmwareUpdate#redfish_server}
  */
  readonly redfishServer?: IdracFirmwareUpdateRedfishServer[] | cdktf.IResolvable;
}
export interface IdracFirmwareUpdateUpdateListStruct {
}

export function idracFirmwareUpdateUpdateListStructToTerraform(struct?: IdracFirmwareUpdateUpdateListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function idracFirmwareUpdateUpdateListStructToHclTerraform(struct?: IdracFirmwareUpdateUpdateListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdracFirmwareUpdateUpdateListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdracFirmwareUpdateUpdateListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdracFirmwareUpdateUpdateListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criticality - computed: true, optional: false, required: false
  public get criticality() {
    return this.getStringAttribute('criticality');
  }

  // current_package_version - computed: true, optional: false, required: false
  public get currentPackageVersion() {
    return this.getStringAttribute('current_package_version');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // job_message - computed: true, optional: false, required: false
  public get jobMessage() {
    return this.getStringAttribute('job_message');
  }

  // job_status - computed: true, optional: false, required: false
  public get jobStatus() {
    return this.getStringAttribute('job_status');
  }

  // package_name - computed: true, optional: false, required: false
  public get packageName() {
    return this.getStringAttribute('package_name');
  }

  // reboot_type - computed: true, optional: false, required: false
  public get rebootType() {
    return this.getStringAttribute('reboot_type');
  }

  // target_package_version - computed: true, optional: false, required: false
  public get targetPackageVersion() {
    return this.getStringAttribute('target_package_version');
  }
}

export class IdracFirmwareUpdateUpdateListStructList extends cdktf.ComplexList {

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
  public get(index: number): IdracFirmwareUpdateUpdateListStructOutputReference {
    return new IdracFirmwareUpdateUpdateListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdracFirmwareUpdateRedfishServer {
  /**
  * Server BMC IP address or hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#endpoint IdracFirmwareUpdate#endpoint}
  */
  readonly endpoint?: string;
  /**
  * User password for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#password IdracFirmwareUpdate#password}
  */
  readonly password?: string;
  /**
  * Alias name for server BMCs. The key in provider's `redfish_servers` map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#redfish_alias IdracFirmwareUpdate#redfish_alias}
  */
  readonly redfishAlias?: string;
  /**
  * This field indicates whether the SSL/TLS certificate must be verified or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#ssl_insecure IdracFirmwareUpdate#ssl_insecure}
  */
  readonly sslInsecure?: boolean | cdktf.IResolvable;
  /**
  * User name for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#user IdracFirmwareUpdate#user}
  */
  readonly user?: string;
}

export function idracFirmwareUpdateRedfishServerToTerraform(struct?: IdracFirmwareUpdateRedfishServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    password: cdktf.stringToTerraform(struct!.password),
    redfish_alias: cdktf.stringToTerraform(struct!.redfishAlias),
    ssl_insecure: cdktf.booleanToTerraform(struct!.sslInsecure),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function idracFirmwareUpdateRedfishServerToHclTerraform(struct?: IdracFirmwareUpdateRedfishServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
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
    redfish_alias: {
      value: cdktf.stringToHclTerraform(struct!.redfishAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.sslInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class IdracFirmwareUpdateRedfishServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdracFirmwareUpdateRedfishServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._redfishAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.redfishAlias = this._redfishAlias;
    }
    if (this._sslInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslInsecure = this._sslInsecure;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdracFirmwareUpdateRedfishServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._password = undefined;
      this._redfishAlias = undefined;
      this._sslInsecure = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._password = value.password;
      this._redfishAlias = value.redfishAlias;
      this._sslInsecure = value.sslInsecure;
      this._user = value.user;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // password - computed: false, optional: true, required: false
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

  // redfish_alias - computed: false, optional: true, required: false
  private _redfishAlias?: string; 
  public get redfishAlias() {
    return this.getStringAttribute('redfish_alias');
  }
  public set redfishAlias(value: string) {
    this._redfishAlias = value;
  }
  public resetRedfishAlias() {
    this._redfishAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishAliasInput() {
    return this._redfishAlias;
  }

  // ssl_insecure - computed: false, optional: true, required: false
  private _sslInsecure?: boolean | cdktf.IResolvable; 
  public get sslInsecure() {
    return this.getBooleanAttribute('ssl_insecure');
  }
  public set sslInsecure(value: boolean | cdktf.IResolvable) {
    this._sslInsecure = value;
  }
  public resetSslInsecure() {
    this._sslInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInsecureInput() {
    return this._sslInsecure;
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

export class IdracFirmwareUpdateRedfishServerList extends cdktf.ComplexList {
  public internalValue? : IdracFirmwareUpdateRedfishServer[] | cdktf.IResolvable

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
  public get(index: number): IdracFirmwareUpdateRedfishServerOutputReference {
    return new IdracFirmwareUpdateRedfishServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update redfish_idrac_firmware_update}
*/
export class IdracFirmwareUpdate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redfish_idrac_firmware_update";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdracFirmwareUpdate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdracFirmwareUpdate to import
  * @param importFromId The id of the existing IdracFirmwareUpdate that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdracFirmwareUpdate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redfish_idrac_firmware_update", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_firmware_update redfish_idrac_firmware_update} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdracFirmwareUpdateConfig
  */
  public constructor(scope: Construct, id: string, config: IdracFirmwareUpdateConfig) {
    super(scope, id, {
      terraformResourceType: 'redfish_idrac_firmware_update',
      terraformGeneratorMetadata: {
        providerName: 'redfish',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applyUpdate = config.applyUpdate;
    this._catalogFileName = config.catalogFileName;
    this._ignoreCertWarning = config.ignoreCertWarning;
    this._ipAddress = config.ipAddress;
    this._mountPoint = config.mountPoint;
    this._proxyPassword = config.proxyPassword;
    this._proxyPort = config.proxyPort;
    this._proxyServer = config.proxyServer;
    this._proxySupport = config.proxySupport;
    this._proxyType = config.proxyType;
    this._proxyUsername = config.proxyUsername;
    this._rebootNeeded = config.rebootNeeded;
    this._shareName = config.shareName;
    this._sharePassword = config.sharePassword;
    this._shareType = config.shareType;
    this._shareUser = config.shareUser;
    this._systemId = config.systemId;
    this._redfishServer.internalValue = config.redfishServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_update - computed: true, optional: true, required: false
  private _applyUpdate?: boolean | cdktf.IResolvable; 
  public get applyUpdate() {
    return this.getBooleanAttribute('apply_update');
  }
  public set applyUpdate(value: boolean | cdktf.IResolvable) {
    this._applyUpdate = value;
  }
  public resetApplyUpdate() {
    this._applyUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyUpdateInput() {
    return this._applyUpdate;
  }

  // catalog_file_name - computed: true, optional: true, required: false
  private _catalogFileName?: string; 
  public get catalogFileName() {
    return this.getStringAttribute('catalog_file_name');
  }
  public set catalogFileName(value: string) {
    this._catalogFileName = value;
  }
  public resetCatalogFileName() {
    this._catalogFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogFileNameInput() {
    return this._catalogFileName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_cert_warning - computed: true, optional: true, required: false
  private _ignoreCertWarning?: string; 
  public get ignoreCertWarning() {
    return this.getStringAttribute('ignore_cert_warning');
  }
  public set ignoreCertWarning(value: string) {
    this._ignoreCertWarning = value;
  }
  public resetIgnoreCertWarning() {
    this._ignoreCertWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCertWarningInput() {
    return this._ignoreCertWarning;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mount_point - computed: false, optional: true, required: false
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  public resetMountPoint() {
    this._mountPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }

  // proxy_password - computed: false, optional: true, required: false
  private _proxyPassword?: string; 
  public get proxyPassword() {
    return this.getStringAttribute('proxy_password');
  }
  public set proxyPassword(value: string) {
    this._proxyPassword = value;
  }
  public resetProxyPassword() {
    this._proxyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPasswordInput() {
    return this._proxyPassword;
  }

  // proxy_port - computed: true, optional: true, required: false
  private _proxyPort?: number; 
  public get proxyPort() {
    return this.getNumberAttribute('proxy_port');
  }
  public set proxyPort(value: number) {
    this._proxyPort = value;
  }
  public resetProxyPort() {
    this._proxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPortInput() {
    return this._proxyPort;
  }

  // proxy_server - computed: false, optional: true, required: false
  private _proxyServer?: string; 
  public get proxyServer() {
    return this.getStringAttribute('proxy_server');
  }
  public set proxyServer(value: string) {
    this._proxyServer = value;
  }
  public resetProxyServer() {
    this._proxyServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyServerInput() {
    return this._proxyServer;
  }

  // proxy_support - computed: true, optional: true, required: false
  private _proxySupport?: string; 
  public get proxySupport() {
    return this.getStringAttribute('proxy_support');
  }
  public set proxySupport(value: string) {
    this._proxySupport = value;
  }
  public resetProxySupport() {
    this._proxySupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxySupportInput() {
    return this._proxySupport;
  }

  // proxy_type - computed: true, optional: true, required: false
  private _proxyType?: string; 
  public get proxyType() {
    return this.getStringAttribute('proxy_type');
  }
  public set proxyType(value: string) {
    this._proxyType = value;
  }
  public resetProxyType() {
    this._proxyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypeInput() {
    return this._proxyType;
  }

  // proxy_username - computed: false, optional: true, required: false
  private _proxyUsername?: string; 
  public get proxyUsername() {
    return this.getStringAttribute('proxy_username');
  }
  public set proxyUsername(value: string) {
    this._proxyUsername = value;
  }
  public resetProxyUsername() {
    this._proxyUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUsernameInput() {
    return this._proxyUsername;
  }

  // reboot_needed - computed: true, optional: true, required: false
  private _rebootNeeded?: boolean | cdktf.IResolvable; 
  public get rebootNeeded() {
    return this.getBooleanAttribute('reboot_needed');
  }
  public set rebootNeeded(value: boolean | cdktf.IResolvable) {
    this._rebootNeeded = value;
  }
  public resetRebootNeeded() {
    this._rebootNeeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootNeededInput() {
    return this._rebootNeeded;
  }

  // share_name - computed: false, optional: true, required: false
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  public resetShareName() {
    this._shareName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
  }

  // share_password - computed: false, optional: true, required: false
  private _sharePassword?: string; 
  public get sharePassword() {
    return this.getStringAttribute('share_password');
  }
  public set sharePassword(value: string) {
    this._sharePassword = value;
  }
  public resetSharePassword() {
    this._sharePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharePasswordInput() {
    return this._sharePassword;
  }

  // share_type - computed: false, optional: false, required: true
  private _shareType?: string; 
  public get shareType() {
    return this.getStringAttribute('share_type');
  }
  public set shareType(value: string) {
    this._shareType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareTypeInput() {
    return this._shareType;
  }

  // share_user - computed: false, optional: true, required: false
  private _shareUser?: string; 
  public get shareUser() {
    return this.getStringAttribute('share_user');
  }
  public set shareUser(value: string) {
    this._shareUser = value;
  }
  public resetShareUser() {
    this._shareUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareUserInput() {
    return this._shareUser;
  }

  // system_id - computed: true, optional: true, required: false
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }

  // update_list - computed: true, optional: false, required: false
  private _updateList = new IdracFirmwareUpdateUpdateListStructList(this, "update_list", false);
  public get updateList() {
    return this._updateList;
  }

  // redfish_server - computed: false, optional: true, required: false
  private _redfishServer = new IdracFirmwareUpdateRedfishServerList(this, "redfish_server", false);
  public get redfishServer() {
    return this._redfishServer;
  }
  public putRedfishServer(value: IdracFirmwareUpdateRedfishServer[] | cdktf.IResolvable) {
    this._redfishServer.internalValue = value;
  }
  public resetRedfishServer() {
    this._redfishServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishServerInput() {
    return this._redfishServer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_update: cdktf.booleanToTerraform(this._applyUpdate),
      catalog_file_name: cdktf.stringToTerraform(this._catalogFileName),
      ignore_cert_warning: cdktf.stringToTerraform(this._ignoreCertWarning),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      mount_point: cdktf.stringToTerraform(this._mountPoint),
      proxy_password: cdktf.stringToTerraform(this._proxyPassword),
      proxy_port: cdktf.numberToTerraform(this._proxyPort),
      proxy_server: cdktf.stringToTerraform(this._proxyServer),
      proxy_support: cdktf.stringToTerraform(this._proxySupport),
      proxy_type: cdktf.stringToTerraform(this._proxyType),
      proxy_username: cdktf.stringToTerraform(this._proxyUsername),
      reboot_needed: cdktf.booleanToTerraform(this._rebootNeeded),
      share_name: cdktf.stringToTerraform(this._shareName),
      share_password: cdktf.stringToTerraform(this._sharePassword),
      share_type: cdktf.stringToTerraform(this._shareType),
      share_user: cdktf.stringToTerraform(this._shareUser),
      system_id: cdktf.stringToTerraform(this._systemId),
      redfish_server: cdktf.listMapper(idracFirmwareUpdateRedfishServerToTerraform, true)(this._redfishServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_update: {
        value: cdktf.booleanToHclTerraform(this._applyUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      catalog_file_name: {
        value: cdktf.stringToHclTerraform(this._catalogFileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_cert_warning: {
        value: cdktf.stringToHclTerraform(this._ignoreCertWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount_point: {
        value: cdktf.stringToHclTerraform(this._mountPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_password: {
        value: cdktf.stringToHclTerraform(this._proxyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_port: {
        value: cdktf.numberToHclTerraform(this._proxyPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_server: {
        value: cdktf.stringToHclTerraform(this._proxyServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_support: {
        value: cdktf.stringToHclTerraform(this._proxySupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_type: {
        value: cdktf.stringToHclTerraform(this._proxyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_username: {
        value: cdktf.stringToHclTerraform(this._proxyUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reboot_needed: {
        value: cdktf.booleanToHclTerraform(this._rebootNeeded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      share_name: {
        value: cdktf.stringToHclTerraform(this._shareName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_password: {
        value: cdktf.stringToHclTerraform(this._sharePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_type: {
        value: cdktf.stringToHclTerraform(this._shareType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_user: {
        value: cdktf.stringToHclTerraform(this._shareUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_id: {
        value: cdktf.stringToHclTerraform(this._systemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redfish_server: {
        value: cdktf.listMapperHcl(idracFirmwareUpdateRedfishServerToHclTerraform, true)(this._redfishServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdracFirmwareUpdateRedfishServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
