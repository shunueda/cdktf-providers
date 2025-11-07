// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_vpn_conn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsTgwVpnConnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique name of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_vpn_conn#connection_name AwsTgwVpnConn#connection_name}
  */
  readonly connectionName: string;
  /**
  * Connection type. Valid values: 'dynamic', 'static'. 'dynamic' stands for a BGP VPN connection; 'static' stands for a static VPN connection. Default value: 'dynamic'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_vpn_conn#connection_type AwsTgwVpnConn#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Enable Global Acceleration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_vpn_conn#enable_global_acceleration AwsTgwVpnConn#enable_global_acceleration}
  */
  readonly enableGlobalAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Switch to enable/disable encrypted transit approval for vpn connection. Valid values: true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_vpn_conn#enable_learned_cidrs_approval AwsTgwVpnConn#enable_learned_cidrs_approval}
  */
  readonly enableLearnedCidrsApproval?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_vpn_conn#id AwsTgwVpnConn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Inside IP CIDR for Tunnel 1. A /30 CIDR in 169.254.0.0/16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_vpn_conn#inside_ip_cidr_tun_1 AwsTgwVpnConn#inside_ip_cidr_tun_1}
  */
  readonly insideIpCidrTun1?: string;
  /**
  * Inside IP CIDR for Tunnel 2. A /30 CIDR in 169.254.0.0/16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_vpn_conn#inside_ip_cidr_tun_2 AwsTgwVpnConn#inside_ip_cidr_tun_2}
  */
  readonly insideIpCidrTun2?: string;
  /**
  * Pre-Shared Key for Tunnel 1. A 8-64 character string with alphanumeric, underscore(_) and dot(.). It cannot start with 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_vpn_conn#pre_shared_key_tun_1 AwsTgwVpnConn#pre_shared_key_tun_1}
  */
  readonly preSharedKeyTun1?: string;
  /**
  * Pre-Shared Key for Tunnel 2. A 8-64 character string with alphanumeric, underscore(_) and dot(.). It cannot start with 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_vpn_conn#pre_shared_key_tun_2 AwsTgwVpnConn#pre_shared_key_tun_2}
  */
  readonly preSharedKeyTun2?: string;
  /**
  * Public IP address. Example: '40.0.0.0'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_vpn_conn#public_ip AwsTgwVpnConn#public_ip}
  */
  readonly publicIp: string;
  /**
  * AWS side as a number. Integer between 1-4294967294. Example: '12'. Required for a dynamic VPN connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_vpn_conn#remote_as_number AwsTgwVpnConn#remote_as_number}
  */
  readonly remoteAsNumber?: string;
  /**
  * Remote CIDRs joined as a string with ','. Required for a static VPN connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_vpn_conn#remote_cidr AwsTgwVpnConn#remote_cidr}
  */
  readonly remoteCidr?: string;
  /**
  * The name of a route domain, to which the vpn will be attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_vpn_conn#route_domain_name AwsTgwVpnConn#route_domain_name}
  */
  readonly routeDomainName: string;
  /**
  * This parameter represents the name of an AWS TGW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_vpn_conn#tgw_name AwsTgwVpnConn#tgw_name}
  */
  readonly tgwName: string;
}
export interface AwsTgwVpnConnVpnTunnelData {
}

export function awsTgwVpnConnVpnTunnelDataToTerraform(struct?: AwsTgwVpnConnVpnTunnelData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function awsTgwVpnConnVpnTunnelDataToHclTerraform(struct?: AwsTgwVpnConnVpnTunnelData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AwsTgwVpnConnVpnTunnelDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsTgwVpnConnVpnTunnelData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwVpnConnVpnTunnelData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_status_change_time - computed: true, optional: false, required: false
  public get lastStatusChangeTime() {
    return this.getStringAttribute('last_status_change_time');
  }

  // route_count - computed: true, optional: false, required: false
  public get routeCount() {
    return this.getNumberAttribute('route_count');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // tgw_asn - computed: true, optional: false, required: false
  public get tgwAsn() {
    return this.getStringAttribute('tgw_asn');
  }

  // tunnel_name - computed: true, optional: false, required: false
  public get tunnelName() {
    return this.getStringAttribute('tunnel_name');
  }

  // vpn_inside_address - computed: true, optional: false, required: false
  public get vpnInsideAddress() {
    return this.getStringAttribute('vpn_inside_address');
  }

  // vpn_outside_address - computed: true, optional: false, required: false
  public get vpnOutsideAddress() {
    return this.getStringAttribute('vpn_outside_address');
  }
}

export class AwsTgwVpnConnVpnTunnelDataList extends cdktf.ComplexList {

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
  public get(index: number): AwsTgwVpnConnVpnTunnelDataOutputReference {
    return new AwsTgwVpnConnVpnTunnelDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_vpn_conn aviatrix_aws_tgw_vpn_conn}
*/
export class AwsTgwVpnConn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_aws_tgw_vpn_conn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsTgwVpnConn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsTgwVpnConn to import
  * @param importFromId The id of the existing AwsTgwVpnConn that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_vpn_conn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsTgwVpnConn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_aws_tgw_vpn_conn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_vpn_conn aviatrix_aws_tgw_vpn_conn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsTgwVpnConnConfig
  */
  public constructor(scope: Construct, id: string, config: AwsTgwVpnConnConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_aws_tgw_vpn_conn',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionName = config.connectionName;
    this._connectionType = config.connectionType;
    this._enableGlobalAcceleration = config.enableGlobalAcceleration;
    this._enableLearnedCidrsApproval = config.enableLearnedCidrsApproval;
    this._id = config.id;
    this._insideIpCidrTun1 = config.insideIpCidrTun1;
    this._insideIpCidrTun2 = config.insideIpCidrTun2;
    this._preSharedKeyTun1 = config.preSharedKeyTun1;
    this._preSharedKeyTun2 = config.preSharedKeyTun2;
    this._publicIp = config.publicIp;
    this._remoteAsNumber = config.remoteAsNumber;
    this._remoteCidr = config.remoteCidr;
    this._routeDomainName = config.routeDomainName;
    this._tgwName = config.tgwName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // connection_type - computed: false, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // enable_global_acceleration - computed: false, optional: true, required: false
  private _enableGlobalAcceleration?: boolean | cdktf.IResolvable; 
  public get enableGlobalAcceleration() {
    return this.getBooleanAttribute('enable_global_acceleration');
  }
  public set enableGlobalAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableGlobalAcceleration = value;
  }
  public resetEnableGlobalAcceleration() {
    this._enableGlobalAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGlobalAccelerationInput() {
    return this._enableGlobalAcceleration;
  }

  // enable_learned_cidrs_approval - computed: false, optional: true, required: false
  private _enableLearnedCidrsApproval?: boolean | cdktf.IResolvable; 
  public get enableLearnedCidrsApproval() {
    return this.getBooleanAttribute('enable_learned_cidrs_approval');
  }
  public set enableLearnedCidrsApproval(value: boolean | cdktf.IResolvable) {
    this._enableLearnedCidrsApproval = value;
  }
  public resetEnableLearnedCidrsApproval() {
    this._enableLearnedCidrsApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLearnedCidrsApprovalInput() {
    return this._enableLearnedCidrsApproval;
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

  // inside_ip_cidr_tun_1 - computed: false, optional: true, required: false
  private _insideIpCidrTun1?: string; 
  public get insideIpCidrTun1() {
    return this.getStringAttribute('inside_ip_cidr_tun_1');
  }
  public set insideIpCidrTun1(value: string) {
    this._insideIpCidrTun1 = value;
  }
  public resetInsideIpCidrTun1() {
    this._insideIpCidrTun1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideIpCidrTun1Input() {
    return this._insideIpCidrTun1;
  }

  // inside_ip_cidr_tun_2 - computed: false, optional: true, required: false
  private _insideIpCidrTun2?: string; 
  public get insideIpCidrTun2() {
    return this.getStringAttribute('inside_ip_cidr_tun_2');
  }
  public set insideIpCidrTun2(value: string) {
    this._insideIpCidrTun2 = value;
  }
  public resetInsideIpCidrTun2() {
    this._insideIpCidrTun2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideIpCidrTun2Input() {
    return this._insideIpCidrTun2;
  }

  // pre_shared_key_tun_1 - computed: false, optional: true, required: false
  private _preSharedKeyTun1?: string; 
  public get preSharedKeyTun1() {
    return this.getStringAttribute('pre_shared_key_tun_1');
  }
  public set preSharedKeyTun1(value: string) {
    this._preSharedKeyTun1 = value;
  }
  public resetPreSharedKeyTun1() {
    this._preSharedKeyTun1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyTun1Input() {
    return this._preSharedKeyTun1;
  }

  // pre_shared_key_tun_2 - computed: false, optional: true, required: false
  private _preSharedKeyTun2?: string; 
  public get preSharedKeyTun2() {
    return this.getStringAttribute('pre_shared_key_tun_2');
  }
  public set preSharedKeyTun2(value: string) {
    this._preSharedKeyTun2 = value;
  }
  public resetPreSharedKeyTun2() {
    this._preSharedKeyTun2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyTun2Input() {
    return this._preSharedKeyTun2;
  }

  // public_ip - computed: false, optional: false, required: true
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // remote_as_number - computed: false, optional: true, required: false
  private _remoteAsNumber?: string; 
  public get remoteAsNumber() {
    return this.getStringAttribute('remote_as_number');
  }
  public set remoteAsNumber(value: string) {
    this._remoteAsNumber = value;
  }
  public resetRemoteAsNumber() {
    this._remoteAsNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsNumberInput() {
    return this._remoteAsNumber;
  }

  // remote_cidr - computed: false, optional: true, required: false
  private _remoteCidr?: string; 
  public get remoteCidr() {
    return this.getStringAttribute('remote_cidr');
  }
  public set remoteCidr(value: string) {
    this._remoteCidr = value;
  }
  public resetRemoteCidr() {
    this._remoteCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteCidrInput() {
    return this._remoteCidr;
  }

  // route_domain_name - computed: false, optional: false, required: true
  private _routeDomainName?: string; 
  public get routeDomainName() {
    return this.getStringAttribute('route_domain_name');
  }
  public set routeDomainName(value: string) {
    this._routeDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeDomainNameInput() {
    return this._routeDomainName;
  }

  // tgw_name - computed: false, optional: false, required: true
  private _tgwName?: string; 
  public get tgwName() {
    return this.getStringAttribute('tgw_name');
  }
  public set tgwName(value: string) {
    this._tgwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwNameInput() {
    return this._tgwName;
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getStringAttribute('vpn_id');
  }

  // vpn_tunnel_data - computed: true, optional: false, required: false
  private _vpnTunnelData = new AwsTgwVpnConnVpnTunnelDataList(this, "vpn_tunnel_data", false);
  public get vpnTunnelData() {
    return this._vpnTunnelData;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_name: cdktf.stringToTerraform(this._connectionName),
      connection_type: cdktf.stringToTerraform(this._connectionType),
      enable_global_acceleration: cdktf.booleanToTerraform(this._enableGlobalAcceleration),
      enable_learned_cidrs_approval: cdktf.booleanToTerraform(this._enableLearnedCidrsApproval),
      id: cdktf.stringToTerraform(this._id),
      inside_ip_cidr_tun_1: cdktf.stringToTerraform(this._insideIpCidrTun1),
      inside_ip_cidr_tun_2: cdktf.stringToTerraform(this._insideIpCidrTun2),
      pre_shared_key_tun_1: cdktf.stringToTerraform(this._preSharedKeyTun1),
      pre_shared_key_tun_2: cdktf.stringToTerraform(this._preSharedKeyTun2),
      public_ip: cdktf.stringToTerraform(this._publicIp),
      remote_as_number: cdktf.stringToTerraform(this._remoteAsNumber),
      remote_cidr: cdktf.stringToTerraform(this._remoteCidr),
      route_domain_name: cdktf.stringToTerraform(this._routeDomainName),
      tgw_name: cdktf.stringToTerraform(this._tgwName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_name: {
        value: cdktf.stringToHclTerraform(this._connectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_type: {
        value: cdktf.stringToHclTerraform(this._connectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_global_acceleration: {
        value: cdktf.booleanToHclTerraform(this._enableGlobalAcceleration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_learned_cidrs_approval: {
        value: cdktf.booleanToHclTerraform(this._enableLearnedCidrsApproval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inside_ip_cidr_tun_1: {
        value: cdktf.stringToHclTerraform(this._insideIpCidrTun1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inside_ip_cidr_tun_2: {
        value: cdktf.stringToHclTerraform(this._insideIpCidrTun2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_shared_key_tun_1: {
        value: cdktf.stringToHclTerraform(this._preSharedKeyTun1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_shared_key_tun_2: {
        value: cdktf.stringToHclTerraform(this._preSharedKeyTun2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip: {
        value: cdktf.stringToHclTerraform(this._publicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_as_number: {
        value: cdktf.stringToHclTerraform(this._remoteAsNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_cidr: {
        value: cdktf.stringToHclTerraform(this._remoteCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_domain_name: {
        value: cdktf.stringToHclTerraform(this._routeDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgw_name: {
        value: cdktf.stringToHclTerraform(this._tgwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
