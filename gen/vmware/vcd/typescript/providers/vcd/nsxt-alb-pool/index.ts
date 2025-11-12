// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtAlbPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Algorithm for choosing pool members (default LEAST_CONNECTIONS). Other `ROUND_ROBIN`,`CONSISTENT_HASH`, `FASTEST_RESPONSE`, `LEAST_LOAD`, `FEWEST_SERVERS`, `RANDOM`, `FEWEST_TASKS`,`CORE_AFFINITY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#algorithm NsxtAlbPool#algorithm}
  */
  readonly algorithm?: string;
  /**
  * A set of root certificate IDs to use when validating certificates presented by pool members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#ca_certificate_ids NsxtAlbPool#ca_certificate_ids}
  */
  readonly caCertificateIds?: string[];
  /**
  * Boolean flag if common name check of the certificate should be enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#cn_check_enabled NsxtAlbPool#cn_check_enabled}
  */
  readonly cnCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * Default Port defines destination server port used by the traffic sent to the member (default 80)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#default_port NsxtAlbPool#default_port}
  */
  readonly defaultPort?: number;
  /**
  * Description of ALB Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#description NsxtAlbPool#description}
  */
  readonly description?: string;
  /**
  * List of domain names which will be used to verify common names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#domain_names NsxtAlbPool#domain_names}
  */
  readonly domainNames?: string[];
  /**
  * Edge gateway ID in which ALB Pool should be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#edge_gateway_id NsxtAlbPool#edge_gateway_id}
  */
  readonly edgeGatewayId: string;
  /**
  * Boolean value if ALB Pool is enabled or not (default true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#enabled NsxtAlbPool#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum time in minutes to gracefully disable pool member (default 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#graceful_timeout_period NsxtAlbPool#graceful_timeout_period}
  */
  readonly gracefulTimeoutPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#id NsxtAlbPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of Firewall Group to use for Pool Membership (VCD 10.4.1+)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#member_group_id NsxtAlbPool#member_group_id}
  */
  readonly memberGroupId?: string;
  /**
  * Name of ALB Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#name NsxtAlbPool#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#org NsxtAlbPool#org}
  */
  readonly org?: string;
  /**
  * Monitors if the traffic is accepted by node (default true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#passive_monitoring_enabled NsxtAlbPool#passive_monitoring_enabled}
  */
  readonly passiveMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables SSL - Must be on when CA certificates are used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#ssl_enabled NsxtAlbPool#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#vdc NsxtAlbPool#vdc}
  */
  readonly vdc?: string;
  /**
  * health_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#health_monitor NsxtAlbPool#health_monitor}
  */
  readonly healthMonitor?: NsxtAlbPoolHealthMonitor[] | cdktf.IResolvable;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#member NsxtAlbPool#member}
  */
  readonly member?: NsxtAlbPoolMember[] | cdktf.IResolvable;
  /**
  * persistence_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#persistence_profile NsxtAlbPool#persistence_profile}
  */
  readonly persistenceProfile?: NsxtAlbPoolPersistenceProfile;
}
export interface NsxtAlbPoolHealthMonitor {
  /**
  * Type of health monitor. One of `HTTP`, `HTTPS`, `TCP`, `UDP`, `PING`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#type NsxtAlbPool#type}
  */
  readonly type: string;
}

export function nsxtAlbPoolHealthMonitorToTerraform(struct?: NsxtAlbPoolHealthMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function nsxtAlbPoolHealthMonitorToHclTerraform(struct?: NsxtAlbPoolHealthMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class NsxtAlbPoolHealthMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtAlbPoolHealthMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbPoolHealthMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // system_defined - computed: true, optional: false, required: false
  public get systemDefined() {
    return this.getBooleanAttribute('system_defined');
  }

  // type - computed: false, optional: false, required: true
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

export class NsxtAlbPoolHealthMonitorList extends cdktf.ComplexList {
  public internalValue? : NsxtAlbPoolHealthMonitor[] | cdktf.IResolvable

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
  public get(index: number): NsxtAlbPoolHealthMonitorOutputReference {
    return new NsxtAlbPoolHealthMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtAlbPoolMember {
  /**
  * Defines if pool member is accepts traffic (default 'true')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#enabled NsxtAlbPool#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * IP address of pool member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#ip_address NsxtAlbPool#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Member port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#port NsxtAlbPool#port}
  */
  readonly port?: number;
  /**
  * Ratio of selecting eligible servers in the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#ratio NsxtAlbPool#ratio}
  */
  readonly ratio?: number;
}

export function nsxtAlbPoolMemberToTerraform(struct?: NsxtAlbPoolMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    port: cdktf.numberToTerraform(struct!.port),
    ratio: cdktf.numberToTerraform(struct!.ratio),
  }
}


export function nsxtAlbPoolMemberToHclTerraform(struct?: NsxtAlbPoolMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratio: {
      value: cdktf.numberToHclTerraform(struct!.ratio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbPoolMemberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtAlbPoolMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._ratio !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbPoolMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._ipAddress = undefined;
      this._port = undefined;
      this._ratio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._ipAddress = value.ipAddress;
      this._port = value.port;
      this._ratio = value.ratio;
    }
  }

  // detailed_health_message - computed: true, optional: false, required: false
  public get detailedHealthMessage() {
    return this.getStringAttribute('detailed_health_message');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // health_status - computed: true, optional: false, required: false
  public get healthStatus() {
    return this.getStringAttribute('health_status');
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

  // marked_down_by - computed: true, optional: false, required: false
  public get markedDownBy() {
    return cdktf.Fn.tolist(this.getListAttribute('marked_down_by'));
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

  // ratio - computed: false, optional: true, required: false
  private _ratio?: number; 
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }
  public set ratio(value: number) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }
}

export class NsxtAlbPoolMemberList extends cdktf.ComplexList {
  public internalValue? : NsxtAlbPoolMember[] | cdktf.IResolvable

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
  public get(index: number): NsxtAlbPoolMemberOutputReference {
    return new NsxtAlbPoolMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtAlbPoolPersistenceProfile {
  /**
  * Type of persistence strategy. One of `CLIENT_IP`, `HTTP_COOKIE`, `CUSTOM_HTTP_HEADER`, `APP_COOKIE`, `TLS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#type NsxtAlbPool#type}
  */
  readonly type: string;
  /**
  * Value of attribute based on persistence type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#value NsxtAlbPool#value}
  */
  readonly value?: string;
}

export function nsxtAlbPoolPersistenceProfileToTerraform(struct?: NsxtAlbPoolPersistenceProfileOutputReference | NsxtAlbPoolPersistenceProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function nsxtAlbPoolPersistenceProfileToHclTerraform(struct?: NsxtAlbPoolPersistenceProfileOutputReference | NsxtAlbPoolPersistenceProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class NsxtAlbPoolPersistenceProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtAlbPoolPersistenceProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbPoolPersistenceProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: false, optional: false, required: true
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

  // value - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool vcd_nsxt_alb_pool}
*/
export class NsxtAlbPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_alb_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtAlbPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtAlbPool to import
  * @param importFromId The id of the existing NsxtAlbPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtAlbPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_alb_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_pool vcd_nsxt_alb_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtAlbPoolConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtAlbPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_alb_pool',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._caCertificateIds = config.caCertificateIds;
    this._cnCheckEnabled = config.cnCheckEnabled;
    this._defaultPort = config.defaultPort;
    this._description = config.description;
    this._domainNames = config.domainNames;
    this._edgeGatewayId = config.edgeGatewayId;
    this._enabled = config.enabled;
    this._gracefulTimeoutPeriod = config.gracefulTimeoutPeriod;
    this._id = config.id;
    this._memberGroupId = config.memberGroupId;
    this._name = config.name;
    this._org = config.org;
    this._passiveMonitoringEnabled = config.passiveMonitoringEnabled;
    this._sslEnabled = config.sslEnabled;
    this._vdc = config.vdc;
    this._healthMonitor.internalValue = config.healthMonitor;
    this._member.internalValue = config.member;
    this._persistenceProfile.internalValue = config.persistenceProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // associated_virtual_service_ids - computed: true, optional: false, required: false
  public get associatedVirtualServiceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('associated_virtual_service_ids'));
  }

  // associated_virtual_services - computed: true, optional: false, required: false
  public get associatedVirtualServices() {
    return cdktf.Fn.tolist(this.getListAttribute('associated_virtual_services'));
  }

  // ca_certificate_ids - computed: false, optional: true, required: false
  private _caCertificateIds?: string[]; 
  public get caCertificateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ca_certificate_ids'));
  }
  public set caCertificateIds(value: string[]) {
    this._caCertificateIds = value;
  }
  public resetCaCertificateIds() {
    this._caCertificateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateIdsInput() {
    return this._caCertificateIds;
  }

  // cn_check_enabled - computed: false, optional: true, required: false
  private _cnCheckEnabled?: boolean | cdktf.IResolvable; 
  public get cnCheckEnabled() {
    return this.getBooleanAttribute('cn_check_enabled');
  }
  public set cnCheckEnabled(value: boolean | cdktf.IResolvable) {
    this._cnCheckEnabled = value;
  }
  public resetCnCheckEnabled() {
    this._cnCheckEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnCheckEnabledInput() {
    return this._cnCheckEnabled;
  }

  // default_port - computed: false, optional: true, required: false
  private _defaultPort?: number; 
  public get defaultPort() {
    return this.getNumberAttribute('default_port');
  }
  public set defaultPort(value: number) {
    this._defaultPort = value;
  }
  public resetDefaultPort() {
    this._defaultPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPortInput() {
    return this._defaultPort;
  }

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

  // domain_names - computed: false, optional: true, required: false
  private _domainNames?: string[]; 
  public get domainNames() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_names'));
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  public resetDomainNames() {
    this._domainNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }

  // edge_gateway_id - computed: false, optional: false, required: true
  private _edgeGatewayId?: string; 
  public get edgeGatewayId() {
    return this.getStringAttribute('edge_gateway_id');
  }
  public set edgeGatewayId(value: string) {
    this._edgeGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayIdInput() {
    return this._edgeGatewayId;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enabled_member_count - computed: true, optional: false, required: false
  public get enabledMemberCount() {
    return this.getNumberAttribute('enabled_member_count');
  }

  // graceful_timeout_period - computed: false, optional: true, required: false
  private _gracefulTimeoutPeriod?: number; 
  public get gracefulTimeoutPeriod() {
    return this.getNumberAttribute('graceful_timeout_period');
  }
  public set gracefulTimeoutPeriod(value: number) {
    this._gracefulTimeoutPeriod = value;
  }
  public resetGracefulTimeoutPeriod() {
    this._gracefulTimeoutPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulTimeoutPeriodInput() {
    return this._gracefulTimeoutPeriod;
  }

  // health_message - computed: true, optional: false, required: false
  public get healthMessage() {
    return this.getStringAttribute('health_message');
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

  // member_count - computed: true, optional: false, required: false
  public get memberCount() {
    return this.getNumberAttribute('member_count');
  }

  // member_group_id - computed: false, optional: true, required: false
  private _memberGroupId?: string; 
  public get memberGroupId() {
    return this.getStringAttribute('member_group_id');
  }
  public set memberGroupId(value: string) {
    this._memberGroupId = value;
  }
  public resetMemberGroupId() {
    this._memberGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberGroupIdInput() {
    return this._memberGroupId;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // passive_monitoring_enabled - computed: false, optional: true, required: false
  private _passiveMonitoringEnabled?: boolean | cdktf.IResolvable; 
  public get passiveMonitoringEnabled() {
    return this.getBooleanAttribute('passive_monitoring_enabled');
  }
  public set passiveMonitoringEnabled(value: boolean | cdktf.IResolvable) {
    this._passiveMonitoringEnabled = value;
  }
  public resetPassiveMonitoringEnabled() {
    this._passiveMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveMonitoringEnabledInput() {
    return this._passiveMonitoringEnabled;
  }

  // ssl_enabled - computed: true, optional: true, required: false
  private _sslEnabled?: boolean | cdktf.IResolvable; 
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled');
  }
  public set sslEnabled(value: boolean | cdktf.IResolvable) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // up_member_count - computed: true, optional: false, required: false
  public get upMemberCount() {
    return this.getNumberAttribute('up_member_count');
  }

  // vdc - computed: true, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // health_monitor - computed: false, optional: true, required: false
  private _healthMonitor = new NsxtAlbPoolHealthMonitorList(this, "health_monitor", true);
  public get healthMonitor() {
    return this._healthMonitor;
  }
  public putHealthMonitor(value: NsxtAlbPoolHealthMonitor[] | cdktf.IResolvable) {
    this._healthMonitor.internalValue = value;
  }
  public resetHealthMonitor() {
    this._healthMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorInput() {
    return this._healthMonitor.internalValue;
  }

  // member - computed: false, optional: true, required: false
  private _member = new NsxtAlbPoolMemberList(this, "member", true);
  public get member() {
    return this._member;
  }
  public putMember(value: NsxtAlbPoolMember[] | cdktf.IResolvable) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }

  // persistence_profile - computed: false, optional: true, required: false
  private _persistenceProfile = new NsxtAlbPoolPersistenceProfileOutputReference(this, "persistence_profile");
  public get persistenceProfile() {
    return this._persistenceProfile;
  }
  public putPersistenceProfile(value: NsxtAlbPoolPersistenceProfile) {
    this._persistenceProfile.internalValue = value;
  }
  public resetPersistenceProfile() {
    this._persistenceProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceProfileInput() {
    return this._persistenceProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      ca_certificate_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._caCertificateIds),
      cn_check_enabled: cdktf.booleanToTerraform(this._cnCheckEnabled),
      default_port: cdktf.numberToTerraform(this._defaultPort),
      description: cdktf.stringToTerraform(this._description),
      domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainNames),
      edge_gateway_id: cdktf.stringToTerraform(this._edgeGatewayId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      graceful_timeout_period: cdktf.numberToTerraform(this._gracefulTimeoutPeriod),
      id: cdktf.stringToTerraform(this._id),
      member_group_id: cdktf.stringToTerraform(this._memberGroupId),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      passive_monitoring_enabled: cdktf.booleanToTerraform(this._passiveMonitoringEnabled),
      ssl_enabled: cdktf.booleanToTerraform(this._sslEnabled),
      vdc: cdktf.stringToTerraform(this._vdc),
      health_monitor: cdktf.listMapper(nsxtAlbPoolHealthMonitorToTerraform, true)(this._healthMonitor.internalValue),
      member: cdktf.listMapper(nsxtAlbPoolMemberToTerraform, true)(this._member.internalValue),
      persistence_profile: nsxtAlbPoolPersistenceProfileToTerraform(this._persistenceProfile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_certificate_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._caCertificateIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cn_check_enabled: {
        value: cdktf.booleanToHclTerraform(this._cnCheckEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_port: {
        value: cdktf.numberToHclTerraform(this._defaultPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      edge_gateway_id: {
        value: cdktf.stringToHclTerraform(this._edgeGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      graceful_timeout_period: {
        value: cdktf.numberToHclTerraform(this._gracefulTimeoutPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_group_id: {
        value: cdktf.stringToHclTerraform(this._memberGroupId),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passive_monitoring_enabled: {
        value: cdktf.booleanToHclTerraform(this._passiveMonitoringEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_enabled: {
        value: cdktf.booleanToHclTerraform(this._sslEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_monitor: {
        value: cdktf.listMapperHcl(nsxtAlbPoolHealthMonitorToHclTerraform, true)(this._healthMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NsxtAlbPoolHealthMonitorList",
      },
      member: {
        value: cdktf.listMapperHcl(nsxtAlbPoolMemberToHclTerraform, true)(this._member.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NsxtAlbPoolMemberList",
      },
      persistence_profile: {
        value: nsxtAlbPoolPersistenceProfileToHclTerraform(this._persistenceProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxtAlbPoolPersistenceProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
