// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectEndpointcontrolFctemsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#admin_password ObjectEndpointcontrolFctems#admin_password}
  */
  readonly adminPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#admin_username ObjectEndpointcontrolFctems#admin_username}
  */
  readonly adminUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#adom ObjectEndpointcontrolFctems#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#ca_cn_info ObjectEndpointcontrolFctems#ca_cn_info}
  */
  readonly caCnInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#call_timeout ObjectEndpointcontrolFctems#call_timeout}
  */
  readonly callTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#capabilities ObjectEndpointcontrolFctems#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#certificate ObjectEndpointcontrolFctems#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#certificate_fingerprint ObjectEndpointcontrolFctems#certificate_fingerprint}
  */
  readonly certificateFingerprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#cloud_authentication_access_key ObjectEndpointcontrolFctems#cloud_authentication_access_key}
  */
  readonly cloudAuthenticationAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#cloud_server_type ObjectEndpointcontrolFctems#cloud_server_type}
  */
  readonly cloudServerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#dirty_reason ObjectEndpointcontrolFctems#dirty_reason}
  */
  readonly dirtyReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#ems_id ObjectEndpointcontrolFctems#ems_id}
  */
  readonly emsId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#fortinetone_cloud_authentication ObjectEndpointcontrolFctems#fortinetone_cloud_authentication}
  */
  readonly fortinetoneCloudAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#https_port ObjectEndpointcontrolFctems#https_port}
  */
  readonly httpsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#id ObjectEndpointcontrolFctems#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#interface ObjectEndpointcontrolFctems#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#interface_select_method ObjectEndpointcontrolFctems#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#name ObjectEndpointcontrolFctems#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#out_of_sync_threshold ObjectEndpointcontrolFctems#out_of_sync_threshold}
  */
  readonly outOfSyncThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#preserve_ssl_session ObjectEndpointcontrolFctems#preserve_ssl_session}
  */
  readonly preserveSslSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#pull_avatars ObjectEndpointcontrolFctems#pull_avatars}
  */
  readonly pullAvatars?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#pull_malware_hash ObjectEndpointcontrolFctems#pull_malware_hash}
  */
  readonly pullMalwareHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#pull_sysinfo ObjectEndpointcontrolFctems#pull_sysinfo}
  */
  readonly pullSysinfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#pull_tags ObjectEndpointcontrolFctems#pull_tags}
  */
  readonly pullTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#pull_vulnerabilities ObjectEndpointcontrolFctems#pull_vulnerabilities}
  */
  readonly pullVulnerabilities?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#scopetype ObjectEndpointcontrolFctems#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#send_tags_to_all_vdoms ObjectEndpointcontrolFctems#send_tags_to_all_vdoms}
  */
  readonly sendTagsToAllVdoms?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#serial_number ObjectEndpointcontrolFctems#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#server ObjectEndpointcontrolFctems#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#source_ip ObjectEndpointcontrolFctems#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#status ObjectEndpointcontrolFctems#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#status_check_interval ObjectEndpointcontrolFctems#status_check_interval}
  */
  readonly statusCheckInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#tenant_id ObjectEndpointcontrolFctems#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#trust_ca_cn ObjectEndpointcontrolFctems#trust_ca_cn}
  */
  readonly trustCaCn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#verified_cn ObjectEndpointcontrolFctems#verified_cn}
  */
  readonly verifiedCn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#verifying_ca ObjectEndpointcontrolFctems#verifying_ca}
  */
  readonly verifyingCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#websocket_override ObjectEndpointcontrolFctems#websocket_override}
  */
  readonly websocketOverride?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems fortimanager_object_endpointcontrol_fctems}
*/
export class ObjectEndpointcontrolFctems extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_endpointcontrol_fctems";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectEndpointcontrolFctems resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectEndpointcontrolFctems to import
  * @param importFromId The id of the existing ObjectEndpointcontrolFctems that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectEndpointcontrolFctems to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_endpointcontrol_fctems", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_endpointcontrol_fctems fortimanager_object_endpointcontrol_fctems} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectEndpointcontrolFctemsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectEndpointcontrolFctemsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_endpointcontrol_fctems',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminPassword = config.adminPassword;
    this._adminUsername = config.adminUsername;
    this._adom = config.adom;
    this._caCnInfo = config.caCnInfo;
    this._callTimeout = config.callTimeout;
    this._capabilities = config.capabilities;
    this._certificate = config.certificate;
    this._certificateFingerprint = config.certificateFingerprint;
    this._cloudAuthenticationAccessKey = config.cloudAuthenticationAccessKey;
    this._cloudServerType = config.cloudServerType;
    this._dirtyReason = config.dirtyReason;
    this._emsId = config.emsId;
    this._fortinetoneCloudAuthentication = config.fortinetoneCloudAuthentication;
    this._httpsPort = config.httpsPort;
    this._id = config.id;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._name = config.name;
    this._outOfSyncThreshold = config.outOfSyncThreshold;
    this._preserveSslSession = config.preserveSslSession;
    this._pullAvatars = config.pullAvatars;
    this._pullMalwareHash = config.pullMalwareHash;
    this._pullSysinfo = config.pullSysinfo;
    this._pullTags = config.pullTags;
    this._pullVulnerabilities = config.pullVulnerabilities;
    this._scopetype = config.scopetype;
    this._sendTagsToAllVdoms = config.sendTagsToAllVdoms;
    this._serialNumber = config.serialNumber;
    this._server = config.server;
    this._sourceIp = config.sourceIp;
    this._status = config.status;
    this._statusCheckInterval = config.statusCheckInterval;
    this._tenantId = config.tenantId;
    this._trustCaCn = config.trustCaCn;
    this._verifiedCn = config.verifiedCn;
    this._verifyingCa = config.verifyingCa;
    this._websocketOverride = config.websocketOverride;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: true, optional: true, required: false
  private _adminPassword?: string[]; 
  public get adminPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('admin_password'));
  }
  public set adminPassword(value: string[]) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // admin_username - computed: false, optional: true, required: false
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  public resetAdminUsername() {
    this._adminUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
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

  // ca_cn_info - computed: false, optional: true, required: false
  private _caCnInfo?: string; 
  public get caCnInfo() {
    return this.getStringAttribute('ca_cn_info');
  }
  public set caCnInfo(value: string) {
    this._caCnInfo = value;
  }
  public resetCaCnInfo() {
    this._caCnInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCnInfoInput() {
    return this._caCnInfo;
  }

  // call_timeout - computed: true, optional: true, required: false
  private _callTimeout?: number; 
  public get callTimeout() {
    return this.getNumberAttribute('call_timeout');
  }
  public set callTimeout(value: number) {
    this._callTimeout = value;
  }
  public resetCallTimeout() {
    this._callTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callTimeoutInput() {
    return this._callTimeout;
  }

  // capabilities - computed: true, optional: true, required: false
  private _capabilities?: string[]; 
  public get capabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // certificate_fingerprint - computed: false, optional: true, required: false
  private _certificateFingerprint?: string; 
  public get certificateFingerprint() {
    return this.getStringAttribute('certificate_fingerprint');
  }
  public set certificateFingerprint(value: string) {
    this._certificateFingerprint = value;
  }
  public resetCertificateFingerprint() {
    this._certificateFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateFingerprintInput() {
    return this._certificateFingerprint;
  }

  // cloud_authentication_access_key - computed: true, optional: true, required: false
  private _cloudAuthenticationAccessKey?: string; 
  public get cloudAuthenticationAccessKey() {
    return this.getStringAttribute('cloud_authentication_access_key');
  }
  public set cloudAuthenticationAccessKey(value: string) {
    this._cloudAuthenticationAccessKey = value;
  }
  public resetCloudAuthenticationAccessKey() {
    this._cloudAuthenticationAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAuthenticationAccessKeyInput() {
    return this._cloudAuthenticationAccessKey;
  }

  // cloud_server_type - computed: true, optional: true, required: false
  private _cloudServerType?: string; 
  public get cloudServerType() {
    return this.getStringAttribute('cloud_server_type');
  }
  public set cloudServerType(value: string) {
    this._cloudServerType = value;
  }
  public resetCloudServerType() {
    this._cloudServerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudServerTypeInput() {
    return this._cloudServerType;
  }

  // dirty_reason - computed: true, optional: true, required: false
  private _dirtyReason?: string; 
  public get dirtyReason() {
    return this.getStringAttribute('dirty_reason');
  }
  public set dirtyReason(value: string) {
    this._dirtyReason = value;
  }
  public resetDirtyReason() {
    this._dirtyReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirtyReasonInput() {
    return this._dirtyReason;
  }

  // ems_id - computed: false, optional: true, required: false
  private _emsId?: number; 
  public get emsId() {
    return this.getNumberAttribute('ems_id');
  }
  public set emsId(value: number) {
    this._emsId = value;
  }
  public resetEmsId() {
    this._emsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emsIdInput() {
    return this._emsId;
  }

  // fortinetone_cloud_authentication - computed: true, optional: true, required: false
  private _fortinetoneCloudAuthentication?: string; 
  public get fortinetoneCloudAuthentication() {
    return this.getStringAttribute('fortinetone_cloud_authentication');
  }
  public set fortinetoneCloudAuthentication(value: string) {
    this._fortinetoneCloudAuthentication = value;
  }
  public resetFortinetoneCloudAuthentication() {
    this._fortinetoneCloudAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortinetoneCloudAuthenticationInput() {
    return this._fortinetoneCloudAuthentication;
  }

  // https_port - computed: true, optional: true, required: false
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_select_method - computed: true, optional: true, required: false
  private _interfaceSelectMethod?: string; 
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }
  public set interfaceSelectMethod(value: string) {
    this._interfaceSelectMethod = value;
  }
  public resetInterfaceSelectMethod() {
    this._interfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSelectMethodInput() {
    return this._interfaceSelectMethod;
  }

  // name - computed: false, optional: true, required: false
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

  // out_of_sync_threshold - computed: true, optional: true, required: false
  private _outOfSyncThreshold?: number; 
  public get outOfSyncThreshold() {
    return this.getNumberAttribute('out_of_sync_threshold');
  }
  public set outOfSyncThreshold(value: number) {
    this._outOfSyncThreshold = value;
  }
  public resetOutOfSyncThreshold() {
    this._outOfSyncThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfSyncThresholdInput() {
    return this._outOfSyncThreshold;
  }

  // preserve_ssl_session - computed: true, optional: true, required: false
  private _preserveSslSession?: string; 
  public get preserveSslSession() {
    return this.getStringAttribute('preserve_ssl_session');
  }
  public set preserveSslSession(value: string) {
    this._preserveSslSession = value;
  }
  public resetPreserveSslSession() {
    this._preserveSslSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSslSessionInput() {
    return this._preserveSslSession;
  }

  // pull_avatars - computed: true, optional: true, required: false
  private _pullAvatars?: string; 
  public get pullAvatars() {
    return this.getStringAttribute('pull_avatars');
  }
  public set pullAvatars(value: string) {
    this._pullAvatars = value;
  }
  public resetPullAvatars() {
    this._pullAvatars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullAvatarsInput() {
    return this._pullAvatars;
  }

  // pull_malware_hash - computed: true, optional: true, required: false
  private _pullMalwareHash?: string; 
  public get pullMalwareHash() {
    return this.getStringAttribute('pull_malware_hash');
  }
  public set pullMalwareHash(value: string) {
    this._pullMalwareHash = value;
  }
  public resetPullMalwareHash() {
    this._pullMalwareHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullMalwareHashInput() {
    return this._pullMalwareHash;
  }

  // pull_sysinfo - computed: true, optional: true, required: false
  private _pullSysinfo?: string; 
  public get pullSysinfo() {
    return this.getStringAttribute('pull_sysinfo');
  }
  public set pullSysinfo(value: string) {
    this._pullSysinfo = value;
  }
  public resetPullSysinfo() {
    this._pullSysinfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullSysinfoInput() {
    return this._pullSysinfo;
  }

  // pull_tags - computed: true, optional: true, required: false
  private _pullTags?: string; 
  public get pullTags() {
    return this.getStringAttribute('pull_tags');
  }
  public set pullTags(value: string) {
    this._pullTags = value;
  }
  public resetPullTags() {
    this._pullTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullTagsInput() {
    return this._pullTags;
  }

  // pull_vulnerabilities - computed: true, optional: true, required: false
  private _pullVulnerabilities?: string; 
  public get pullVulnerabilities() {
    return this.getStringAttribute('pull_vulnerabilities');
  }
  public set pullVulnerabilities(value: string) {
    this._pullVulnerabilities = value;
  }
  public resetPullVulnerabilities() {
    this._pullVulnerabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullVulnerabilitiesInput() {
    return this._pullVulnerabilities;
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

  // send_tags_to_all_vdoms - computed: true, optional: true, required: false
  private _sendTagsToAllVdoms?: string; 
  public get sendTagsToAllVdoms() {
    return this.getStringAttribute('send_tags_to_all_vdoms');
  }
  public set sendTagsToAllVdoms(value: string) {
    this._sendTagsToAllVdoms = value;
  }
  public resetSendTagsToAllVdoms() {
    this._sendTagsToAllVdoms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTagsToAllVdomsInput() {
    return this._sendTagsToAllVdoms;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // server - computed: false, optional: true, required: false
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

  // status_check_interval - computed: true, optional: true, required: false
  private _statusCheckInterval?: number; 
  public get statusCheckInterval() {
    return this.getNumberAttribute('status_check_interval');
  }
  public set statusCheckInterval(value: number) {
    this._statusCheckInterval = value;
  }
  public resetStatusCheckInterval() {
    this._statusCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCheckIntervalInput() {
    return this._statusCheckInterval;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // trust_ca_cn - computed: true, optional: true, required: false
  private _trustCaCn?: string; 
  public get trustCaCn() {
    return this.getStringAttribute('trust_ca_cn');
  }
  public set trustCaCn(value: string) {
    this._trustCaCn = value;
  }
  public resetTrustCaCn() {
    this._trustCaCn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustCaCnInput() {
    return this._trustCaCn;
  }

  // verified_cn - computed: false, optional: true, required: false
  private _verifiedCn?: string; 
  public get verifiedCn() {
    return this.getStringAttribute('verified_cn');
  }
  public set verifiedCn(value: string) {
    this._verifiedCn = value;
  }
  public resetVerifiedCn() {
    this._verifiedCn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifiedCnInput() {
    return this._verifiedCn;
  }

  // verifying_ca - computed: false, optional: true, required: false
  private _verifyingCa?: string; 
  public get verifyingCa() {
    return this.getStringAttribute('verifying_ca');
  }
  public set verifyingCa(value: string) {
    this._verifyingCa = value;
  }
  public resetVerifyingCa() {
    this._verifyingCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyingCaInput() {
    return this._verifyingCa;
  }

  // websocket_override - computed: true, optional: true, required: false
  private _websocketOverride?: string; 
  public get websocketOverride() {
    return this.getStringAttribute('websocket_override');
  }
  public set websocketOverride(value: string) {
    this._websocketOverride = value;
  }
  public resetWebsocketOverride() {
    this._websocketOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketOverrideInput() {
    return this._websocketOverride;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._adminPassword),
      admin_username: cdktf.stringToTerraform(this._adminUsername),
      adom: cdktf.stringToTerraform(this._adom),
      ca_cn_info: cdktf.stringToTerraform(this._caCnInfo),
      call_timeout: cdktf.numberToTerraform(this._callTimeout),
      capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._capabilities),
      certificate: cdktf.stringToTerraform(this._certificate),
      certificate_fingerprint: cdktf.stringToTerraform(this._certificateFingerprint),
      cloud_authentication_access_key: cdktf.stringToTerraform(this._cloudAuthenticationAccessKey),
      cloud_server_type: cdktf.stringToTerraform(this._cloudServerType),
      dirty_reason: cdktf.stringToTerraform(this._dirtyReason),
      ems_id: cdktf.numberToTerraform(this._emsId),
      fortinetone_cloud_authentication: cdktf.stringToTerraform(this._fortinetoneCloudAuthentication),
      https_port: cdktf.numberToTerraform(this._httpsPort),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      name: cdktf.stringToTerraform(this._name),
      out_of_sync_threshold: cdktf.numberToTerraform(this._outOfSyncThreshold),
      preserve_ssl_session: cdktf.stringToTerraform(this._preserveSslSession),
      pull_avatars: cdktf.stringToTerraform(this._pullAvatars),
      pull_malware_hash: cdktf.stringToTerraform(this._pullMalwareHash),
      pull_sysinfo: cdktf.stringToTerraform(this._pullSysinfo),
      pull_tags: cdktf.stringToTerraform(this._pullTags),
      pull_vulnerabilities: cdktf.stringToTerraform(this._pullVulnerabilities),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      send_tags_to_all_vdoms: cdktf.stringToTerraform(this._sendTagsToAllVdoms),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
      server: cdktf.stringToTerraform(this._server),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      status: cdktf.stringToTerraform(this._status),
      status_check_interval: cdktf.numberToTerraform(this._statusCheckInterval),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      trust_ca_cn: cdktf.stringToTerraform(this._trustCaCn),
      verified_cn: cdktf.stringToTerraform(this._verifiedCn),
      verifying_ca: cdktf.stringToTerraform(this._verifyingCa),
      websocket_override: cdktf.stringToTerraform(this._websocketOverride),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._adminPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      admin_username: {
        value: cdktf.stringToHclTerraform(this._adminUsername),
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
      ca_cn_info: {
        value: cdktf.stringToHclTerraform(this._caCnInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      call_timeout: {
        value: cdktf.numberToHclTerraform(this._callTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      capabilities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._capabilities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_fingerprint: {
        value: cdktf.stringToHclTerraform(this._certificateFingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_authentication_access_key: {
        value: cdktf.stringToHclTerraform(this._cloudAuthenticationAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_server_type: {
        value: cdktf.stringToHclTerraform(this._cloudServerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dirty_reason: {
        value: cdktf.stringToHclTerraform(this._dirtyReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ems_id: {
        value: cdktf.numberToHclTerraform(this._emsId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fortinetone_cloud_authentication: {
        value: cdktf.stringToHclTerraform(this._fortinetoneCloudAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_port: {
        value: cdktf.numberToHclTerraform(this._httpsPort),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_select_method: {
        value: cdktf.stringToHclTerraform(this._interfaceSelectMethod),
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
      out_of_sync_threshold: {
        value: cdktf.numberToHclTerraform(this._outOfSyncThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preserve_ssl_session: {
        value: cdktf.stringToHclTerraform(this._preserveSslSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pull_avatars: {
        value: cdktf.stringToHclTerraform(this._pullAvatars),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pull_malware_hash: {
        value: cdktf.stringToHclTerraform(this._pullMalwareHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pull_sysinfo: {
        value: cdktf.stringToHclTerraform(this._pullSysinfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pull_tags: {
        value: cdktf.stringToHclTerraform(this._pullTags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pull_vulnerabilities: {
        value: cdktf.stringToHclTerraform(this._pullVulnerabilities),
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
      send_tags_to_all_vdoms: {
        value: cdktf.stringToHclTerraform(this._sendTagsToAllVdoms),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
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
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
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
      status_check_interval: {
        value: cdktf.numberToHclTerraform(this._statusCheckInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_ca_cn: {
        value: cdktf.stringToHclTerraform(this._trustCaCn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verified_cn: {
        value: cdktf.stringToHclTerraform(this._verifiedCn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verifying_ca: {
        value: cdktf.stringToHclTerraform(this._verifyingCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      websocket_override: {
        value: cdktf.stringToHclTerraform(this._websocketOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
