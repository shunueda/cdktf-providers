// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserRadiusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#acct_fast_framedip_detect UserRadius#acct_fast_framedip_detect}
  */
  readonly acctFastFramedipDetect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#acct_interim_interval UserRadius#acct_interim_interval}
  */
  readonly acctInterimInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#addr_mode UserRadius#addr_mode}
  */
  readonly addrMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#all_usergroup UserRadius#all_usergroup}
  */
  readonly allUsergroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#auth_type UserRadius#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#dynamic_sort_subtable UserRadius#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#frame_mtu_size UserRadius#frame_mtu_size}
  */
  readonly frameMtuSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#id UserRadius#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#link_monitor UserRadius#link_monitor}
  */
  readonly linkMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#link_monitor_interval UserRadius#link_monitor_interval}
  */
  readonly linkMonitorInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#name UserRadius#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#nas_ip UserRadius#nas_ip}
  */
  readonly nasIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#nas_ip6 UserRadius#nas_ip6}
  */
  readonly nasIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#radius_coa UserRadius#radius_coa}
  */
  readonly radiusCoa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#radius_coa_secret UserRadius#radius_coa_secret}
  */
  readonly radiusCoaSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#radius_port UserRadius#radius_port}
  */
  readonly radiusPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#radsec_cert_cn_dns UserRadius#radsec_cert_cn_dns}
  */
  readonly radsecCertCnDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#radsec_cert_validate UserRadius#radsec_cert_validate}
  */
  readonly radsecCertValidate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#radsec_client_cert UserRadius#radsec_client_cert}
  */
  readonly radsecClientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#radsec_connect_timeout UserRadius#radsec_connect_timeout}
  */
  readonly radsecConnectTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#radsec_dtls_min_ver UserRadius#radsec_dtls_min_ver}
  */
  readonly radsecDtlsMinVer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#radsec_idle_timeout UserRadius#radsec_idle_timeout}
  */
  readonly radsecIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#radsec_oper_mode UserRadius#radsec_oper_mode}
  */
  readonly radsecOperMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#radsec_port UserRadius#radsec_port}
  */
  readonly radsecPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#radsec_server_ca_cert UserRadius#radsec_server_ca_cert}
  */
  readonly radsecServerCaCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#radsec_tls_min_ver UserRadius#radsec_tls_min_ver}
  */
  readonly radsecTlsMinVer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#secondary_secret UserRadius#secondary_secret}
  */
  readonly secondarySecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#secondary_server UserRadius#secondary_server}
  */
  readonly secondaryServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#secret UserRadius#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#server UserRadius#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#service_type UserRadius#service_type}
  */
  readonly serviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#source_ip UserRadius#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#source_ip6 UserRadius#source_ip6}
  */
  readonly sourceIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#transport_type UserRadius#transport_type}
  */
  readonly transportType?: string;
  /**
  * acct_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#acct_server UserRadius#acct_server}
  */
  readonly acctServer?: UserRadiusAcctServer[] | cdktf.IResolvable;
}
export interface UserRadiusAcctServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#id UserRadius#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#port UserRadius#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#secret UserRadius#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#server UserRadius#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#status UserRadius#status}
  */
  readonly status?: string;
}

export function userRadiusAcctServerToTerraform(struct?: UserRadiusAcctServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    port: cdktf.numberToTerraform(struct!.port),
    secret: cdktf.stringToTerraform(struct!.secret),
    server: cdktf.stringToTerraform(struct!.server),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function userRadiusAcctServerToHclTerraform(struct?: UserRadiusAcctServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
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
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserRadiusAcctServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserRadiusAcctServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserRadiusAcctServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._port = undefined;
      this._secret = undefined;
      this._server = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._port = value.port;
      this._secret = value.secret;
      this._server = value.server;
      this._status = value.status;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // server - computed: true, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
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
}

export class UserRadiusAcctServerList extends cdktf.ComplexList {
  public internalValue? : UserRadiusAcctServer[] | cdktf.IResolvable

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
  public get(index: number): UserRadiusAcctServerOutputReference {
    return new UserRadiusAcctServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius fortiswitch_user_radius}
*/
export class UserRadius extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_user_radius";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserRadius resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserRadius to import
  * @param importFromId The id of the existing UserRadius that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserRadius to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_user_radius", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_radius fortiswitch_user_radius} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserRadiusConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserRadiusConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_user_radius',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acctFastFramedipDetect = config.acctFastFramedipDetect;
    this._acctInterimInterval = config.acctInterimInterval;
    this._addrMode = config.addrMode;
    this._allUsergroup = config.allUsergroup;
    this._authType = config.authType;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._frameMtuSize = config.frameMtuSize;
    this._id = config.id;
    this._linkMonitor = config.linkMonitor;
    this._linkMonitorInterval = config.linkMonitorInterval;
    this._name = config.name;
    this._nasIp = config.nasIp;
    this._nasIp6 = config.nasIp6;
    this._radiusCoa = config.radiusCoa;
    this._radiusCoaSecret = config.radiusCoaSecret;
    this._radiusPort = config.radiusPort;
    this._radsecCertCnDns = config.radsecCertCnDns;
    this._radsecCertValidate = config.radsecCertValidate;
    this._radsecClientCert = config.radsecClientCert;
    this._radsecConnectTimeout = config.radsecConnectTimeout;
    this._radsecDtlsMinVer = config.radsecDtlsMinVer;
    this._radsecIdleTimeout = config.radsecIdleTimeout;
    this._radsecOperMode = config.radsecOperMode;
    this._radsecPort = config.radsecPort;
    this._radsecServerCaCert = config.radsecServerCaCert;
    this._radsecTlsMinVer = config.radsecTlsMinVer;
    this._secondarySecret = config.secondarySecret;
    this._secondaryServer = config.secondaryServer;
    this._secret = config.secret;
    this._server = config.server;
    this._serviceType = config.serviceType;
    this._sourceIp = config.sourceIp;
    this._sourceIp6 = config.sourceIp6;
    this._transportType = config.transportType;
    this._acctServer.internalValue = config.acctServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acct_fast_framedip_detect - computed: true, optional: true, required: false
  private _acctFastFramedipDetect?: number; 
  public get acctFastFramedipDetect() {
    return this.getNumberAttribute('acct_fast_framedip_detect');
  }
  public set acctFastFramedipDetect(value: number) {
    this._acctFastFramedipDetect = value;
  }
  public resetAcctFastFramedipDetect() {
    this._acctFastFramedipDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctFastFramedipDetectInput() {
    return this._acctFastFramedipDetect;
  }

  // acct_interim_interval - computed: true, optional: true, required: false
  private _acctInterimInterval?: number; 
  public get acctInterimInterval() {
    return this.getNumberAttribute('acct_interim_interval');
  }
  public set acctInterimInterval(value: number) {
    this._acctInterimInterval = value;
  }
  public resetAcctInterimInterval() {
    this._acctInterimInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctInterimIntervalInput() {
    return this._acctInterimInterval;
  }

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

  // all_usergroup - computed: true, optional: true, required: false
  private _allUsergroup?: string; 
  public get allUsergroup() {
    return this.getStringAttribute('all_usergroup');
  }
  public set allUsergroup(value: string) {
    this._allUsergroup = value;
  }
  public resetAllUsergroup() {
    this._allUsergroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allUsergroupInput() {
    return this._allUsergroup;
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
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

  // frame_mtu_size - computed: true, optional: true, required: false
  private _frameMtuSize?: number; 
  public get frameMtuSize() {
    return this.getNumberAttribute('frame_mtu_size');
  }
  public set frameMtuSize(value: number) {
    this._frameMtuSize = value;
  }
  public resetFrameMtuSize() {
    this._frameMtuSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameMtuSizeInput() {
    return this._frameMtuSize;
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

  // link_monitor - computed: true, optional: true, required: false
  private _linkMonitor?: string; 
  public get linkMonitor() {
    return this.getStringAttribute('link_monitor');
  }
  public set linkMonitor(value: string) {
    this._linkMonitor = value;
  }
  public resetLinkMonitor() {
    this._linkMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkMonitorInput() {
    return this._linkMonitor;
  }

  // link_monitor_interval - computed: true, optional: true, required: false
  private _linkMonitorInterval?: number; 
  public get linkMonitorInterval() {
    return this.getNumberAttribute('link_monitor_interval');
  }
  public set linkMonitorInterval(value: number) {
    this._linkMonitorInterval = value;
  }
  public resetLinkMonitorInterval() {
    this._linkMonitorInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkMonitorIntervalInput() {
    return this._linkMonitorInterval;
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

  // nas_ip - computed: true, optional: true, required: false
  private _nasIp?: string; 
  public get nasIp() {
    return this.getStringAttribute('nas_ip');
  }
  public set nasIp(value: string) {
    this._nasIp = value;
  }
  public resetNasIp() {
    this._nasIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasIpInput() {
    return this._nasIp;
  }

  // nas_ip6 - computed: true, optional: true, required: false
  private _nasIp6?: string; 
  public get nasIp6() {
    return this.getStringAttribute('nas_ip6');
  }
  public set nasIp6(value: string) {
    this._nasIp6 = value;
  }
  public resetNasIp6() {
    this._nasIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasIp6Input() {
    return this._nasIp6;
  }

  // radius_coa - computed: true, optional: true, required: false
  private _radiusCoa?: string; 
  public get radiusCoa() {
    return this.getStringAttribute('radius_coa');
  }
  public set radiusCoa(value: string) {
    this._radiusCoa = value;
  }
  public resetRadiusCoa() {
    this._radiusCoa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusCoaInput() {
    return this._radiusCoa;
  }

  // radius_coa_secret - computed: false, optional: true, required: false
  private _radiusCoaSecret?: string; 
  public get radiusCoaSecret() {
    return this.getStringAttribute('radius_coa_secret');
  }
  public set radiusCoaSecret(value: string) {
    this._radiusCoaSecret = value;
  }
  public resetRadiusCoaSecret() {
    this._radiusCoaSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusCoaSecretInput() {
    return this._radiusCoaSecret;
  }

  // radius_port - computed: true, optional: true, required: false
  private _radiusPort?: number; 
  public get radiusPort() {
    return this.getNumberAttribute('radius_port');
  }
  public set radiusPort(value: number) {
    this._radiusPort = value;
  }
  public resetRadiusPort() {
    this._radiusPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusPortInput() {
    return this._radiusPort;
  }

  // radsec_cert_cn_dns - computed: true, optional: true, required: false
  private _radsecCertCnDns?: string; 
  public get radsecCertCnDns() {
    return this.getStringAttribute('radsec_cert_cn_dns');
  }
  public set radsecCertCnDns(value: string) {
    this._radsecCertCnDns = value;
  }
  public resetRadsecCertCnDns() {
    this._radsecCertCnDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radsecCertCnDnsInput() {
    return this._radsecCertCnDns;
  }

  // radsec_cert_validate - computed: true, optional: true, required: false
  private _radsecCertValidate?: string; 
  public get radsecCertValidate() {
    return this.getStringAttribute('radsec_cert_validate');
  }
  public set radsecCertValidate(value: string) {
    this._radsecCertValidate = value;
  }
  public resetRadsecCertValidate() {
    this._radsecCertValidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radsecCertValidateInput() {
    return this._radsecCertValidate;
  }

  // radsec_client_cert - computed: true, optional: true, required: false
  private _radsecClientCert?: string; 
  public get radsecClientCert() {
    return this.getStringAttribute('radsec_client_cert');
  }
  public set radsecClientCert(value: string) {
    this._radsecClientCert = value;
  }
  public resetRadsecClientCert() {
    this._radsecClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radsecClientCertInput() {
    return this._radsecClientCert;
  }

  // radsec_connect_timeout - computed: true, optional: true, required: false
  private _radsecConnectTimeout?: number; 
  public get radsecConnectTimeout() {
    return this.getNumberAttribute('radsec_connect_timeout');
  }
  public set radsecConnectTimeout(value: number) {
    this._radsecConnectTimeout = value;
  }
  public resetRadsecConnectTimeout() {
    this._radsecConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radsecConnectTimeoutInput() {
    return this._radsecConnectTimeout;
  }

  // radsec_dtls_min_ver - computed: true, optional: true, required: false
  private _radsecDtlsMinVer?: string; 
  public get radsecDtlsMinVer() {
    return this.getStringAttribute('radsec_dtls_min_ver');
  }
  public set radsecDtlsMinVer(value: string) {
    this._radsecDtlsMinVer = value;
  }
  public resetRadsecDtlsMinVer() {
    this._radsecDtlsMinVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radsecDtlsMinVerInput() {
    return this._radsecDtlsMinVer;
  }

  // radsec_idle_timeout - computed: true, optional: true, required: false
  private _radsecIdleTimeout?: number; 
  public get radsecIdleTimeout() {
    return this.getNumberAttribute('radsec_idle_timeout');
  }
  public set radsecIdleTimeout(value: number) {
    this._radsecIdleTimeout = value;
  }
  public resetRadsecIdleTimeout() {
    this._radsecIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radsecIdleTimeoutInput() {
    return this._radsecIdleTimeout;
  }

  // radsec_oper_mode - computed: true, optional: true, required: false
  private _radsecOperMode?: string; 
  public get radsecOperMode() {
    return this.getStringAttribute('radsec_oper_mode');
  }
  public set radsecOperMode(value: string) {
    this._radsecOperMode = value;
  }
  public resetRadsecOperMode() {
    this._radsecOperMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radsecOperModeInput() {
    return this._radsecOperMode;
  }

  // radsec_port - computed: true, optional: true, required: false
  private _radsecPort?: number; 
  public get radsecPort() {
    return this.getNumberAttribute('radsec_port');
  }
  public set radsecPort(value: number) {
    this._radsecPort = value;
  }
  public resetRadsecPort() {
    this._radsecPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radsecPortInput() {
    return this._radsecPort;
  }

  // radsec_server_ca_cert - computed: true, optional: true, required: false
  private _radsecServerCaCert?: string; 
  public get radsecServerCaCert() {
    return this.getStringAttribute('radsec_server_ca_cert');
  }
  public set radsecServerCaCert(value: string) {
    this._radsecServerCaCert = value;
  }
  public resetRadsecServerCaCert() {
    this._radsecServerCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radsecServerCaCertInput() {
    return this._radsecServerCaCert;
  }

  // radsec_tls_min_ver - computed: true, optional: true, required: false
  private _radsecTlsMinVer?: string; 
  public get radsecTlsMinVer() {
    return this.getStringAttribute('radsec_tls_min_ver');
  }
  public set radsecTlsMinVer(value: string) {
    this._radsecTlsMinVer = value;
  }
  public resetRadsecTlsMinVer() {
    this._radsecTlsMinVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radsecTlsMinVerInput() {
    return this._radsecTlsMinVer;
  }

  // secondary_secret - computed: false, optional: true, required: false
  private _secondarySecret?: string; 
  public get secondarySecret() {
    return this.getStringAttribute('secondary_secret');
  }
  public set secondarySecret(value: string) {
    this._secondarySecret = value;
  }
  public resetSecondarySecret() {
    this._secondarySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondarySecretInput() {
    return this._secondarySecret;
  }

  // secondary_server - computed: true, optional: true, required: false
  private _secondaryServer?: string; 
  public get secondaryServer() {
    return this.getStringAttribute('secondary_server');
  }
  public set secondaryServer(value: string) {
    this._secondaryServer = value;
  }
  public resetSecondaryServer() {
    this._secondaryServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryServerInput() {
    return this._secondaryServer;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // server - computed: true, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // service_type - computed: true, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
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

  // transport_type - computed: true, optional: true, required: false
  private _transportType?: string; 
  public get transportType() {
    return this.getStringAttribute('transport_type');
  }
  public set transportType(value: string) {
    this._transportType = value;
  }
  public resetTransportType() {
    this._transportType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTypeInput() {
    return this._transportType;
  }

  // acct_server - computed: false, optional: true, required: false
  private _acctServer = new UserRadiusAcctServerList(this, "acct_server", false);
  public get acctServer() {
    return this._acctServer;
  }
  public putAcctServer(value: UserRadiusAcctServer[] | cdktf.IResolvable) {
    this._acctServer.internalValue = value;
  }
  public resetAcctServer() {
    this._acctServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctServerInput() {
    return this._acctServer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acct_fast_framedip_detect: cdktf.numberToTerraform(this._acctFastFramedipDetect),
      acct_interim_interval: cdktf.numberToTerraform(this._acctInterimInterval),
      addr_mode: cdktf.stringToTerraform(this._addrMode),
      all_usergroup: cdktf.stringToTerraform(this._allUsergroup),
      auth_type: cdktf.stringToTerraform(this._authType),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      frame_mtu_size: cdktf.numberToTerraform(this._frameMtuSize),
      id: cdktf.stringToTerraform(this._id),
      link_monitor: cdktf.stringToTerraform(this._linkMonitor),
      link_monitor_interval: cdktf.numberToTerraform(this._linkMonitorInterval),
      name: cdktf.stringToTerraform(this._name),
      nas_ip: cdktf.stringToTerraform(this._nasIp),
      nas_ip6: cdktf.stringToTerraform(this._nasIp6),
      radius_coa: cdktf.stringToTerraform(this._radiusCoa),
      radius_coa_secret: cdktf.stringToTerraform(this._radiusCoaSecret),
      radius_port: cdktf.numberToTerraform(this._radiusPort),
      radsec_cert_cn_dns: cdktf.stringToTerraform(this._radsecCertCnDns),
      radsec_cert_validate: cdktf.stringToTerraform(this._radsecCertValidate),
      radsec_client_cert: cdktf.stringToTerraform(this._radsecClientCert),
      radsec_connect_timeout: cdktf.numberToTerraform(this._radsecConnectTimeout),
      radsec_dtls_min_ver: cdktf.stringToTerraform(this._radsecDtlsMinVer),
      radsec_idle_timeout: cdktf.numberToTerraform(this._radsecIdleTimeout),
      radsec_oper_mode: cdktf.stringToTerraform(this._radsecOperMode),
      radsec_port: cdktf.numberToTerraform(this._radsecPort),
      radsec_server_ca_cert: cdktf.stringToTerraform(this._radsecServerCaCert),
      radsec_tls_min_ver: cdktf.stringToTerraform(this._radsecTlsMinVer),
      secondary_secret: cdktf.stringToTerraform(this._secondarySecret),
      secondary_server: cdktf.stringToTerraform(this._secondaryServer),
      secret: cdktf.stringToTerraform(this._secret),
      server: cdktf.stringToTerraform(this._server),
      service_type: cdktf.stringToTerraform(this._serviceType),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_ip6: cdktf.stringToTerraform(this._sourceIp6),
      transport_type: cdktf.stringToTerraform(this._transportType),
      acct_server: cdktf.listMapper(userRadiusAcctServerToTerraform, true)(this._acctServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acct_fast_framedip_detect: {
        value: cdktf.numberToHclTerraform(this._acctFastFramedipDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      acct_interim_interval: {
        value: cdktf.numberToHclTerraform(this._acctInterimInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      addr_mode: {
        value: cdktf.stringToHclTerraform(this._addrMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      all_usergroup: {
        value: cdktf.stringToHclTerraform(this._allUsergroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
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
      frame_mtu_size: {
        value: cdktf.numberToHclTerraform(this._frameMtuSize),
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
      link_monitor: {
        value: cdktf.stringToHclTerraform(this._linkMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_monitor_interval: {
        value: cdktf.numberToHclTerraform(this._linkMonitorInterval),
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
      nas_ip: {
        value: cdktf.stringToHclTerraform(this._nasIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nas_ip6: {
        value: cdktf.stringToHclTerraform(this._nasIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_coa: {
        value: cdktf.stringToHclTerraform(this._radiusCoa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_coa_secret: {
        value: cdktf.stringToHclTerraform(this._radiusCoaSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_port: {
        value: cdktf.numberToHclTerraform(this._radiusPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radsec_cert_cn_dns: {
        value: cdktf.stringToHclTerraform(this._radsecCertCnDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radsec_cert_validate: {
        value: cdktf.stringToHclTerraform(this._radsecCertValidate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radsec_client_cert: {
        value: cdktf.stringToHclTerraform(this._radsecClientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radsec_connect_timeout: {
        value: cdktf.numberToHclTerraform(this._radsecConnectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radsec_dtls_min_ver: {
        value: cdktf.stringToHclTerraform(this._radsecDtlsMinVer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radsec_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._radsecIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radsec_oper_mode: {
        value: cdktf.stringToHclTerraform(this._radsecOperMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radsec_port: {
        value: cdktf.numberToHclTerraform(this._radsecPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radsec_server_ca_cert: {
        value: cdktf.stringToHclTerraform(this._radsecServerCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radsec_tls_min_ver: {
        value: cdktf.stringToHclTerraform(this._radsecTlsMinVer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_secret: {
        value: cdktf.stringToHclTerraform(this._secondarySecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_server: {
        value: cdktf.stringToHclTerraform(this._secondaryServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
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
      transport_type: {
        value: cdktf.stringToHclTerraform(this._transportType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acct_server: {
        value: cdktf.listMapperHcl(userRadiusAcctServerToHclTerraform, true)(this._acctServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserRadiusAcctServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
