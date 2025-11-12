// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HarmonyControllerProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'register': Register the device to the controller; 'deregister': Deregister the device from controller;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#action HarmonyControllerProfile#action}
  */
  readonly action?: string;
  /**
  * 'all': Export all the analytics information. This is the default value.; 'system': Export only system level policy for device management.; 'disable': Disable all the exports from the device.;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#analytics HarmonyControllerProfile#analytics}
  */
  readonly analytics?: string;
  /**
  * 'enable': enable auto analytics bus restart, default behavior is enable; 'disable': disable auto analytics bus restart;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#auto_restart_action HarmonyControllerProfile#auto_restart_action}
  */
  readonly autoRestartAction?: string;
  /**
  * availablity zone of the thunder-device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#availability_zone HarmonyControllerProfile#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * id for the cluster in harmony controller, typically an uuid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#cluster_id HarmonyControllerProfile#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * name of cluster in harmony controller that this device is a member of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#cluster_name HarmonyControllerProfile#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Set harmony controller host address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#host HarmonyControllerProfile#host}
  */
  readonly host?: string;
  /**
  * IPV6 address or FQDN for the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#host_ipv6 HarmonyControllerProfile#host_ipv6}
  */
  readonly hostIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#id HarmonyControllerProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * auto analytics bus restart time interval in mins, default is 3 mins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#interval HarmonyControllerProfile#interval}
  */
  readonly interval?: number;
  /**
  * Set port for remote Harmony Controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#port HarmonyControllerProfile#port}
  */
  readonly port?: number;
  /**
  * provider for the harmony-controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#provider1 HarmonyControllerProfile#provider1}
  */
  readonly provider1?: string;
  /**
  * region of the thunder-device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#region HarmonyControllerProfile#region}
  */
  readonly region?: string;
  /**
  * Specify the password for the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#secret_value HarmonyControllerProfile#secret_value}
  */
  readonly secretValue?: string;
  /**
  * Use management port for connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#use_mgmt_port HarmonyControllerProfile#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * user-name for the tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#user_name HarmonyControllerProfile#user_name}
  */
  readonly userName?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#uuid HarmonyControllerProfile#uuid}
  */
  readonly uuid?: string;
  /**
  * re_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#re_sync HarmonyControllerProfile#re_sync}
  */
  readonly reSync?: HarmonyControllerProfileReSync;
  /**
  * thunder_mgmt_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#thunder_mgmt_ip HarmonyControllerProfile#thunder_mgmt_ip}
  */
  readonly thunderMgmtIp?: HarmonyControllerProfileThunderMgmtIp;
  /**
  * tunnel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#tunnel HarmonyControllerProfile#tunnel}
  */
  readonly tunnel?: HarmonyControllerProfileTunnel;
}
export interface HarmonyControllerProfileReSync {
  /**
  * re-sync analtyics bus connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#analytics_bus HarmonyControllerProfile#analytics_bus}
  */
  readonly analyticsBus?: number;
  /**
  * re-sync the schema registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#schema_registry HarmonyControllerProfile#schema_registry}
  */
  readonly schemaRegistry?: number;
}

export function harmonyControllerProfileReSyncToTerraform(struct?: HarmonyControllerProfileReSyncOutputReference | HarmonyControllerProfileReSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analytics_bus: cdktf.numberToTerraform(struct!.analyticsBus),
    schema_registry: cdktf.numberToTerraform(struct!.schemaRegistry),
  }
}


export function harmonyControllerProfileReSyncToHclTerraform(struct?: HarmonyControllerProfileReSyncOutputReference | HarmonyControllerProfileReSync): any {
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

export class HarmonyControllerProfileReSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HarmonyControllerProfileReSync | undefined {
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

  public set internalValue(value: HarmonyControllerProfileReSync | undefined) {
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
export interface HarmonyControllerProfileThunderMgmtIp {
  /**
  * IP address (IPv4 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#ip_address HarmonyControllerProfile#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * IPV6 address for the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#ipv6_addr HarmonyControllerProfile#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#uuid HarmonyControllerProfile#uuid}
  */
  readonly uuid?: string;
}

export function harmonyControllerProfileThunderMgmtIpToTerraform(struct?: HarmonyControllerProfileThunderMgmtIpOutputReference | HarmonyControllerProfileThunderMgmtIp): any {
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


export function harmonyControllerProfileThunderMgmtIpToHclTerraform(struct?: HarmonyControllerProfileThunderMgmtIpOutputReference | HarmonyControllerProfileThunderMgmtIp): any {
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

export class HarmonyControllerProfileThunderMgmtIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HarmonyControllerProfileThunderMgmtIp | undefined {
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

  public set internalValue(value: HarmonyControllerProfileThunderMgmtIp | undefined) {
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
export interface HarmonyControllerProfileTunnel {
  /**
  * 'enable': Tunnel Enable; 'disable': Tunnel Disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#action HarmonyControllerProfile#action}
  */
  readonly action?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#uuid HarmonyControllerProfile#uuid}
  */
  readonly uuid?: string;
}

export function harmonyControllerProfileTunnelToTerraform(struct?: HarmonyControllerProfileTunnelOutputReference | HarmonyControllerProfileTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function harmonyControllerProfileTunnelToHclTerraform(struct?: HarmonyControllerProfileTunnelOutputReference | HarmonyControllerProfileTunnel): any {
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

export class HarmonyControllerProfileTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HarmonyControllerProfileTunnel | undefined {
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

  public set internalValue(value: HarmonyControllerProfileTunnel | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile thunder_harmony_controller_profile}
*/
export class HarmonyControllerProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_harmony_controller_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HarmonyControllerProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HarmonyControllerProfile to import
  * @param importFromId The id of the existing HarmonyControllerProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HarmonyControllerProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_harmony_controller_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/harmony_controller_profile thunder_harmony_controller_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HarmonyControllerProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HarmonyControllerProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_harmony_controller_profile',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._autoRestartAction = config.autoRestartAction;
    this._availabilityZone = config.availabilityZone;
    this._clusterId = config.clusterId;
    this._clusterName = config.clusterName;
    this._host = config.host;
    this._hostIpv6 = config.hostIpv6;
    this._id = config.id;
    this._interval = config.interval;
    this._port = config.port;
    this._provider1 = config.provider1;
    this._region = config.region;
    this._secretValue = config.secretValue;
    this._useMgmtPort = config.useMgmtPort;
    this._userName = config.userName;
    this._uuid = config.uuid;
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

  // provider1 - computed: false, optional: true, required: false
  private _provider1?: string; 
  public get provider1() {
    return this.getStringAttribute('provider1');
  }
  public set provider1(value: string) {
    this._provider1 = value;
  }
  public resetProvider1() {
    this._provider1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provider1Input() {
    return this._provider1;
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

  // re_sync - computed: false, optional: true, required: false
  private _reSync = new HarmonyControllerProfileReSyncOutputReference(this, "re_sync");
  public get reSync() {
    return this._reSync;
  }
  public putReSync(value: HarmonyControllerProfileReSync) {
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
  private _thunderMgmtIp = new HarmonyControllerProfileThunderMgmtIpOutputReference(this, "thunder_mgmt_ip");
  public get thunderMgmtIp() {
    return this._thunderMgmtIp;
  }
  public putThunderMgmtIp(value: HarmonyControllerProfileThunderMgmtIp) {
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
  private _tunnel = new HarmonyControllerProfileTunnelOutputReference(this, "tunnel");
  public get tunnel() {
    return this._tunnel;
  }
  public putTunnel(value: HarmonyControllerProfileTunnel) {
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
      auto_restart_action: cdktf.stringToTerraform(this._autoRestartAction),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      host: cdktf.stringToTerraform(this._host),
      host_ipv6: cdktf.stringToTerraform(this._hostIpv6),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      port: cdktf.numberToTerraform(this._port),
      provider1: cdktf.stringToTerraform(this._provider1),
      region: cdktf.stringToTerraform(this._region),
      secret_value: cdktf.stringToTerraform(this._secretValue),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      user_name: cdktf.stringToTerraform(this._userName),
      uuid: cdktf.stringToTerraform(this._uuid),
      re_sync: harmonyControllerProfileReSyncToTerraform(this._reSync.internalValue),
      thunder_mgmt_ip: harmonyControllerProfileThunderMgmtIpToTerraform(this._thunderMgmtIp.internalValue),
      tunnel: harmonyControllerProfileTunnelToTerraform(this._tunnel.internalValue),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provider1: {
        value: cdktf.stringToHclTerraform(this._provider1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      re_sync: {
        value: harmonyControllerProfileReSyncToHclTerraform(this._reSync.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HarmonyControllerProfileReSyncList",
      },
      thunder_mgmt_ip: {
        value: harmonyControllerProfileThunderMgmtIpToHclTerraform(this._thunderMgmtIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HarmonyControllerProfileThunderMgmtIpList",
      },
      tunnel: {
        value: harmonyControllerProfileTunnelToHclTerraform(this._tunnel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HarmonyControllerProfileTunnelList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
