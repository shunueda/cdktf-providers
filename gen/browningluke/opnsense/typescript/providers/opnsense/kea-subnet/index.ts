// https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/kea_subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeaSubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatically update option data from the GUI for relevant attributes. When set, values for `routers`, `dns_servers` and `ntp_servers` will be ignored. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/kea_subnet#auto_collect KeaSubnet#auto_collect}
  */
  readonly autoCollect?: boolean | cdktf.IResolvable;
  /**
  * Optional description here for your reference (not parsed).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/kea_subnet#description KeaSubnet#description}
  */
  readonly description?: string;
  /**
  * DNS servers to offer to the clients. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/kea_subnet#dns_servers KeaSubnet#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Domain name to offer to the client, set to this firewall's domain name when left empty. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/kea_subnet#domain_name KeaSubnet#domain_name}
  */
  readonly domainName?: string;
  /**
  * Set of Domain Names to be used by the client to locate not-fully-qualified domain names. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/kea_subnet#domain_search KeaSubnet#domain_search}
  */
  readonly domainSearch?: string[];
  /**
  * By default, KEA uses client-identifiers instead of MAC addresses to locate clients, disabling this option changes back to matching on MAC address which is used by most dhcp implementations. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/kea_subnet#match_client_id KeaSubnet#match_client_id}
  */
  readonly matchClientId?: boolean | cdktf.IResolvable;
  /**
  * Next server IP address. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/kea_subnet#next_server KeaSubnet#next_server}
  */
  readonly nextServer?: string;
  /**
  * Set of IP addresses indicating NTP (RFC 5905) servers available to the client. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/kea_subnet#ntp_servers KeaSubnet#ntp_servers}
  */
  readonly ntpServers?: string[];
  /**
  * Set of pools in range or subnet format (e.g. `"192.168.0.100 - 192.168.0.200"` , `"192.0.2.64/26"`). Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/kea_subnet#pools KeaSubnet#pools}
  */
  readonly pools?: string[];
  /**
  * Default gateways to offer to the clients. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/kea_subnet#routers KeaSubnet#routers}
  */
  readonly routers?: string[];
  /**
  * Static routes that the client should install in its routing cache. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/kea_subnet#static_routes KeaSubnet#static_routes}
  */
  readonly staticRoutes?: KeaSubnetStaticRoutes[] | cdktf.IResolvable;
  /**
  * Subnet to use (e.g. `"192.0.2.64/26"`), should be large enough to hold the specified pools and reservations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/kea_subnet#subnet KeaSubnet#subnet}
  */
  readonly subnet: string;
  /**
  * Boot filename to request. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/kea_subnet#tftp_bootfile KeaSubnet#tftp_bootfile}
  */
  readonly tftpBootfile?: string;
  /**
  * TFTP server address or fqdn. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/kea_subnet#tftp_server KeaSubnet#tftp_server}
  */
  readonly tftpServer?: string;
  /**
  * Set of RFC 868 time servers available to the client. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/kea_subnet#time_servers KeaSubnet#time_servers}
  */
  readonly timeServers?: string[];
}
export interface KeaSubnetStaticRoutes {
  /**
  * Destination IP address for static route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/kea_subnet#destination_ip KeaSubnet#destination_ip}
  */
  readonly destinationIp: string;
  /**
  * Gateway IP for static route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/kea_subnet#router_ip KeaSubnet#router_ip}
  */
  readonly routerIp: string;
}

export function keaSubnetStaticRoutesToTerraform(struct?: KeaSubnetStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_ip: cdktf.stringToTerraform(struct!.destinationIp),
    router_ip: cdktf.stringToTerraform(struct!.routerIp),
  }
}


export function keaSubnetStaticRoutesToHclTerraform(struct?: KeaSubnetStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_ip: {
      value: cdktf.stringToHclTerraform(struct!.destinationIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    router_ip: {
      value: cdktf.stringToHclTerraform(struct!.routerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeaSubnetStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KeaSubnetStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIp = this._destinationIp;
    }
    if (this._routerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerIp = this._routerIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeaSubnetStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationIp = undefined;
      this._routerIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationIp = value.destinationIp;
      this._routerIp = value.routerIp;
    }
  }

  // destination_ip - computed: true, optional: false, required: true
  private _destinationIp?: string; 
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }
  public set destinationIp(value: string) {
    this._destinationIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpInput() {
    return this._destinationIp;
  }

  // router_ip - computed: true, optional: false, required: true
  private _routerIp?: string; 
  public get routerIp() {
    return this.getStringAttribute('router_ip');
  }
  public set routerIp(value: string) {
    this._routerIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIpInput() {
    return this._routerIp;
  }
}

export class KeaSubnetStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : KeaSubnetStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): KeaSubnetStaticRoutesOutputReference {
    return new KeaSubnetStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/kea_subnet opnsense_kea_subnet}
*/
export class KeaSubnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_kea_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeaSubnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeaSubnet to import
  * @param importFromId The id of the existing KeaSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/kea_subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeaSubnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_kea_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs/resources/kea_subnet opnsense_kea_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeaSubnetConfig
  */
  public constructor(scope: Construct, id: string, config: KeaSubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_kea_subnet',
      terraformGeneratorMetadata: {
        providerName: 'opnsense',
        providerVersion: '0.16.1',
        providerVersionConstraint: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoCollect = config.autoCollect;
    this._description = config.description;
    this._dnsServers = config.dnsServers;
    this._domainName = config.domainName;
    this._domainSearch = config.domainSearch;
    this._matchClientId = config.matchClientId;
    this._nextServer = config.nextServer;
    this._ntpServers = config.ntpServers;
    this._pools = config.pools;
    this._routers = config.routers;
    this._staticRoutes.internalValue = config.staticRoutes;
    this._subnet = config.subnet;
    this._tftpBootfile = config.tftpBootfile;
    this._tftpServer = config.tftpServer;
    this._timeServers = config.timeServers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_collect - computed: true, optional: true, required: false
  private _autoCollect?: boolean | cdktf.IResolvable; 
  public get autoCollect() {
    return this.getBooleanAttribute('auto_collect');
  }
  public set autoCollect(value: boolean | cdktf.IResolvable) {
    this._autoCollect = value;
  }
  public resetAutoCollect() {
    this._autoCollect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCollectInput() {
    return this._autoCollect;
  }

  // description - computed: true, optional: true, required: false
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

  // dns_servers - computed: true, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_servers'));
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

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_search - computed: true, optional: true, required: false
  private _domainSearch?: string[]; 
  public get domainSearch() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_search'));
  }
  public set domainSearch(value: string[]) {
    this._domainSearch = value;
  }
  public resetDomainSearch() {
    this._domainSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainSearchInput() {
    return this._domainSearch;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match_client_id - computed: true, optional: true, required: false
  private _matchClientId?: boolean | cdktf.IResolvable; 
  public get matchClientId() {
    return this.getBooleanAttribute('match_client_id');
  }
  public set matchClientId(value: boolean | cdktf.IResolvable) {
    this._matchClientId = value;
  }
  public resetMatchClientId() {
    this._matchClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchClientIdInput() {
    return this._matchClientId;
  }

  // next_server - computed: true, optional: true, required: false
  private _nextServer?: string; 
  public get nextServer() {
    return this.getStringAttribute('next_server');
  }
  public set nextServer(value: string) {
    this._nextServer = value;
  }
  public resetNextServer() {
    this._nextServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextServerInput() {
    return this._nextServer;
  }

  // ntp_servers - computed: true, optional: true, required: false
  private _ntpServers?: string[]; 
  public get ntpServers() {
    return cdktf.Fn.tolist(this.getListAttribute('ntp_servers'));
  }
  public set ntpServers(value: string[]) {
    this._ntpServers = value;
  }
  public resetNtpServers() {
    this._ntpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers;
  }

  // pools - computed: true, optional: true, required: false
  private _pools?: string[]; 
  public get pools() {
    return cdktf.Fn.tolist(this.getListAttribute('pools'));
  }
  public set pools(value: string[]) {
    this._pools = value;
  }
  public resetPools() {
    this._pools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools;
  }

  // routers - computed: true, optional: true, required: false
  private _routers?: string[]; 
  public get routers() {
    return cdktf.Fn.tolist(this.getListAttribute('routers'));
  }
  public set routers(value: string[]) {
    this._routers = value;
  }
  public resetRouters() {
    this._routers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routersInput() {
    return this._routers;
  }

  // static_routes - computed: true, optional: true, required: false
  private _staticRoutes = new KeaSubnetStaticRoutesList(this, "static_routes", true);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: KeaSubnetStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  public resetStaticRoutes() {
    this._staticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // tftp_bootfile - computed: true, optional: true, required: false
  private _tftpBootfile?: string; 
  public get tftpBootfile() {
    return this.getStringAttribute('tftp_bootfile');
  }
  public set tftpBootfile(value: string) {
    this._tftpBootfile = value;
  }
  public resetTftpBootfile() {
    this._tftpBootfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpBootfileInput() {
    return this._tftpBootfile;
  }

  // tftp_server - computed: true, optional: true, required: false
  private _tftpServer?: string; 
  public get tftpServer() {
    return this.getStringAttribute('tftp_server');
  }
  public set tftpServer(value: string) {
    this._tftpServer = value;
  }
  public resetTftpServer() {
    this._tftpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpServerInput() {
    return this._tftpServer;
  }

  // time_servers - computed: true, optional: true, required: false
  private _timeServers?: string[]; 
  public get timeServers() {
    return cdktf.Fn.tolist(this.getListAttribute('time_servers'));
  }
  public set timeServers(value: string[]) {
    this._timeServers = value;
  }
  public resetTimeServers() {
    this._timeServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeServersInput() {
    return this._timeServers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_collect: cdktf.booleanToTerraform(this._autoCollect),
      description: cdktf.stringToTerraform(this._description),
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServers),
      domain_name: cdktf.stringToTerraform(this._domainName),
      domain_search: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainSearch),
      match_client_id: cdktf.booleanToTerraform(this._matchClientId),
      next_server: cdktf.stringToTerraform(this._nextServer),
      ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ntpServers),
      pools: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pools),
      routers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routers),
      static_routes: cdktf.listMapper(keaSubnetStaticRoutesToTerraform, false)(this._staticRoutes.internalValue),
      subnet: cdktf.stringToTerraform(this._subnet),
      tftp_bootfile: cdktf.stringToTerraform(this._tftpBootfile),
      tftp_server: cdktf.stringToTerraform(this._tftpServer),
      time_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._timeServers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_collect: {
        value: cdktf.booleanToHclTerraform(this._autoCollect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_search: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainSearch),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      match_client_id: {
        value: cdktf.booleanToHclTerraform(this._matchClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      next_server: {
        value: cdktf.stringToHclTerraform(this._nextServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ntpServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      pools: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pools),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      routers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      static_routes: {
        value: cdktf.listMapperHcl(keaSubnetStaticRoutesToHclTerraform, false)(this._staticRoutes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KeaSubnetStaticRoutesList",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tftp_bootfile: {
        value: cdktf.stringToHclTerraform(this._tftpBootfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tftp_server: {
        value: cdktf.stringToHclTerraform(this._tftpServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._timeServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
