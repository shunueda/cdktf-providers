// https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdracServerConfigurationProfileImportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Host Power State. This attribute allows you to specify the power state of the host when the
  * 				iDRAC is performing the import operation. Accepted values are: "On" or "Off". If this attribute is not specified
  * 				or is set to "On", the host is powered on before the import operation. If it is set to "Off", the host is powered
  * 				off before the import operation. Note that the host will be powered back on after the import is completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#host_power_state IdracServerConfigurationProfileImport#host_power_state}
  */
  readonly hostPowerState?: string;
  /**
  * Buffer content to perform Import.This is only required for localstore and is not applicable for CIFS/NFS style Import. If the import buffer is empty, then it will perform the import from the source path specified in share parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#import_buffer IdracServerConfigurationProfileImport#import_buffer}
  */
  readonly importBuffer?: string;
  /**
  * Share Parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#share_parameters IdracServerConfigurationProfileImport#share_parameters}
  */
  readonly shareParameters: IdracServerConfigurationProfileImportShareParameters;
  /**
  * Shutdown Type. This attribute specifies the type of shutdown that should be performed before importing the server configuration profile. Accepted values are: "Graceful" (default), "Forced", or "NoReboot". If set to "Graceful", the server will be gracefully shut down before the import. If set to "Forced", the server will be forcefully shut down before the import. If set to "NoReboot", the server will not be restarted after the import. Note that if the server is powered off before the import operation, it will not be powered back on after the import is completed. If the server is powered on before the import operation, it will be powered off during the import process if this attribute is set to "Forced" or "NoReboot", and will be powered back on after the import is completed if this attribute is set to "Graceful" or "NoReboot".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#shutdown_type IdracServerConfigurationProfileImport#shutdown_type}
  */
  readonly shutdownType?: string;
  /**
  * Time To Wait (in seconds) - specifies the time to wait for the server configuration profile
  * 				to be imported. This is useful for ensuring that the server is powered off before the import operation, and for waiting
  * 				for the import to complete before powering the server back on. The default value is 1200 seconds (or 20 minutes), but can
  * 				be set to a lower value of 300 seconds (or 5 minutes) upto a max value of 3600 seconds (or 60 minutes) if desired. Note
  * 				that this attribute only applies if the server is powered on before the import operation, or if the server is powered off
  * 				before the import operation and the shutdown type is set to "Graceful" or "NoReboot". The minimum value is 300 seconds, and
  * 				the maximum value is 3600 seconds (or 1 hour). If the server is powered off before the import operation and the shutdown
  * 				type is set to "Forced" or "NoReboot", the import operation will occur immediately and the server will not be powered
  * 				back on after the import is completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#time_to_wait IdracServerConfigurationProfileImport#time_to_wait}
  */
  readonly timeToWait?: number;
  /**
  * redfish_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#redfish_server IdracServerConfigurationProfileImport#redfish_server}
  */
  readonly redfishServer?: IdracServerConfigurationProfileImportRedfishServer[] | cdktf.IResolvable;
}
export interface IdracServerConfigurationProfileImportShareParameters {
  /**
  * File Name - The name of the server configuration profile file to import. This is the name of the file that was previously exported using the Server Configuration Profile Export operation. This file is typically in the xml/json format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#filename IdracServerConfigurationProfileImport#filename}
  */
  readonly filename: string;
  /**
  * Ignore Certificate Warning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#ignore_certificate_warning IdracServerConfigurationProfileImport#ignore_certificate_warning}
  */
  readonly ignoreCertificateWarning?: boolean | cdktf.IResolvable;
  /**
  * IPAddress - The IP address of the target export server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#ip_address IdracServerConfigurationProfileImport#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Password - The password for the share server user account. This password is required if the share type is set to "CIFS". It is required only if the share type is set to "CIFS". It is not required if the share type is set to "NFS".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#password IdracServerConfigurationProfileImport#password}
  */
  readonly password?: string;
  /**
  * Port Number - The port number used to communicate with the share server. The default value is 80. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#port_number IdracServerConfigurationProfileImport#port_number}
  */
  readonly portNumber?: number;
  /**
  * The password for the proxy server. This is required if the proxy_support parameter is set to `true`. It is used for authenticating the proxy server credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#proxy_password IdracServerConfigurationProfileImport#proxy_password}
  */
  readonly proxyPassword?: string;
  /**
  * The port number used by the proxy server. 
  * 			This parameter is optional. 
  * 			If not provided, the default port number (80) is used for the communication with the proxy server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#proxy_port IdracServerConfigurationProfileImport#proxy_port}
  */
  readonly proxyPort?: number;
  /**
  * The IP address or hostname of the proxy server.
  * 			 This is the server that acts as a bridge between the iDRAC and the Server Configuration Profile share server. 
  * 			 It is used to communicate with the Server Configuration Profile share server 
  * 			 in order to import the Server Configuration Profile. If the Server Configuration Profile share server
  * 			  is not accessible from the iDRAC directly, then a proxy server must be used in order to establish the connection. 
  * 			  This parameter is optional. 
  * 			  If it is not provided, the Server Configuration Profile import operation
  * 			   will attempt to connect to the Server Configuration Profile share server directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#proxy_server IdracServerConfigurationProfileImport#proxy_server}
  */
  readonly proxyServer?: string;
  /**
  * Proxy Support - Specifies whether or not to use a proxy server for the import operation. If `true`, import operation will use a proxy server for communication with the export server. If `false`, import operation will not use a proxy server for communication with the export server. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#proxy_support IdracServerConfigurationProfileImport#proxy_support}
  */
  readonly proxySupport?: boolean | cdktf.IResolvable;
  /**
  * The type of proxy server to be used. The default is "HTTP". If set to "SOCKS4", a SOCKS4 proxy server must be specified. If set to "HTTP", an HTTP proxy server must be specified. If not specified, the Server Configuration Profile import operation will attempt to connect to the Server Configuration Profile share server directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#proxy_type IdracServerConfigurationProfileImport#proxy_type}
  */
  readonly proxyType?: string;
  /**
  * The username to be used when connecting to the proxy server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#proxy_username IdracServerConfigurationProfileImport#proxy_username}
  */
  readonly proxyUsername?: string;
  /**
  * Share Name - The name of the directory or share on the server 
  * 			that contains the Server Configuration Profile file to import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#share_name IdracServerConfigurationProfileImport#share_name}
  */
  readonly shareName?: string;
  /**
  * Share Type - The type of share being used to import the Server Configuration Profile file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#share_type IdracServerConfigurationProfileImport#share_type}
  */
  readonly shareType: string;
  /**
  * Filter configuration by target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#target IdracServerConfigurationProfileImport#target}
  */
  readonly target?: string[];
  /**
  * Username - The username to use when authenticating with the server
  * 			 that contains the Server Configuration Profile file being imported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#username IdracServerConfigurationProfileImport#username}
  */
  readonly username?: string;
}

export function idracServerConfigurationProfileImportShareParametersToTerraform(struct?: IdracServerConfigurationProfileImportShareParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filename: cdktf.stringToTerraform(struct!.filename),
    ignore_certificate_warning: cdktf.booleanToTerraform(struct!.ignoreCertificateWarning),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    password: cdktf.stringToTerraform(struct!.password),
    port_number: cdktf.numberToTerraform(struct!.portNumber),
    proxy_password: cdktf.stringToTerraform(struct!.proxyPassword),
    proxy_port: cdktf.numberToTerraform(struct!.proxyPort),
    proxy_server: cdktf.stringToTerraform(struct!.proxyServer),
    proxy_support: cdktf.booleanToTerraform(struct!.proxySupport),
    proxy_type: cdktf.stringToTerraform(struct!.proxyType),
    proxy_username: cdktf.stringToTerraform(struct!.proxyUsername),
    share_name: cdktf.stringToTerraform(struct!.shareName),
    share_type: cdktf.stringToTerraform(struct!.shareType),
    target: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.target),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function idracServerConfigurationProfileImportShareParametersToHclTerraform(struct?: IdracServerConfigurationProfileImportShareParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_certificate_warning: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCertificateWarning),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_password: {
      value: cdktf.stringToHclTerraform(struct!.proxyPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_port: {
      value: cdktf.numberToHclTerraform(struct!.proxyPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_server: {
      value: cdktf.stringToHclTerraform(struct!.proxyServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_support: {
      value: cdktf.booleanToHclTerraform(struct!.proxySupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_type: {
      value: cdktf.stringToHclTerraform(struct!.proxyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_username: {
      value: cdktf.stringToHclTerraform(struct!.proxyUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_name: {
      value: cdktf.stringToHclTerraform(struct!.shareName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_type: {
      value: cdktf.stringToHclTerraform(struct!.shareType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.target),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdracServerConfigurationProfileImportShareParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdracServerConfigurationProfileImportShareParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._ignoreCertificateWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCertificateWarning = this._ignoreCertificateWarning;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    if (this._proxyPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyPassword = this._proxyPassword;
    }
    if (this._proxyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyPort = this._proxyPort;
    }
    if (this._proxyServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyServer = this._proxyServer;
    }
    if (this._proxySupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxySupport = this._proxySupport;
    }
    if (this._proxyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyType = this._proxyType;
    }
    if (this._proxyUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUsername = this._proxyUsername;
    }
    if (this._shareName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareName = this._shareName;
    }
    if (this._shareType !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareType = this._shareType;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdracServerConfigurationProfileImportShareParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filename = undefined;
      this._ignoreCertificateWarning = undefined;
      this._ipAddress = undefined;
      this._password = undefined;
      this._portNumber = undefined;
      this._proxyPassword = undefined;
      this._proxyPort = undefined;
      this._proxyServer = undefined;
      this._proxySupport = undefined;
      this._proxyType = undefined;
      this._proxyUsername = undefined;
      this._shareName = undefined;
      this._shareType = undefined;
      this._target = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filename = value.filename;
      this._ignoreCertificateWarning = value.ignoreCertificateWarning;
      this._ipAddress = value.ipAddress;
      this._password = value.password;
      this._portNumber = value.portNumber;
      this._proxyPassword = value.proxyPassword;
      this._proxyPort = value.proxyPort;
      this._proxyServer = value.proxyServer;
      this._proxySupport = value.proxySupport;
      this._proxyType = value.proxyType;
      this._proxyUsername = value.proxyUsername;
      this._shareName = value.shareName;
      this._shareType = value.shareType;
      this._target = value.target;
      this._username = value.username;
    }
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // ignore_certificate_warning - computed: true, optional: true, required: false
  private _ignoreCertificateWarning?: boolean | cdktf.IResolvable; 
  public get ignoreCertificateWarning() {
    return this.getBooleanAttribute('ignore_certificate_warning');
  }
  public set ignoreCertificateWarning(value: boolean | cdktf.IResolvable) {
    this._ignoreCertificateWarning = value;
  }
  public resetIgnoreCertificateWarning() {
    this._ignoreCertificateWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCertificateWarningInput() {
    return this._ignoreCertificateWarning;
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

  // port_number - computed: true, optional: true, required: false
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  public resetPortNumber() {
    this._portNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
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
  private _proxySupport?: boolean | cdktf.IResolvable; 
  public get proxySupport() {
    return this.getBooleanAttribute('proxy_support');
  }
  public set proxySupport(value: boolean | cdktf.IResolvable) {
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

  // target - computed: true, optional: true, required: false
  private _target?: string[]; 
  public get target() {
    return this.getListAttribute('target');
  }
  public set target(value: string[]) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface IdracServerConfigurationProfileImportRedfishServer {
  /**
  * Server BMC IP address or hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#endpoint IdracServerConfigurationProfileImport#endpoint}
  */
  readonly endpoint?: string;
  /**
  * User password for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#password IdracServerConfigurationProfileImport#password}
  */
  readonly password?: string;
  /**
  * Alias name for server BMCs. The key in provider's `redfish_servers` map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#redfish_alias IdracServerConfigurationProfileImport#redfish_alias}
  */
  readonly redfishAlias?: string;
  /**
  * This field indicates whether the SSL/TLS certificate must be verified or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#ssl_insecure IdracServerConfigurationProfileImport#ssl_insecure}
  */
  readonly sslInsecure?: boolean | cdktf.IResolvable;
  /**
  * User name for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#user IdracServerConfigurationProfileImport#user}
  */
  readonly user?: string;
}

export function idracServerConfigurationProfileImportRedfishServerToTerraform(struct?: IdracServerConfigurationProfileImportRedfishServer | cdktf.IResolvable): any {
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


export function idracServerConfigurationProfileImportRedfishServerToHclTerraform(struct?: IdracServerConfigurationProfileImportRedfishServer | cdktf.IResolvable): any {
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

export class IdracServerConfigurationProfileImportRedfishServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdracServerConfigurationProfileImportRedfishServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdracServerConfigurationProfileImportRedfishServer | cdktf.IResolvable | undefined) {
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

export class IdracServerConfigurationProfileImportRedfishServerList extends cdktf.ComplexList {
  public internalValue? : IdracServerConfigurationProfileImportRedfishServer[] | cdktf.IResolvable

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
  public get(index: number): IdracServerConfigurationProfileImportRedfishServerOutputReference {
    return new IdracServerConfigurationProfileImportRedfishServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import redfish_idrac_server_configuration_profile_import}
*/
export class IdracServerConfigurationProfileImport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redfish_idrac_server_configuration_profile_import";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdracServerConfigurationProfileImport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdracServerConfigurationProfileImport to import
  * @param importFromId The id of the existing IdracServerConfigurationProfileImport that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdracServerConfigurationProfileImport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redfish_idrac_server_configuration_profile_import", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/idrac_server_configuration_profile_import redfish_idrac_server_configuration_profile_import} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdracServerConfigurationProfileImportConfig
  */
  public constructor(scope: Construct, id: string, config: IdracServerConfigurationProfileImportConfig) {
    super(scope, id, {
      terraformResourceType: 'redfish_idrac_server_configuration_profile_import',
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
    this._hostPowerState = config.hostPowerState;
    this._importBuffer = config.importBuffer;
    this._shareParameters.internalValue = config.shareParameters;
    this._shutdownType = config.shutdownType;
    this._timeToWait = config.timeToWait;
    this._redfishServer.internalValue = config.redfishServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_power_state - computed: true, optional: true, required: false
  private _hostPowerState?: string; 
  public get hostPowerState() {
    return this.getStringAttribute('host_power_state');
  }
  public set hostPowerState(value: string) {
    this._hostPowerState = value;
  }
  public resetHostPowerState() {
    this._hostPowerState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPowerStateInput() {
    return this._hostPowerState;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_buffer - computed: false, optional: true, required: false
  private _importBuffer?: string; 
  public get importBuffer() {
    return this.getStringAttribute('import_buffer');
  }
  public set importBuffer(value: string) {
    this._importBuffer = value;
  }
  public resetImportBuffer() {
    this._importBuffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importBufferInput() {
    return this._importBuffer;
  }

  // share_parameters - computed: false, optional: false, required: true
  private _shareParameters = new IdracServerConfigurationProfileImportShareParametersOutputReference(this, "share_parameters");
  public get shareParameters() {
    return this._shareParameters;
  }
  public putShareParameters(value: IdracServerConfigurationProfileImportShareParameters) {
    this._shareParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareParametersInput() {
    return this._shareParameters.internalValue;
  }

  // shutdown_type - computed: true, optional: true, required: false
  private _shutdownType?: string; 
  public get shutdownType() {
    return this.getStringAttribute('shutdown_type');
  }
  public set shutdownType(value: string) {
    this._shutdownType = value;
  }
  public resetShutdownType() {
    this._shutdownType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownTypeInput() {
    return this._shutdownType;
  }

  // time_to_wait - computed: true, optional: true, required: false
  private _timeToWait?: number; 
  public get timeToWait() {
    return this.getNumberAttribute('time_to_wait');
  }
  public set timeToWait(value: number) {
    this._timeToWait = value;
  }
  public resetTimeToWait() {
    this._timeToWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToWaitInput() {
    return this._timeToWait;
  }

  // redfish_server - computed: false, optional: true, required: false
  private _redfishServer = new IdracServerConfigurationProfileImportRedfishServerList(this, "redfish_server", false);
  public get redfishServer() {
    return this._redfishServer;
  }
  public putRedfishServer(value: IdracServerConfigurationProfileImportRedfishServer[] | cdktf.IResolvable) {
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
      host_power_state: cdktf.stringToTerraform(this._hostPowerState),
      import_buffer: cdktf.stringToTerraform(this._importBuffer),
      share_parameters: idracServerConfigurationProfileImportShareParametersToTerraform(this._shareParameters.internalValue),
      shutdown_type: cdktf.stringToTerraform(this._shutdownType),
      time_to_wait: cdktf.numberToTerraform(this._timeToWait),
      redfish_server: cdktf.listMapper(idracServerConfigurationProfileImportRedfishServerToTerraform, true)(this._redfishServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_power_state: {
        value: cdktf.stringToHclTerraform(this._hostPowerState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_buffer: {
        value: cdktf.stringToHclTerraform(this._importBuffer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_parameters: {
        value: idracServerConfigurationProfileImportShareParametersToHclTerraform(this._shareParameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdracServerConfigurationProfileImportShareParameters",
      },
      shutdown_type: {
        value: cdktf.stringToHclTerraform(this._shutdownType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_to_wait: {
        value: cdktf.numberToHclTerraform(this._timeToWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redfish_server: {
        value: cdktf.listMapperHcl(idracServerConfigurationProfileImportRedfishServerToHclTerraform, true)(this._redfishServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdracServerConfigurationProfileImportRedfishServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
