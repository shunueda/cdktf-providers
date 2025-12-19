// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ControllerProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'register': Register the device to the controller; 'deregister': Deregister the device from controller;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#action ControllerProfile#action}
  */
  readonly action?: string;
  /**
  * 'all': Export all the analytics information.; 'system': Export only system level policy for device management.; 'disable': Disable all the exports from the device. This is the default value.;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#analytics ControllerProfile#analytics}
  */
  readonly analytics?: string;
  /**
  * Use data port for analytics information exportation, if not set analytics will follow 'host use-mgmt-port' option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#analytics_data ControllerProfile#analytics_data}
  */
  readonly analyticsData?: number;
  /**
  * API key for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#api_key ControllerProfile#api_key}
  */
  readonly apiKey?: string;
  /**
  * 'enable': enable auto analytics bus restart, default behavior is enable; 'disable': disable auto analytics bus restart;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#auto_restart_action ControllerProfile#auto_restart_action}
  */
  readonly autoRestartAction?: string;
  /**
  * availablity zone of the thunder-device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#availability_zone ControllerProfile#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * id for the cluster in controller, typically an uuid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#cluster_id ControllerProfile#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * name of cluster in controller that this device is a member of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#cluster_name ControllerProfile#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Set controller host address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#host ControllerProfile#host}
  */
  readonly host?: string;
  /**
  * IPV6 address or FQDN for the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#host_ipv6 ControllerProfile#host_ipv6}
  */
  readonly hostIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#id ControllerProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * auto analytics bus restart time interval in mins, default is 3 mins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#interval ControllerProfile#interval}
  */
  readonly interval?: number;
  /**
  * organization for the controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#organization ControllerProfile#organization}
  */
  readonly organization?: string;
  /**
  * Set port for remote Controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#port ControllerProfile#port}
  */
  readonly port?: number;
  /**
  * region of the thunder-device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#region ControllerProfile#region}
  */
  readonly region?: string;
  /**
  * Specify the password for the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#secret_value ControllerProfile#secret_value}
  */
  readonly secretValue?: string;
  /**
  * Use management port for connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#use_mgmt_port ControllerProfile#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * user-name for the tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#user_name ControllerProfile#user_name}
  */
  readonly userName?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#uuid ControllerProfile#uuid}
  */
  readonly uuid?: string;
  /**
  * force block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#force ControllerProfile#force}
  */
  readonly force?: ControllerProfileForce;
  /**
  * re_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#re_sync ControllerProfile#re_sync}
  */
  readonly reSync?: ControllerProfileReSync;
  /**
  * thunder_mgmt_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#thunder_mgmt_ip ControllerProfile#thunder_mgmt_ip}
  */
  readonly thunderMgmtIp?: ControllerProfileThunderMgmtIp;
  /**
  * tunnel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#tunnel ControllerProfile#tunnel}
  */
  readonly tunnel?: ControllerProfileTunnel;
}
export interface ControllerProfileForce {
  /**
  * forcefully deregister thunder from harmony controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#deregister ControllerProfile#deregister}
  */
  readonly deregister?: number;
}

export function controllerProfileForceToTerraform(struct?: ControllerProfileForceOutputReference | ControllerProfileForce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deregister: cdktf.numberToTerraform(struct!.deregister),
  }
}


export function controllerProfileForceToHclTerraform(struct?: ControllerProfileForceOutputReference | ControllerProfileForce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deregister: {
      value: cdktf.numberToHclTerraform(struct!.deregister),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ControllerProfileForceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ControllerProfileForce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deregister !== undefined) {
      hasAnyValues = true;
      internalValueResult.deregister = this._deregister;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ControllerProfileForce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deregister = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deregister = value.deregister;
    }
  }

  // deregister - computed: false, optional: true, required: false
  private _deregister?: number; 
  public get deregister() {
    return this.getNumberAttribute('deregister');
  }
  public set deregister(value: number) {
    this._deregister = value;
  }
  public resetDeregister() {
    this._deregister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deregisterInput() {
    return this._deregister;
  }
}
export interface ControllerProfileReSync {
  /**
  * re-sync analtyics bus connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#analytics_bus ControllerProfile#analytics_bus}
  */
  readonly analyticsBus?: number;
  /**
  * re-sync the schema registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#schema_registry ControllerProfile#schema_registry}
  */
  readonly schemaRegistry?: number;
}

export function controllerProfileReSyncToTerraform(struct?: ControllerProfileReSyncOutputReference | ControllerProfileReSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analytics_bus: cdktf.numberToTerraform(struct!.analyticsBus),
    schema_registry: cdktf.numberToTerraform(struct!.schemaRegistry),
  }
}


export function controllerProfileReSyncToHclTerraform(struct?: ControllerProfileReSyncOutputReference | ControllerProfileReSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    analytics_bus: {
      value: cdktf.numberToHclTerraform(struct!.analyticsBus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schema_registry: {
      value: cdktf.numberToHclTerraform(struct!.schemaRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ControllerProfileReSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ControllerProfileReSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyticsBus !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyticsBus = this._analyticsBus;
    }
    if (this._schemaRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistry = this._schemaRegistry;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ControllerProfileReSync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._analyticsBus = undefined;
      this._schemaRegistry = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._analyticsBus = value.analyticsBus;
      this._schemaRegistry = value.schemaRegistry;
    }
  }

  // analytics_bus - computed: false, optional: true, required: false
  private _analyticsBus?: number; 
  public get analyticsBus() {
    return this.getNumberAttribute('analytics_bus');
  }
  public set analyticsBus(value: number) {
    this._analyticsBus = value;
  }
  public resetAnalyticsBus() {
    this._analyticsBus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsBusInput() {
    return this._analyticsBus;
  }

  // schema_registry - computed: false, optional: true, required: false
  private _schemaRegistry?: number; 
  public get schemaRegistry() {
    return this.getNumberAttribute('schema_registry');
  }
  public set schemaRegistry(value: number) {
    this._schemaRegistry = value;
  }
  public resetSchemaRegistry() {
    this._schemaRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryInput() {
    return this._schemaRegistry;
  }
}
export interface ControllerProfileThunderMgmtIp {
  /**
  * IP address (IPv4 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#ip_address ControllerProfile#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * IPV6 address for the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#ipv6_addr ControllerProfile#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#uuid ControllerProfile#uuid}
  */
  readonly uuid?: string;
}

export function controllerProfileThunderMgmtIpToTerraform(struct?: ControllerProfileThunderMgmtIpOutputReference | ControllerProfileThunderMgmtIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function controllerProfileThunderMgmtIpToHclTerraform(struct?: ControllerProfileThunderMgmtIpOutputReference | ControllerProfileThunderMgmtIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ControllerProfileThunderMgmtIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ControllerProfileThunderMgmtIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ControllerProfileThunderMgmtIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddress = undefined;
      this._ipv6Addr = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddress = value.ipAddress;
      this._ipv6Addr = value.ipv6Addr;
      this._uuid = value.uuid;
    }
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

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface ControllerProfileTunnel {
  /**
  * 'enable': Tunnel Enable; 'disable': Tunnel Disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#action ControllerProfile#action}
  */
  readonly action?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#uuid ControllerProfile#uuid}
  */
  readonly uuid?: string;
}

export function controllerProfileTunnelToTerraform(struct?: ControllerProfileTunnelOutputReference | ControllerProfileTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function controllerProfileTunnelToHclTerraform(struct?: ControllerProfileTunnelOutputReference | ControllerProfileTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ControllerProfileTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ControllerProfileTunnel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ControllerProfileTunnel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._uuid = value.uuid;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile thunder_controller_profile}
*/
export class ControllerProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_controller_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ControllerProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ControllerProfile to import
  * @param importFromId The id of the existing ControllerProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ControllerProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_controller_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile thunder_controller_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ControllerProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ControllerProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_controller_profile',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._analytics = config.analytics;
    this._analyticsData = config.analyticsData;
    this._apiKey = config.apiKey;
    this._autoRestartAction = config.autoRestartAction;
    this._availabilityZone = config.availabilityZone;
    this._clusterId = config.clusterId;
    this._clusterName = config.clusterName;
    this._host = config.host;
    this._hostIpv6 = config.hostIpv6;
    this._id = config.id;
    this._interval = config.interval;
    this._organization = config.organization;
    this._port = config.port;
    this._region = config.region;
    this._secretValue = config.secretValue;
    this._useMgmtPort = config.useMgmtPort;
    this._userName = config.userName;
    this._uuid = config.uuid;
    this._force.internalValue = config.force;
    this._reSync.internalValue = config.reSync;
    this._thunderMgmtIp.internalValue = config.thunderMgmtIp;
    this._tunnel.internalValue = config.tunnel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // analytics - computed: false, optional: true, required: false
  private _analytics?: string; 
  public get analytics() {
    return this.getStringAttribute('analytics');
  }
  public set analytics(value: string) {
    this._analytics = value;
  }
  public resetAnalytics() {
    this._analytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsInput() {
    return this._analytics;
  }

  // analytics_data - computed: false, optional: true, required: false
  private _analyticsData?: number; 
  public get analyticsData() {
    return this.getNumberAttribute('analytics_data');
  }
  public set analyticsData(value: number) {
    this._analyticsData = value;
  }
  public resetAnalyticsData() {
    this._analyticsData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsDataInput() {
    return this._analyticsData;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // auto_restart_action - computed: false, optional: true, required: false
  private _autoRestartAction?: string; 
  public get autoRestartAction() {
    return this.getStringAttribute('auto_restart_action');
  }
  public set autoRestartAction(value: string) {
    this._autoRestartAction = value;
  }
  public resetAutoRestartAction() {
    this._autoRestartAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRestartActionInput() {
    return this._autoRestartAction;
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // host_ipv6 - computed: false, optional: true, required: false
  private _hostIpv6?: string; 
  public get hostIpv6() {
    return this.getStringAttribute('host_ipv6');
  }
  public set hostIpv6(value: string) {
    this._hostIpv6 = value;
  }
  public resetHostIpv6() {
    this._hostIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpv6Input() {
    return this._hostIpv6;
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

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue?: string; 
  public get secretValue() {
    return this.getStringAttribute('secret_value');
  }
  public set secretValue(value: string) {
    this._secretValue = value;
  }
  public resetSecretValue() {
    this._secretValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // force - computed: false, optional: true, required: false
  private _force = new ControllerProfileForceOutputReference(this, "force");
  public get force() {
    return this._force;
  }
  public putForce(value: ControllerProfileForce) {
    this._force.internalValue = value;
  }
  public resetForce() {
    this._force.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force.internalValue;
  }

  // re_sync - computed: false, optional: true, required: false
  private _reSync = new ControllerProfileReSyncOutputReference(this, "re_sync");
  public get reSync() {
    return this._reSync;
  }
  public putReSync(value: ControllerProfileReSync) {
    this._reSync.internalValue = value;
  }
  public resetReSync() {
    this._reSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reSyncInput() {
    return this._reSync.internalValue;
  }

  // thunder_mgmt_ip - computed: false, optional: true, required: false
  private _thunderMgmtIp = new ControllerProfileThunderMgmtIpOutputReference(this, "thunder_mgmt_ip");
  public get thunderMgmtIp() {
    return this._thunderMgmtIp;
  }
  public putThunderMgmtIp(value: ControllerProfileThunderMgmtIp) {
    this._thunderMgmtIp.internalValue = value;
  }
  public resetThunderMgmtIp() {
    this._thunderMgmtIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thunderMgmtIpInput() {
    return this._thunderMgmtIp.internalValue;
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel = new ControllerProfileTunnelOutputReference(this, "tunnel");
  public get tunnel() {
    return this._tunnel;
  }
  public putTunnel(value: ControllerProfileTunnel) {
    this._tunnel.internalValue = value;
  }
  public resetTunnel() {
    this._tunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      analytics: cdktf.stringToTerraform(this._analytics),
      analytics_data: cdktf.numberToTerraform(this._analyticsData),
      api_key: cdktf.stringToTerraform(this._apiKey),
      auto_restart_action: cdktf.stringToTerraform(this._autoRestartAction),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      host: cdktf.stringToTerraform(this._host),
      host_ipv6: cdktf.stringToTerraform(this._hostIpv6),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      organization: cdktf.stringToTerraform(this._organization),
      port: cdktf.numberToTerraform(this._port),
      region: cdktf.stringToTerraform(this._region),
      secret_value: cdktf.stringToTerraform(this._secretValue),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      user_name: cdktf.stringToTerraform(this._userName),
      uuid: cdktf.stringToTerraform(this._uuid),
      force: controllerProfileForceToTerraform(this._force.internalValue),
      re_sync: controllerProfileReSyncToTerraform(this._reSync.internalValue),
      thunder_mgmt_ip: controllerProfileThunderMgmtIpToTerraform(this._thunderMgmtIp.internalValue),
      tunnel: controllerProfileTunnelToTerraform(this._tunnel.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analytics: {
        value: cdktf.stringToHclTerraform(this._analytics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analytics_data: {
        value: cdktf.numberToHclTerraform(this._analyticsData),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_restart_action: {
        value: cdktf.stringToHclTerraform(this._autoRestartAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_ipv6: {
        value: cdktf.stringToHclTerraform(this._hostIpv6),
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_value: {
        value: cdktf.stringToHclTerraform(this._secretValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force: {
        value: controllerProfileForceToHclTerraform(this._force.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ControllerProfileForceList",
      },
      re_sync: {
        value: controllerProfileReSyncToHclTerraform(this._reSync.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ControllerProfileReSyncList",
      },
      thunder_mgmt_ip: {
        value: controllerProfileThunderMgmtIpToHclTerraform(this._thunderMgmtIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ControllerProfileThunderMgmtIpList",
      },
      tunnel: {
        value: controllerProfileTunnelToHclTerraform(this._tunnel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ControllerProfileTunnelList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
