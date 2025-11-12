// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FastHttpsAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of FAST HTTPS application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#application FastHttpsApp#application}
  */
  readonly application: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#endpoint_ltm_policy FastHttpsApp#endpoint_ltm_policy}
  */
  readonly endpointLtmPolicy?: string[];
  /**
  * Select an existing BIG-IP HTTPS pool monitor. Monitors are used to determine the health of the application on each server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#existing_monitor FastHttpsApp#existing_monitor}
  */
  readonly existingMonitor?: string;
  /**
  * Select an existing BIG-IP Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#existing_pool FastHttpsApp#existing_pool}
  */
  readonly existingPool?: string;
  /**
  * name of an existing BIG-IP SNAT pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#existing_snat_pool FastHttpsApp#existing_snat_pool}
  */
  readonly existingSnatPool?: string;
  /**
  * Select an existing TLS client profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#existing_tls_client_profile FastHttpsApp#existing_tls_client_profile}
  */
  readonly existingTlsClientProfile?: string;
  /**
  * Select an existing TLS server profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#existing_tls_server_profile FastHttpsApp#existing_tls_server_profile}
  */
  readonly existingTlsServerProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#existing_waf_security_policy FastHttpsApp#existing_waf_security_policy}
  */
  readonly existingWafSecurityPolicy?: string;
  /**
  * Type of fallback persistence record to be created for each new client connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#fallback_persistence FastHttpsApp#fallback_persistence}
  */
  readonly fallbackPersistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#id FastHttpsApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#load_balancing_mode FastHttpsApp#load_balancing_mode}
  */
  readonly loadBalancingMode?: string;
  /**
  * Name of an existing BIG-IP persistence profile to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#persistence_profile FastHttpsApp#persistence_profile}
  */
  readonly persistenceProfile?: string;
  /**
  * Type of persistence profile to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#persistence_type FastHttpsApp#persistence_type}
  */
  readonly persistenceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#security_log_profiles FastHttpsApp#security_log_profiles}
  */
  readonly securityLogProfiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#service_discovery FastHttpsApp#service_discovery}
  */
  readonly serviceDiscovery?: string[];
  /**
  * none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#slow_ramp_time FastHttpsApp#slow_ramp_time}
  */
  readonly slowRampTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#snat_pool_address FastHttpsApp#snat_pool_address}
  */
  readonly snatPoolAddress?: string[];
  /**
  * Name of FAST HTTPS application tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#tenant FastHttpsApp#tenant}
  */
  readonly tenant: string;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#monitor FastHttpsApp#monitor}
  */
  readonly monitor?: FastHttpsAppMonitor;
  /**
  * pool_members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#pool_members FastHttpsApp#pool_members}
  */
  readonly poolMembers?: FastHttpsAppPoolMembers[] | cdktf.IResolvable;
  /**
  * tls_client_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#tls_client_profile FastHttpsApp#tls_client_profile}
  */
  readonly tlsClientProfile?: FastHttpsAppTlsClientProfile;
  /**
  * tls_server_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#tls_server_profile FastHttpsApp#tls_server_profile}
  */
  readonly tlsServerProfile?: FastHttpsAppTlsServerProfile;
  /**
  * virtual_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#virtual_server FastHttpsApp#virtual_server}
  */
  readonly virtualServer?: FastHttpsAppVirtualServer;
  /**
  * waf_security_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#waf_security_policy FastHttpsApp#waf_security_policy}
  */
  readonly wafSecurityPolicy?: FastHttpsAppWafSecurityPolicy;
}
export interface FastHttpsAppMonitor {
  /**
  * Set the time between health checks, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#interval FastHttpsApp#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#monitor_auth FastHttpsApp#monitor_auth}
  */
  readonly monitorAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#password FastHttpsApp#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#response FastHttpsApp#response}
  */
  readonly response?: string;
  /**
  * Optional data to be sent during each health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#send_string FastHttpsApp#send_string}
  */
  readonly sendString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#username FastHttpsApp#username}
  */
  readonly username?: string;
}

export function fastHttpsAppMonitorToTerraform(struct?: FastHttpsAppMonitorOutputReference | FastHttpsAppMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    monitor_auth: cdktf.booleanToTerraform(struct!.monitorAuth),
    password: cdktf.stringToTerraform(struct!.password),
    response: cdktf.stringToTerraform(struct!.response),
    send_string: cdktf.stringToTerraform(struct!.sendString),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function fastHttpsAppMonitorToHclTerraform(struct?: FastHttpsAppMonitorOutputReference | FastHttpsAppMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_auth: {
      value: cdktf.booleanToHclTerraform(struct!.monitorAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response: {
      value: cdktf.stringToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_string: {
      value: cdktf.stringToHclTerraform(struct!.sendString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class FastHttpsAppMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastHttpsAppMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._monitorAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorAuth = this._monitorAuth;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    if (this._sendString !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendString = this._sendString;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastHttpsAppMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._monitorAuth = undefined;
      this._password = undefined;
      this._response = undefined;
      this._sendString = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._monitorAuth = value.monitorAuth;
      this._password = value.password;
      this._response = value.response;
      this._sendString = value.sendString;
      this._username = value.username;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // monitor_auth - computed: false, optional: true, required: false
  private _monitorAuth?: boolean | cdktf.IResolvable; 
  public get monitorAuth() {
    return this.getBooleanAttribute('monitor_auth');
  }
  public set monitorAuth(value: boolean | cdktf.IResolvable) {
    this._monitorAuth = value;
  }
  public resetMonitorAuth() {
    this._monitorAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorAuthInput() {
    return this._monitorAuth;
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

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }

  // send_string - computed: false, optional: true, required: false
  private _sendString?: string; 
  public get sendString() {
    return this.getStringAttribute('send_string');
  }
  public set sendString(value: string) {
    this._sendString = value;
  }
  public resetSendString() {
    this._sendString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendStringInput() {
    return this._sendString;
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
export interface FastHttpsAppPoolMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#addresses FastHttpsApp#addresses}
  */
  readonly addresses: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#connection_limit FastHttpsApp#connection_limit}
  */
  readonly connectionLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#port FastHttpsApp#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#priority_group FastHttpsApp#priority_group}
  */
  readonly priorityGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#share_nodes FastHttpsApp#share_nodes}
  */
  readonly shareNodes?: boolean | cdktf.IResolvable;
}

export function fastHttpsAppPoolMembersToTerraform(struct?: FastHttpsAppPoolMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    connection_limit: cdktf.numberToTerraform(struct!.connectionLimit),
    port: cdktf.numberToTerraform(struct!.port),
    priority_group: cdktf.numberToTerraform(struct!.priorityGroup),
    share_nodes: cdktf.booleanToTerraform(struct!.shareNodes),
  }
}


export function fastHttpsAppPoolMembersToHclTerraform(struct?: FastHttpsAppPoolMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    connection_limit: {
      value: cdktf.numberToHclTerraform(struct!.connectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_group: {
      value: cdktf.numberToHclTerraform(struct!.priorityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    share_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.shareNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastHttpsAppPoolMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FastHttpsAppPoolMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._connectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimit = this._connectionLimit;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priorityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityGroup = this._priorityGroup;
    }
    if (this._shareNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareNodes = this._shareNodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastHttpsAppPoolMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses = undefined;
      this._connectionLimit = undefined;
      this._port = undefined;
      this._priorityGroup = undefined;
      this._shareNodes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses = value.addresses;
      this._connectionLimit = value.connectionLimit;
      this._port = value.port;
      this._priorityGroup = value.priorityGroup;
      this._shareNodes = value.shareNodes;
    }
  }

  // addresses - computed: false, optional: false, required: true
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // connection_limit - computed: true, optional: true, required: false
  private _connectionLimit?: number; 
  public get connectionLimit() {
    return this.getNumberAttribute('connection_limit');
  }
  public set connectionLimit(value: number) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // priority_group - computed: true, optional: true, required: false
  private _priorityGroup?: number; 
  public get priorityGroup() {
    return this.getNumberAttribute('priority_group');
  }
  public set priorityGroup(value: number) {
    this._priorityGroup = value;
  }
  public resetPriorityGroup() {
    this._priorityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityGroupInput() {
    return this._priorityGroup;
  }

  // share_nodes - computed: true, optional: true, required: false
  private _shareNodes?: boolean | cdktf.IResolvable; 
  public get shareNodes() {
    return this.getBooleanAttribute('share_nodes');
  }
  public set shareNodes(value: boolean | cdktf.IResolvable) {
    this._shareNodes = value;
  }
  public resetShareNodes() {
    this._shareNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNodesInput() {
    return this._shareNodes;
  }
}

export class FastHttpsAppPoolMembersList extends cdktf.ComplexList {
  public internalValue? : FastHttpsAppPoolMembers[] | cdktf.IResolvable

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
  public get(index: number): FastHttpsAppPoolMembersOutputReference {
    return new FastHttpsAppPoolMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FastHttpsAppTlsClientProfile {
  /**
  * Select an existing BIG-IP SSL certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#tls_cert_name FastHttpsApp#tls_cert_name}
  */
  readonly tlsCertName: string;
  /**
  * Select an existing BIG-IP SSL key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#tls_key_name FastHttpsApp#tls_key_name}
  */
  readonly tlsKeyName: string;
}

export function fastHttpsAppTlsClientProfileToTerraform(struct?: FastHttpsAppTlsClientProfileOutputReference | FastHttpsAppTlsClientProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls_cert_name: cdktf.stringToTerraform(struct!.tlsCertName),
    tls_key_name: cdktf.stringToTerraform(struct!.tlsKeyName),
  }
}


export function fastHttpsAppTlsClientProfileToHclTerraform(struct?: FastHttpsAppTlsClientProfileOutputReference | FastHttpsAppTlsClientProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls_cert_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsCertName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_key_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastHttpsAppTlsClientProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastHttpsAppTlsClientProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tlsCertName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertName = this._tlsCertName;
    }
    if (this._tlsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsKeyName = this._tlsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastHttpsAppTlsClientProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tlsCertName = undefined;
      this._tlsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tlsCertName = value.tlsCertName;
      this._tlsKeyName = value.tlsKeyName;
    }
  }

  // tls_cert_name - computed: false, optional: false, required: true
  private _tlsCertName?: string; 
  public get tlsCertName() {
    return this.getStringAttribute('tls_cert_name');
  }
  public set tlsCertName(value: string) {
    this._tlsCertName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertNameInput() {
    return this._tlsCertName;
  }

  // tls_key_name - computed: false, optional: false, required: true
  private _tlsKeyName?: string; 
  public get tlsKeyName() {
    return this.getStringAttribute('tls_key_name');
  }
  public set tlsKeyName(value: string) {
    this._tlsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsKeyNameInput() {
    return this._tlsKeyName;
  }
}
export interface FastHttpsAppTlsServerProfile {
  /**
  * Select an existing BIG-IP SSL certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#tls_cert_name FastHttpsApp#tls_cert_name}
  */
  readonly tlsCertName: string;
  /**
  * Select an existing BIG-IP SSL key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#tls_key_name FastHttpsApp#tls_key_name}
  */
  readonly tlsKeyName: string;
}

export function fastHttpsAppTlsServerProfileToTerraform(struct?: FastHttpsAppTlsServerProfileOutputReference | FastHttpsAppTlsServerProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls_cert_name: cdktf.stringToTerraform(struct!.tlsCertName),
    tls_key_name: cdktf.stringToTerraform(struct!.tlsKeyName),
  }
}


export function fastHttpsAppTlsServerProfileToHclTerraform(struct?: FastHttpsAppTlsServerProfileOutputReference | FastHttpsAppTlsServerProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls_cert_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsCertName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_key_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastHttpsAppTlsServerProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastHttpsAppTlsServerProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tlsCertName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertName = this._tlsCertName;
    }
    if (this._tlsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsKeyName = this._tlsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastHttpsAppTlsServerProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tlsCertName = undefined;
      this._tlsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tlsCertName = value.tlsCertName;
      this._tlsKeyName = value.tlsKeyName;
    }
  }

  // tls_cert_name - computed: false, optional: false, required: true
  private _tlsCertName?: string; 
  public get tlsCertName() {
    return this.getStringAttribute('tls_cert_name');
  }
  public set tlsCertName(value: string) {
    this._tlsCertName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertNameInput() {
    return this._tlsCertName;
  }

  // tls_key_name - computed: false, optional: false, required: true
  private _tlsKeyName?: string; 
  public get tlsKeyName() {
    return this.getStringAttribute('tls_key_name');
  }
  public set tlsKeyName(value: string) {
    this._tlsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsKeyNameInput() {
    return this._tlsKeyName;
  }
}
export interface FastHttpsAppVirtualServer {
  /**
  * foo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#ip FastHttpsApp#ip}
  */
  readonly ip: string;
  /**
  * foo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#port FastHttpsApp#port}
  */
  readonly port: number;
}

export function fastHttpsAppVirtualServerToTerraform(struct?: FastHttpsAppVirtualServerOutputReference | FastHttpsAppVirtualServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function fastHttpsAppVirtualServerToHclTerraform(struct?: FastHttpsAppVirtualServerOutputReference | FastHttpsAppVirtualServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastHttpsAppVirtualServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastHttpsAppVirtualServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastHttpsAppVirtualServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._port = value.port;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface FastHttpsAppWafSecurityPolicy {
  /**
  * Enables Fast to WAF security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#enable FastHttpsApp#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
}

export function fastHttpsAppWafSecurityPolicyToTerraform(struct?: FastHttpsAppWafSecurityPolicyOutputReference | FastHttpsAppWafSecurityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function fastHttpsAppWafSecurityPolicyToHclTerraform(struct?: FastHttpsAppWafSecurityPolicyOutputReference | FastHttpsAppWafSecurityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastHttpsAppWafSecurityPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastHttpsAppWafSecurityPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastHttpsAppWafSecurityPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
    }
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app bigip_fast_https_app}
*/
export class FastHttpsApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_fast_https_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FastHttpsApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FastHttpsApp to import
  * @param importFromId The id of the existing FastHttpsApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FastHttpsApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_fast_https_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_https_app bigip_fast_https_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FastHttpsAppConfig
  */
  public constructor(scope: Construct, id: string, config: FastHttpsAppConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_fast_https_app',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._application = config.application;
    this._endpointLtmPolicy = config.endpointLtmPolicy;
    this._existingMonitor = config.existingMonitor;
    this._existingPool = config.existingPool;
    this._existingSnatPool = config.existingSnatPool;
    this._existingTlsClientProfile = config.existingTlsClientProfile;
    this._existingTlsServerProfile = config.existingTlsServerProfile;
    this._existingWafSecurityPolicy = config.existingWafSecurityPolicy;
    this._fallbackPersistence = config.fallbackPersistence;
    this._id = config.id;
    this._loadBalancingMode = config.loadBalancingMode;
    this._persistenceProfile = config.persistenceProfile;
    this._persistenceType = config.persistenceType;
    this._securityLogProfiles = config.securityLogProfiles;
    this._serviceDiscovery = config.serviceDiscovery;
    this._slowRampTime = config.slowRampTime;
    this._snatPoolAddress = config.snatPoolAddress;
    this._tenant = config.tenant;
    this._monitor.internalValue = config.monitor;
    this._poolMembers.internalValue = config.poolMembers;
    this._tlsClientProfile.internalValue = config.tlsClientProfile;
    this._tlsServerProfile.internalValue = config.tlsServerProfile;
    this._virtualServer.internalValue = config.virtualServer;
    this._wafSecurityPolicy.internalValue = config.wafSecurityPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application - computed: false, optional: false, required: true
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // endpoint_ltm_policy - computed: false, optional: true, required: false
  private _endpointLtmPolicy?: string[]; 
  public get endpointLtmPolicy() {
    return this.getListAttribute('endpoint_ltm_policy');
  }
  public set endpointLtmPolicy(value: string[]) {
    this._endpointLtmPolicy = value;
  }
  public resetEndpointLtmPolicy() {
    this._endpointLtmPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointLtmPolicyInput() {
    return this._endpointLtmPolicy;
  }

  // existing_monitor - computed: false, optional: true, required: false
  private _existingMonitor?: string; 
  public get existingMonitor() {
    return this.getStringAttribute('existing_monitor');
  }
  public set existingMonitor(value: string) {
    this._existingMonitor = value;
  }
  public resetExistingMonitor() {
    this._existingMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingMonitorInput() {
    return this._existingMonitor;
  }

  // existing_pool - computed: false, optional: true, required: false
  private _existingPool?: string; 
  public get existingPool() {
    return this.getStringAttribute('existing_pool');
  }
  public set existingPool(value: string) {
    this._existingPool = value;
  }
  public resetExistingPool() {
    this._existingPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingPoolInput() {
    return this._existingPool;
  }

  // existing_snat_pool - computed: false, optional: true, required: false
  private _existingSnatPool?: string; 
  public get existingSnatPool() {
    return this.getStringAttribute('existing_snat_pool');
  }
  public set existingSnatPool(value: string) {
    this._existingSnatPool = value;
  }
  public resetExistingSnatPool() {
    this._existingSnatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingSnatPoolInput() {
    return this._existingSnatPool;
  }

  // existing_tls_client_profile - computed: false, optional: true, required: false
  private _existingTlsClientProfile?: string; 
  public get existingTlsClientProfile() {
    return this.getStringAttribute('existing_tls_client_profile');
  }
  public set existingTlsClientProfile(value: string) {
    this._existingTlsClientProfile = value;
  }
  public resetExistingTlsClientProfile() {
    this._existingTlsClientProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingTlsClientProfileInput() {
    return this._existingTlsClientProfile;
  }

  // existing_tls_server_profile - computed: false, optional: true, required: false
  private _existingTlsServerProfile?: string; 
  public get existingTlsServerProfile() {
    return this.getStringAttribute('existing_tls_server_profile');
  }
  public set existingTlsServerProfile(value: string) {
    this._existingTlsServerProfile = value;
  }
  public resetExistingTlsServerProfile() {
    this._existingTlsServerProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingTlsServerProfileInput() {
    return this._existingTlsServerProfile;
  }

  // existing_waf_security_policy - computed: false, optional: true, required: false
  private _existingWafSecurityPolicy?: string; 
  public get existingWafSecurityPolicy() {
    return this.getStringAttribute('existing_waf_security_policy');
  }
  public set existingWafSecurityPolicy(value: string) {
    this._existingWafSecurityPolicy = value;
  }
  public resetExistingWafSecurityPolicy() {
    this._existingWafSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingWafSecurityPolicyInput() {
    return this._existingWafSecurityPolicy;
  }

  // fallback_persistence - computed: false, optional: true, required: false
  private _fallbackPersistence?: string; 
  public get fallbackPersistence() {
    return this.getStringAttribute('fallback_persistence');
  }
  public set fallbackPersistence(value: string) {
    this._fallbackPersistence = value;
  }
  public resetFallbackPersistence() {
    this._fallbackPersistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackPersistenceInput() {
    return this._fallbackPersistence;
  }

  // fast_https_json - computed: true, optional: false, required: false
  public get fastHttpsJson() {
    return this.getStringAttribute('fast_https_json');
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

  // load_balancing_mode - computed: false, optional: true, required: false
  private _loadBalancingMode?: string; 
  public get loadBalancingMode() {
    return this.getStringAttribute('load_balancing_mode');
  }
  public set loadBalancingMode(value: string) {
    this._loadBalancingMode = value;
  }
  public resetLoadBalancingMode() {
    this._loadBalancingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingModeInput() {
    return this._loadBalancingMode;
  }

  // persistence_profile - computed: false, optional: true, required: false
  private _persistenceProfile?: string; 
  public get persistenceProfile() {
    return this.getStringAttribute('persistence_profile');
  }
  public set persistenceProfile(value: string) {
    this._persistenceProfile = value;
  }
  public resetPersistenceProfile() {
    this._persistenceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceProfileInput() {
    return this._persistenceProfile;
  }

  // persistence_type - computed: false, optional: true, required: false
  private _persistenceType?: string; 
  public get persistenceType() {
    return this.getStringAttribute('persistence_type');
  }
  public set persistenceType(value: string) {
    this._persistenceType = value;
  }
  public resetPersistenceType() {
    this._persistenceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceTypeInput() {
    return this._persistenceType;
  }

  // security_log_profiles - computed: false, optional: true, required: false
  private _securityLogProfiles?: string[]; 
  public get securityLogProfiles() {
    return this.getListAttribute('security_log_profiles');
  }
  public set securityLogProfiles(value: string[]) {
    this._securityLogProfiles = value;
  }
  public resetSecurityLogProfiles() {
    this._securityLogProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLogProfilesInput() {
    return this._securityLogProfiles;
  }

  // service_discovery - computed: false, optional: true, required: false
  private _serviceDiscovery?: string[]; 
  public get serviceDiscovery() {
    return this.getListAttribute('service_discovery');
  }
  public set serviceDiscovery(value: string[]) {
    this._serviceDiscovery = value;
  }
  public resetServiceDiscovery() {
    this._serviceDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDiscoveryInput() {
    return this._serviceDiscovery;
  }

  // slow_ramp_time - computed: false, optional: true, required: false
  private _slowRampTime?: number; 
  public get slowRampTime() {
    return this.getNumberAttribute('slow_ramp_time');
  }
  public set slowRampTime(value: number) {
    this._slowRampTime = value;
  }
  public resetSlowRampTime() {
    this._slowRampTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowRampTimeInput() {
    return this._slowRampTime;
  }

  // snat_pool_address - computed: false, optional: true, required: false
  private _snatPoolAddress?: string[]; 
  public get snatPoolAddress() {
    return this.getListAttribute('snat_pool_address');
  }
  public set snatPoolAddress(value: string[]) {
    this._snatPoolAddress = value;
  }
  public resetSnatPoolAddress() {
    this._snatPoolAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPoolAddressInput() {
    return this._snatPoolAddress;
  }

  // tenant - computed: false, optional: false, required: true
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new FastHttpsAppMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: FastHttpsAppMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // pool_members - computed: false, optional: true, required: false
  private _poolMembers = new FastHttpsAppPoolMembersList(this, "pool_members", true);
  public get poolMembers() {
    return this._poolMembers;
  }
  public putPoolMembers(value: FastHttpsAppPoolMembers[] | cdktf.IResolvable) {
    this._poolMembers.internalValue = value;
  }
  public resetPoolMembers() {
    this._poolMembers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolMembersInput() {
    return this._poolMembers.internalValue;
  }

  // tls_client_profile - computed: false, optional: true, required: false
  private _tlsClientProfile = new FastHttpsAppTlsClientProfileOutputReference(this, "tls_client_profile");
  public get tlsClientProfile() {
    return this._tlsClientProfile;
  }
  public putTlsClientProfile(value: FastHttpsAppTlsClientProfile) {
    this._tlsClientProfile.internalValue = value;
  }
  public resetTlsClientProfile() {
    this._tlsClientProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientProfileInput() {
    return this._tlsClientProfile.internalValue;
  }

  // tls_server_profile - computed: false, optional: true, required: false
  private _tlsServerProfile = new FastHttpsAppTlsServerProfileOutputReference(this, "tls_server_profile");
  public get tlsServerProfile() {
    return this._tlsServerProfile;
  }
  public putTlsServerProfile(value: FastHttpsAppTlsServerProfile) {
    this._tlsServerProfile.internalValue = value;
  }
  public resetTlsServerProfile() {
    this._tlsServerProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerProfileInput() {
    return this._tlsServerProfile.internalValue;
  }

  // virtual_server - computed: false, optional: true, required: false
  private _virtualServer = new FastHttpsAppVirtualServerOutputReference(this, "virtual_server");
  public get virtualServer() {
    return this._virtualServer;
  }
  public putVirtualServer(value: FastHttpsAppVirtualServer) {
    this._virtualServer.internalValue = value;
  }
  public resetVirtualServer() {
    this._virtualServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerInput() {
    return this._virtualServer.internalValue;
  }

  // waf_security_policy - computed: false, optional: true, required: false
  private _wafSecurityPolicy = new FastHttpsAppWafSecurityPolicyOutputReference(this, "waf_security_policy");
  public get wafSecurityPolicy() {
    return this._wafSecurityPolicy;
  }
  public putWafSecurityPolicy(value: FastHttpsAppWafSecurityPolicy) {
    this._wafSecurityPolicy.internalValue = value;
  }
  public resetWafSecurityPolicy() {
    this._wafSecurityPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafSecurityPolicyInput() {
    return this._wafSecurityPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application: cdktf.stringToTerraform(this._application),
      endpoint_ltm_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._endpointLtmPolicy),
      existing_monitor: cdktf.stringToTerraform(this._existingMonitor),
      existing_pool: cdktf.stringToTerraform(this._existingPool),
      existing_snat_pool: cdktf.stringToTerraform(this._existingSnatPool),
      existing_tls_client_profile: cdktf.stringToTerraform(this._existingTlsClientProfile),
      existing_tls_server_profile: cdktf.stringToTerraform(this._existingTlsServerProfile),
      existing_waf_security_policy: cdktf.stringToTerraform(this._existingWafSecurityPolicy),
      fallback_persistence: cdktf.stringToTerraform(this._fallbackPersistence),
      id: cdktf.stringToTerraform(this._id),
      load_balancing_mode: cdktf.stringToTerraform(this._loadBalancingMode),
      persistence_profile: cdktf.stringToTerraform(this._persistenceProfile),
      persistence_type: cdktf.stringToTerraform(this._persistenceType),
      security_log_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityLogProfiles),
      service_discovery: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceDiscovery),
      slow_ramp_time: cdktf.numberToTerraform(this._slowRampTime),
      snat_pool_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._snatPoolAddress),
      tenant: cdktf.stringToTerraform(this._tenant),
      monitor: fastHttpsAppMonitorToTerraform(this._monitor.internalValue),
      pool_members: cdktf.listMapper(fastHttpsAppPoolMembersToTerraform, true)(this._poolMembers.internalValue),
      tls_client_profile: fastHttpsAppTlsClientProfileToTerraform(this._tlsClientProfile.internalValue),
      tls_server_profile: fastHttpsAppTlsServerProfileToTerraform(this._tlsServerProfile.internalValue),
      virtual_server: fastHttpsAppVirtualServerToTerraform(this._virtualServer.internalValue),
      waf_security_policy: fastHttpsAppWafSecurityPolicyToTerraform(this._wafSecurityPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application: {
        value: cdktf.stringToHclTerraform(this._application),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_ltm_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._endpointLtmPolicy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      existing_monitor: {
        value: cdktf.stringToHclTerraform(this._existingMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      existing_pool: {
        value: cdktf.stringToHclTerraform(this._existingPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      existing_snat_pool: {
        value: cdktf.stringToHclTerraform(this._existingSnatPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      existing_tls_client_profile: {
        value: cdktf.stringToHclTerraform(this._existingTlsClientProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      existing_tls_server_profile: {
        value: cdktf.stringToHclTerraform(this._existingTlsServerProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      existing_waf_security_policy: {
        value: cdktf.stringToHclTerraform(this._existingWafSecurityPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_persistence: {
        value: cdktf.stringToHclTerraform(this._fallbackPersistence),
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
      load_balancing_mode: {
        value: cdktf.stringToHclTerraform(this._loadBalancingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistence_profile: {
        value: cdktf.stringToHclTerraform(this._persistenceProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistence_type: {
        value: cdktf.stringToHclTerraform(this._persistenceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_log_profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityLogProfiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_discovery: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceDiscovery),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      slow_ramp_time: {
        value: cdktf.numberToHclTerraform(this._slowRampTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snat_pool_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._snatPoolAddress),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tenant: {
        value: cdktf.stringToHclTerraform(this._tenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor: {
        value: fastHttpsAppMonitorToHclTerraform(this._monitor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FastHttpsAppMonitorList",
      },
      pool_members: {
        value: cdktf.listMapperHcl(fastHttpsAppPoolMembersToHclTerraform, true)(this._poolMembers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FastHttpsAppPoolMembersList",
      },
      tls_client_profile: {
        value: fastHttpsAppTlsClientProfileToHclTerraform(this._tlsClientProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FastHttpsAppTlsClientProfileList",
      },
      tls_server_profile: {
        value: fastHttpsAppTlsServerProfileToHclTerraform(this._tlsServerProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FastHttpsAppTlsServerProfileList",
      },
      virtual_server: {
        value: fastHttpsAppVirtualServerToHclTerraform(this._virtualServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FastHttpsAppVirtualServerList",
      },
      waf_security_policy: {
        value: fastHttpsAppWafSecurityPolicyToHclTerraform(this._wafSecurityPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FastHttpsAppWafSecurityPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
