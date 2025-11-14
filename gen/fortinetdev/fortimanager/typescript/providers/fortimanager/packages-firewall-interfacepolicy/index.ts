// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackagesFirewallInterfacepolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#address_type PackagesFirewallInterfacepolicy#address_type}
  */
  readonly addressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#adom PackagesFirewallInterfacepolicy#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#application_list PackagesFirewallInterfacepolicy#application_list}
  */
  readonly applicationList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#application_list_status PackagesFirewallInterfacepolicy#application_list_status}
  */
  readonly applicationListStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#av_profile PackagesFirewallInterfacepolicy#av_profile}
  */
  readonly avProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#av_profile_status PackagesFirewallInterfacepolicy#av_profile_status}
  */
  readonly avProfileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#casb_profile PackagesFirewallInterfacepolicy#casb_profile}
  */
  readonly casbProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#casb_profile_status PackagesFirewallInterfacepolicy#casb_profile_status}
  */
  readonly casbProfileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#comments PackagesFirewallInterfacepolicy#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#dlp_profile PackagesFirewallInterfacepolicy#dlp_profile}
  */
  readonly dlpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#dlp_profile_status PackagesFirewallInterfacepolicy#dlp_profile_status}
  */
  readonly dlpProfileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#dlp_sensor PackagesFirewallInterfacepolicy#dlp_sensor}
  */
  readonly dlpSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#dlp_sensor_status PackagesFirewallInterfacepolicy#dlp_sensor_status}
  */
  readonly dlpSensorStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#dsri PackagesFirewallInterfacepolicy#dsri}
  */
  readonly dsri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#dstaddr PackagesFirewallInterfacepolicy#dstaddr}
  */
  readonly dstaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#emailfilter_profile PackagesFirewallInterfacepolicy#emailfilter_profile}
  */
  readonly emailfilterProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#emailfilter_profile_status PackagesFirewallInterfacepolicy#emailfilter_profile_status}
  */
  readonly emailfilterProfileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#id PackagesFirewallInterfacepolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#interface PackagesFirewallInterfacepolicy#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#ips_sensor PackagesFirewallInterfacepolicy#ips_sensor}
  */
  readonly ipsSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#ips_sensor_status PackagesFirewallInterfacepolicy#ips_sensor_status}
  */
  readonly ipsSensorStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#label PackagesFirewallInterfacepolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#logtraffic PackagesFirewallInterfacepolicy#logtraffic}
  */
  readonly logtraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#pkg PackagesFirewallInterfacepolicy#pkg}
  */
  readonly pkg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#pkg_folder_path PackagesFirewallInterfacepolicy#pkg_folder_path}
  */
  readonly pkgFolderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#policyid PackagesFirewallInterfacepolicy#policyid}
  */
  readonly policyid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#scan_botnet_connections PackagesFirewallInterfacepolicy#scan_botnet_connections}
  */
  readonly scanBotnetConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#scopetype PackagesFirewallInterfacepolicy#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#service PackagesFirewallInterfacepolicy#service}
  */
  readonly service?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#spamfilter_profile PackagesFirewallInterfacepolicy#spamfilter_profile}
  */
  readonly spamfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#spamfilter_profile_status PackagesFirewallInterfacepolicy#spamfilter_profile_status}
  */
  readonly spamfilterProfileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#srcaddr PackagesFirewallInterfacepolicy#srcaddr}
  */
  readonly srcaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#status PackagesFirewallInterfacepolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#uuid PackagesFirewallInterfacepolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#webfilter_profile PackagesFirewallInterfacepolicy#webfilter_profile}
  */
  readonly webfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#webfilter_profile_status PackagesFirewallInterfacepolicy#webfilter_profile_status}
  */
  readonly webfilterProfileStatus?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy fortimanager_packages_firewall_interfacepolicy}
*/
export class PackagesFirewallInterfacepolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_packages_firewall_interfacepolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackagesFirewallInterfacepolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackagesFirewallInterfacepolicy to import
  * @param importFromId The id of the existing PackagesFirewallInterfacepolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackagesFirewallInterfacepolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_packages_firewall_interfacepolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_interfacepolicy fortimanager_packages_firewall_interfacepolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackagesFirewallInterfacepolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PackagesFirewallInterfacepolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_packages_firewall_interfacepolicy',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressType = config.addressType;
    this._adom = config.adom;
    this._applicationList = config.applicationList;
    this._applicationListStatus = config.applicationListStatus;
    this._avProfile = config.avProfile;
    this._avProfileStatus = config.avProfileStatus;
    this._casbProfile = config.casbProfile;
    this._casbProfileStatus = config.casbProfileStatus;
    this._comments = config.comments;
    this._dlpProfile = config.dlpProfile;
    this._dlpProfileStatus = config.dlpProfileStatus;
    this._dlpSensor = config.dlpSensor;
    this._dlpSensorStatus = config.dlpSensorStatus;
    this._dsri = config.dsri;
    this._dstaddr = config.dstaddr;
    this._emailfilterProfile = config.emailfilterProfile;
    this._emailfilterProfileStatus = config.emailfilterProfileStatus;
    this._id = config.id;
    this._interface = config.interface;
    this._ipsSensor = config.ipsSensor;
    this._ipsSensorStatus = config.ipsSensorStatus;
    this._label = config.label;
    this._logtraffic = config.logtraffic;
    this._pkg = config.pkg;
    this._pkgFolderPath = config.pkgFolderPath;
    this._policyid = config.policyid;
    this._scanBotnetConnections = config.scanBotnetConnections;
    this._scopetype = config.scopetype;
    this._service = config.service;
    this._spamfilterProfile = config.spamfilterProfile;
    this._spamfilterProfileStatus = config.spamfilterProfileStatus;
    this._srcaddr = config.srcaddr;
    this._status = config.status;
    this._uuid = config.uuid;
    this._webfilterProfile = config.webfilterProfile;
    this._webfilterProfileStatus = config.webfilterProfileStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_type - computed: true, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
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

  // application_list_status - computed: true, optional: true, required: false
  private _applicationListStatus?: string; 
  public get applicationListStatus() {
    return this.getStringAttribute('application_list_status');
  }
  public set applicationListStatus(value: string) {
    this._applicationListStatus = value;
  }
  public resetApplicationListStatus() {
    this._applicationListStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationListStatusInput() {
    return this._applicationListStatus;
  }

  // av_profile - computed: false, optional: true, required: false
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

  // av_profile_status - computed: true, optional: true, required: false
  private _avProfileStatus?: string; 
  public get avProfileStatus() {
    return this.getStringAttribute('av_profile_status');
  }
  public set avProfileStatus(value: string) {
    this._avProfileStatus = value;
  }
  public resetAvProfileStatus() {
    this._avProfileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avProfileStatusInput() {
    return this._avProfileStatus;
  }

  // casb_profile - computed: true, optional: true, required: false
  private _casbProfile?: string[]; 
  public get casbProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('casb_profile'));
  }
  public set casbProfile(value: string[]) {
    this._casbProfile = value;
  }
  public resetCasbProfile() {
    this._casbProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casbProfileInput() {
    return this._casbProfile;
  }

  // casb_profile_status - computed: true, optional: true, required: false
  private _casbProfileStatus?: string; 
  public get casbProfileStatus() {
    return this.getStringAttribute('casb_profile_status');
  }
  public set casbProfileStatus(value: string) {
    this._casbProfileStatus = value;
  }
  public resetCasbProfileStatus() {
    this._casbProfileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casbProfileStatusInput() {
    return this._casbProfileStatus;
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

  // dlp_profile - computed: false, optional: true, required: false
  private _dlpProfile?: string; 
  public get dlpProfile() {
    return this.getStringAttribute('dlp_profile');
  }
  public set dlpProfile(value: string) {
    this._dlpProfile = value;
  }
  public resetDlpProfile() {
    this._dlpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpProfileInput() {
    return this._dlpProfile;
  }

  // dlp_profile_status - computed: true, optional: true, required: false
  private _dlpProfileStatus?: string; 
  public get dlpProfileStatus() {
    return this.getStringAttribute('dlp_profile_status');
  }
  public set dlpProfileStatus(value: string) {
    this._dlpProfileStatus = value;
  }
  public resetDlpProfileStatus() {
    this._dlpProfileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpProfileStatusInput() {
    return this._dlpProfileStatus;
  }

  // dlp_sensor - computed: false, optional: true, required: false
  private _dlpSensor?: string; 
  public get dlpSensor() {
    return this.getStringAttribute('dlp_sensor');
  }
  public set dlpSensor(value: string) {
    this._dlpSensor = value;
  }
  public resetDlpSensor() {
    this._dlpSensor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpSensorInput() {
    return this._dlpSensor;
  }

  // dlp_sensor_status - computed: true, optional: true, required: false
  private _dlpSensorStatus?: string; 
  public get dlpSensorStatus() {
    return this.getStringAttribute('dlp_sensor_status');
  }
  public set dlpSensorStatus(value: string) {
    this._dlpSensorStatus = value;
  }
  public resetDlpSensorStatus() {
    this._dlpSensorStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpSensorStatusInput() {
    return this._dlpSensorStatus;
  }

  // dsri - computed: true, optional: true, required: false
  private _dsri?: string; 
  public get dsri() {
    return this.getStringAttribute('dsri');
  }
  public set dsri(value: string) {
    this._dsri = value;
  }
  public resetDsri() {
    this._dsri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsriInput() {
    return this._dsri;
  }

  // dstaddr - computed: true, optional: true, required: false
  private _dstaddr?: string[]; 
  public get dstaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('dstaddr'));
  }
  public set dstaddr(value: string[]) {
    this._dstaddr = value;
  }
  public resetDstaddr() {
    this._dstaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr;
  }

  // emailfilter_profile - computed: true, optional: true, required: false
  private _emailfilterProfile?: string[]; 
  public get emailfilterProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('emailfilter_profile'));
  }
  public set emailfilterProfile(value: string[]) {
    this._emailfilterProfile = value;
  }
  public resetEmailfilterProfile() {
    this._emailfilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailfilterProfileInput() {
    return this._emailfilterProfile;
  }

  // emailfilter_profile_status - computed: true, optional: true, required: false
  private _emailfilterProfileStatus?: string; 
  public get emailfilterProfileStatus() {
    return this.getStringAttribute('emailfilter_profile_status');
  }
  public set emailfilterProfileStatus(value: string) {
    this._emailfilterProfileStatus = value;
  }
  public resetEmailfilterProfileStatus() {
    this._emailfilterProfileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailfilterProfileStatusInput() {
    return this._emailfilterProfileStatus;
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ips_sensor - computed: false, optional: true, required: false
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

  // ips_sensor_status - computed: true, optional: true, required: false
  private _ipsSensorStatus?: string; 
  public get ipsSensorStatus() {
    return this.getStringAttribute('ips_sensor_status');
  }
  public set ipsSensorStatus(value: string) {
    this._ipsSensorStatus = value;
  }
  public resetIpsSensorStatus() {
    this._ipsSensorStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsSensorStatusInput() {
    return this._ipsSensorStatus;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // pkg - computed: false, optional: false, required: true
  private _pkg?: string; 
  public get pkg() {
    return this.getStringAttribute('pkg');
  }
  public set pkg(value: string) {
    this._pkg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgInput() {
    return this._pkg;
  }

  // pkg_folder_path - computed: false, optional: true, required: false
  private _pkgFolderPath?: string; 
  public get pkgFolderPath() {
    return this.getStringAttribute('pkg_folder_path');
  }
  public set pkgFolderPath(value: string) {
    this._pkgFolderPath = value;
  }
  public resetPkgFolderPath() {
    this._pkgFolderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgFolderPathInput() {
    return this._pkgFolderPath;
  }

  // policyid - computed: true, optional: true, required: false
  private _policyid?: number; 
  public get policyid() {
    return this.getNumberAttribute('policyid');
  }
  public set policyid(value: number) {
    this._policyid = value;
  }
  public resetPolicyid() {
    this._policyid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyidInput() {
    return this._policyid;
  }

  // scan_botnet_connections - computed: false, optional: true, required: false
  private _scanBotnetConnections?: string; 
  public get scanBotnetConnections() {
    return this.getStringAttribute('scan_botnet_connections');
  }
  public set scanBotnetConnections(value: string) {
    this._scanBotnetConnections = value;
  }
  public resetScanBotnetConnections() {
    this._scanBotnetConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanBotnetConnectionsInput() {
    return this._scanBotnetConnections;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string[]; 
  public get service() {
    return cdktf.Fn.tolist(this.getListAttribute('service'));
  }
  public set service(value: string[]) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // spamfilter_profile - computed: false, optional: true, required: false
  private _spamfilterProfile?: string; 
  public get spamfilterProfile() {
    return this.getStringAttribute('spamfilter_profile');
  }
  public set spamfilterProfile(value: string) {
    this._spamfilterProfile = value;
  }
  public resetSpamfilterProfile() {
    this._spamfilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamfilterProfileInput() {
    return this._spamfilterProfile;
  }

  // spamfilter_profile_status - computed: false, optional: true, required: false
  private _spamfilterProfileStatus?: string; 
  public get spamfilterProfileStatus() {
    return this.getStringAttribute('spamfilter_profile_status');
  }
  public set spamfilterProfileStatus(value: string) {
    this._spamfilterProfileStatus = value;
  }
  public resetSpamfilterProfileStatus() {
    this._spamfilterProfileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamfilterProfileStatusInput() {
    return this._spamfilterProfileStatus;
  }

  // srcaddr - computed: true, optional: true, required: false
  private _srcaddr?: string[]; 
  public get srcaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('srcaddr'));
  }
  public set srcaddr(value: string[]) {
    this._srcaddr = value;
  }
  public resetSrcaddr() {
    this._srcaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr;
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

  // webfilter_profile - computed: false, optional: true, required: false
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

  // webfilter_profile_status - computed: true, optional: true, required: false
  private _webfilterProfileStatus?: string; 
  public get webfilterProfileStatus() {
    return this.getStringAttribute('webfilter_profile_status');
  }
  public set webfilterProfileStatus(value: string) {
    this._webfilterProfileStatus = value;
  }
  public resetWebfilterProfileStatus() {
    this._webfilterProfileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterProfileStatusInput() {
    return this._webfilterProfileStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_type: cdktf.stringToTerraform(this._addressType),
      adom: cdktf.stringToTerraform(this._adom),
      application_list: cdktf.stringToTerraform(this._applicationList),
      application_list_status: cdktf.stringToTerraform(this._applicationListStatus),
      av_profile: cdktf.stringToTerraform(this._avProfile),
      av_profile_status: cdktf.stringToTerraform(this._avProfileStatus),
      casb_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._casbProfile),
      casb_profile_status: cdktf.stringToTerraform(this._casbProfileStatus),
      comments: cdktf.stringToTerraform(this._comments),
      dlp_profile: cdktf.stringToTerraform(this._dlpProfile),
      dlp_profile_status: cdktf.stringToTerraform(this._dlpProfileStatus),
      dlp_sensor: cdktf.stringToTerraform(this._dlpSensor),
      dlp_sensor_status: cdktf.stringToTerraform(this._dlpSensorStatus),
      dsri: cdktf.stringToTerraform(this._dsri),
      dstaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstaddr),
      emailfilter_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailfilterProfile),
      emailfilter_profile_status: cdktf.stringToTerraform(this._emailfilterProfileStatus),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      ips_sensor: cdktf.stringToTerraform(this._ipsSensor),
      ips_sensor_status: cdktf.stringToTerraform(this._ipsSensorStatus),
      label: cdktf.stringToTerraform(this._label),
      logtraffic: cdktf.stringToTerraform(this._logtraffic),
      pkg: cdktf.stringToTerraform(this._pkg),
      pkg_folder_path: cdktf.stringToTerraform(this._pkgFolderPath),
      policyid: cdktf.numberToTerraform(this._policyid),
      scan_botnet_connections: cdktf.stringToTerraform(this._scanBotnetConnections),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._service),
      spamfilter_profile: cdktf.stringToTerraform(this._spamfilterProfile),
      spamfilter_profile_status: cdktf.stringToTerraform(this._spamfilterProfileStatus),
      srcaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcaddr),
      status: cdktf.stringToTerraform(this._status),
      uuid: cdktf.stringToTerraform(this._uuid),
      webfilter_profile: cdktf.stringToTerraform(this._webfilterProfile),
      webfilter_profile_status: cdktf.stringToTerraform(this._webfilterProfileStatus),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_type: {
        value: cdktf.stringToHclTerraform(this._addressType),
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
        value: cdktf.stringToHclTerraform(this._applicationList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_list_status: {
        value: cdktf.stringToHclTerraform(this._applicationListStatus),
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
      av_profile_status: {
        value: cdktf.stringToHclTerraform(this._avProfileStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      casb_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._casbProfile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      casb_profile_status: {
        value: cdktf.stringToHclTerraform(this._casbProfileStatus),
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
      dlp_profile: {
        value: cdktf.stringToHclTerraform(this._dlpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlp_profile_status: {
        value: cdktf.stringToHclTerraform(this._dlpProfileStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlp_sensor: {
        value: cdktf.stringToHclTerraform(this._dlpSensor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlp_sensor_status: {
        value: cdktf.stringToHclTerraform(this._dlpSensorStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dsri: {
        value: cdktf.stringToHclTerraform(this._dsri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstaddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      emailfilter_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailfilterProfile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      emailfilter_profile_status: {
        value: cdktf.stringToHclTerraform(this._emailfilterProfileStatus),
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
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ips_sensor: {
        value: cdktf.stringToHclTerraform(this._ipsSensor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_sensor_status: {
        value: cdktf.stringToHclTerraform(this._ipsSensorStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
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
      pkg: {
        value: cdktf.stringToHclTerraform(this._pkg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkg_folder_path: {
        value: cdktf.stringToHclTerraform(this._pkgFolderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policyid: {
        value: cdktf.numberToHclTerraform(this._policyid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scan_botnet_connections: {
        value: cdktf.stringToHclTerraform(this._scanBotnetConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._service),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      spamfilter_profile: {
        value: cdktf.stringToHclTerraform(this._spamfilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spamfilter_profile_status: {
        value: cdktf.stringToHclTerraform(this._spamfilterProfileStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcaddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      webfilter_profile: {
        value: cdktf.stringToHclTerraform(this._webfilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webfilter_profile_status: {
        value: cdktf.stringToHclTerraform(this._webfilterProfileStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
