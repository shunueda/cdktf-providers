// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystempLogFortianalyzerSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#access_config SystempLogFortianalyzerSetting#access_config}
  */
  readonly accessConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#adom SystempLogFortianalyzerSetting#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#alt_server SystempLogFortianalyzerSetting#alt_server}
  */
  readonly altServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#certificate SystempLogFortianalyzerSetting#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#certificate_verification SystempLogFortianalyzerSetting#certificate_verification}
  */
  readonly certificateVerification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#conn_timeout SystempLogFortianalyzerSetting#conn_timeout}
  */
  readonly connTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#devprof SystempLogFortianalyzerSetting#devprof}
  */
  readonly devprof: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#enc_algorithm SystempLogFortianalyzerSetting#enc_algorithm}
  */
  readonly encAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#fallback_to_primary SystempLogFortianalyzerSetting#fallback_to_primary}
  */
  readonly fallbackToPrimary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#hmac_algorithm SystempLogFortianalyzerSetting#hmac_algorithm}
  */
  readonly hmacAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#id SystempLogFortianalyzerSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#interface SystempLogFortianalyzerSetting#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#interface_select_method SystempLogFortianalyzerSetting#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#ips_archive SystempLogFortianalyzerSetting#ips_archive}
  */
  readonly ipsArchive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#max_log_rate SystempLogFortianalyzerSetting#max_log_rate}
  */
  readonly maxLogRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#monitor_failure_retry_period SystempLogFortianalyzerSetting#monitor_failure_retry_period}
  */
  readonly monitorFailureRetryPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#monitor_keepalive_period SystempLogFortianalyzerSetting#monitor_keepalive_period}
  */
  readonly monitorKeepalivePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#preshared_key SystempLogFortianalyzerSetting#preshared_key}
  */
  readonly presharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#priority SystempLogFortianalyzerSetting#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#reliable SystempLogFortianalyzerSetting#reliable}
  */
  readonly reliable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#scopetype SystempLogFortianalyzerSetting#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#server_cert_ca SystempLogFortianalyzerSetting#server_cert_ca}
  */
  readonly serverCertCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#ssl_min_proto_version SystempLogFortianalyzerSetting#ssl_min_proto_version}
  */
  readonly sslMinProtoVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#upload_day SystempLogFortianalyzerSetting#upload_day}
  */
  readonly uploadDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#upload_interval SystempLogFortianalyzerSetting#upload_interval}
  */
  readonly uploadInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#upload_option SystempLogFortianalyzerSetting#upload_option}
  */
  readonly uploadOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#upload_time SystempLogFortianalyzerSetting#upload_time}
  */
  readonly uploadTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#vrf_select SystempLogFortianalyzerSetting#vrf_select}
  */
  readonly vrfSelect?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting fortimanager_systemp_log_fortianalyzer_setting}
*/
export class SystempLogFortianalyzerSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_systemp_log_fortianalyzer_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystempLogFortianalyzerSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystempLogFortianalyzerSetting to import
  * @param importFromId The id of the existing SystempLogFortianalyzerSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystempLogFortianalyzerSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_systemp_log_fortianalyzer_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_log_fortianalyzer_setting fortimanager_systemp_log_fortianalyzer_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystempLogFortianalyzerSettingConfig
  */
  public constructor(scope: Construct, id: string, config: SystempLogFortianalyzerSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_systemp_log_fortianalyzer_setting',
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
    this._accessConfig = config.accessConfig;
    this._adom = config.adom;
    this._altServer = config.altServer;
    this._certificate = config.certificate;
    this._certificateVerification = config.certificateVerification;
    this._connTimeout = config.connTimeout;
    this._devprof = config.devprof;
    this._encAlgorithm = config.encAlgorithm;
    this._fallbackToPrimary = config.fallbackToPrimary;
    this._hmacAlgorithm = config.hmacAlgorithm;
    this._id = config.id;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._ipsArchive = config.ipsArchive;
    this._maxLogRate = config.maxLogRate;
    this._monitorFailureRetryPeriod = config.monitorFailureRetryPeriod;
    this._monitorKeepalivePeriod = config.monitorKeepalivePeriod;
    this._presharedKey = config.presharedKey;
    this._priority = config.priority;
    this._reliable = config.reliable;
    this._scopetype = config.scopetype;
    this._serverCertCa = config.serverCertCa;
    this._sslMinProtoVersion = config.sslMinProtoVersion;
    this._uploadDay = config.uploadDay;
    this._uploadInterval = config.uploadInterval;
    this._uploadOption = config.uploadOption;
    this._uploadTime = config.uploadTime;
    this._vrfSelect = config.vrfSelect;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_config - computed: true, optional: true, required: false
  private _accessConfig?: string; 
  public get accessConfig() {
    return this.getStringAttribute('access_config');
  }
  public set accessConfig(value: string) {
    this._accessConfig = value;
  }
  public resetAccessConfig() {
    this._accessConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigInput() {
    return this._accessConfig;
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

  // alt_server - computed: false, optional: true, required: false
  private _altServer?: string; 
  public get altServer() {
    return this.getStringAttribute('alt_server');
  }
  public set altServer(value: string) {
    this._altServer = value;
  }
  public resetAltServer() {
    this._altServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altServerInput() {
    return this._altServer;
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

  // certificate_verification - computed: true, optional: true, required: false
  private _certificateVerification?: string; 
  public get certificateVerification() {
    return this.getStringAttribute('certificate_verification');
  }
  public set certificateVerification(value: string) {
    this._certificateVerification = value;
  }
  public resetCertificateVerification() {
    this._certificateVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateVerificationInput() {
    return this._certificateVerification;
  }

  // conn_timeout - computed: false, optional: true, required: false
  private _connTimeout?: number; 
  public get connTimeout() {
    return this.getNumberAttribute('conn_timeout');
  }
  public set connTimeout(value: number) {
    this._connTimeout = value;
  }
  public resetConnTimeout() {
    this._connTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTimeoutInput() {
    return this._connTimeout;
  }

  // devprof - computed: false, optional: false, required: true
  private _devprof?: string; 
  public get devprof() {
    return this.getStringAttribute('devprof');
  }
  public set devprof(value: string) {
    this._devprof = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devprofInput() {
    return this._devprof;
  }

  // enc_algorithm - computed: false, optional: true, required: false
  private _encAlgorithm?: string; 
  public get encAlgorithm() {
    return this.getStringAttribute('enc_algorithm');
  }
  public set encAlgorithm(value: string) {
    this._encAlgorithm = value;
  }
  public resetEncAlgorithm() {
    this._encAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgorithmInput() {
    return this._encAlgorithm;
  }

  // fallback_to_primary - computed: true, optional: true, required: false
  private _fallbackToPrimary?: string; 
  public get fallbackToPrimary() {
    return this.getStringAttribute('fallback_to_primary');
  }
  public set fallbackToPrimary(value: string) {
    this._fallbackToPrimary = value;
  }
  public resetFallbackToPrimary() {
    this._fallbackToPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToPrimaryInput() {
    return this._fallbackToPrimary;
  }

  // hmac_algorithm - computed: true, optional: true, required: false
  private _hmacAlgorithm?: string; 
  public get hmacAlgorithm() {
    return this.getStringAttribute('hmac_algorithm');
  }
  public set hmacAlgorithm(value: string) {
    this._hmacAlgorithm = value;
  }
  public resetHmacAlgorithm() {
    this._hmacAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacAlgorithmInput() {
    return this._hmacAlgorithm;
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

  // interface_select_method - computed: false, optional: true, required: false
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

  // ips_archive - computed: true, optional: true, required: false
  private _ipsArchive?: string; 
  public get ipsArchive() {
    return this.getStringAttribute('ips_archive');
  }
  public set ipsArchive(value: string) {
    this._ipsArchive = value;
  }
  public resetIpsArchive() {
    this._ipsArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsArchiveInput() {
    return this._ipsArchive;
  }

  // max_log_rate - computed: false, optional: true, required: false
  private _maxLogRate?: number; 
  public get maxLogRate() {
    return this.getNumberAttribute('max_log_rate');
  }
  public set maxLogRate(value: number) {
    this._maxLogRate = value;
  }
  public resetMaxLogRate() {
    this._maxLogRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLogRateInput() {
    return this._maxLogRate;
  }

  // monitor_failure_retry_period - computed: true, optional: true, required: false
  private _monitorFailureRetryPeriod?: number; 
  public get monitorFailureRetryPeriod() {
    return this.getNumberAttribute('monitor_failure_retry_period');
  }
  public set monitorFailureRetryPeriod(value: number) {
    this._monitorFailureRetryPeriod = value;
  }
  public resetMonitorFailureRetryPeriod() {
    this._monitorFailureRetryPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorFailureRetryPeriodInput() {
    return this._monitorFailureRetryPeriod;
  }

  // monitor_keepalive_period - computed: true, optional: true, required: false
  private _monitorKeepalivePeriod?: number; 
  public get monitorKeepalivePeriod() {
    return this.getNumberAttribute('monitor_keepalive_period');
  }
  public set monitorKeepalivePeriod(value: number) {
    this._monitorKeepalivePeriod = value;
  }
  public resetMonitorKeepalivePeriod() {
    this._monitorKeepalivePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorKeepalivePeriodInput() {
    return this._monitorKeepalivePeriod;
  }

  // preshared_key - computed: false, optional: true, required: false
  private _presharedKey?: string; 
  public get presharedKey() {
    return this.getStringAttribute('preshared_key');
  }
  public set presharedKey(value: string) {
    this._presharedKey = value;
  }
  public resetPresharedKey() {
    this._presharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presharedKeyInput() {
    return this._presharedKey;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // reliable - computed: true, optional: true, required: false
  private _reliable?: string; 
  public get reliable() {
    return this.getStringAttribute('reliable');
  }
  public set reliable(value: string) {
    this._reliable = value;
  }
  public resetReliable() {
    this._reliable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reliableInput() {
    return this._reliable;
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

  // server_cert_ca - computed: false, optional: true, required: false
  private _serverCertCa?: string; 
  public get serverCertCa() {
    return this.getStringAttribute('server_cert_ca');
  }
  public set serverCertCa(value: string) {
    this._serverCertCa = value;
  }
  public resetServerCertCa() {
    this._serverCertCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertCaInput() {
    return this._serverCertCa;
  }

  // ssl_min_proto_version - computed: true, optional: true, required: false
  private _sslMinProtoVersion?: string; 
  public get sslMinProtoVersion() {
    return this.getStringAttribute('ssl_min_proto_version');
  }
  public set sslMinProtoVersion(value: string) {
    this._sslMinProtoVersion = value;
  }
  public resetSslMinProtoVersion() {
    this._sslMinProtoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMinProtoVersionInput() {
    return this._sslMinProtoVersion;
  }

  // upload_day - computed: false, optional: true, required: false
  private _uploadDay?: string; 
  public get uploadDay() {
    return this.getStringAttribute('upload_day');
  }
  public set uploadDay(value: string) {
    this._uploadDay = value;
  }
  public resetUploadDay() {
    this._uploadDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadDayInput() {
    return this._uploadDay;
  }

  // upload_interval - computed: false, optional: true, required: false
  private _uploadInterval?: string; 
  public get uploadInterval() {
    return this.getStringAttribute('upload_interval');
  }
  public set uploadInterval(value: string) {
    this._uploadInterval = value;
  }
  public resetUploadInterval() {
    this._uploadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadIntervalInput() {
    return this._uploadInterval;
  }

  // upload_option - computed: true, optional: true, required: false
  private _uploadOption?: string; 
  public get uploadOption() {
    return this.getStringAttribute('upload_option');
  }
  public set uploadOption(value: string) {
    this._uploadOption = value;
  }
  public resetUploadOption() {
    this._uploadOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadOptionInput() {
    return this._uploadOption;
  }

  // upload_time - computed: false, optional: true, required: false
  private _uploadTime?: string; 
  public get uploadTime() {
    return this.getStringAttribute('upload_time');
  }
  public set uploadTime(value: string) {
    this._uploadTime = value;
  }
  public resetUploadTime() {
    this._uploadTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadTimeInput() {
    return this._uploadTime;
  }

  // vrf_select - computed: false, optional: true, required: false
  private _vrfSelect?: number; 
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }
  public set vrfSelect(value: number) {
    this._vrfSelect = value;
  }
  public resetVrfSelect() {
    this._vrfSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfSelectInput() {
    return this._vrfSelect;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_config: cdktf.stringToTerraform(this._accessConfig),
      adom: cdktf.stringToTerraform(this._adom),
      alt_server: cdktf.stringToTerraform(this._altServer),
      certificate: cdktf.stringToTerraform(this._certificate),
      certificate_verification: cdktf.stringToTerraform(this._certificateVerification),
      conn_timeout: cdktf.numberToTerraform(this._connTimeout),
      devprof: cdktf.stringToTerraform(this._devprof),
      enc_algorithm: cdktf.stringToTerraform(this._encAlgorithm),
      fallback_to_primary: cdktf.stringToTerraform(this._fallbackToPrimary),
      hmac_algorithm: cdktf.stringToTerraform(this._hmacAlgorithm),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      ips_archive: cdktf.stringToTerraform(this._ipsArchive),
      max_log_rate: cdktf.numberToTerraform(this._maxLogRate),
      monitor_failure_retry_period: cdktf.numberToTerraform(this._monitorFailureRetryPeriod),
      monitor_keepalive_period: cdktf.numberToTerraform(this._monitorKeepalivePeriod),
      preshared_key: cdktf.stringToTerraform(this._presharedKey),
      priority: cdktf.stringToTerraform(this._priority),
      reliable: cdktf.stringToTerraform(this._reliable),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      server_cert_ca: cdktf.stringToTerraform(this._serverCertCa),
      ssl_min_proto_version: cdktf.stringToTerraform(this._sslMinProtoVersion),
      upload_day: cdktf.stringToTerraform(this._uploadDay),
      upload_interval: cdktf.stringToTerraform(this._uploadInterval),
      upload_option: cdktf.stringToTerraform(this._uploadOption),
      upload_time: cdktf.stringToTerraform(this._uploadTime),
      vrf_select: cdktf.numberToTerraform(this._vrfSelect),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_config: {
        value: cdktf.stringToHclTerraform(this._accessConfig),
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
      alt_server: {
        value: cdktf.stringToHclTerraform(this._altServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_verification: {
        value: cdktf.stringToHclTerraform(this._certificateVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn_timeout: {
        value: cdktf.numberToHclTerraform(this._connTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      devprof: {
        value: cdktf.stringToHclTerraform(this._devprof),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enc_algorithm: {
        value: cdktf.stringToHclTerraform(this._encAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_to_primary: {
        value: cdktf.stringToHclTerraform(this._fallbackToPrimary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hmac_algorithm: {
        value: cdktf.stringToHclTerraform(this._hmacAlgorithm),
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
      ips_archive: {
        value: cdktf.stringToHclTerraform(this._ipsArchive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_log_rate: {
        value: cdktf.numberToHclTerraform(this._maxLogRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_failure_retry_period: {
        value: cdktf.numberToHclTerraform(this._monitorFailureRetryPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_keepalive_period: {
        value: cdktf.numberToHclTerraform(this._monitorKeepalivePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preshared_key: {
        value: cdktf.stringToHclTerraform(this._presharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reliable: {
        value: cdktf.stringToHclTerraform(this._reliable),
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
      server_cert_ca: {
        value: cdktf.stringToHclTerraform(this._serverCertCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_min_proto_version: {
        value: cdktf.stringToHclTerraform(this._sslMinProtoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_day: {
        value: cdktf.stringToHclTerraform(this._uploadDay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_interval: {
        value: cdktf.stringToHclTerraform(this._uploadInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_option: {
        value: cdktf.stringToHclTerraform(this._uploadOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_time: {
        value: cdktf.stringToHclTerraform(this._uploadTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_select: {
        value: cdktf.numberToHclTerraform(this._vrfSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
