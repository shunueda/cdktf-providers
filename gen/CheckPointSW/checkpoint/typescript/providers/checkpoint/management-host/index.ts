// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#color ManagementHost#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#comments ManagementHost#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#id ManagementHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#ignore_errors ManagementHost#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#ignore_warnings ManagementHost#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#ipv4_address ManagementHost#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#ipv6_address ManagementHost#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Object name. Should be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#name ManagementHost#name}
  */
  readonly name: string;
  /**
  * NAT settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#nat_settings ManagementHost#nat_settings}
  */
  readonly natSettings?: { [key: string]: string };
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#tags ManagementHost#tags}
  */
  readonly tags?: string[];
  /**
  * host_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#host_servers ManagementHost#host_servers}
  */
  readonly hostServers?: ManagementHostHostServers;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#interfaces ManagementHost#interfaces}
  */
  readonly interfaces?: ManagementHostInterfaces[] | cdktf.IResolvable;
}
export interface ManagementHostHostServersWebServerConfig {
  /**
  * Server additional ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#additional_ports ManagementHost#additional_ports}
  */
  readonly additionalPorts?: string[];
  /**
  * Application engines of this web server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#application_engines ManagementHost#application_engines}
  */
  readonly applicationEngines?: string[];
  /**
  * Whether server listens to standard port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#listen_standard_port ManagementHost#listen_standard_port}
  */
  readonly listenStandardPort?: boolean | cdktf.IResolvable;
  /**
  * Operating System.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#operating_system ManagementHost#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * Network object which protects this server identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#protected_by ManagementHost#protected_by}
  */
  readonly protectedBy?: string;
}

export function managementHostHostServersWebServerConfigToTerraform(struct?: ManagementHostHostServersWebServerConfigOutputReference | ManagementHostHostServersWebServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalPorts),
    application_engines: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applicationEngines),
    listen_standard_port: cdktf.booleanToTerraform(struct!.listenStandardPort),
    operating_system: cdktf.stringToTerraform(struct!.operatingSystem),
    protected_by: cdktf.stringToTerraform(struct!.protectedBy),
  }
}


export function managementHostHostServersWebServerConfigToHclTerraform(struct?: ManagementHostHostServersWebServerConfigOutputReference | ManagementHostHostServersWebServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalPorts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    application_engines: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applicationEngines),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    listen_standard_port: {
      value: cdktf.booleanToHclTerraform(struct!.listenStandardPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operating_system: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protected_by: {
      value: cdktf.stringToHclTerraform(struct!.protectedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementHostHostServersWebServerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementHostHostServersWebServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPorts = this._additionalPorts;
    }
    if (this._applicationEngines !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationEngines = this._applicationEngines;
    }
    if (this._listenStandardPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenStandardPort = this._listenStandardPort;
    }
    if (this._operatingSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystem = this._operatingSystem;
    }
    if (this._protectedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedBy = this._protectedBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementHostHostServersWebServerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalPorts = undefined;
      this._applicationEngines = undefined;
      this._listenStandardPort = undefined;
      this._operatingSystem = undefined;
      this._protectedBy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalPorts = value.additionalPorts;
      this._applicationEngines = value.applicationEngines;
      this._listenStandardPort = value.listenStandardPort;
      this._operatingSystem = value.operatingSystem;
      this._protectedBy = value.protectedBy;
    }
  }

  // additional_ports - computed: false, optional: true, required: false
  private _additionalPorts?: string[]; 
  public get additionalPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_ports'));
  }
  public set additionalPorts(value: string[]) {
    this._additionalPorts = value;
  }
  public resetAdditionalPorts() {
    this._additionalPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPortsInput() {
    return this._additionalPorts;
  }

  // application_engines - computed: false, optional: true, required: false
  private _applicationEngines?: string[]; 
  public get applicationEngines() {
    return cdktf.Fn.tolist(this.getListAttribute('application_engines'));
  }
  public set applicationEngines(value: string[]) {
    this._applicationEngines = value;
  }
  public resetApplicationEngines() {
    this._applicationEngines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationEnginesInput() {
    return this._applicationEngines;
  }

  // listen_standard_port - computed: false, optional: true, required: false
  private _listenStandardPort?: boolean | cdktf.IResolvable; 
  public get listenStandardPort() {
    return this.getBooleanAttribute('listen_standard_port');
  }
  public set listenStandardPort(value: boolean | cdktf.IResolvable) {
    this._listenStandardPort = value;
  }
  public resetListenStandardPort() {
    this._listenStandardPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenStandardPortInput() {
    return this._listenStandardPort;
  }

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // protected_by - computed: false, optional: true, required: false
  private _protectedBy?: string; 
  public get protectedBy() {
    return this.getStringAttribute('protected_by');
  }
  public set protectedBy(value: string) {
    this._protectedBy = value;
  }
  public resetProtectedBy() {
    this._protectedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedByInput() {
    return this._protectedBy;
  }
}
export interface ManagementHostHostServers {
  /**
  * Gets True if this server is a DNS Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#dns_server ManagementHost#dns_server}
  */
  readonly dnsServer?: boolean | cdktf.IResolvable;
  /**
  * Gets True if this server is a Mail Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#mail_server ManagementHost#mail_server}
  */
  readonly mailServer?: boolean | cdktf.IResolvable;
  /**
  * Gets True if this server is a Web Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#web_server ManagementHost#web_server}
  */
  readonly webServer?: boolean | cdktf.IResolvable;
  /**
  * web_server_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#web_server_config ManagementHost#web_server_config}
  */
  readonly webServerConfig?: ManagementHostHostServersWebServerConfig;
}

export function managementHostHostServersToTerraform(struct?: ManagementHostHostServersOutputReference | ManagementHostHostServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_server: cdktf.booleanToTerraform(struct!.dnsServer),
    mail_server: cdktf.booleanToTerraform(struct!.mailServer),
    web_server: cdktf.booleanToTerraform(struct!.webServer),
    web_server_config: managementHostHostServersWebServerConfigToTerraform(struct!.webServerConfig),
  }
}


export function managementHostHostServersToHclTerraform(struct?: ManagementHostHostServersOutputReference | ManagementHostHostServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_server: {
      value: cdktf.booleanToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mail_server: {
      value: cdktf.booleanToHclTerraform(struct!.mailServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web_server: {
      value: cdktf.booleanToHclTerraform(struct!.webServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web_server_config: {
      value: managementHostHostServersWebServerConfigToHclTerraform(struct!.webServerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementHostHostServersWebServerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementHostHostServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementHostHostServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._mailServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailServer = this._mailServer;
    }
    if (this._webServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.webServer = this._webServer;
    }
    if (this._webServerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webServerConfig = this._webServerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementHostHostServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsServer = undefined;
      this._mailServer = undefined;
      this._webServer = undefined;
      this._webServerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsServer = value.dnsServer;
      this._mailServer = value.mailServer;
      this._webServer = value.webServer;
      this._webServerConfig.internalValue = value.webServerConfig;
    }
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: boolean | cdktf.IResolvable; 
  public get dnsServer() {
    return this.getBooleanAttribute('dns_server');
  }
  public set dnsServer(value: boolean | cdktf.IResolvable) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // mail_server - computed: false, optional: true, required: false
  private _mailServer?: boolean | cdktf.IResolvable; 
  public get mailServer() {
    return this.getBooleanAttribute('mail_server');
  }
  public set mailServer(value: boolean | cdktf.IResolvable) {
    this._mailServer = value;
  }
  public resetMailServer() {
    this._mailServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailServerInput() {
    return this._mailServer;
  }

  // web_server - computed: false, optional: true, required: false
  private _webServer?: boolean | cdktf.IResolvable; 
  public get webServer() {
    return this.getBooleanAttribute('web_server');
  }
  public set webServer(value: boolean | cdktf.IResolvable) {
    this._webServer = value;
  }
  public resetWebServer() {
    this._webServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webServerInput() {
    return this._webServer;
  }

  // web_server_config - computed: false, optional: true, required: false
  private _webServerConfig = new ManagementHostHostServersWebServerConfigOutputReference(this, "web_server_config");
  public get webServerConfig() {
    return this._webServerConfig;
  }
  public putWebServerConfig(value: ManagementHostHostServersWebServerConfig) {
    this._webServerConfig.internalValue = value;
  }
  public resetWebServerConfig() {
    this._webServerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webServerConfigInput() {
    return this._webServerConfig.internalValue;
  }
}
export interface ManagementHostInterfaces {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#color ManagementHost#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#comments ManagementHost#comments}
  */
  readonly comments?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#ignore_errors ManagementHost#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#ignore_warnings ManagementHost#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * IPv4 network mask length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#mask_length4 ManagementHost#mask_length4}
  */
  readonly maskLength4?: number;
  /**
  * IPv6 network mask length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#mask_length6 ManagementHost#mask_length6}
  */
  readonly maskLength6?: number;
  /**
  * Object name. Should be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#name ManagementHost#name}
  */
  readonly name?: string;
  /**
  * IPv4 network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#subnet4 ManagementHost#subnet4}
  */
  readonly subnet4?: string;
  /**
  * IPv6 network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#subnet6 ManagementHost#subnet6}
  */
  readonly subnet6?: string;
}

export function managementHostInterfacesToTerraform(struct?: ManagementHostInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    comments: cdktf.stringToTerraform(struct!.comments),
    ignore_errors: cdktf.booleanToTerraform(struct!.ignoreErrors),
    ignore_warnings: cdktf.booleanToTerraform(struct!.ignoreWarnings),
    mask_length4: cdktf.numberToTerraform(struct!.maskLength4),
    mask_length6: cdktf.numberToTerraform(struct!.maskLength6),
    name: cdktf.stringToTerraform(struct!.name),
    subnet4: cdktf.stringToTerraform(struct!.subnet4),
    subnet6: cdktf.stringToTerraform(struct!.subnet6),
  }
}


export function managementHostInterfacesToHclTerraform(struct?: ManagementHostInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comments: {
      value: cdktf.stringToHclTerraform(struct!.comments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_errors: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_warnings: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreWarnings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mask_length4: {
      value: cdktf.numberToHclTerraform(struct!.maskLength4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mask_length6: {
      value: cdktf.numberToHclTerraform(struct!.maskLength6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet4: {
      value: cdktf.stringToHclTerraform(struct!.subnet4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet6: {
      value: cdktf.stringToHclTerraform(struct!.subnet6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementHostInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementHostInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._comments !== undefined) {
      hasAnyValues = true;
      internalValueResult.comments = this._comments;
    }
    if (this._ignoreErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreErrors = this._ignoreErrors;
    }
    if (this._ignoreWarnings !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreWarnings = this._ignoreWarnings;
    }
    if (this._maskLength4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskLength4 = this._maskLength4;
    }
    if (this._maskLength6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskLength6 = this._maskLength6;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subnet4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet4 = this._subnet4;
    }
    if (this._subnet6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet6 = this._subnet6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementHostInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._comments = undefined;
      this._ignoreErrors = undefined;
      this._ignoreWarnings = undefined;
      this._maskLength4 = undefined;
      this._maskLength6 = undefined;
      this._name = undefined;
      this._subnet4 = undefined;
      this._subnet6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._comments = value.comments;
      this._ignoreErrors = value.ignoreErrors;
      this._ignoreWarnings = value.ignoreWarnings;
      this._maskLength4 = value.maskLength4;
      this._maskLength6 = value.maskLength6;
      this._name = value.name;
      this._subnet4 = value.subnet4;
      this._subnet6 = value.subnet6;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // mask_length4 - computed: false, optional: true, required: false
  private _maskLength4?: number; 
  public get maskLength4() {
    return this.getNumberAttribute('mask_length4');
  }
  public set maskLength4(value: number) {
    this._maskLength4 = value;
  }
  public resetMaskLength4() {
    this._maskLength4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskLength4Input() {
    return this._maskLength4;
  }

  // mask_length6 - computed: false, optional: true, required: false
  private _maskLength6?: number; 
  public get maskLength6() {
    return this.getNumberAttribute('mask_length6');
  }
  public set maskLength6(value: number) {
    this._maskLength6 = value;
  }
  public resetMaskLength6() {
    this._maskLength6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskLength6Input() {
    return this._maskLength6;
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

  // subnet4 - computed: false, optional: true, required: false
  private _subnet4?: string; 
  public get subnet4() {
    return this.getStringAttribute('subnet4');
  }
  public set subnet4(value: string) {
    this._subnet4 = value;
  }
  public resetSubnet4() {
    this._subnet4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnet4Input() {
    return this._subnet4;
  }

  // subnet6 - computed: false, optional: true, required: false
  private _subnet6?: string; 
  public get subnet6() {
    return this.getStringAttribute('subnet6');
  }
  public set subnet6(value: string) {
    this._subnet6 = value;
  }
  public resetSubnet6() {
    this._subnet6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnet6Input() {
    return this._subnet6;
  }
}

export class ManagementHostInterfacesList extends cdktf.ComplexList {
  public internalValue? : ManagementHostInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ManagementHostInterfacesOutputReference {
    return new ManagementHostInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host checkpoint_management_host}
*/
export class ManagementHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementHost to import
  * @param importFromId The id of the existing ManagementHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_host checkpoint_management_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementHostConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementHostConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_host',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._comments = config.comments;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._ipv4Address = config.ipv4Address;
    this._ipv6Address = config.ipv6Address;
    this._name = config.name;
    this._natSettings = config.natSettings;
    this._tags = config.tags;
    this._hostServers.internalValue = config.hostServers;
    this._interfaces.internalValue = config.interfaces;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
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

  // nat_settings - computed: false, optional: true, required: false
  private _natSettings?: { [key: string]: string }; 
  public get natSettings() {
    return this.getStringMapAttribute('nat_settings');
  }
  public set natSettings(value: { [key: string]: string }) {
    this._natSettings = value;
  }
  public resetNatSettings() {
    this._natSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natSettingsInput() {
    return this._natSettings;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // host_servers - computed: false, optional: true, required: false
  private _hostServers = new ManagementHostHostServersOutputReference(this, "host_servers");
  public get hostServers() {
    return this._hostServers;
  }
  public putHostServers(value: ManagementHostHostServers) {
    this._hostServers.internalValue = value;
  }
  public resetHostServers() {
    this._hostServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostServersInput() {
    return this._hostServers.internalValue;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new ManagementHostInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: ManagementHostInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      name: cdktf.stringToTerraform(this._name),
      nat_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._natSettings),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      host_servers: managementHostHostServersToTerraform(this._hostServers.internalValue),
      interfaces: cdktf.listMapper(managementHostInterfacesToTerraform, true)(this._interfaces.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
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
      nat_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._natSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      host_servers: {
        value: managementHostHostServersToHclTerraform(this._hostServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementHostHostServersList",
      },
      interfaces: {
        value: cdktf.listMapperHcl(managementHostInterfacesToHclTerraform, true)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementHostInterfacesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
