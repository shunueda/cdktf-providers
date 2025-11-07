// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLinkmonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#addr_mode SystemLinkmonitor#addr_mode}
  */
  readonly addrMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#dynamic_sort_subtable SystemLinkmonitor#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#failtime SystemLinkmonitor#failtime}
  */
  readonly failtime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#gateway_ip SystemLinkmonitor#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#gateway_ip6 SystemLinkmonitor#gateway_ip6}
  */
  readonly gatewayIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#http_get SystemLinkmonitor#http_get}
  */
  readonly httpGet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#http_match SystemLinkmonitor#http_match}
  */
  readonly httpMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#id SystemLinkmonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#interval SystemLinkmonitor#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#name SystemLinkmonitor#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#packet_size SystemLinkmonitor#packet_size}
  */
  readonly packetSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#password SystemLinkmonitor#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#port SystemLinkmonitor#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#protocol SystemLinkmonitor#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#recoverytime SystemLinkmonitor#recoverytime}
  */
  readonly recoverytime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#security_mode SystemLinkmonitor#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#source_ip SystemLinkmonitor#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#source_ip6 SystemLinkmonitor#source_ip6}
  */
  readonly sourceIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#srcintf SystemLinkmonitor#srcintf}
  */
  readonly srcintf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#status SystemLinkmonitor#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#timeout SystemLinkmonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#update_cascade_interface SystemLinkmonitor#update_cascade_interface}
  */
  readonly updateCascadeInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#update_static_route SystemLinkmonitor#update_static_route}
  */
  readonly updateStaticRoute?: string;
  /**
  * server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#server SystemLinkmonitor#server}
  */
  readonly server?: SystemLinkmonitorServer[] | cdktf.IResolvable;
}
export interface SystemLinkmonitorServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#address SystemLinkmonitor#address}
  */
  readonly address?: string;
}

export function systemLinkmonitorServerToTerraform(struct?: SystemLinkmonitorServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function systemLinkmonitorServerToHclTerraform(struct?: SystemLinkmonitorServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLinkmonitorServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemLinkmonitorServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLinkmonitorServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}

export class SystemLinkmonitorServerList extends cdktf.ComplexList {
  public internalValue? : SystemLinkmonitorServer[] | cdktf.IResolvable

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
  public get(index: number): SystemLinkmonitorServerOutputReference {
    return new SystemLinkmonitorServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor fortiswitch_system_linkmonitor}
*/
export class SystemLinkmonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_linkmonitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLinkmonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLinkmonitor to import
  * @param importFromId The id of the existing SystemLinkmonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLinkmonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_linkmonitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_linkmonitor fortiswitch_system_linkmonitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLinkmonitorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemLinkmonitorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_linkmonitor',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addrMode = config.addrMode;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._failtime = config.failtime;
    this._gatewayIp = config.gatewayIp;
    this._gatewayIp6 = config.gatewayIp6;
    this._httpGet = config.httpGet;
    this._httpMatch = config.httpMatch;
    this._id = config.id;
    this._interval = config.interval;
    this._name = config.name;
    this._packetSize = config.packetSize;
    this._password = config.password;
    this._port = config.port;
    this._protocol = config.protocol;
    this._recoverytime = config.recoverytime;
    this._securityMode = config.securityMode;
    this._sourceIp = config.sourceIp;
    this._sourceIp6 = config.sourceIp6;
    this._srcintf = config.srcintf;
    this._status = config.status;
    this._timeout = config.timeout;
    this._updateCascadeInterface = config.updateCascadeInterface;
    this._updateStaticRoute = config.updateStaticRoute;
    this._server.internalValue = config.server;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr_mode - computed: true, optional: true, required: false
  private _addrMode?: string; 
  public get addrMode() {
    return this.getStringAttribute('addr_mode');
  }
  public set addrMode(value: string) {
    this._addrMode = value;
  }
  public resetAddrMode() {
    this._addrMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrModeInput() {
    return this._addrMode;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // failtime - computed: true, optional: true, required: false
  private _failtime?: number; 
  public get failtime() {
    return this.getNumberAttribute('failtime');
  }
  public set failtime(value: number) {
    this._failtime = value;
  }
  public resetFailtime() {
    this._failtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failtimeInput() {
    return this._failtime;
  }

  // gateway_ip - computed: true, optional: true, required: false
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  public resetGatewayIp() {
    this._gatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp;
  }

  // gateway_ip6 - computed: true, optional: true, required: false
  private _gatewayIp6?: string; 
  public get gatewayIp6() {
    return this.getStringAttribute('gateway_ip6');
  }
  public set gatewayIp6(value: string) {
    this._gatewayIp6 = value;
  }
  public resetGatewayIp6() {
    this._gatewayIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIp6Input() {
    return this._gatewayIp6;
  }

  // http_get - computed: true, optional: true, required: false
  private _httpGet?: string; 
  public get httpGet() {
    return this.getStringAttribute('http_get');
  }
  public set httpGet(value: string) {
    this._httpGet = value;
  }
  public resetHttpGet() {
    this._httpGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet;
  }

  // http_match - computed: true, optional: true, required: false
  private _httpMatch?: string; 
  public get httpMatch() {
    return this.getStringAttribute('http_match');
  }
  public set httpMatch(value: string) {
    this._httpMatch = value;
  }
  public resetHttpMatch() {
    this._httpMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMatchInput() {
    return this._httpMatch;
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

  // interval - computed: true, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
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

  // packet_size - computed: true, optional: true, required: false
  private _packetSize?: number; 
  public get packetSize() {
    return this.getNumberAttribute('packet_size');
  }
  public set packetSize(value: number) {
    this._packetSize = value;
  }
  public resetPacketSize() {
    this._packetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSizeInput() {
    return this._packetSize;
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

  // port - computed: true, optional: true, required: false
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

  // protocol - computed: true, optional: true, required: false
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

  // recoverytime - computed: true, optional: true, required: false
  private _recoverytime?: number; 
  public get recoverytime() {
    return this.getNumberAttribute('recoverytime');
  }
  public set recoverytime(value: number) {
    this._recoverytime = value;
  }
  public resetRecoverytime() {
    this._recoverytime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverytimeInput() {
    return this._recoverytime;
  }

  // security_mode - computed: true, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_ip6 - computed: true, optional: true, required: false
  private _sourceIp6?: string; 
  public get sourceIp6() {
    return this.getStringAttribute('source_ip6');
  }
  public set sourceIp6(value: string) {
    this._sourceIp6 = value;
  }
  public resetSourceIp6() {
    this._sourceIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIp6Input() {
    return this._sourceIp6;
  }

  // srcintf - computed: true, optional: true, required: false
  private _srcintf?: string; 
  public get srcintf() {
    return this.getStringAttribute('srcintf');
  }
  public set srcintf(value: string) {
    this._srcintf = value;
  }
  public resetSrcintf() {
    this._srcintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcintfInput() {
    return this._srcintf;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // update_cascade_interface - computed: true, optional: true, required: false
  private _updateCascadeInterface?: string; 
  public get updateCascadeInterface() {
    return this.getStringAttribute('update_cascade_interface');
  }
  public set updateCascadeInterface(value: string) {
    this._updateCascadeInterface = value;
  }
  public resetUpdateCascadeInterface() {
    this._updateCascadeInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateCascadeInterfaceInput() {
    return this._updateCascadeInterface;
  }

  // update_static_route - computed: true, optional: true, required: false
  private _updateStaticRoute?: string; 
  public get updateStaticRoute() {
    return this.getStringAttribute('update_static_route');
  }
  public set updateStaticRoute(value: string) {
    this._updateStaticRoute = value;
  }
  public resetUpdateStaticRoute() {
    this._updateStaticRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStaticRouteInput() {
    return this._updateStaticRoute;
  }

  // server - computed: false, optional: true, required: false
  private _server = new SystemLinkmonitorServerList(this, "server", false);
  public get server() {
    return this._server;
  }
  public putServer(value: SystemLinkmonitorServer[] | cdktf.IResolvable) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr_mode: cdktf.stringToTerraform(this._addrMode),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      failtime: cdktf.numberToTerraform(this._failtime),
      gateway_ip: cdktf.stringToTerraform(this._gatewayIp),
      gateway_ip6: cdktf.stringToTerraform(this._gatewayIp6),
      http_get: cdktf.stringToTerraform(this._httpGet),
      http_match: cdktf.stringToTerraform(this._httpMatch),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      name: cdktf.stringToTerraform(this._name),
      packet_size: cdktf.numberToTerraform(this._packetSize),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      recoverytime: cdktf.numberToTerraform(this._recoverytime),
      security_mode: cdktf.stringToTerraform(this._securityMode),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_ip6: cdktf.stringToTerraform(this._sourceIp6),
      srcintf: cdktf.stringToTerraform(this._srcintf),
      status: cdktf.stringToTerraform(this._status),
      timeout: cdktf.numberToTerraform(this._timeout),
      update_cascade_interface: cdktf.stringToTerraform(this._updateCascadeInterface),
      update_static_route: cdktf.stringToTerraform(this._updateStaticRoute),
      server: cdktf.listMapper(systemLinkmonitorServerToTerraform, true)(this._server.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr_mode: {
        value: cdktf.stringToHclTerraform(this._addrMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failtime: {
        value: cdktf.numberToHclTerraform(this._failtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gateway_ip: {
        value: cdktf.stringToHclTerraform(this._gatewayIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_ip6: {
        value: cdktf.stringToHclTerraform(this._gatewayIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_get: {
        value: cdktf.stringToHclTerraform(this._httpGet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_match: {
        value: cdktf.stringToHclTerraform(this._httpMatch),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_size: {
        value: cdktf.numberToHclTerraform(this._packetSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recoverytime: {
        value: cdktf.numberToHclTerraform(this._recoverytime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_mode: {
        value: cdktf.stringToHclTerraform(this._securityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip6: {
        value: cdktf.stringToHclTerraform(this._sourceIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcintf: {
        value: cdktf.stringToHclTerraform(this._srcintf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_cascade_interface: {
        value: cdktf.stringToHclTerraform(this._updateCascadeInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_static_route: {
        value: cdktf.stringToHclTerraform(this._updateStaticRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.listMapperHcl(systemLinkmonitorServerToHclTerraform, true)(this._server.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemLinkmonitorServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
