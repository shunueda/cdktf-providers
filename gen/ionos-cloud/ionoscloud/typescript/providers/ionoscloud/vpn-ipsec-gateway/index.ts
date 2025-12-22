// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnIpsecGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * The human-readable description of your IPSec Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway#description VpnIpsecGateway#description}
  */
  readonly description?: string;
  /**
  * Public IP address to be assigned to the gateway. Note: This must be an IP address in the same datacenter as the connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway#gateway_ip VpnIpsecGateway#gateway_ip}
  */
  readonly gatewayIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway#id VpnIpsecGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the IPSec Gateway. Supported locations: de/fra, de/fra/2, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway#location VpnIpsecGateway#location}
  */
  readonly location?: string;
  /**
  * The human readable name of your IPSecGateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway#name VpnIpsecGateway#name}
  */
  readonly name: string;
  /**
  * Gateway performance options. See the documentation for the available options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway#tier VpnIpsecGateway#tier}
  */
  readonly tier?: string;
  /**
  * The IKE version that is permitted for the VPN tunnels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway#version VpnIpsecGateway#version}
  */
  readonly version?: string;
  /**
  * connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway#connections VpnIpsecGateway#connections}
  */
  readonly connections: VpnIpsecGatewayConnections[] | cdktf.IResolvable;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway#maintenance_window VpnIpsecGateway#maintenance_window}
  */
  readonly maintenanceWindow?: VpnIpsecGatewayMaintenanceWindow;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway#timeouts VpnIpsecGateway#timeouts}
  */
  readonly timeouts?: VpnIpsecGatewayTimeouts;
}
export interface VpnIpsecGatewayConnections {
  /**
  * The datacenter to connect your VPN Gateway to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway#datacenter_id VpnIpsecGateway#datacenter_id}
  */
  readonly datacenterId: string;
  /**
  * A LAN IPv4 address in CIDR notation that will be assigned to the VPN Gateway. This will be the private gateway address for LAN clients to route traffic over the VPN Gateway, this should be within the subnet already assigned to the LAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway#ipv4_cidr VpnIpsecGateway#ipv4_cidr}
  */
  readonly ipv4Cidr: string;
  /**
  * A LAN IPv6 address in CIDR notation that will be assigned to the VPN Gateway. This will be the private gateway address for LAN clients to route traffic over the VPN Gateway, this should be within the subnet already assigned to the LAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway#ipv6_cidr VpnIpsecGateway#ipv6_cidr}
  */
  readonly ipv6Cidr?: string;
  /**
  * The numeric LAN ID to connect your VPN Gateway to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway#lan_id VpnIpsecGateway#lan_id}
  */
  readonly lanId: string;
}

export function vpnIpsecGatewayConnectionsToTerraform(struct?: VpnIpsecGatewayConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter_id: cdktf.stringToTerraform(struct!.datacenterId),
    ipv4_cidr: cdktf.stringToTerraform(struct!.ipv4Cidr),
    ipv6_cidr: cdktf.stringToTerraform(struct!.ipv6Cidr),
    lan_id: cdktf.stringToTerraform(struct!.lanId),
  }
}


export function vpnIpsecGatewayConnectionsToHclTerraform(struct?: VpnIpsecGatewayConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenter_id: {
      value: cdktf.stringToHclTerraform(struct!.datacenterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_cidr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_cidr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lan_id: {
      value: cdktf.stringToHclTerraform(struct!.lanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecGatewayConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIpsecGatewayConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenterId = this._datacenterId;
    }
    if (this._ipv4Cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Cidr = this._ipv4Cidr;
    }
    if (this._ipv6Cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Cidr = this._ipv6Cidr;
    }
    if (this._lanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanId = this._lanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecGatewayConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenterId = undefined;
      this._ipv4Cidr = undefined;
      this._ipv6Cidr = undefined;
      this._lanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenterId = value.datacenterId;
      this._ipv4Cidr = value.ipv4Cidr;
      this._ipv6Cidr = value.ipv6Cidr;
      this._lanId = value.lanId;
    }
  }

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
  }

  // ipv4_cidr - computed: false, optional: false, required: true
  private _ipv4Cidr?: string; 
  public get ipv4Cidr() {
    return this.getStringAttribute('ipv4_cidr');
  }
  public set ipv4Cidr(value: string) {
    this._ipv4Cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4CidrInput() {
    return this._ipv4Cidr;
  }

  // ipv6_cidr - computed: false, optional: true, required: false
  private _ipv6Cidr?: string; 
  public get ipv6Cidr() {
    return this.getStringAttribute('ipv6_cidr');
  }
  public set ipv6Cidr(value: string) {
    this._ipv6Cidr = value;
  }
  public resetIpv6Cidr() {
    this._ipv6Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrInput() {
    return this._ipv6Cidr;
  }

  // lan_id - computed: false, optional: false, required: true
  private _lanId?: string; 
  public get lanId() {
    return this.getStringAttribute('lan_id');
  }
  public set lanId(value: string) {
    this._lanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lanIdInput() {
    return this._lanId;
  }
}

export class VpnIpsecGatewayConnectionsList extends cdktf.ComplexList {
  public internalValue? : VpnIpsecGatewayConnections[] | cdktf.IResolvable

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
  public get(index: number): VpnIpsecGatewayConnectionsOutputReference {
    return new VpnIpsecGatewayConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnIpsecGatewayMaintenanceWindow {
  /**
  * The name of the week day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway#day_of_the_week VpnIpsecGateway#day_of_the_week}
  */
  readonly dayOfTheWeek: string;
  /**
  * Start of the maintenance window in UTC time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway#time VpnIpsecGateway#time}
  */
  readonly time: string;
}

export function vpnIpsecGatewayMaintenanceWindowToTerraform(struct?: VpnIpsecGatewayMaintenanceWindowOutputReference | VpnIpsecGatewayMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_the_week: cdktf.stringToTerraform(struct!.dayOfTheWeek),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function vpnIpsecGatewayMaintenanceWindowToHclTerraform(struct?: VpnIpsecGatewayMaintenanceWindowOutputReference | VpnIpsecGatewayMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_the_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfTheWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecGatewayMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIpsecGatewayMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfTheWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfTheWeek = this._dayOfTheWeek;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecGatewayMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfTheWeek = undefined;
      this._time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfTheWeek = value.dayOfTheWeek;
      this._time = value.time;
    }
  }

  // day_of_the_week - computed: false, optional: false, required: true
  private _dayOfTheWeek?: string; 
  public get dayOfTheWeek() {
    return this.getStringAttribute('day_of_the_week');
  }
  public set dayOfTheWeek(value: string) {
    this._dayOfTheWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfTheWeekInput() {
    return this._dayOfTheWeek;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface VpnIpsecGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway#create VpnIpsecGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway#default VpnIpsecGateway#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway#delete VpnIpsecGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway#update VpnIpsecGateway#update}
  */
  readonly update?: string;
}

export function vpnIpsecGatewayTimeoutsToTerraform(struct?: VpnIpsecGatewayTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function vpnIpsecGatewayTimeoutsToHclTerraform(struct?: VpnIpsecGatewayTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpnIpsecGatewayTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecGatewayTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway ionoscloud_vpn_ipsec_gateway}
*/
export class VpnIpsecGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_vpn_ipsec_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnIpsecGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnIpsecGateway to import
  * @param importFromId The id of the existing VpnIpsecGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnIpsecGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_vpn_ipsec_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/vpn_ipsec_gateway ionoscloud_vpn_ipsec_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnIpsecGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: VpnIpsecGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_vpn_ipsec_gateway',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.21',
        providerVersionConstraint: '6.7.21'
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
    this._gatewayIp = config.gatewayIp;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._tier = config.tier;
    this._version = config.version;
    this._connections.internalValue = config.connections;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._timeouts.internalValue = config.timeouts;
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

  // gateway_ip - computed: false, optional: false, required: true
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // tier - computed: false, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // connections - computed: false, optional: false, required: true
  private _connections = new VpnIpsecGatewayConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
  }
  public putConnections(value: VpnIpsecGatewayConnections[] | cdktf.IResolvable) {
    this._connections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new VpnIpsecGatewayMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: VpnIpsecGatewayMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpnIpsecGatewayTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpnIpsecGatewayTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      gateway_ip: cdktf.stringToTerraform(this._gatewayIp),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      tier: cdktf.stringToTerraform(this._tier),
      version: cdktf.stringToTerraform(this._version),
      connections: cdktf.listMapper(vpnIpsecGatewayConnectionsToTerraform, true)(this._connections.internalValue),
      maintenance_window: vpnIpsecGatewayMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      timeouts: vpnIpsecGatewayTimeoutsToTerraform(this._timeouts.internalValue),
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
      gateway_ip: {
        value: cdktf.stringToHclTerraform(this._gatewayIp),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connections: {
        value: cdktf.listMapperHcl(vpnIpsecGatewayConnectionsToHclTerraform, true)(this._connections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIpsecGatewayConnectionsList",
      },
      maintenance_window: {
        value: vpnIpsecGatewayMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIpsecGatewayMaintenanceWindowList",
      },
      timeouts: {
        value: vpnIpsecGatewayTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpnIpsecGatewayTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
