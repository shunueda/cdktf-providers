// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#action FirewallSecurityPolicy#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#application_list FirewallSecurityPolicy#application_list}
  */
  readonly applicationList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#av_profile FirewallSecurityPolicy#av_profile}
  */
  readonly avProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#capture_packet FirewallSecurityPolicy#capture_packet}
  */
  readonly capturePacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#comments FirewallSecurityPolicy#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#devices FirewallSecurityPolicy#devices}
  */
  readonly devices?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#dnsfilter_profile FirewallSecurityPolicy#dnsfilter_profile}
  */
  readonly dnsfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#dstaddr FirewallSecurityPolicy#dstaddr}
  */
  readonly dstaddr: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#dstintf FirewallSecurityPolicy#dstintf}
  */
  readonly dstintf: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#groups FirewallSecurityPolicy#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#id FirewallSecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#internet_service FirewallSecurityPolicy#internet_service}
  */
  readonly internetService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#internet_service_id FirewallSecurityPolicy#internet_service_id}
  */
  readonly internetServiceId?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#internet_service_src FirewallSecurityPolicy#internet_service_src}
  */
  readonly internetServiceSrc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#internet_service_src_id FirewallSecurityPolicy#internet_service_src_id}
  */
  readonly internetServiceSrcId?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#ippool FirewallSecurityPolicy#ippool}
  */
  readonly ippool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#ips_sensor FirewallSecurityPolicy#ips_sensor}
  */
  readonly ipsSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#logtraffic FirewallSecurityPolicy#logtraffic}
  */
  readonly logtraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#logtraffic_start FirewallSecurityPolicy#logtraffic_start}
  */
  readonly logtrafficStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#name FirewallSecurityPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#nat FirewallSecurityPolicy#nat}
  */
  readonly nat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#poolname FirewallSecurityPolicy#poolname}
  */
  readonly poolname?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#profile_protocol_options FirewallSecurityPolicy#profile_protocol_options}
  */
  readonly profileProtocolOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#schedule FirewallSecurityPolicy#schedule}
  */
  readonly schedule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#service FirewallSecurityPolicy#service}
  */
  readonly service: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#srcaddr FirewallSecurityPolicy#srcaddr}
  */
  readonly srcaddr: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#srcintf FirewallSecurityPolicy#srcintf}
  */
  readonly srcintf: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#ssl_ssh_profile FirewallSecurityPolicy#ssl_ssh_profile}
  */
  readonly sslSshProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#status FirewallSecurityPolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#users FirewallSecurityPolicy#users}
  */
  readonly users?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#utm_status FirewallSecurityPolicy#utm_status}
  */
  readonly utmStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#webfilter_profile FirewallSecurityPolicy#webfilter_profile}
  */
  readonly webfilterProfile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy fortios_firewall_security_policy}
*/
export class FirewallSecurityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallSecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallSecurityPolicy to import
  * @param importFromId The id of the existing FirewallSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policy fortios_firewall_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_security_policy',
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
    this._applicationList = config.applicationList;
    this._avProfile = config.avProfile;
    this._capturePacket = config.capturePacket;
    this._comments = config.comments;
    this._devices = config.devices;
    this._dnsfilterProfile = config.dnsfilterProfile;
    this._dstaddr = config.dstaddr;
    this._dstintf = config.dstintf;
    this._groups = config.groups;
    this._id = config.id;
    this._internetService = config.internetService;
    this._internetServiceId = config.internetServiceId;
    this._internetServiceSrc = config.internetServiceSrc;
    this._internetServiceSrcId = config.internetServiceSrcId;
    this._ippool = config.ippool;
    this._ipsSensor = config.ipsSensor;
    this._logtraffic = config.logtraffic;
    this._logtrafficStart = config.logtrafficStart;
    this._name = config.name;
    this._nat = config.nat;
    this._poolname = config.poolname;
    this._profileProtocolOptions = config.profileProtocolOptions;
    this._schedule = config.schedule;
    this._service = config.service;
    this._srcaddr = config.srcaddr;
    this._srcintf = config.srcintf;
    this._sslSshProfile = config.sslSshProfile;
    this._status = config.status;
    this._users = config.users;
    this._utmStatus = config.utmStatus;
    this._webfilterProfile = config.webfilterProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // application_list - computed: true, optional: true, required: false
  private _applicationList?: string; 
  public get applicationList() {
    return this.getStringAttribute('application_list');
  }
  public set applicationList(value: string) {
    this._applicationList = value;
  }
  public resetApplicationList() {
    this._applicationList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationListInput() {
    return this._applicationList;
  }

  // av_profile - computed: true, optional: true, required: false
  private _avProfile?: string; 
  public get avProfile() {
    return this.getStringAttribute('av_profile');
  }
  public set avProfile(value: string) {
    this._avProfile = value;
  }
  public resetAvProfile() {
    this._avProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avProfileInput() {
    return this._avProfile;
  }

  // capture_packet - computed: true, optional: true, required: false
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

  // devices - computed: false, optional: true, required: false
  private _devices?: string[]; 
  public get devices() {
    return this.getListAttribute('devices');
  }
  public set devices(value: string[]) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // dnsfilter_profile - computed: true, optional: true, required: false
  private _dnsfilterProfile?: string; 
  public get dnsfilterProfile() {
    return this.getStringAttribute('dnsfilter_profile');
  }
  public set dnsfilterProfile(value: string) {
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
  private _internetServiceId?: number[]; 
  public get internetServiceId() {
    return this.getNumberListAttribute('internet_service_id');
  }
  public set internetServiceId(value: number[]) {
    this._internetServiceId = value;
  }
  public resetInternetServiceId() {
    this._internetServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceIdInput() {
    return this._internetServiceId;
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
  private _internetServiceSrcId?: number[]; 
  public get internetServiceSrcId() {
    return this.getNumberListAttribute('internet_service_src_id');
  }
  public set internetServiceSrcId(value: number[]) {
    this._internetServiceSrcId = value;
  }
  public resetInternetServiceSrcId() {
    this._internetServiceSrcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcIdInput() {
    return this._internetServiceSrcId;
  }

  // ippool - computed: true, optional: true, required: false
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

  // ips_sensor - computed: true, optional: true, required: false
  private _ipsSensor?: string; 
  public get ipsSensor() {
    return this.getStringAttribute('ips_sensor');
  }
  public set ipsSensor(value: string) {
    this._ipsSensor = value;
  }
  public resetIpsSensor() {
    this._ipsSensor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsSensorInput() {
    return this._ipsSensor;
  }

  // logtraffic - computed: true, optional: true, required: false
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

  // logtraffic_start - computed: true, optional: true, required: false
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

  // nat - computed: true, optional: true, required: false
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

  // profile_protocol_options - computed: true, optional: true, required: false
  private _profileProtocolOptions?: string; 
  public get profileProtocolOptions() {
    return this.getStringAttribute('profile_protocol_options');
  }
  public set profileProtocolOptions(value: string) {
    this._profileProtocolOptions = value;
  }
  public resetProfileProtocolOptions() {
    this._profileProtocolOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileProtocolOptionsInput() {
    return this._profileProtocolOptions;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
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

  // ssl_ssh_profile - computed: true, optional: true, required: false
  private _sslSshProfile?: string; 
  public get sslSshProfile() {
    return this.getStringAttribute('ssl_ssh_profile');
  }
  public set sslSshProfile(value: string) {
    this._sslSshProfile = value;
  }
  public resetSslSshProfile() {
    this._sslSshProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSshProfileInput() {
    return this._sslSshProfile;
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

  // utm_status - computed: true, optional: true, required: false
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

  // webfilter_profile - computed: true, optional: true, required: false
  private _webfilterProfile?: string; 
  public get webfilterProfile() {
    return this.getStringAttribute('webfilter_profile');
  }
  public set webfilterProfile(value: string) {
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
      application_list: cdktf.stringToTerraform(this._applicationList),
      av_profile: cdktf.stringToTerraform(this._avProfile),
      capture_packet: cdktf.stringToTerraform(this._capturePacket),
      comments: cdktf.stringToTerraform(this._comments),
      devices: cdktf.listMapper(cdktf.stringToTerraform, false)(this._devices),
      dnsfilter_profile: cdktf.stringToTerraform(this._dnsfilterProfile),
      dstaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstaddr),
      dstintf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstintf),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      internet_service: cdktf.stringToTerraform(this._internetService),
      internet_service_id: cdktf.listMapper(cdktf.numberToTerraform, false)(this._internetServiceId),
      internet_service_src: cdktf.stringToTerraform(this._internetServiceSrc),
      internet_service_src_id: cdktf.listMapper(cdktf.numberToTerraform, false)(this._internetServiceSrcId),
      ippool: cdktf.stringToTerraform(this._ippool),
      ips_sensor: cdktf.stringToTerraform(this._ipsSensor),
      logtraffic: cdktf.stringToTerraform(this._logtraffic),
      logtraffic_start: cdktf.stringToTerraform(this._logtrafficStart),
      name: cdktf.stringToTerraform(this._name),
      nat: cdktf.stringToTerraform(this._nat),
      poolname: cdktf.listMapper(cdktf.stringToTerraform, false)(this._poolname),
      profile_protocol_options: cdktf.stringToTerraform(this._profileProtocolOptions),
      schedule: cdktf.stringToTerraform(this._schedule),
      service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._service),
      srcaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcaddr),
      srcintf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcintf),
      ssl_ssh_profile: cdktf.stringToTerraform(this._sslSshProfile),
      status: cdktf.stringToTerraform(this._status),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
      utm_status: cdktf.stringToTerraform(this._utmStatus),
      webfilter_profile: cdktf.stringToTerraform(this._webfilterProfile),
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
      application_list: {
        value: cdktf.stringToHclTerraform(this._applicationList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_profile: {
        value: cdktf.stringToHclTerraform(this._avProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      devices: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._devices),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dnsfilter_profile: {
        value: cdktf.stringToHclTerraform(this._dnsfilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      internet_service: {
        value: cdktf.stringToHclTerraform(this._internetService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_id: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._internetServiceId),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      internet_service_src: {
        value: cdktf.stringToHclTerraform(this._internetServiceSrc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_src_id: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._internetServiceSrcId),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      ippool: {
        value: cdktf.stringToHclTerraform(this._ippool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_sensor: {
        value: cdktf.stringToHclTerraform(this._ipsSensor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      poolname: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._poolname),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      profile_protocol_options: {
        value: cdktf.stringToHclTerraform(this._profileProtocolOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      ssl_ssh_profile: {
        value: cdktf.stringToHclTerraform(this._sslSshProfile),
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
      webfilter_profile: {
        value: cdktf.stringToHclTerraform(this._webfilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
