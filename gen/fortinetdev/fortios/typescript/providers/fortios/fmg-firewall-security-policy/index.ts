// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmgFirewallSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#action FmgFirewallSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#adom FmgFirewallSecurityPolicy#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#application_list FmgFirewallSecurityPolicy#application_list}
  */
  readonly applicationList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#av_profile FmgFirewallSecurityPolicy#av_profile}
  */
  readonly avProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#capture_packet FmgFirewallSecurityPolicy#capture_packet}
  */
  readonly capturePacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#comments FmgFirewallSecurityPolicy#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#dnsfilter_profile FmgFirewallSecurityPolicy#dnsfilter_profile}
  */
  readonly dnsfilterProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#dstaddr FmgFirewallSecurityPolicy#dstaddr}
  */
  readonly dstaddr: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#dstintf FmgFirewallSecurityPolicy#dstintf}
  */
  readonly dstintf: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#fixedport FmgFirewallSecurityPolicy#fixedport}
  */
  readonly fixedport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#fsso FmgFirewallSecurityPolicy#fsso}
  */
  readonly fsso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#groups FmgFirewallSecurityPolicy#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#id FmgFirewallSecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#inbound FmgFirewallSecurityPolicy#inbound}
  */
  readonly inbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#internet_service FmgFirewallSecurityPolicy#internet_service}
  */
  readonly internetService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#internet_service_id FmgFirewallSecurityPolicy#internet_service_id}
  */
  readonly internetServiceId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#internet_service_name FmgFirewallSecurityPolicy#internet_service_name}
  */
  readonly internetServiceName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#internet_service_src FmgFirewallSecurityPolicy#internet_service_src}
  */
  readonly internetServiceSrc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#internet_service_src_id FmgFirewallSecurityPolicy#internet_service_src_id}
  */
  readonly internetServiceSrcId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#internet_service_src_name FmgFirewallSecurityPolicy#internet_service_src_name}
  */
  readonly internetServiceSrcName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#ippool FmgFirewallSecurityPolicy#ippool}
  */
  readonly ippool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#ips_sensor FmgFirewallSecurityPolicy#ips_sensor}
  */
  readonly ipsSensor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#logtraffic FmgFirewallSecurityPolicy#logtraffic}
  */
  readonly logtraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#logtraffic_start FmgFirewallSecurityPolicy#logtraffic_start}
  */
  readonly logtrafficStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#name FmgFirewallSecurityPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#nat FmgFirewallSecurityPolicy#nat}
  */
  readonly nat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#package_name FmgFirewallSecurityPolicy#package_name}
  */
  readonly packageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#per_ip_shaper FmgFirewallSecurityPolicy#per_ip_shaper}
  */
  readonly perIpShaper?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#poolname FmgFirewallSecurityPolicy#poolname}
  */
  readonly poolname?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#profile_group FmgFirewallSecurityPolicy#profile_group}
  */
  readonly profileGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#profile_protocol_options FmgFirewallSecurityPolicy#profile_protocol_options}
  */
  readonly profileProtocolOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#profile_type FmgFirewallSecurityPolicy#profile_type}
  */
  readonly profileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#rsso FmgFirewallSecurityPolicy#rsso}
  */
  readonly rsso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#schedule FmgFirewallSecurityPolicy#schedule}
  */
  readonly schedule: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#service FmgFirewallSecurityPolicy#service}
  */
  readonly service: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#srcaddr FmgFirewallSecurityPolicy#srcaddr}
  */
  readonly srcaddr: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#srcintf FmgFirewallSecurityPolicy#srcintf}
  */
  readonly srcintf: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#traffic_shaper FmgFirewallSecurityPolicy#traffic_shaper}
  */
  readonly trafficShaper?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#traffic_shaper_reverse FmgFirewallSecurityPolicy#traffic_shaper_reverse}
  */
  readonly trafficShaperReverse?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#users FmgFirewallSecurityPolicy#users}
  */
  readonly users?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#utm_status FmgFirewallSecurityPolicy#utm_status}
  */
  readonly utmStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#vpn_tunnel FmgFirewallSecurityPolicy#vpn_tunnel}
  */
  readonly vpnTunnel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#waf_profile FmgFirewallSecurityPolicy#waf_profile}
  */
  readonly wafProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#webfilter_profile FmgFirewallSecurityPolicy#webfilter_profile}
  */
  readonly webfilterProfile?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy fortios_fmg_firewall_security_policy}
*/
export class FmgFirewallSecurityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_fmg_firewall_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FmgFirewallSecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FmgFirewallSecurityPolicy to import
  * @param importFromId The id of the existing FmgFirewallSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FmgFirewallSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_fmg_firewall_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_security_policy fortios_fmg_firewall_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmgFirewallSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FmgFirewallSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_fmg_firewall_security_policy',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._adom = config.adom;
    this._applicationList = config.applicationList;
    this._avProfile = config.avProfile;
    this._capturePacket = config.capturePacket;
    this._comments = config.comments;
    this._dnsfilterProfile = config.dnsfilterProfile;
    this._dstaddr = config.dstaddr;
    this._dstintf = config.dstintf;
    this._fixedport = config.fixedport;
    this._fsso = config.fsso;
    this._groups = config.groups;
    this._id = config.id;
    this._inbound = config.inbound;
    this._internetService = config.internetService;
    this._internetServiceId = config.internetServiceId;
    this._internetServiceName = config.internetServiceName;
    this._internetServiceSrc = config.internetServiceSrc;
    this._internetServiceSrcId = config.internetServiceSrcId;
    this._internetServiceSrcName = config.internetServiceSrcName;
    this._ippool = config.ippool;
    this._ipsSensor = config.ipsSensor;
    this._logtraffic = config.logtraffic;
    this._logtrafficStart = config.logtrafficStart;
    this._name = config.name;
    this._nat = config.nat;
    this._packageName = config.packageName;
    this._perIpShaper = config.perIpShaper;
    this._poolname = config.poolname;
    this._profileGroup = config.profileGroup;
    this._profileProtocolOptions = config.profileProtocolOptions;
    this._profileType = config.profileType;
    this._rsso = config.rsso;
    this._schedule = config.schedule;
    this._service = config.service;
    this._srcaddr = config.srcaddr;
    this._srcintf = config.srcintf;
    this._trafficShaper = config.trafficShaper;
    this._trafficShaperReverse = config.trafficShaperReverse;
    this._users = config.users;
    this._utmStatus = config.utmStatus;
    this._vpnTunnel = config.vpnTunnel;
    this._wafProfile = config.wafProfile;
    this._webfilterProfile = config.webfilterProfile;
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

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // application_list - computed: false, optional: true, required: false
  private _applicationList?: string[]; 
  public get applicationList() {
    return this.getListAttribute('application_list');
  }
  public set applicationList(value: string[]) {
    this._applicationList = value;
  }
  public resetApplicationList() {
    this._applicationList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationListInput() {
    return this._applicationList;
  }

  // av_profile - computed: false, optional: true, required: false
  private _avProfile?: string[]; 
  public get avProfile() {
    return this.getListAttribute('av_profile');
  }
  public set avProfile(value: string[]) {
    this._avProfile = value;
  }
  public resetAvProfile() {
    this._avProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avProfileInput() {
    return this._avProfile;
  }

  // capture_packet - computed: false, optional: true, required: false
  private _capturePacket?: string; 
  public get capturePacket() {
    return this.getStringAttribute('capture_packet');
  }
  public set capturePacket(value: string) {
    this._capturePacket = value;
  }
  public resetCapturePacket() {
    this._capturePacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capturePacketInput() {
    return this._capturePacket;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // dnsfilter_profile - computed: false, optional: true, required: false
  private _dnsfilterProfile?: string[]; 
  public get dnsfilterProfile() {
    return this.getListAttribute('dnsfilter_profile');
  }
  public set dnsfilterProfile(value: string[]) {
    this._dnsfilterProfile = value;
  }
  public resetDnsfilterProfile() {
    this._dnsfilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsfilterProfileInput() {
    return this._dnsfilterProfile;
  }

  // dstaddr - computed: false, optional: false, required: true
  private _dstaddr?: string[]; 
  public get dstaddr() {
    return this.getListAttribute('dstaddr');
  }
  public set dstaddr(value: string[]) {
    this._dstaddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr;
  }

  // dstintf - computed: false, optional: false, required: true
  private _dstintf?: string[]; 
  public get dstintf() {
    return this.getListAttribute('dstintf');
  }
  public set dstintf(value: string[]) {
    this._dstintf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstintfInput() {
    return this._dstintf;
  }

  // fixedport - computed: false, optional: true, required: false
  private _fixedport?: string; 
  public get fixedport() {
    return this.getStringAttribute('fixedport');
  }
  public set fixedport(value: string) {
    this._fixedport = value;
  }
  public resetFixedport() {
    this._fixedport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedportInput() {
    return this._fixedport;
  }

  // fsso - computed: false, optional: true, required: false
  private _fsso?: string; 
  public get fsso() {
    return this.getStringAttribute('fsso');
  }
  public set fsso(value: string) {
    this._fsso = value;
  }
  public resetFsso() {
    this._fsso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fssoInput() {
    return this._fsso;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // inbound - computed: false, optional: true, required: false
  private _inbound?: string; 
  public get inbound() {
    return this.getStringAttribute('inbound');
  }
  public set inbound(value: string) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }

  // internet_service - computed: true, optional: true, required: false
  private _internetService?: string; 
  public get internetService() {
    return this.getStringAttribute('internet_service');
  }
  public set internetService(value: string) {
    this._internetService = value;
  }
  public resetInternetService() {
    this._internetService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceInput() {
    return this._internetService;
  }

  // internet_service_id - computed: false, optional: true, required: false
  private _internetServiceId?: string[]; 
  public get internetServiceId() {
    return this.getListAttribute('internet_service_id');
  }
  public set internetServiceId(value: string[]) {
    this._internetServiceId = value;
  }
  public resetInternetServiceId() {
    this._internetServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceIdInput() {
    return this._internetServiceId;
  }

  // internet_service_name - computed: false, optional: true, required: false
  private _internetServiceName?: string[]; 
  public get internetServiceName() {
    return this.getListAttribute('internet_service_name');
  }
  public set internetServiceName(value: string[]) {
    this._internetServiceName = value;
  }
  public resetInternetServiceName() {
    this._internetServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceNameInput() {
    return this._internetServiceName;
  }

  // internet_service_src - computed: true, optional: true, required: false
  private _internetServiceSrc?: string; 
  public get internetServiceSrc() {
    return this.getStringAttribute('internet_service_src');
  }
  public set internetServiceSrc(value: string) {
    this._internetServiceSrc = value;
  }
  public resetInternetServiceSrc() {
    this._internetServiceSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcInput() {
    return this._internetServiceSrc;
  }

  // internet_service_src_id - computed: false, optional: true, required: false
  private _internetServiceSrcId?: string[]; 
  public get internetServiceSrcId() {
    return this.getListAttribute('internet_service_src_id');
  }
  public set internetServiceSrcId(value: string[]) {
    this._internetServiceSrcId = value;
  }
  public resetInternetServiceSrcId() {
    this._internetServiceSrcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcIdInput() {
    return this._internetServiceSrcId;
  }

  // internet_service_src_name - computed: false, optional: true, required: false
  private _internetServiceSrcName?: string[]; 
  public get internetServiceSrcName() {
    return this.getListAttribute('internet_service_src_name');
  }
  public set internetServiceSrcName(value: string[]) {
    this._internetServiceSrcName = value;
  }
  public resetInternetServiceSrcName() {
    this._internetServiceSrcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcNameInput() {
    return this._internetServiceSrcName;
  }

  // ippool - computed: false, optional: true, required: false
  private _ippool?: string; 
  public get ippool() {
    return this.getStringAttribute('ippool');
  }
  public set ippool(value: string) {
    this._ippool = value;
  }
  public resetIppool() {
    this._ippool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ippoolInput() {
    return this._ippool;
  }

  // ips_sensor - computed: false, optional: true, required: false
  private _ipsSensor?: string[]; 
  public get ipsSensor() {
    return this.getListAttribute('ips_sensor');
  }
  public set ipsSensor(value: string[]) {
    this._ipsSensor = value;
  }
  public resetIpsSensor() {
    this._ipsSensor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsSensorInput() {
    return this._ipsSensor;
  }

  // logtraffic - computed: false, optional: true, required: false
  private _logtraffic?: string; 
  public get logtraffic() {
    return this.getStringAttribute('logtraffic');
  }
  public set logtraffic(value: string) {
    this._logtraffic = value;
  }
  public resetLogtraffic() {
    this._logtraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logtrafficInput() {
    return this._logtraffic;
  }

  // logtraffic_start - computed: false, optional: true, required: false
  private _logtrafficStart?: string; 
  public get logtrafficStart() {
    return this.getStringAttribute('logtraffic_start');
  }
  public set logtrafficStart(value: string) {
    this._logtrafficStart = value;
  }
  public resetLogtrafficStart() {
    this._logtrafficStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logtrafficStartInput() {
    return this._logtrafficStart;
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

  // nat - computed: false, optional: true, required: false
  private _nat?: string; 
  public get nat() {
    return this.getStringAttribute('nat');
  }
  public set nat(value: string) {
    this._nat = value;
  }
  public resetNat() {
    this._nat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat;
  }

  // package_name - computed: false, optional: true, required: false
  private _packageName?: string; 
  public get packageName() {
    return this.getStringAttribute('package_name');
  }
  public set packageName(value: string) {
    this._packageName = value;
  }
  public resetPackageName() {
    this._packageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNameInput() {
    return this._packageName;
  }

  // per_ip_shaper - computed: false, optional: true, required: false
  private _perIpShaper?: string[]; 
  public get perIpShaper() {
    return this.getListAttribute('per_ip_shaper');
  }
  public set perIpShaper(value: string[]) {
    this._perIpShaper = value;
  }
  public resetPerIpShaper() {
    this._perIpShaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perIpShaperInput() {
    return this._perIpShaper;
  }

  // poolname - computed: false, optional: true, required: false
  private _poolname?: string[]; 
  public get poolname() {
    return this.getListAttribute('poolname');
  }
  public set poolname(value: string[]) {
    this._poolname = value;
  }
  public resetPoolname() {
    this._poolname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolnameInput() {
    return this._poolname;
  }

  // profile_group - computed: false, optional: true, required: false
  private _profileGroup?: string[]; 
  public get profileGroup() {
    return this.getListAttribute('profile_group');
  }
  public set profileGroup(value: string[]) {
    this._profileGroup = value;
  }
  public resetProfileGroup() {
    this._profileGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileGroupInput() {
    return this._profileGroup;
  }

  // profile_protocol_options - computed: false, optional: true, required: false
  private _profileProtocolOptions?: string[]; 
  public get profileProtocolOptions() {
    return this.getListAttribute('profile_protocol_options');
  }
  public set profileProtocolOptions(value: string[]) {
    this._profileProtocolOptions = value;
  }
  public resetProfileProtocolOptions() {
    this._profileProtocolOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileProtocolOptionsInput() {
    return this._profileProtocolOptions;
  }

  // profile_type - computed: false, optional: true, required: false
  private _profileType?: string; 
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }
  public set profileType(value: string) {
    this._profileType = value;
  }
  public resetProfileType() {
    this._profileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTypeInput() {
    return this._profileType;
  }

  // rsso - computed: false, optional: true, required: false
  private _rsso?: string; 
  public get rsso() {
    return this.getStringAttribute('rsso');
  }
  public set rsso(value: string) {
    this._rsso = value;
  }
  public resetRsso() {
    this._rsso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rssoInput() {
    return this._rsso;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string[]; 
  public get schedule() {
    return this.getListAttribute('schedule');
  }
  public set schedule(value: string[]) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string[]; 
  public get service() {
    return this.getListAttribute('service');
  }
  public set service(value: string[]) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // srcaddr - computed: false, optional: false, required: true
  private _srcaddr?: string[]; 
  public get srcaddr() {
    return this.getListAttribute('srcaddr');
  }
  public set srcaddr(value: string[]) {
    this._srcaddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr;
  }

  // srcintf - computed: false, optional: false, required: true
  private _srcintf?: string[]; 
  public get srcintf() {
    return this.getListAttribute('srcintf');
  }
  public set srcintf(value: string[]) {
    this._srcintf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcintfInput() {
    return this._srcintf;
  }

  // traffic_shaper - computed: false, optional: true, required: false
  private _trafficShaper?: string[]; 
  public get trafficShaper() {
    return this.getListAttribute('traffic_shaper');
  }
  public set trafficShaper(value: string[]) {
    this._trafficShaper = value;
  }
  public resetTrafficShaper() {
    this._trafficShaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShaperInput() {
    return this._trafficShaper;
  }

  // traffic_shaper_reverse - computed: false, optional: true, required: false
  private _trafficShaperReverse?: string[]; 
  public get trafficShaperReverse() {
    return this.getListAttribute('traffic_shaper_reverse');
  }
  public set trafficShaperReverse(value: string[]) {
    this._trafficShaperReverse = value;
  }
  public resetTrafficShaperReverse() {
    this._trafficShaperReverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShaperReverseInput() {
    return this._trafficShaperReverse;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // utm_status - computed: false, optional: true, required: false
  private _utmStatus?: string; 
  public get utmStatus() {
    return this.getStringAttribute('utm_status');
  }
  public set utmStatus(value: string) {
    this._utmStatus = value;
  }
  public resetUtmStatus() {
    this._utmStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utmStatusInput() {
    return this._utmStatus;
  }

  // vpn_tunnel - computed: false, optional: true, required: false
  private _vpnTunnel?: string[]; 
  public get vpnTunnel() {
    return this.getListAttribute('vpn_tunnel');
  }
  public set vpnTunnel(value: string[]) {
    this._vpnTunnel = value;
  }
  public resetVpnTunnel() {
    this._vpnTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnTunnelInput() {
    return this._vpnTunnel;
  }

  // waf_profile - computed: false, optional: true, required: false
  private _wafProfile?: string[]; 
  public get wafProfile() {
    return this.getListAttribute('waf_profile');
  }
  public set wafProfile(value: string[]) {
    this._wafProfile = value;
  }
  public resetWafProfile() {
    this._wafProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafProfileInput() {
    return this._wafProfile;
  }

  // webfilter_profile - computed: false, optional: true, required: false
  private _webfilterProfile?: string[]; 
  public get webfilterProfile() {
    return this.getListAttribute('webfilter_profile');
  }
  public set webfilterProfile(value: string[]) {
    this._webfilterProfile = value;
  }
  public resetWebfilterProfile() {
    this._webfilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterProfileInput() {
    return this._webfilterProfile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      adom: cdktf.stringToTerraform(this._adom),
      application_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applicationList),
      av_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._avProfile),
      capture_packet: cdktf.stringToTerraform(this._capturePacket),
      comments: cdktf.stringToTerraform(this._comments),
      dnsfilter_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsfilterProfile),
      dstaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstaddr),
      dstintf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstintf),
      fixedport: cdktf.stringToTerraform(this._fixedport),
      fsso: cdktf.stringToTerraform(this._fsso),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      inbound: cdktf.stringToTerraform(this._inbound),
      internet_service: cdktf.stringToTerraform(this._internetService),
      internet_service_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceId),
      internet_service_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceName),
      internet_service_src: cdktf.stringToTerraform(this._internetServiceSrc),
      internet_service_src_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceSrcId),
      internet_service_src_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceSrcName),
      ippool: cdktf.stringToTerraform(this._ippool),
      ips_sensor: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipsSensor),
      logtraffic: cdktf.stringToTerraform(this._logtraffic),
      logtraffic_start: cdktf.stringToTerraform(this._logtrafficStart),
      name: cdktf.stringToTerraform(this._name),
      nat: cdktf.stringToTerraform(this._nat),
      package_name: cdktf.stringToTerraform(this._packageName),
      per_ip_shaper: cdktf.listMapper(cdktf.stringToTerraform, false)(this._perIpShaper),
      poolname: cdktf.listMapper(cdktf.stringToTerraform, false)(this._poolname),
      profile_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._profileGroup),
      profile_protocol_options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._profileProtocolOptions),
      profile_type: cdktf.stringToTerraform(this._profileType),
      rsso: cdktf.stringToTerraform(this._rsso),
      schedule: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schedule),
      service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._service),
      srcaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcaddr),
      srcintf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcintf),
      traffic_shaper: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trafficShaper),
      traffic_shaper_reverse: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trafficShaperReverse),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
      utm_status: cdktf.stringToTerraform(this._utmStatus),
      vpn_tunnel: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpnTunnel),
      waf_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._wafProfile),
      webfilter_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webfilterProfile),
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
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applicationList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      av_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._avProfile),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      capture_packet: {
        value: cdktf.stringToHclTerraform(this._capturePacket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnsfilter_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsfilterProfile),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dstaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstaddr),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dstintf: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstintf),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      fixedport: {
        value: cdktf.stringToHclTerraform(this._fixedport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fsso: {
        value: cdktf.stringToHclTerraform(this._fsso),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inbound: {
        value: cdktf.stringToHclTerraform(this._inbound),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service: {
        value: cdktf.stringToHclTerraform(this._internetService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      internet_service_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      internet_service_src: {
        value: cdktf.stringToHclTerraform(this._internetServiceSrc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_src_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceSrcId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      internet_service_src_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceSrcName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ippool: {
        value: cdktf.stringToHclTerraform(this._ippool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_sensor: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipsSensor),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      logtraffic: {
        value: cdktf.stringToHclTerraform(this._logtraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logtraffic_start: {
        value: cdktf.stringToHclTerraform(this._logtrafficStart),
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
      nat: {
        value: cdktf.stringToHclTerraform(this._nat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_name: {
        value: cdktf.stringToHclTerraform(this._packageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_ip_shaper: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._perIpShaper),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      poolname: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._poolname),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      profile_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._profileGroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      profile_protocol_options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._profileProtocolOptions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      profile_type: {
        value: cdktf.stringToHclTerraform(this._profileType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsso: {
        value: cdktf.stringToHclTerraform(this._rsso),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schedule),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._service),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      srcaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcaddr),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      srcintf: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcintf),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      traffic_shaper: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trafficShaper),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      traffic_shaper_reverse: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trafficShaperReverse),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      utm_status: {
        value: cdktf.stringToHclTerraform(this._utmStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_tunnel: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpnTunnel),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      waf_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._wafProfile),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      webfilter_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._webfilterProfile),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
