// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyEdgeTransportNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#description PolicyEdgeTransportNode#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#display_name PolicyEdgeTransportNode#display_name}
  */
  readonly displayName: string;
  /**
  * ID of the enforcement point this Edge Transport Node belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#enforcement_point PolicyEdgeTransportNode#enforcement_point}
  */
  readonly enforcementPoint?: string;
  /**
  * Path of the failure domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#failure_domain_path PolicyEdgeTransportNode#failure_domain_path}
  */
  readonly failureDomainPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#form_factor PolicyEdgeTransportNode#form_factor}
  */
  readonly formFactor?: string;
  /**
  * Host name or FQDN for edge node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#hostname PolicyEdgeTransportNode#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#id PolicyEdgeTransportNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique Id of the fabric node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#node_id PolicyEdgeTransportNode#node_id}
  */
  readonly nodeId?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#nsx_id PolicyEdgeTransportNode#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Path to the site this Edge Transport Node belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#site_path PolicyEdgeTransportNode#site_path}
  */
  readonly sitePath?: string;
  /**
  * advanced_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#advanced_configuration PolicyEdgeTransportNode#advanced_configuration}
  */
  readonly advancedConfiguration?: PolicyEdgeTransportNodeAdvancedConfiguration[] | cdktf.IResolvable;
  /**
  * appliance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#appliance_config PolicyEdgeTransportNode#appliance_config}
  */
  readonly applianceConfig?: PolicyEdgeTransportNodeApplianceConfig;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#credentials PolicyEdgeTransportNode#credentials}
  */
  readonly credentials?: PolicyEdgeTransportNodeCredentials;
  /**
  * management_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#management_interface PolicyEdgeTransportNode#management_interface}
  */
  readonly managementInterface?: PolicyEdgeTransportNodeManagementInterface;
  /**
  * switch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#switch PolicyEdgeTransportNode#switch}
  */
  readonly switch: PolicyEdgeTransportNodeSwitch[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#tag PolicyEdgeTransportNode#tag}
  */
  readonly tag?: PolicyEdgeTransportNodeTag[] | cdktf.IResolvable;
  /**
  * vm_deployment_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#vm_deployment_config PolicyEdgeTransportNode#vm_deployment_config}
  */
  readonly vmDeploymentConfig?: PolicyEdgeTransportNodeVmDeploymentConfig;
}
export interface PolicyEdgeTransportNodeAdvancedConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#key PolicyEdgeTransportNode#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#value PolicyEdgeTransportNode#value}
  */
  readonly value: string;
}

export function policyEdgeTransportNodeAdvancedConfigurationToTerraform(struct?: PolicyEdgeTransportNodeAdvancedConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function policyEdgeTransportNodeAdvancedConfigurationToHclTerraform(struct?: PolicyEdgeTransportNodeAdvancedConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeTransportNodeAdvancedConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyEdgeTransportNodeAdvancedConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeTransportNodeAdvancedConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
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
}

export class PolicyEdgeTransportNodeAdvancedConfigurationList extends cdktf.ComplexList {
  public internalValue? : PolicyEdgeTransportNodeAdvancedConfiguration[] | cdktf.IResolvable

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
  public get(index: number): PolicyEdgeTransportNodeAdvancedConfigurationOutputReference {
    return new PolicyEdgeTransportNodeAdvancedConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyEdgeTransportNodeApplianceConfigSyslogServer {
  /**
  * Log level to be redirected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#log_level PolicyEdgeTransportNode#log_level}
  */
  readonly logLevel?: string;
  /**
  * Syslog server port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#port PolicyEdgeTransportNode#port}
  */
  readonly port?: string;
  /**
  * Syslog protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#protocol PolicyEdgeTransportNode#protocol}
  */
  readonly protocol?: string;
  /**
  * Server IP or fqdn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#server PolicyEdgeTransportNode#server}
  */
  readonly server: string;
}

export function policyEdgeTransportNodeApplianceConfigSyslogServerToTerraform(struct?: PolicyEdgeTransportNodeApplianceConfigSyslogServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function policyEdgeTransportNodeApplianceConfigSyslogServerToHclTerraform(struct?: PolicyEdgeTransportNodeApplianceConfigSyslogServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeTransportNodeApplianceConfigSyslogServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyEdgeTransportNodeApplianceConfigSyslogServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeTransportNodeApplianceConfigSyslogServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logLevel = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logLevel = value.logLevel;
      this._port = value.port;
      this._protocol = value.protocol;
      this._server = value.server;
    }
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}

export class PolicyEdgeTransportNodeApplianceConfigSyslogServerList extends cdktf.ComplexList {
  public internalValue? : PolicyEdgeTransportNodeApplianceConfigSyslogServer[] | cdktf.IResolvable

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
  public get(index: number): PolicyEdgeTransportNodeApplianceConfigSyslogServerOutputReference {
    return new PolicyEdgeTransportNodeApplianceConfigSyslogServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyEdgeTransportNodeApplianceConfig {
  /**
  * Allow root SSH logins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#allow_ssh_root_login PolicyEdgeTransportNode#allow_ssh_root_login}
  */
  readonly allowSshRootLogin?: boolean | cdktf.IResolvable;
  /**
  * DNS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#dns_servers PolicyEdgeTransportNode#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Enable SSH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#enable_ssh PolicyEdgeTransportNode#enable_ssh}
  */
  readonly enableSsh?: boolean | cdktf.IResolvable;
  /**
  * Enable Uniform Passthrough mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#enable_upt_mode PolicyEdgeTransportNode#enable_upt_mode}
  */
  readonly enableUptMode?: boolean | cdktf.IResolvable;
  /**
  * syslog_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#syslog_server PolicyEdgeTransportNode#syslog_server}
  */
  readonly syslogServer?: PolicyEdgeTransportNodeApplianceConfigSyslogServer[] | cdktf.IResolvable;
}

export function policyEdgeTransportNodeApplianceConfigToTerraform(struct?: PolicyEdgeTransportNodeApplianceConfigOutputReference | PolicyEdgeTransportNodeApplianceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_ssh_root_login: cdktf.booleanToTerraform(struct!.allowSshRootLogin),
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServers),
    enable_ssh: cdktf.booleanToTerraform(struct!.enableSsh),
    enable_upt_mode: cdktf.booleanToTerraform(struct!.enableUptMode),
    syslog_server: cdktf.listMapper(policyEdgeTransportNodeApplianceConfigSyslogServerToTerraform, true)(struct!.syslogServer),
  }
}


export function policyEdgeTransportNodeApplianceConfigToHclTerraform(struct?: PolicyEdgeTransportNodeApplianceConfigOutputReference | PolicyEdgeTransportNodeApplianceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_ssh_root_login: {
      value: cdktf.booleanToHclTerraform(struct!.allowSshRootLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_ssh: {
      value: cdktf.booleanToHclTerraform(struct!.enableSsh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_upt_mode: {
      value: cdktf.booleanToHclTerraform(struct!.enableUptMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    syslog_server: {
      value: cdktf.listMapperHcl(policyEdgeTransportNodeApplianceConfigSyslogServerToHclTerraform, true)(struct!.syslogServer),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyEdgeTransportNodeApplianceConfigSyslogServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeTransportNodeApplianceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyEdgeTransportNodeApplianceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSshRootLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSshRootLogin = this._allowSshRootLogin;
    }
    if (this._dnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServers = this._dnsServers;
    }
    if (this._enableSsh !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSsh = this._enableSsh;
    }
    if (this._enableUptMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUptMode = this._enableUptMode;
    }
    if (this._syslogServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogServer = this._syslogServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeTransportNodeApplianceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowSshRootLogin = undefined;
      this._dnsServers = undefined;
      this._enableSsh = undefined;
      this._enableUptMode = undefined;
      this._syslogServer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowSshRootLogin = value.allowSshRootLogin;
      this._dnsServers = value.dnsServers;
      this._enableSsh = value.enableSsh;
      this._enableUptMode = value.enableUptMode;
      this._syslogServer.internalValue = value.syslogServer;
    }
  }

  // allow_ssh_root_login - computed: false, optional: true, required: false
  private _allowSshRootLogin?: boolean | cdktf.IResolvable; 
  public get allowSshRootLogin() {
    return this.getBooleanAttribute('allow_ssh_root_login');
  }
  public set allowSshRootLogin(value: boolean | cdktf.IResolvable) {
    this._allowSshRootLogin = value;
  }
  public resetAllowSshRootLogin() {
    this._allowSshRootLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSshRootLoginInput() {
    return this._allowSshRootLogin;
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // enable_ssh - computed: false, optional: true, required: false
  private _enableSsh?: boolean | cdktf.IResolvable; 
  public get enableSsh() {
    return this.getBooleanAttribute('enable_ssh');
  }
  public set enableSsh(value: boolean | cdktf.IResolvable) {
    this._enableSsh = value;
  }
  public resetEnableSsh() {
    this._enableSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSshInput() {
    return this._enableSsh;
  }

  // enable_upt_mode - computed: false, optional: true, required: false
  private _enableUptMode?: boolean | cdktf.IResolvable; 
  public get enableUptMode() {
    return this.getBooleanAttribute('enable_upt_mode');
  }
  public set enableUptMode(value: boolean | cdktf.IResolvable) {
    this._enableUptMode = value;
  }
  public resetEnableUptMode() {
    this._enableUptMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUptModeInput() {
    return this._enableUptMode;
  }

  // syslog_server - computed: false, optional: true, required: false
  private _syslogServer = new PolicyEdgeTransportNodeApplianceConfigSyslogServerList(this, "syslog_server", false);
  public get syslogServer() {
    return this._syslogServer;
  }
  public putSyslogServer(value: PolicyEdgeTransportNodeApplianceConfigSyslogServer[] | cdktf.IResolvable) {
    this._syslogServer.internalValue = value;
  }
  public resetSyslogServer() {
    this._syslogServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogServerInput() {
    return this._syslogServer.internalValue;
  }
}
export interface PolicyEdgeTransportNodeCredentials {
  /**
  * Node audit user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#audit_password PolicyEdgeTransportNode#audit_password}
  */
  readonly auditPassword?: string;
  /**
  * CLI "audit" username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#audit_username PolicyEdgeTransportNode#audit_username}
  */
  readonly auditUsername?: string;
  /**
  * Node cli password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#cli_password PolicyEdgeTransportNode#cli_password}
  */
  readonly cliPassword: string;
  /**
  * CLI "admin" username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#cli_username PolicyEdgeTransportNode#cli_username}
  */
  readonly cliUsername?: string;
  /**
  * Node root user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#root_password PolicyEdgeTransportNode#root_password}
  */
  readonly rootPassword: string;
}

export function policyEdgeTransportNodeCredentialsToTerraform(struct?: PolicyEdgeTransportNodeCredentialsOutputReference | PolicyEdgeTransportNodeCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_password: cdktf.stringToTerraform(struct!.auditPassword),
    audit_username: cdktf.stringToTerraform(struct!.auditUsername),
    cli_password: cdktf.stringToTerraform(struct!.cliPassword),
    cli_username: cdktf.stringToTerraform(struct!.cliUsername),
    root_password: cdktf.stringToTerraform(struct!.rootPassword),
  }
}


export function policyEdgeTransportNodeCredentialsToHclTerraform(struct?: PolicyEdgeTransportNodeCredentialsOutputReference | PolicyEdgeTransportNodeCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_password: {
      value: cdktf.stringToHclTerraform(struct!.auditPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audit_username: {
      value: cdktf.stringToHclTerraform(struct!.auditUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cli_password: {
      value: cdktf.stringToHclTerraform(struct!.cliPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cli_username: {
      value: cdktf.stringToHclTerraform(struct!.cliUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_password: {
      value: cdktf.stringToHclTerraform(struct!.rootPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeTransportNodeCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyEdgeTransportNodeCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditPassword = this._auditPassword;
    }
    if (this._auditUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditUsername = this._auditUsername;
    }
    if (this._cliPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliPassword = this._cliPassword;
    }
    if (this._cliUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliUsername = this._cliUsername;
    }
    if (this._rootPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPassword = this._rootPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeTransportNodeCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditPassword = undefined;
      this._auditUsername = undefined;
      this._cliPassword = undefined;
      this._cliUsername = undefined;
      this._rootPassword = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditPassword = value.auditPassword;
      this._auditUsername = value.auditUsername;
      this._cliPassword = value.cliPassword;
      this._cliUsername = value.cliUsername;
      this._rootPassword = value.rootPassword;
    }
  }

  // audit_password - computed: false, optional: true, required: false
  private _auditPassword?: string; 
  public get auditPassword() {
    return this.getStringAttribute('audit_password');
  }
  public set auditPassword(value: string) {
    this._auditPassword = value;
  }
  public resetAuditPassword() {
    this._auditPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditPasswordInput() {
    return this._auditPassword;
  }

  // audit_username - computed: false, optional: true, required: false
  private _auditUsername?: string; 
  public get auditUsername() {
    return this.getStringAttribute('audit_username');
  }
  public set auditUsername(value: string) {
    this._auditUsername = value;
  }
  public resetAuditUsername() {
    this._auditUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditUsernameInput() {
    return this._auditUsername;
  }

  // cli_password - computed: false, optional: false, required: true
  private _cliPassword?: string; 
  public get cliPassword() {
    return this.getStringAttribute('cli_password');
  }
  public set cliPassword(value: string) {
    this._cliPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cliPasswordInput() {
    return this._cliPassword;
  }

  // cli_username - computed: false, optional: true, required: false
  private _cliUsername?: string; 
  public get cliUsername() {
    return this.getStringAttribute('cli_username');
  }
  public set cliUsername(value: string) {
    this._cliUsername = value;
  }
  public resetCliUsername() {
    this._cliUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliUsernameInput() {
    return this._cliUsername;
  }

  // root_password - computed: false, optional: false, required: true
  private _rootPassword?: string; 
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string) {
    this._rootPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword;
  }
}
export interface PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4ManagementPortSubnet {
  /**
  * IPv4 Addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#ip_addresses PolicyEdgeTransportNode#ip_addresses}
  */
  readonly ipAddresses: string[];
  /**
  * Subnet Prefix Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#prefix_length PolicyEdgeTransportNode#prefix_length}
  */
  readonly prefixLength: number;
}

export function policyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4ManagementPortSubnetToTerraform(struct?: PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4ManagementPortSubnetOutputReference | PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4ManagementPortSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
  }
}


export function policyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4ManagementPortSubnetToHclTerraform(struct?: PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4ManagementPortSubnetOutputReference | PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4ManagementPortSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4ManagementPortSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4ManagementPortSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4ManagementPortSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddresses = undefined;
      this._prefixLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddresses = value.ipAddresses;
      this._prefixLength = value.prefixLength;
    }
  }

  // ip_addresses - computed: false, optional: false, required: true
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }
}
export interface PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4 {
  /**
  * Default IPv4 gateway for the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#default_gateway PolicyEdgeTransportNode#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * management_port_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#management_port_subnet PolicyEdgeTransportNode#management_port_subnet}
  */
  readonly managementPortSubnet: PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4ManagementPortSubnet;
}

export function policyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4ToTerraform(struct?: PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4OutputReference | PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    management_port_subnet: policyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4ManagementPortSubnetToTerraform(struct!.managementPortSubnet),
  }
}


export function policyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4ToHclTerraform(struct?: PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4OutputReference | PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_port_subnet: {
      value: policyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4ManagementPortSubnetToHclTerraform(struct!.managementPortSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4ManagementPortSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._managementPortSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementPortSubnet = this._managementPortSubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGateway = undefined;
      this._managementPortSubnet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGateway = value.defaultGateway;
      this._managementPortSubnet.internalValue = value.managementPortSubnet;
    }
  }

  // default_gateway - computed: false, optional: false, required: true
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // management_port_subnet - computed: false, optional: false, required: true
  private _managementPortSubnet = new PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4ManagementPortSubnetOutputReference(this, "management_port_subnet");
  public get managementPortSubnet() {
    return this._managementPortSubnet;
  }
  public putManagementPortSubnet(value: PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4ManagementPortSubnet) {
    this._managementPortSubnet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementPortSubnetInput() {
    return this._managementPortSubnet.internalValue;
  }
}
export interface PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6ManagementPortSubnet {
  /**
  * IPv6 Addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#ip_addresses PolicyEdgeTransportNode#ip_addresses}
  */
  readonly ipAddresses: string[];
  /**
  * Subnet Prefix Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#prefix_length PolicyEdgeTransportNode#prefix_length}
  */
  readonly prefixLength: number;
}

export function policyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6ManagementPortSubnetToTerraform(struct?: PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6ManagementPortSubnetOutputReference | PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6ManagementPortSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
  }
}


export function policyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6ManagementPortSubnetToHclTerraform(struct?: PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6ManagementPortSubnetOutputReference | PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6ManagementPortSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6ManagementPortSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6ManagementPortSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6ManagementPortSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddresses = undefined;
      this._prefixLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddresses = value.ipAddresses;
      this._prefixLength = value.prefixLength;
    }
  }

  // ip_addresses - computed: false, optional: false, required: true
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }
}
export interface PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6 {
  /**
  * Default IPv6 gateway for the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#default_gateway PolicyEdgeTransportNode#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * management_port_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#management_port_subnet PolicyEdgeTransportNode#management_port_subnet}
  */
  readonly managementPortSubnet: PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6ManagementPortSubnet;
}

export function policyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6ToTerraform(struct?: PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6OutputReference | PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    management_port_subnet: policyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6ManagementPortSubnetToTerraform(struct!.managementPortSubnet),
  }
}


export function policyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6ToHclTerraform(struct?: PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6OutputReference | PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_port_subnet: {
      value: policyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6ManagementPortSubnetToHclTerraform(struct!.managementPortSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6ManagementPortSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._managementPortSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementPortSubnet = this._managementPortSubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGateway = undefined;
      this._managementPortSubnet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGateway = value.defaultGateway;
      this._managementPortSubnet.internalValue = value.managementPortSubnet;
    }
  }

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // management_port_subnet - computed: false, optional: false, required: true
  private _managementPortSubnet = new PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6ManagementPortSubnetOutputReference(this, "management_port_subnet");
  public get managementPortSubnet() {
    return this._managementPortSubnet;
  }
  public putManagementPortSubnet(value: PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6ManagementPortSubnet) {
    this._managementPortSubnet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementPortSubnetInput() {
    return this._managementPortSubnet.internalValue;
  }
}
export interface PolicyEdgeTransportNodeManagementInterfaceIpAssignment {
  /**
  * Enable DHCP based IPv4 assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#dhcp_v4 PolicyEdgeTransportNode#dhcp_v4}
  */
  readonly dhcpV4?: boolean | cdktf.IResolvable;
  /**
  * static_ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#static_ipv4 PolicyEdgeTransportNode#static_ipv4}
  */
  readonly staticIpv4?: PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4;
  /**
  * static_ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#static_ipv6 PolicyEdgeTransportNode#static_ipv6}
  */
  readonly staticIpv6?: PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6;
}

export function policyEdgeTransportNodeManagementInterfaceIpAssignmentToTerraform(struct?: PolicyEdgeTransportNodeManagementInterfaceIpAssignment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_v4: cdktf.booleanToTerraform(struct!.dhcpV4),
    static_ipv4: policyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4ToTerraform(struct!.staticIpv4),
    static_ipv6: policyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6ToTerraform(struct!.staticIpv6),
  }
}


export function policyEdgeTransportNodeManagementInterfaceIpAssignmentToHclTerraform(struct?: PolicyEdgeTransportNodeManagementInterfaceIpAssignment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_v4: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpV4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_ipv4: {
      value: policyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4ToHclTerraform(struct!.staticIpv4),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4List",
    },
    static_ipv6: {
      value: policyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6ToHclTerraform(struct!.staticIpv6),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeTransportNodeManagementInterfaceIpAssignmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyEdgeTransportNodeManagementInterfaceIpAssignment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpV4 = this._dhcpV4;
    }
    if (this._staticIpv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv4 = this._staticIpv4?.internalValue;
    }
    if (this._staticIpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6 = this._staticIpv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeTransportNodeManagementInterfaceIpAssignment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpV4 = undefined;
      this._staticIpv4.internalValue = undefined;
      this._staticIpv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpV4 = value.dhcpV4;
      this._staticIpv4.internalValue = value.staticIpv4;
      this._staticIpv6.internalValue = value.staticIpv6;
    }
  }

  // dhcp_v4 - computed: false, optional: true, required: false
  private _dhcpV4?: boolean | cdktf.IResolvable; 
  public get dhcpV4() {
    return this.getBooleanAttribute('dhcp_v4');
  }
  public set dhcpV4(value: boolean | cdktf.IResolvable) {
    this._dhcpV4 = value;
  }
  public resetDhcpV4() {
    this._dhcpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpV4Input() {
    return this._dhcpV4;
  }

  // static_ipv4 - computed: false, optional: true, required: false
  private _staticIpv4 = new PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4OutputReference(this, "static_ipv4");
  public get staticIpv4() {
    return this._staticIpv4;
  }
  public putStaticIpv4(value: PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv4) {
    this._staticIpv4.internalValue = value;
  }
  public resetStaticIpv4() {
    this._staticIpv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv4Input() {
    return this._staticIpv4.internalValue;
  }

  // static_ipv6 - computed: false, optional: true, required: false
  private _staticIpv6 = new PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6OutputReference(this, "static_ipv6");
  public get staticIpv6() {
    return this._staticIpv6;
  }
  public putStaticIpv6(value: PolicyEdgeTransportNodeManagementInterfaceIpAssignmentStaticIpv6) {
    this._staticIpv6.internalValue = value;
  }
  public resetStaticIpv6() {
    this._staticIpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6Input() {
    return this._staticIpv6.internalValue;
  }
}

export class PolicyEdgeTransportNodeManagementInterfaceIpAssignmentList extends cdktf.ComplexList {
  public internalValue? : PolicyEdgeTransportNodeManagementInterfaceIpAssignment[] | cdktf.IResolvable

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
  public get(index: number): PolicyEdgeTransportNodeManagementInterfaceIpAssignmentOutputReference {
    return new PolicyEdgeTransportNodeManagementInterfaceIpAssignmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyEdgeTransportNodeManagementInterface {
  /**
  * Portgroup, logical switch identifier or segment path for management network connectivity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#network_id PolicyEdgeTransportNode#network_id}
  */
  readonly networkId: string;
  /**
  * ip_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#ip_assignment PolicyEdgeTransportNode#ip_assignment}
  */
  readonly ipAssignment: PolicyEdgeTransportNodeManagementInterfaceIpAssignment[] | cdktf.IResolvable;
}

export function policyEdgeTransportNodeManagementInterfaceToTerraform(struct?: PolicyEdgeTransportNodeManagementInterfaceOutputReference | PolicyEdgeTransportNodeManagementInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_id: cdktf.stringToTerraform(struct!.networkId),
    ip_assignment: cdktf.listMapper(policyEdgeTransportNodeManagementInterfaceIpAssignmentToTerraform, true)(struct!.ipAssignment),
  }
}


export function policyEdgeTransportNodeManagementInterfaceToHclTerraform(struct?: PolicyEdgeTransportNodeManagementInterfaceOutputReference | PolicyEdgeTransportNodeManagementInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_assignment: {
      value: cdktf.listMapperHcl(policyEdgeTransportNodeManagementInterfaceIpAssignmentToHclTerraform, true)(struct!.ipAssignment),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyEdgeTransportNodeManagementInterfaceIpAssignmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeTransportNodeManagementInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyEdgeTransportNodeManagementInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._ipAssignment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAssignment = this._ipAssignment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeTransportNodeManagementInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkId = undefined;
      this._ipAssignment.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkId = value.networkId;
      this._ipAssignment.internalValue = value.ipAssignment;
    }
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // ip_assignment - computed: false, optional: false, required: true
  private _ipAssignment = new PolicyEdgeTransportNodeManagementInterfaceIpAssignmentList(this, "ip_assignment", false);
  public get ipAssignment() {
    return this._ipAssignment;
  }
  public putIpAssignment(value: PolicyEdgeTransportNodeManagementInterfaceIpAssignment[] | cdktf.IResolvable) {
    this._ipAssignment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAssignmentInput() {
    return this._ipAssignment.internalValue;
  }
}
export interface PolicyEdgeTransportNodeSwitchPnic {
  /**
  * A portgroup, logical switch identifier or segment path for datapath connectivity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#datapath_network_id PolicyEdgeTransportNode#datapath_network_id}
  */
  readonly datapathNetworkId?: string;
  /**
  * Device name or key e.g. fp-eth0, fp-eth1 etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#device_name PolicyEdgeTransportNode#device_name}
  */
  readonly deviceName: string;
  /**
  * Uplink name for this Pnic. This name will be used to reference this Pnic in other configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#uplink_name PolicyEdgeTransportNode#uplink_name}
  */
  readonly uplinkName: string;
}

export function policyEdgeTransportNodeSwitchPnicToTerraform(struct?: PolicyEdgeTransportNodeSwitchPnic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datapath_network_id: cdktf.stringToTerraform(struct!.datapathNetworkId),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    uplink_name: cdktf.stringToTerraform(struct!.uplinkName),
  }
}


export function policyEdgeTransportNodeSwitchPnicToHclTerraform(struct?: PolicyEdgeTransportNodeSwitchPnic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datapath_network_id: {
      value: cdktf.stringToHclTerraform(struct!.datapathNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uplink_name: {
      value: cdktf.stringToHclTerraform(struct!.uplinkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeTransportNodeSwitchPnicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyEdgeTransportNodeSwitchPnic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datapathNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datapathNetworkId = this._datapathNetworkId;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._uplinkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkName = this._uplinkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeTransportNodeSwitchPnic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datapathNetworkId = undefined;
      this._deviceName = undefined;
      this._uplinkName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datapathNetworkId = value.datapathNetworkId;
      this._deviceName = value.deviceName;
      this._uplinkName = value.uplinkName;
    }
  }

  // datapath_network_id - computed: false, optional: true, required: false
  private _datapathNetworkId?: string; 
  public get datapathNetworkId() {
    return this.getStringAttribute('datapath_network_id');
  }
  public set datapathNetworkId(value: string) {
    this._datapathNetworkId = value;
  }
  public resetDatapathNetworkId() {
    this._datapathNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datapathNetworkIdInput() {
    return this._datapathNetworkId;
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // uplink_name - computed: false, optional: false, required: true
  private _uplinkName?: string; 
  public get uplinkName() {
    return this.getStringAttribute('uplink_name');
  }
  public set uplinkName(value: string) {
    this._uplinkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkNameInput() {
    return this._uplinkName;
  }
}

export class PolicyEdgeTransportNodeSwitchPnicList extends cdktf.ComplexList {
  public internalValue? : PolicyEdgeTransportNodeSwitchPnic[] | cdktf.IResolvable

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
  public get(index: number): PolicyEdgeTransportNodeSwitchPnicOutputReference {
    return new PolicyEdgeTransportNodeSwitchPnicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv4ListStruct {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#default_gateway PolicyEdgeTransportNode#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * List of IPV4 addresses for edge transport node host switch virtual tunnel endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#ip_addresses PolicyEdgeTransportNode#ip_addresses}
  */
  readonly ipAddresses: string[];
  /**
  * Subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#subnet_mask PolicyEdgeTransportNode#subnet_mask}
  */
  readonly subnetMask: string;
}

export function policyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv4ListStructToTerraform(struct?: PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv4ListStructOutputReference | PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv4ListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
  }
}


export function policyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv4ListStructToHclTerraform(struct?: PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv4ListStructOutputReference | PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv4ListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.subnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv4ListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv4ListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._subnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv4ListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGateway = undefined;
      this._ipAddresses = undefined;
      this._subnetMask = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGateway = value.defaultGateway;
      this._ipAddresses = value.ipAddresses;
      this._subnetMask = value.subnetMask;
    }
  }

  // default_gateway - computed: false, optional: false, required: true
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // ip_addresses - computed: false, optional: false, required: true
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // subnet_mask - computed: false, optional: false, required: true
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }
}
export interface PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv6ListStruct {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#default_gateway PolicyEdgeTransportNode#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * List of IPv6 IPs for edge transport node host switch virtual tunnel endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#ip_addresses PolicyEdgeTransportNode#ip_addresses}
  */
  readonly ipAddresses: string[];
  /**
  * Prefix Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#prefix_length PolicyEdgeTransportNode#prefix_length}
  */
  readonly prefixLength: number;
}

export function policyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv6ListStructToTerraform(struct?: PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv6ListStructOutputReference | PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv6ListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
  }
}


export function policyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv6ListStructToHclTerraform(struct?: PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv6ListStructOutputReference | PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv6ListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv6ListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv6ListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv6ListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGateway = undefined;
      this._ipAddresses = undefined;
      this._prefixLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGateway = value.defaultGateway;
      this._ipAddresses = value.ipAddresses;
      this._prefixLength = value.prefixLength;
    }
  }

  // default_gateway - computed: false, optional: false, required: true
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // ip_addresses - computed: false, optional: false, required: true
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }
}
export interface PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignment {
  /**
  * Enable DHCP based IPv4 assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#dhcp_v4 PolicyEdgeTransportNode#dhcp_v4}
  */
  readonly dhcpV4?: boolean | cdktf.IResolvable;
  /**
  * Enable DHCP based IPv6 assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#dhcp_v6 PolicyEdgeTransportNode#dhcp_v6}
  */
  readonly dhcpV6?: boolean | cdktf.IResolvable;
  /**
  * IP assignment specification for Static IPv4 Pool. Input should be the policy path of IP pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#static_ipv4_pool PolicyEdgeTransportNode#static_ipv4_pool}
  */
  readonly staticIpv4Pool?: string;
  /**
  * IP assignment specification for Static IPv6 Pool. Input should be the policy path of IP pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#static_ipv6_pool PolicyEdgeTransportNode#static_ipv6_pool}
  */
  readonly staticIpv6Pool?: string;
  /**
  * static_ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#static_ipv4_list PolicyEdgeTransportNode#static_ipv4_list}
  */
  readonly staticIpv4List?: PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv4ListStruct;
  /**
  * static_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#static_ipv6_list PolicyEdgeTransportNode#static_ipv6_list}
  */
  readonly staticIpv6List?: PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv6ListStruct;
}

export function policyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentToTerraform(struct?: PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentOutputReference | PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_v4: cdktf.booleanToTerraform(struct!.dhcpV4),
    dhcp_v6: cdktf.booleanToTerraform(struct!.dhcpV6),
    static_ipv4_pool: cdktf.stringToTerraform(struct!.staticIpv4Pool),
    static_ipv6_pool: cdktf.stringToTerraform(struct!.staticIpv6Pool),
    static_ipv4_list: policyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv4ListStructToTerraform(struct!.staticIpv4List),
    static_ipv6_list: policyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv6ListStructToTerraform(struct!.staticIpv6List),
  }
}


export function policyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentToHclTerraform(struct?: PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentOutputReference | PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_v4: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpV4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dhcp_v6: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpV6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_ipv4_pool: {
      value: cdktf.stringToHclTerraform(struct!.staticIpv4Pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_ipv6_pool: {
      value: cdktf.stringToHclTerraform(struct!.staticIpv6Pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_ipv4_list: {
      value: policyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv4ListStructToHclTerraform(struct!.staticIpv4List),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv4ListStructList",
    },
    static_ipv6_list: {
      value: policyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv6ListStructToHclTerraform(struct!.staticIpv6List),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv6ListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpV4 = this._dhcpV4;
    }
    if (this._dhcpV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpV6 = this._dhcpV6;
    }
    if (this._staticIpv4Pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv4Pool = this._staticIpv4Pool;
    }
    if (this._staticIpv6Pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6Pool = this._staticIpv6Pool;
    }
    if (this._staticIpv4List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv4List = this._staticIpv4List?.internalValue;
    }
    if (this._staticIpv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6List = this._staticIpv6List?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhcpV4 = undefined;
      this._dhcpV6 = undefined;
      this._staticIpv4Pool = undefined;
      this._staticIpv6Pool = undefined;
      this._staticIpv4List.internalValue = undefined;
      this._staticIpv6List.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhcpV4 = value.dhcpV4;
      this._dhcpV6 = value.dhcpV6;
      this._staticIpv4Pool = value.staticIpv4Pool;
      this._staticIpv6Pool = value.staticIpv6Pool;
      this._staticIpv4List.internalValue = value.staticIpv4List;
      this._staticIpv6List.internalValue = value.staticIpv6List;
    }
  }

  // dhcp_v4 - computed: false, optional: true, required: false
  private _dhcpV4?: boolean | cdktf.IResolvable; 
  public get dhcpV4() {
    return this.getBooleanAttribute('dhcp_v4');
  }
  public set dhcpV4(value: boolean | cdktf.IResolvable) {
    this._dhcpV4 = value;
  }
  public resetDhcpV4() {
    this._dhcpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpV4Input() {
    return this._dhcpV4;
  }

  // dhcp_v6 - computed: false, optional: true, required: false
  private _dhcpV6?: boolean | cdktf.IResolvable; 
  public get dhcpV6() {
    return this.getBooleanAttribute('dhcp_v6');
  }
  public set dhcpV6(value: boolean | cdktf.IResolvable) {
    this._dhcpV6 = value;
  }
  public resetDhcpV6() {
    this._dhcpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpV6Input() {
    return this._dhcpV6;
  }

  // static_ipv4_pool - computed: false, optional: true, required: false
  private _staticIpv4Pool?: string; 
  public get staticIpv4Pool() {
    return this.getStringAttribute('static_ipv4_pool');
  }
  public set staticIpv4Pool(value: string) {
    this._staticIpv4Pool = value;
  }
  public resetStaticIpv4Pool() {
    this._staticIpv4Pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv4PoolInput() {
    return this._staticIpv4Pool;
  }

  // static_ipv6_pool - computed: false, optional: true, required: false
  private _staticIpv6Pool?: string; 
  public get staticIpv6Pool() {
    return this.getStringAttribute('static_ipv6_pool');
  }
  public set staticIpv6Pool(value: string) {
    this._staticIpv6Pool = value;
  }
  public resetStaticIpv6Pool() {
    this._staticIpv6Pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6PoolInput() {
    return this._staticIpv6Pool;
  }

  // static_ipv4_list - computed: false, optional: true, required: false
  private _staticIpv4List = new PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv4ListStructOutputReference(this, "static_ipv4_list");
  public get staticIpv4List() {
    return this._staticIpv4List;
  }
  public putStaticIpv4List(value: PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv4ListStruct) {
    this._staticIpv4List.internalValue = value;
  }
  public resetStaticIpv4List() {
    this._staticIpv4List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv4ListInput() {
    return this._staticIpv4List.internalValue;
  }

  // static_ipv6_list - computed: false, optional: true, required: false
  private _staticIpv6List = new PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv6ListStructOutputReference(this, "static_ipv6_list");
  public get staticIpv6List() {
    return this._staticIpv6List;
  }
  public putStaticIpv6List(value: PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentStaticIpv6ListStruct) {
    this._staticIpv6List.internalValue = value;
  }
  public resetStaticIpv6List() {
    this._staticIpv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6ListInput() {
    return this._staticIpv6List.internalValue;
  }
}
export interface PolicyEdgeTransportNodeSwitchTunnelEndpoint {
  /**
  * VLAN ID for tunnel endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#vlan PolicyEdgeTransportNode#vlan}
  */
  readonly vlan?: number;
  /**
  * ip_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#ip_assignment PolicyEdgeTransportNode#ip_assignment}
  */
  readonly ipAssignment: PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignment;
}

export function policyEdgeTransportNodeSwitchTunnelEndpointToTerraform(struct?: PolicyEdgeTransportNodeSwitchTunnelEndpointOutputReference | PolicyEdgeTransportNodeSwitchTunnelEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlan: cdktf.numberToTerraform(struct!.vlan),
    ip_assignment: policyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentToTerraform(struct!.ipAssignment),
  }
}


export function policyEdgeTransportNodeSwitchTunnelEndpointToHclTerraform(struct?: PolicyEdgeTransportNodeSwitchTunnelEndpointOutputReference | PolicyEdgeTransportNodeSwitchTunnelEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_assignment: {
      value: policyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentToHclTerraform(struct!.ipAssignment),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeTransportNodeSwitchTunnelEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyEdgeTransportNodeSwitchTunnelEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._ipAssignment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAssignment = this._ipAssignment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeTransportNodeSwitchTunnelEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vlan = undefined;
      this._ipAssignment.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vlan = value.vlan;
      this._ipAssignment.internalValue = value.ipAssignment;
    }
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // ip_assignment - computed: false, optional: false, required: true
  private _ipAssignment = new PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignmentOutputReference(this, "ip_assignment");
  public get ipAssignment() {
    return this._ipAssignment;
  }
  public putIpAssignment(value: PolicyEdgeTransportNodeSwitchTunnelEndpointIpAssignment) {
    this._ipAssignment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAssignmentInput() {
    return this._ipAssignment.internalValue;
  }
}
export interface PolicyEdgeTransportNodeSwitch {
  /**
  * LLDP Host Switch Profile Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#lldp_host_switch_profile_path PolicyEdgeTransportNode#lldp_host_switch_profile_path}
  */
  readonly lldpHostSwitchProfilePath?: string;
  /**
  * An overlay TransportZone path that is associated with the specified edge TN switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#overlay_transport_zone_path PolicyEdgeTransportNode#overlay_transport_zone_path}
  */
  readonly overlayTransportZonePath?: string;
  /**
  * Edge Tn switch name. This name will be used to reference an edge TN switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#switch_name PolicyEdgeTransportNode#switch_name}
  */
  readonly switchName?: string;
  /**
  * Uplink Host Switch Profile Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#uplink_host_switch_profile_path PolicyEdgeTransportNode#uplink_host_switch_profile_path}
  */
  readonly uplinkHostSwitchProfilePath?: string;
  /**
  * List of Vlan TransportZone paths that are to be associated with specified edge TN switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#vlan_transport_zone_paths PolicyEdgeTransportNode#vlan_transport_zone_paths}
  */
  readonly vlanTransportZonePaths?: string[];
  /**
  * pnic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#pnic PolicyEdgeTransportNode#pnic}
  */
  readonly pnic: PolicyEdgeTransportNodeSwitchPnic[] | cdktf.IResolvable;
  /**
  * tunnel_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#tunnel_endpoint PolicyEdgeTransportNode#tunnel_endpoint}
  */
  readonly tunnelEndpoint?: PolicyEdgeTransportNodeSwitchTunnelEndpoint;
}

export function policyEdgeTransportNodeSwitchToTerraform(struct?: PolicyEdgeTransportNodeSwitch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lldp_host_switch_profile_path: cdktf.stringToTerraform(struct!.lldpHostSwitchProfilePath),
    overlay_transport_zone_path: cdktf.stringToTerraform(struct!.overlayTransportZonePath),
    switch_name: cdktf.stringToTerraform(struct!.switchName),
    uplink_host_switch_profile_path: cdktf.stringToTerraform(struct!.uplinkHostSwitchProfilePath),
    vlan_transport_zone_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vlanTransportZonePaths),
    pnic: cdktf.listMapper(policyEdgeTransportNodeSwitchPnicToTerraform, true)(struct!.pnic),
    tunnel_endpoint: policyEdgeTransportNodeSwitchTunnelEndpointToTerraform(struct!.tunnelEndpoint),
  }
}


export function policyEdgeTransportNodeSwitchToHclTerraform(struct?: PolicyEdgeTransportNodeSwitch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lldp_host_switch_profile_path: {
      value: cdktf.stringToHclTerraform(struct!.lldpHostSwitchProfilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overlay_transport_zone_path: {
      value: cdktf.stringToHclTerraform(struct!.overlayTransportZonePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_name: {
      value: cdktf.stringToHclTerraform(struct!.switchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uplink_host_switch_profile_path: {
      value: cdktf.stringToHclTerraform(struct!.uplinkHostSwitchProfilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_transport_zone_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vlanTransportZonePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pnic: {
      value: cdktf.listMapperHcl(policyEdgeTransportNodeSwitchPnicToHclTerraform, true)(struct!.pnic),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyEdgeTransportNodeSwitchPnicList",
    },
    tunnel_endpoint: {
      value: policyEdgeTransportNodeSwitchTunnelEndpointToHclTerraform(struct!.tunnelEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyEdgeTransportNodeSwitchTunnelEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeTransportNodeSwitchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyEdgeTransportNodeSwitch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lldpHostSwitchProfilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.lldpHostSwitchProfilePath = this._lldpHostSwitchProfilePath;
    }
    if (this._overlayTransportZonePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlayTransportZonePath = this._overlayTransportZonePath;
    }
    if (this._switchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchName = this._switchName;
    }
    if (this._uplinkHostSwitchProfilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkHostSwitchProfilePath = this._uplinkHostSwitchProfilePath;
    }
    if (this._vlanTransportZonePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanTransportZonePaths = this._vlanTransportZonePaths;
    }
    if (this._pnic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pnic = this._pnic?.internalValue;
    }
    if (this._tunnelEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelEndpoint = this._tunnelEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeTransportNodeSwitch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lldpHostSwitchProfilePath = undefined;
      this._overlayTransportZonePath = undefined;
      this._switchName = undefined;
      this._uplinkHostSwitchProfilePath = undefined;
      this._vlanTransportZonePaths = undefined;
      this._pnic.internalValue = undefined;
      this._tunnelEndpoint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lldpHostSwitchProfilePath = value.lldpHostSwitchProfilePath;
      this._overlayTransportZonePath = value.overlayTransportZonePath;
      this._switchName = value.switchName;
      this._uplinkHostSwitchProfilePath = value.uplinkHostSwitchProfilePath;
      this._vlanTransportZonePaths = value.vlanTransportZonePaths;
      this._pnic.internalValue = value.pnic;
      this._tunnelEndpoint.internalValue = value.tunnelEndpoint;
    }
  }

  // lldp_host_switch_profile_path - computed: true, optional: true, required: false
  private _lldpHostSwitchProfilePath?: string; 
  public get lldpHostSwitchProfilePath() {
    return this.getStringAttribute('lldp_host_switch_profile_path');
  }
  public set lldpHostSwitchProfilePath(value: string) {
    this._lldpHostSwitchProfilePath = value;
  }
  public resetLldpHostSwitchProfilePath() {
    this._lldpHostSwitchProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpHostSwitchProfilePathInput() {
    return this._lldpHostSwitchProfilePath;
  }

  // overlay_transport_zone_path - computed: false, optional: true, required: false
  private _overlayTransportZonePath?: string; 
  public get overlayTransportZonePath() {
    return this.getStringAttribute('overlay_transport_zone_path');
  }
  public set overlayTransportZonePath(value: string) {
    this._overlayTransportZonePath = value;
  }
  public resetOverlayTransportZonePath() {
    this._overlayTransportZonePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayTransportZonePathInput() {
    return this._overlayTransportZonePath;
  }

  // switch_name - computed: false, optional: true, required: false
  private _switchName?: string; 
  public get switchName() {
    return this.getStringAttribute('switch_name');
  }
  public set switchName(value: string) {
    this._switchName = value;
  }
  public resetSwitchName() {
    this._switchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchNameInput() {
    return this._switchName;
  }

  // uplink_host_switch_profile_path - computed: true, optional: true, required: false
  private _uplinkHostSwitchProfilePath?: string; 
  public get uplinkHostSwitchProfilePath() {
    return this.getStringAttribute('uplink_host_switch_profile_path');
  }
  public set uplinkHostSwitchProfilePath(value: string) {
    this._uplinkHostSwitchProfilePath = value;
  }
  public resetUplinkHostSwitchProfilePath() {
    this._uplinkHostSwitchProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkHostSwitchProfilePathInput() {
    return this._uplinkHostSwitchProfilePath;
  }

  // vlan_transport_zone_paths - computed: false, optional: true, required: false
  private _vlanTransportZonePaths?: string[]; 
  public get vlanTransportZonePaths() {
    return this.getListAttribute('vlan_transport_zone_paths');
  }
  public set vlanTransportZonePaths(value: string[]) {
    this._vlanTransportZonePaths = value;
  }
  public resetVlanTransportZonePaths() {
    this._vlanTransportZonePaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTransportZonePathsInput() {
    return this._vlanTransportZonePaths;
  }

  // pnic - computed: false, optional: false, required: true
  private _pnic = new PolicyEdgeTransportNodeSwitchPnicList(this, "pnic", false);
  public get pnic() {
    return this._pnic;
  }
  public putPnic(value: PolicyEdgeTransportNodeSwitchPnic[] | cdktf.IResolvable) {
    this._pnic.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pnicInput() {
    return this._pnic.internalValue;
  }

  // tunnel_endpoint - computed: false, optional: true, required: false
  private _tunnelEndpoint = new PolicyEdgeTransportNodeSwitchTunnelEndpointOutputReference(this, "tunnel_endpoint");
  public get tunnelEndpoint() {
    return this._tunnelEndpoint;
  }
  public putTunnelEndpoint(value: PolicyEdgeTransportNodeSwitchTunnelEndpoint) {
    this._tunnelEndpoint.internalValue = value;
  }
  public resetTunnelEndpoint() {
    this._tunnelEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelEndpointInput() {
    return this._tunnelEndpoint.internalValue;
  }
}

export class PolicyEdgeTransportNodeSwitchList extends cdktf.ComplexList {
  public internalValue? : PolicyEdgeTransportNodeSwitch[] | cdktf.IResolvable

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
  public get(index: number): PolicyEdgeTransportNodeSwitchOutputReference {
    return new PolicyEdgeTransportNodeSwitchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyEdgeTransportNodeTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#scope PolicyEdgeTransportNode#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#tag PolicyEdgeTransportNode#tag}
  */
  readonly tag?: string;
}

export function policyEdgeTransportNodeTagToTerraform(struct?: PolicyEdgeTransportNodeTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyEdgeTransportNodeTagToHclTerraform(struct?: PolicyEdgeTransportNodeTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeTransportNodeTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyEdgeTransportNodeTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeTransportNodeTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PolicyEdgeTransportNodeTagList extends cdktf.ComplexList {
  public internalValue? : PolicyEdgeTransportNodeTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyEdgeTransportNodeTagOutputReference {
    return new PolicyEdgeTransportNodeTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyEdgeTransportNodeVmDeploymentConfigEdgeHostAffinityConfig {
  /**
  * Host group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#host_group_name PolicyEdgeTransportNode#host_group_name}
  */
  readonly hostGroupName: string;
}

export function policyEdgeTransportNodeVmDeploymentConfigEdgeHostAffinityConfigToTerraform(struct?: PolicyEdgeTransportNodeVmDeploymentConfigEdgeHostAffinityConfigOutputReference | PolicyEdgeTransportNodeVmDeploymentConfigEdgeHostAffinityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_group_name: cdktf.stringToTerraform(struct!.hostGroupName),
  }
}


export function policyEdgeTransportNodeVmDeploymentConfigEdgeHostAffinityConfigToHclTerraform(struct?: PolicyEdgeTransportNodeVmDeploymentConfigEdgeHostAffinityConfigOutputReference | PolicyEdgeTransportNodeVmDeploymentConfigEdgeHostAffinityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_group_name: {
      value: cdktf.stringToHclTerraform(struct!.hostGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeTransportNodeVmDeploymentConfigEdgeHostAffinityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyEdgeTransportNodeVmDeploymentConfigEdgeHostAffinityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostGroupName = this._hostGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeTransportNodeVmDeploymentConfigEdgeHostAffinityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostGroupName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostGroupName = value.hostGroupName;
    }
  }

  // host_group_name - computed: false, optional: false, required: true
  private _hostGroupName?: string; 
  public get hostGroupName() {
    return this.getStringAttribute('host_group_name');
  }
  public set hostGroupName(value: string) {
    this._hostGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupNameInput() {
    return this._hostGroupName;
  }
}
export interface PolicyEdgeTransportNodeVmDeploymentConfigReservationInfo {
  /**
  * CPU reservation in MHz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#cpu_reservation_in_mhz PolicyEdgeTransportNode#cpu_reservation_in_mhz}
  */
  readonly cpuReservationInMhz?: number;
  /**
  * CPU reservation in shares
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#cpu_reservation_in_shares PolicyEdgeTransportNode#cpu_reservation_in_shares}
  */
  readonly cpuReservationInShares?: string;
  /**
  * Memory reservation percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#memory_reservation_percentage PolicyEdgeTransportNode#memory_reservation_percentage}
  */
  readonly memoryReservationPercentage?: number;
}

export function policyEdgeTransportNodeVmDeploymentConfigReservationInfoToTerraform(struct?: PolicyEdgeTransportNodeVmDeploymentConfigReservationInfoOutputReference | PolicyEdgeTransportNodeVmDeploymentConfigReservationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_reservation_in_mhz: cdktf.numberToTerraform(struct!.cpuReservationInMhz),
    cpu_reservation_in_shares: cdktf.stringToTerraform(struct!.cpuReservationInShares),
    memory_reservation_percentage: cdktf.numberToTerraform(struct!.memoryReservationPercentage),
  }
}


export function policyEdgeTransportNodeVmDeploymentConfigReservationInfoToHclTerraform(struct?: PolicyEdgeTransportNodeVmDeploymentConfigReservationInfoOutputReference | PolicyEdgeTransportNodeVmDeploymentConfigReservationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_reservation_in_mhz: {
      value: cdktf.numberToHclTerraform(struct!.cpuReservationInMhz),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_reservation_in_shares: {
      value: cdktf.stringToHclTerraform(struct!.cpuReservationInShares),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_reservation_percentage: {
      value: cdktf.numberToHclTerraform(struct!.memoryReservationPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeTransportNodeVmDeploymentConfigReservationInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyEdgeTransportNodeVmDeploymentConfigReservationInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuReservationInMhz !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuReservationInMhz = this._cpuReservationInMhz;
    }
    if (this._cpuReservationInShares !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuReservationInShares = this._cpuReservationInShares;
    }
    if (this._memoryReservationPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryReservationPercentage = this._memoryReservationPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeTransportNodeVmDeploymentConfigReservationInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuReservationInMhz = undefined;
      this._cpuReservationInShares = undefined;
      this._memoryReservationPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuReservationInMhz = value.cpuReservationInMhz;
      this._cpuReservationInShares = value.cpuReservationInShares;
      this._memoryReservationPercentage = value.memoryReservationPercentage;
    }
  }

  // cpu_reservation_in_mhz - computed: false, optional: true, required: false
  private _cpuReservationInMhz?: number; 
  public get cpuReservationInMhz() {
    return this.getNumberAttribute('cpu_reservation_in_mhz');
  }
  public set cpuReservationInMhz(value: number) {
    this._cpuReservationInMhz = value;
  }
  public resetCpuReservationInMhz() {
    this._cpuReservationInMhz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuReservationInMhzInput() {
    return this._cpuReservationInMhz;
  }

  // cpu_reservation_in_shares - computed: false, optional: true, required: false
  private _cpuReservationInShares?: string; 
  public get cpuReservationInShares() {
    return this.getStringAttribute('cpu_reservation_in_shares');
  }
  public set cpuReservationInShares(value: string) {
    this._cpuReservationInShares = value;
  }
  public resetCpuReservationInShares() {
    this._cpuReservationInShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuReservationInSharesInput() {
    return this._cpuReservationInShares;
  }

  // memory_reservation_percentage - computed: false, optional: true, required: false
  private _memoryReservationPercentage?: number; 
  public get memoryReservationPercentage() {
    return this.getNumberAttribute('memory_reservation_percentage');
  }
  public set memoryReservationPercentage(value: number) {
    this._memoryReservationPercentage = value;
  }
  public resetMemoryReservationPercentage() {
    this._memoryReservationPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryReservationPercentageInput() {
    return this._memoryReservationPercentage;
  }
}
export interface PolicyEdgeTransportNodeVmDeploymentConfig {
  /**
  * Compute folder identifier in the specified vcenter server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#compute_folder_id PolicyEdgeTransportNode#compute_folder_id}
  */
  readonly computeFolderId?: string;
  /**
  * Cluster identifier for specified vcenter server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#compute_id PolicyEdgeTransportNode#compute_id}
  */
  readonly computeId: string;
  /**
  * Vsphere compute identifier for identifying the vcenter server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#compute_manager_id PolicyEdgeTransportNode#compute_manager_id}
  */
  readonly computeManagerId: string;
  /**
  * Host identifier in the specified vcenter server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#host_id PolicyEdgeTransportNode#host_id}
  */
  readonly hostId?: string;
  /**
  * Storage/datastore identifier in the specified vcenter server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#storage_id PolicyEdgeTransportNode#storage_id}
  */
  readonly storageId: string;
  /**
  * edge_host_affinity_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#edge_host_affinity_config PolicyEdgeTransportNode#edge_host_affinity_config}
  */
  readonly edgeHostAffinityConfig?: PolicyEdgeTransportNodeVmDeploymentConfigEdgeHostAffinityConfig;
  /**
  * reservation_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#reservation_info PolicyEdgeTransportNode#reservation_info}
  */
  readonly reservationInfo?: PolicyEdgeTransportNodeVmDeploymentConfigReservationInfo;
}

export function policyEdgeTransportNodeVmDeploymentConfigToTerraform(struct?: PolicyEdgeTransportNodeVmDeploymentConfigOutputReference | PolicyEdgeTransportNodeVmDeploymentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_folder_id: cdktf.stringToTerraform(struct!.computeFolderId),
    compute_id: cdktf.stringToTerraform(struct!.computeId),
    compute_manager_id: cdktf.stringToTerraform(struct!.computeManagerId),
    host_id: cdktf.stringToTerraform(struct!.hostId),
    storage_id: cdktf.stringToTerraform(struct!.storageId),
    edge_host_affinity_config: policyEdgeTransportNodeVmDeploymentConfigEdgeHostAffinityConfigToTerraform(struct!.edgeHostAffinityConfig),
    reservation_info: policyEdgeTransportNodeVmDeploymentConfigReservationInfoToTerraform(struct!.reservationInfo),
  }
}


export function policyEdgeTransportNodeVmDeploymentConfigToHclTerraform(struct?: PolicyEdgeTransportNodeVmDeploymentConfigOutputReference | PolicyEdgeTransportNodeVmDeploymentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_folder_id: {
      value: cdktf.stringToHclTerraform(struct!.computeFolderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_id: {
      value: cdktf.stringToHclTerraform(struct!.computeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_manager_id: {
      value: cdktf.stringToHclTerraform(struct!.computeManagerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_id: {
      value: cdktf.stringToHclTerraform(struct!.hostId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_id: {
      value: cdktf.stringToHclTerraform(struct!.storageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edge_host_affinity_config: {
      value: policyEdgeTransportNodeVmDeploymentConfigEdgeHostAffinityConfigToHclTerraform(struct!.edgeHostAffinityConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyEdgeTransportNodeVmDeploymentConfigEdgeHostAffinityConfigList",
    },
    reservation_info: {
      value: policyEdgeTransportNodeVmDeploymentConfigReservationInfoToHclTerraform(struct!.reservationInfo),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyEdgeTransportNodeVmDeploymentConfigReservationInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeTransportNodeVmDeploymentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyEdgeTransportNodeVmDeploymentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeFolderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeFolderId = this._computeFolderId;
    }
    if (this._computeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeId = this._computeId;
    }
    if (this._computeManagerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeManagerId = this._computeManagerId;
    }
    if (this._hostId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostId = this._hostId;
    }
    if (this._storageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageId = this._storageId;
    }
    if (this._edgeHostAffinityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeHostAffinityConfig = this._edgeHostAffinityConfig?.internalValue;
    }
    if (this._reservationInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationInfo = this._reservationInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeTransportNodeVmDeploymentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeFolderId = undefined;
      this._computeId = undefined;
      this._computeManagerId = undefined;
      this._hostId = undefined;
      this._storageId = undefined;
      this._edgeHostAffinityConfig.internalValue = undefined;
      this._reservationInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeFolderId = value.computeFolderId;
      this._computeId = value.computeId;
      this._computeManagerId = value.computeManagerId;
      this._hostId = value.hostId;
      this._storageId = value.storageId;
      this._edgeHostAffinityConfig.internalValue = value.edgeHostAffinityConfig;
      this._reservationInfo.internalValue = value.reservationInfo;
    }
  }

  // compute_folder_id - computed: false, optional: true, required: false
  private _computeFolderId?: string; 
  public get computeFolderId() {
    return this.getStringAttribute('compute_folder_id');
  }
  public set computeFolderId(value: string) {
    this._computeFolderId = value;
  }
  public resetComputeFolderId() {
    this._computeFolderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeFolderIdInput() {
    return this._computeFolderId;
  }

  // compute_id - computed: false, optional: false, required: true
  private _computeId?: string; 
  public get computeId() {
    return this.getStringAttribute('compute_id');
  }
  public set computeId(value: string) {
    this._computeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeIdInput() {
    return this._computeId;
  }

  // compute_manager_id - computed: false, optional: false, required: true
  private _computeManagerId?: string; 
  public get computeManagerId() {
    return this.getStringAttribute('compute_manager_id');
  }
  public set computeManagerId(value: string) {
    this._computeManagerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeManagerIdInput() {
    return this._computeManagerId;
  }

  // host_id - computed: false, optional: true, required: false
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
  }

  // storage_id - computed: false, optional: false, required: true
  private _storageId?: string; 
  public get storageId() {
    return this.getStringAttribute('storage_id');
  }
  public set storageId(value: string) {
    this._storageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageIdInput() {
    return this._storageId;
  }

  // edge_host_affinity_config - computed: false, optional: true, required: false
  private _edgeHostAffinityConfig = new PolicyEdgeTransportNodeVmDeploymentConfigEdgeHostAffinityConfigOutputReference(this, "edge_host_affinity_config");
  public get edgeHostAffinityConfig() {
    return this._edgeHostAffinityConfig;
  }
  public putEdgeHostAffinityConfig(value: PolicyEdgeTransportNodeVmDeploymentConfigEdgeHostAffinityConfig) {
    this._edgeHostAffinityConfig.internalValue = value;
  }
  public resetEdgeHostAffinityConfig() {
    this._edgeHostAffinityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeHostAffinityConfigInput() {
    return this._edgeHostAffinityConfig.internalValue;
  }

  // reservation_info - computed: false, optional: true, required: false
  private _reservationInfo = new PolicyEdgeTransportNodeVmDeploymentConfigReservationInfoOutputReference(this, "reservation_info");
  public get reservationInfo() {
    return this._reservationInfo;
  }
  public putReservationInfo(value: PolicyEdgeTransportNodeVmDeploymentConfigReservationInfo) {
    this._reservationInfo.internalValue = value;
  }
  public resetReservationInfo() {
    this._reservationInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationInfoInput() {
    return this._reservationInfo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node nsxt_policy_edge_transport_node}
*/
export class PolicyEdgeTransportNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_edge_transport_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyEdgeTransportNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyEdgeTransportNode to import
  * @param importFromId The id of the existing PolicyEdgeTransportNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyEdgeTransportNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_edge_transport_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_transport_node nsxt_policy_edge_transport_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyEdgeTransportNodeConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyEdgeTransportNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_edge_transport_node',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.11.0',
        providerVersionConstraint: '3.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._enforcementPoint = config.enforcementPoint;
    this._failureDomainPath = config.failureDomainPath;
    this._formFactor = config.formFactor;
    this._hostname = config.hostname;
    this._id = config.id;
    this._nodeId = config.nodeId;
    this._nsxId = config.nsxId;
    this._sitePath = config.sitePath;
    this._advancedConfiguration.internalValue = config.advancedConfiguration;
    this._applianceConfig.internalValue = config.applianceConfig;
    this._credentials.internalValue = config.credentials;
    this._managementInterface.internalValue = config.managementInterface;
    this._switch.internalValue = config.switch;
    this._tag.internalValue = config.tag;
    this._vmDeploymentConfig.internalValue = config.vmDeploymentConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enforcement_point - computed: false, optional: true, required: false
  private _enforcementPoint?: string; 
  public get enforcementPoint() {
    return this.getStringAttribute('enforcement_point');
  }
  public set enforcementPoint(value: string) {
    this._enforcementPoint = value;
  }
  public resetEnforcementPoint() {
    this._enforcementPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementPointInput() {
    return this._enforcementPoint;
  }

  // failure_domain_path - computed: true, optional: true, required: false
  private _failureDomainPath?: string; 
  public get failureDomainPath() {
    return this.getStringAttribute('failure_domain_path');
  }
  public set failureDomainPath(value: string) {
    this._failureDomainPath = value;
  }
  public resetFailureDomainPath() {
    this._failureDomainPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureDomainPathInput() {
    return this._failureDomainPath;
  }

  // form_factor - computed: false, optional: true, required: false
  private _formFactor?: string; 
  public get formFactor() {
    return this.getStringAttribute('form_factor');
  }
  public set formFactor(value: string) {
    this._formFactor = value;
  }
  public resetFormFactor() {
    this._formFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formFactorInput() {
    return this._formFactor;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // node_id - computed: true, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // nsx_id - computed: true, optional: true, required: false
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  public resetNsxId() {
    this._nsxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // site_path - computed: false, optional: true, required: false
  private _sitePath?: string; 
  public get sitePath() {
    return this.getStringAttribute('site_path');
  }
  public set sitePath(value: string) {
    this._sitePath = value;
  }
  public resetSitePath() {
    this._sitePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitePathInput() {
    return this._sitePath;
  }

  // advanced_configuration - computed: false, optional: true, required: false
  private _advancedConfiguration = new PolicyEdgeTransportNodeAdvancedConfigurationList(this, "advanced_configuration", false);
  public get advancedConfiguration() {
    return this._advancedConfiguration;
  }
  public putAdvancedConfiguration(value: PolicyEdgeTransportNodeAdvancedConfiguration[] | cdktf.IResolvable) {
    this._advancedConfiguration.internalValue = value;
  }
  public resetAdvancedConfiguration() {
    this._advancedConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConfigurationInput() {
    return this._advancedConfiguration.internalValue;
  }

  // appliance_config - computed: false, optional: true, required: false
  private _applianceConfig = new PolicyEdgeTransportNodeApplianceConfigOutputReference(this, "appliance_config");
  public get applianceConfig() {
    return this._applianceConfig;
  }
  public putApplianceConfig(value: PolicyEdgeTransportNodeApplianceConfig) {
    this._applianceConfig.internalValue = value;
  }
  public resetApplianceConfig() {
    this._applianceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applianceConfigInput() {
    return this._applianceConfig.internalValue;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new PolicyEdgeTransportNodeCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: PolicyEdgeTransportNodeCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // management_interface - computed: false, optional: true, required: false
  private _managementInterface = new PolicyEdgeTransportNodeManagementInterfaceOutputReference(this, "management_interface");
  public get managementInterface() {
    return this._managementInterface;
  }
  public putManagementInterface(value: PolicyEdgeTransportNodeManagementInterface) {
    this._managementInterface.internalValue = value;
  }
  public resetManagementInterface() {
    this._managementInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInterfaceInput() {
    return this._managementInterface.internalValue;
  }

  // switch - computed: false, optional: false, required: true
  private _switch = new PolicyEdgeTransportNodeSwitchList(this, "switch", false);
  public get switch() {
    return this._switch;
  }
  public putSwitch(value: PolicyEdgeTransportNodeSwitch[] | cdktf.IResolvable) {
    this._switch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyEdgeTransportNodeTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyEdgeTransportNodeTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // vm_deployment_config - computed: false, optional: true, required: false
  private _vmDeploymentConfig = new PolicyEdgeTransportNodeVmDeploymentConfigOutputReference(this, "vm_deployment_config");
  public get vmDeploymentConfig() {
    return this._vmDeploymentConfig;
  }
  public putVmDeploymentConfig(value: PolicyEdgeTransportNodeVmDeploymentConfig) {
    this._vmDeploymentConfig.internalValue = value;
  }
  public resetVmDeploymentConfig() {
    this._vmDeploymentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmDeploymentConfigInput() {
    return this._vmDeploymentConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enforcement_point: cdktf.stringToTerraform(this._enforcementPoint),
      failure_domain_path: cdktf.stringToTerraform(this._failureDomainPath),
      form_factor: cdktf.stringToTerraform(this._formFactor),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      node_id: cdktf.stringToTerraform(this._nodeId),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      site_path: cdktf.stringToTerraform(this._sitePath),
      advanced_configuration: cdktf.listMapper(policyEdgeTransportNodeAdvancedConfigurationToTerraform, true)(this._advancedConfiguration.internalValue),
      appliance_config: policyEdgeTransportNodeApplianceConfigToTerraform(this._applianceConfig.internalValue),
      credentials: policyEdgeTransportNodeCredentialsToTerraform(this._credentials.internalValue),
      management_interface: policyEdgeTransportNodeManagementInterfaceToTerraform(this._managementInterface.internalValue),
      switch: cdktf.listMapper(policyEdgeTransportNodeSwitchToTerraform, true)(this._switch.internalValue),
      tag: cdktf.listMapper(policyEdgeTransportNodeTagToTerraform, true)(this._tag.internalValue),
      vm_deployment_config: policyEdgeTransportNodeVmDeploymentConfigToTerraform(this._vmDeploymentConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforcement_point: {
        value: cdktf.stringToHclTerraform(this._enforcementPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failure_domain_path: {
        value: cdktf.stringToHclTerraform(this._failureDomainPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      form_factor: {
        value: cdktf.stringToHclTerraform(this._formFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      node_id: {
        value: cdktf.stringToHclTerraform(this._nodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_path: {
        value: cdktf.stringToHclTerraform(this._sitePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_configuration: {
        value: cdktf.listMapperHcl(policyEdgeTransportNodeAdvancedConfigurationToHclTerraform, true)(this._advancedConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyEdgeTransportNodeAdvancedConfigurationList",
      },
      appliance_config: {
        value: policyEdgeTransportNodeApplianceConfigToHclTerraform(this._applianceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyEdgeTransportNodeApplianceConfigList",
      },
      credentials: {
        value: policyEdgeTransportNodeCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyEdgeTransportNodeCredentialsList",
      },
      management_interface: {
        value: policyEdgeTransportNodeManagementInterfaceToHclTerraform(this._managementInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyEdgeTransportNodeManagementInterfaceList",
      },
      switch: {
        value: cdktf.listMapperHcl(policyEdgeTransportNodeSwitchToHclTerraform, true)(this._switch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyEdgeTransportNodeSwitchList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyEdgeTransportNodeTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyEdgeTransportNodeTagList",
      },
      vm_deployment_config: {
        value: policyEdgeTransportNodeVmDeploymentConfigToHclTerraform(this._vmDeploymentConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyEdgeTransportNodeVmDeploymentConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
