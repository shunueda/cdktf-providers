// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DayuDdosPolicyCaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * App protocol set of the DDoS policy case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#app_protocols DayuDdosPolicyCase#app_protocols}
  */
  readonly appProtocols: string[];
  /**
  * App type of the DDoS policy case. Valid values: `WEB`, `GAME`, `APP` and `OTHER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#app_type DayuDdosPolicyCase#app_type}
  */
  readonly appType: string;
  /**
  * Indicate whether the service involves overseas or not. Valid values: `no` and `yes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#has_abroad DayuDdosPolicyCase#has_abroad}
  */
  readonly hasAbroad: string;
  /**
  * Indicate whether the service actively initiates TCP requests or not. Valid values: `no` and `yes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#has_initiate_tcp DayuDdosPolicyCase#has_initiate_tcp}
  */
  readonly hasInitiateTcp: string;
  /**
  * Indicate whether the actively initiate UDP requests or not. Valid values: `no` and `yes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#has_initiate_udp DayuDdosPolicyCase#has_initiate_udp}
  */
  readonly hasInitiateUdp?: string;
  /**
  * Indicate whether the service involves VPN service or not. Valid values: `no` and `yes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#has_vpn DayuDdosPolicyCase#has_vpn}
  */
  readonly hasVpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#id DayuDdosPolicyCase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The max length of TCP message package, valid value length should be greater than 0 and less than 1500. It should be greater than `min_tcp_package_len`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#max_tcp_package_len DayuDdosPolicyCase#max_tcp_package_len}
  */
  readonly maxTcpPackageLen?: string;
  /**
  * The max length of UDP message package, valid value length should be greater than 0 and less than 1500. It should be greater than `min_udp_package_len`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#max_udp_package_len DayuDdosPolicyCase#max_udp_package_len}
  */
  readonly maxUdpPackageLen?: string;
  /**
  * The minimum length of TCP message package, valid value length should be greater than 0 and less than 1500.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#min_tcp_package_len DayuDdosPolicyCase#min_tcp_package_len}
  */
  readonly minTcpPackageLen?: string;
  /**
  * The minimum length of UDP message package, valid value length should be greater than 0 and less than 1500.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#min_udp_package_len DayuDdosPolicyCase#min_udp_package_len}
  */
  readonly minUdpPackageLen?: string;
  /**
  * Name of the DDoS policy case. Length should between 1 and 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#name DayuDdosPolicyCase#name}
  */
  readonly name: string;
  /**
  * The port that actively initiates TCP requests. Valid value ranges: (1~65535).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#peer_tcp_port DayuDdosPolicyCase#peer_tcp_port}
  */
  readonly peerTcpPort?: string;
  /**
  * The port that actively initiates UDP requests. Valid value ranges: (1~65535).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#peer_udp_port DayuDdosPolicyCase#peer_udp_port}
  */
  readonly peerUdpPort?: string;
  /**
  * Platform set of the DDoS policy case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#platform_types DayuDdosPolicyCase#platform_types}
  */
  readonly platformTypes: string[];
  /**
  * Type of the resource that the DDoS policy case works for. Valid values: `bgpip`, `bgp` and `bgp-multip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#resource_type DayuDdosPolicyCase#resource_type}
  */
  readonly resourceType: string;
  /**
  * End port of the TCP service. Valid value ranges: (0~65535). It must be greater than `tcp_start_port`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#tcp_end_port DayuDdosPolicyCase#tcp_end_port}
  */
  readonly tcpEndPort: string;
  /**
  * The fixed signature of TCP protocol load, valid value length is range from 1 to 512.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#tcp_footprint DayuDdosPolicyCase#tcp_footprint}
  */
  readonly tcpFootprint?: string;
  /**
  * Start port of the TCP service. Valid value ranges: (0~65535).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#tcp_start_port DayuDdosPolicyCase#tcp_start_port}
  */
  readonly tcpStartPort: string;
  /**
  * End port of the UDP service. Valid value ranges: (0~65535). It must be greater than `udp_start_port`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#udp_end_port DayuDdosPolicyCase#udp_end_port}
  */
  readonly udpEndPort: string;
  /**
  * The fixed signature of TCP protocol load, valid value length is range from 1 to 512.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#udp_footprint DayuDdosPolicyCase#udp_footprint}
  */
  readonly udpFootprint?: string;
  /**
  * Start port of the UDP service. Valid value ranges: (0~65535).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#udp_start_port DayuDdosPolicyCase#udp_start_port}
  */
  readonly udpStartPort: string;
  /**
  * Web API url set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#web_api_urls DayuDdosPolicyCase#web_api_urls}
  */
  readonly webApiUrls: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case tencentcloud_dayu_ddos_policy_case}
*/
export class DayuDdosPolicyCase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dayu_ddos_policy_case";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DayuDdosPolicyCase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DayuDdosPolicyCase to import
  * @param importFromId The id of the existing DayuDdosPolicyCase that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DayuDdosPolicyCase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dayu_ddos_policy_case", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy_case tencentcloud_dayu_ddos_policy_case} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DayuDdosPolicyCaseConfig
  */
  public constructor(scope: Construct, id: string, config: DayuDdosPolicyCaseConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dayu_ddos_policy_case',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appProtocols = config.appProtocols;
    this._appType = config.appType;
    this._hasAbroad = config.hasAbroad;
    this._hasInitiateTcp = config.hasInitiateTcp;
    this._hasInitiateUdp = config.hasInitiateUdp;
    this._hasVpn = config.hasVpn;
    this._id = config.id;
    this._maxTcpPackageLen = config.maxTcpPackageLen;
    this._maxUdpPackageLen = config.maxUdpPackageLen;
    this._minTcpPackageLen = config.minTcpPackageLen;
    this._minUdpPackageLen = config.minUdpPackageLen;
    this._name = config.name;
    this._peerTcpPort = config.peerTcpPort;
    this._peerUdpPort = config.peerUdpPort;
    this._platformTypes = config.platformTypes;
    this._resourceType = config.resourceType;
    this._tcpEndPort = config.tcpEndPort;
    this._tcpFootprint = config.tcpFootprint;
    this._tcpStartPort = config.tcpStartPort;
    this._udpEndPort = config.udpEndPort;
    this._udpFootprint = config.udpFootprint;
    this._udpStartPort = config.udpStartPort;
    this._webApiUrls = config.webApiUrls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_protocols - computed: false, optional: false, required: true
  private _appProtocols?: string[]; 
  public get appProtocols() {
    return cdktf.Fn.tolist(this.getListAttribute('app_protocols'));
  }
  public set appProtocols(value: string[]) {
    this._appProtocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appProtocolsInput() {
    return this._appProtocols;
  }

  // app_type - computed: false, optional: false, required: true
  private _appType?: string; 
  public get appType() {
    return this.getStringAttribute('app_type');
  }
  public set appType(value: string) {
    this._appType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeInput() {
    return this._appType;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // has_abroad - computed: false, optional: false, required: true
  private _hasAbroad?: string; 
  public get hasAbroad() {
    return this.getStringAttribute('has_abroad');
  }
  public set hasAbroad(value: string) {
    this._hasAbroad = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hasAbroadInput() {
    return this._hasAbroad;
  }

  // has_initiate_tcp - computed: false, optional: false, required: true
  private _hasInitiateTcp?: string; 
  public get hasInitiateTcp() {
    return this.getStringAttribute('has_initiate_tcp');
  }
  public set hasInitiateTcp(value: string) {
    this._hasInitiateTcp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hasInitiateTcpInput() {
    return this._hasInitiateTcp;
  }

  // has_initiate_udp - computed: false, optional: true, required: false
  private _hasInitiateUdp?: string; 
  public get hasInitiateUdp() {
    return this.getStringAttribute('has_initiate_udp');
  }
  public set hasInitiateUdp(value: string) {
    this._hasInitiateUdp = value;
  }
  public resetHasInitiateUdp() {
    this._hasInitiateUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasInitiateUdpInput() {
    return this._hasInitiateUdp;
  }

  // has_vpn - computed: false, optional: true, required: false
  private _hasVpn?: string; 
  public get hasVpn() {
    return this.getStringAttribute('has_vpn');
  }
  public set hasVpn(value: string) {
    this._hasVpn = value;
  }
  public resetHasVpn() {
    this._hasVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasVpnInput() {
    return this._hasVpn;
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

  // max_tcp_package_len - computed: false, optional: true, required: false
  private _maxTcpPackageLen?: string; 
  public get maxTcpPackageLen() {
    return this.getStringAttribute('max_tcp_package_len');
  }
  public set maxTcpPackageLen(value: string) {
    this._maxTcpPackageLen = value;
  }
  public resetMaxTcpPackageLen() {
    this._maxTcpPackageLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTcpPackageLenInput() {
    return this._maxTcpPackageLen;
  }

  // max_udp_package_len - computed: false, optional: true, required: false
  private _maxUdpPackageLen?: string; 
  public get maxUdpPackageLen() {
    return this.getStringAttribute('max_udp_package_len');
  }
  public set maxUdpPackageLen(value: string) {
    this._maxUdpPackageLen = value;
  }
  public resetMaxUdpPackageLen() {
    this._maxUdpPackageLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUdpPackageLenInput() {
    return this._maxUdpPackageLen;
  }

  // min_tcp_package_len - computed: false, optional: true, required: false
  private _minTcpPackageLen?: string; 
  public get minTcpPackageLen() {
    return this.getStringAttribute('min_tcp_package_len');
  }
  public set minTcpPackageLen(value: string) {
    this._minTcpPackageLen = value;
  }
  public resetMinTcpPackageLen() {
    this._minTcpPackageLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTcpPackageLenInput() {
    return this._minTcpPackageLen;
  }

  // min_udp_package_len - computed: false, optional: true, required: false
  private _minUdpPackageLen?: string; 
  public get minUdpPackageLen() {
    return this.getStringAttribute('min_udp_package_len');
  }
  public set minUdpPackageLen(value: string) {
    this._minUdpPackageLen = value;
  }
  public resetMinUdpPackageLen() {
    this._minUdpPackageLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUdpPackageLenInput() {
    return this._minUdpPackageLen;
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

  // peer_tcp_port - computed: false, optional: true, required: false
  private _peerTcpPort?: string; 
  public get peerTcpPort() {
    return this.getStringAttribute('peer_tcp_port');
  }
  public set peerTcpPort(value: string) {
    this._peerTcpPort = value;
  }
  public resetPeerTcpPort() {
    this._peerTcpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerTcpPortInput() {
    return this._peerTcpPort;
  }

  // peer_udp_port - computed: false, optional: true, required: false
  private _peerUdpPort?: string; 
  public get peerUdpPort() {
    return this.getStringAttribute('peer_udp_port');
  }
  public set peerUdpPort(value: string) {
    this._peerUdpPort = value;
  }
  public resetPeerUdpPort() {
    this._peerUdpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerUdpPortInput() {
    return this._peerUdpPort;
  }

  // platform_types - computed: false, optional: false, required: true
  private _platformTypes?: string[]; 
  public get platformTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('platform_types'));
  }
  public set platformTypes(value: string[]) {
    this._platformTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformTypesInput() {
    return this._platformTypes;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // scene_id - computed: true, optional: false, required: false
  public get sceneId() {
    return this.getStringAttribute('scene_id');
  }

  // tcp_end_port - computed: false, optional: false, required: true
  private _tcpEndPort?: string; 
  public get tcpEndPort() {
    return this.getStringAttribute('tcp_end_port');
  }
  public set tcpEndPort(value: string) {
    this._tcpEndPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEndPortInput() {
    return this._tcpEndPort;
  }

  // tcp_footprint - computed: false, optional: true, required: false
  private _tcpFootprint?: string; 
  public get tcpFootprint() {
    return this.getStringAttribute('tcp_footprint');
  }
  public set tcpFootprint(value: string) {
    this._tcpFootprint = value;
  }
  public resetTcpFootprint() {
    this._tcpFootprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFootprintInput() {
    return this._tcpFootprint;
  }

  // tcp_start_port - computed: false, optional: false, required: true
  private _tcpStartPort?: string; 
  public get tcpStartPort() {
    return this.getStringAttribute('tcp_start_port');
  }
  public set tcpStartPort(value: string) {
    this._tcpStartPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpStartPortInput() {
    return this._tcpStartPort;
  }

  // udp_end_port - computed: false, optional: false, required: true
  private _udpEndPort?: string; 
  public get udpEndPort() {
    return this.getStringAttribute('udp_end_port');
  }
  public set udpEndPort(value: string) {
    this._udpEndPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get udpEndPortInput() {
    return this._udpEndPort;
  }

  // udp_footprint - computed: false, optional: true, required: false
  private _udpFootprint?: string; 
  public get udpFootprint() {
    return this.getStringAttribute('udp_footprint');
  }
  public set udpFootprint(value: string) {
    this._udpFootprint = value;
  }
  public resetUdpFootprint() {
    this._udpFootprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFootprintInput() {
    return this._udpFootprint;
  }

  // udp_start_port - computed: false, optional: false, required: true
  private _udpStartPort?: string; 
  public get udpStartPort() {
    return this.getStringAttribute('udp_start_port');
  }
  public set udpStartPort(value: string) {
    this._udpStartPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get udpStartPortInput() {
    return this._udpStartPort;
  }

  // web_api_urls - computed: false, optional: false, required: true
  private _webApiUrls?: string[]; 
  public get webApiUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('web_api_urls'));
  }
  public set webApiUrls(value: string[]) {
    this._webApiUrls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webApiUrlsInput() {
    return this._webApiUrls;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appProtocols),
      app_type: cdktf.stringToTerraform(this._appType),
      has_abroad: cdktf.stringToTerraform(this._hasAbroad),
      has_initiate_tcp: cdktf.stringToTerraform(this._hasInitiateTcp),
      has_initiate_udp: cdktf.stringToTerraform(this._hasInitiateUdp),
      has_vpn: cdktf.stringToTerraform(this._hasVpn),
      id: cdktf.stringToTerraform(this._id),
      max_tcp_package_len: cdktf.stringToTerraform(this._maxTcpPackageLen),
      max_udp_package_len: cdktf.stringToTerraform(this._maxUdpPackageLen),
      min_tcp_package_len: cdktf.stringToTerraform(this._minTcpPackageLen),
      min_udp_package_len: cdktf.stringToTerraform(this._minUdpPackageLen),
      name: cdktf.stringToTerraform(this._name),
      peer_tcp_port: cdktf.stringToTerraform(this._peerTcpPort),
      peer_udp_port: cdktf.stringToTerraform(this._peerUdpPort),
      platform_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._platformTypes),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      tcp_end_port: cdktf.stringToTerraform(this._tcpEndPort),
      tcp_footprint: cdktf.stringToTerraform(this._tcpFootprint),
      tcp_start_port: cdktf.stringToTerraform(this._tcpStartPort),
      udp_end_port: cdktf.stringToTerraform(this._udpEndPort),
      udp_footprint: cdktf.stringToTerraform(this._udpFootprint),
      udp_start_port: cdktf.stringToTerraform(this._udpStartPort),
      web_api_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webApiUrls),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appProtocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      app_type: {
        value: cdktf.stringToHclTerraform(this._appType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_abroad: {
        value: cdktf.stringToHclTerraform(this._hasAbroad),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_initiate_tcp: {
        value: cdktf.stringToHclTerraform(this._hasInitiateTcp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_initiate_udp: {
        value: cdktf.stringToHclTerraform(this._hasInitiateUdp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_vpn: {
        value: cdktf.stringToHclTerraform(this._hasVpn),
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
      max_tcp_package_len: {
        value: cdktf.stringToHclTerraform(this._maxTcpPackageLen),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_udp_package_len: {
        value: cdktf.stringToHclTerraform(this._maxUdpPackageLen),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_tcp_package_len: {
        value: cdktf.stringToHclTerraform(this._minTcpPackageLen),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_udp_package_len: {
        value: cdktf.stringToHclTerraform(this._minUdpPackageLen),
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
      peer_tcp_port: {
        value: cdktf.stringToHclTerraform(this._peerTcpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_udp_port: {
        value: cdktf.stringToHclTerraform(this._peerUdpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._platformTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_end_port: {
        value: cdktf.stringToHclTerraform(this._tcpEndPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_footprint: {
        value: cdktf.stringToHclTerraform(this._tcpFootprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_start_port: {
        value: cdktf.stringToHclTerraform(this._tcpStartPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_end_port: {
        value: cdktf.stringToHclTerraform(this._udpEndPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_footprint: {
        value: cdktf.stringToHclTerraform(this._udpFootprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_start_port: {
        value: cdktf.stringToHclTerraform(this._udpStartPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_api_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._webApiUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
