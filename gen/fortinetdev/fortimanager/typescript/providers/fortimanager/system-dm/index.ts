// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemDmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#concurrent_install_image_limit SystemDm#concurrent_install_image_limit}
  */
  readonly concurrentInstallImageLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#concurrent_install_limit SystemDm#concurrent_install_limit}
  */
  readonly concurrentInstallLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#concurrent_install_script_limit SystemDm#concurrent_install_script_limit}
  */
  readonly concurrentInstallScriptLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#conf_merge_after_script SystemDm#conf_merge_after_script}
  */
  readonly confMergeAfterScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#discover_timeout SystemDm#discover_timeout}
  */
  readonly discoverTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#dpm_logsize SystemDm#dpm_logsize}
  */
  readonly dpmLogsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#fgfm_auto_retrieve_timeout SystemDm#fgfm_auto_retrieve_timeout}
  */
  readonly fgfmAutoRetrieveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#fgfm_install_refresh_count SystemDm#fgfm_install_refresh_count}
  */
  readonly fgfmInstallRefreshCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#fgfm_keepalive_itvl SystemDm#fgfm_keepalive_itvl}
  */
  readonly fgfmKeepaliveItvl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#fgfm_sock_timeout SystemDm#fgfm_sock_timeout}
  */
  readonly fgfmSockTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#force_remote_diff SystemDm#force_remote_diff}
  */
  readonly forceRemoteDiff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#fortiap_refresh_cnt SystemDm#fortiap_refresh_cnt}
  */
  readonly fortiapRefreshCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#fortiap_refresh_itvl SystemDm#fortiap_refresh_itvl}
  */
  readonly fortiapRefreshItvl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#fortiext_refresh_cnt SystemDm#fortiext_refresh_cnt}
  */
  readonly fortiextRefreshCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#id SystemDm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#install_fds_timeout SystemDm#install_fds_timeout}
  */
  readonly installFdsTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#install_image_timeout SystemDm#install_image_timeout}
  */
  readonly installImageTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#install_tunnel_retry_itvl SystemDm#install_tunnel_retry_itvl}
  */
  readonly installTunnelRetryItvl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#log_autoupdate SystemDm#log_autoupdate}
  */
  readonly logAutoupdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#max_revs SystemDm#max_revs}
  */
  readonly maxRevs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#nr_retry SystemDm#nr_retry}
  */
  readonly nrRetry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#retry SystemDm#retry}
  */
  readonly retry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#retry_intvl SystemDm#retry_intvl}
  */
  readonly retryIntvl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#rollback_allow_reboot SystemDm#rollback_allow_reboot}
  */
  readonly rollbackAllowReboot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#script_logsize SystemDm#script_logsize}
  */
  readonly scriptLogsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#skip_scep_check SystemDm#skip_scep_check}
  */
  readonly skipScepCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#skip_tunnel_fcp_req SystemDm#skip_tunnel_fcp_req}
  */
  readonly skipTunnelFcpReq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#verify_install SystemDm#verify_install}
  */
  readonly verifyInstall?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm fortimanager_system_dm}
*/
export class SystemDm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_dm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemDm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemDm to import
  * @param importFromId The id of the existing SystemDm that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemDm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_dm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_dm fortimanager_system_dm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemDmConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemDmConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_dm',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._concurrentInstallImageLimit = config.concurrentInstallImageLimit;
    this._concurrentInstallLimit = config.concurrentInstallLimit;
    this._concurrentInstallScriptLimit = config.concurrentInstallScriptLimit;
    this._confMergeAfterScript = config.confMergeAfterScript;
    this._discoverTimeout = config.discoverTimeout;
    this._dpmLogsize = config.dpmLogsize;
    this._fgfmAutoRetrieveTimeout = config.fgfmAutoRetrieveTimeout;
    this._fgfmInstallRefreshCount = config.fgfmInstallRefreshCount;
    this._fgfmKeepaliveItvl = config.fgfmKeepaliveItvl;
    this._fgfmSockTimeout = config.fgfmSockTimeout;
    this._forceRemoteDiff = config.forceRemoteDiff;
    this._fortiapRefreshCnt = config.fortiapRefreshCnt;
    this._fortiapRefreshItvl = config.fortiapRefreshItvl;
    this._fortiextRefreshCnt = config.fortiextRefreshCnt;
    this._id = config.id;
    this._installFdsTimeout = config.installFdsTimeout;
    this._installImageTimeout = config.installImageTimeout;
    this._installTunnelRetryItvl = config.installTunnelRetryItvl;
    this._logAutoupdate = config.logAutoupdate;
    this._maxRevs = config.maxRevs;
    this._nrRetry = config.nrRetry;
    this._retry = config.retry;
    this._retryIntvl = config.retryIntvl;
    this._rollbackAllowReboot = config.rollbackAllowReboot;
    this._scriptLogsize = config.scriptLogsize;
    this._skipScepCheck = config.skipScepCheck;
    this._skipTunnelFcpReq = config.skipTunnelFcpReq;
    this._verifyInstall = config.verifyInstall;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // concurrent_install_image_limit - computed: true, optional: true, required: false
  private _concurrentInstallImageLimit?: number; 
  public get concurrentInstallImageLimit() {
    return this.getNumberAttribute('concurrent_install_image_limit');
  }
  public set concurrentInstallImageLimit(value: number) {
    this._concurrentInstallImageLimit = value;
  }
  public resetConcurrentInstallImageLimit() {
    this._concurrentInstallImageLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentInstallImageLimitInput() {
    return this._concurrentInstallImageLimit;
  }

  // concurrent_install_limit - computed: true, optional: true, required: false
  private _concurrentInstallLimit?: number; 
  public get concurrentInstallLimit() {
    return this.getNumberAttribute('concurrent_install_limit');
  }
  public set concurrentInstallLimit(value: number) {
    this._concurrentInstallLimit = value;
  }
  public resetConcurrentInstallLimit() {
    this._concurrentInstallLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentInstallLimitInput() {
    return this._concurrentInstallLimit;
  }

  // concurrent_install_script_limit - computed: true, optional: true, required: false
  private _concurrentInstallScriptLimit?: number; 
  public get concurrentInstallScriptLimit() {
    return this.getNumberAttribute('concurrent_install_script_limit');
  }
  public set concurrentInstallScriptLimit(value: number) {
    this._concurrentInstallScriptLimit = value;
  }
  public resetConcurrentInstallScriptLimit() {
    this._concurrentInstallScriptLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentInstallScriptLimitInput() {
    return this._concurrentInstallScriptLimit;
  }

  // conf_merge_after_script - computed: true, optional: true, required: false
  private _confMergeAfterScript?: string; 
  public get confMergeAfterScript() {
    return this.getStringAttribute('conf_merge_after_script');
  }
  public set confMergeAfterScript(value: string) {
    this._confMergeAfterScript = value;
  }
  public resetConfMergeAfterScript() {
    this._confMergeAfterScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confMergeAfterScriptInput() {
    return this._confMergeAfterScript;
  }

  // discover_timeout - computed: true, optional: true, required: false
  private _discoverTimeout?: number; 
  public get discoverTimeout() {
    return this.getNumberAttribute('discover_timeout');
  }
  public set discoverTimeout(value: number) {
    this._discoverTimeout = value;
  }
  public resetDiscoverTimeout() {
    this._discoverTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverTimeoutInput() {
    return this._discoverTimeout;
  }

  // dpm_logsize - computed: true, optional: true, required: false
  private _dpmLogsize?: number; 
  public get dpmLogsize() {
    return this.getNumberAttribute('dpm_logsize');
  }
  public set dpmLogsize(value: number) {
    this._dpmLogsize = value;
  }
  public resetDpmLogsize() {
    this._dpmLogsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpmLogsizeInput() {
    return this._dpmLogsize;
  }

  // fgfm_auto_retrieve_timeout - computed: true, optional: true, required: false
  private _fgfmAutoRetrieveTimeout?: number; 
  public get fgfmAutoRetrieveTimeout() {
    return this.getNumberAttribute('fgfm_auto_retrieve_timeout');
  }
  public set fgfmAutoRetrieveTimeout(value: number) {
    this._fgfmAutoRetrieveTimeout = value;
  }
  public resetFgfmAutoRetrieveTimeout() {
    this._fgfmAutoRetrieveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgfmAutoRetrieveTimeoutInput() {
    return this._fgfmAutoRetrieveTimeout;
  }

  // fgfm_install_refresh_count - computed: true, optional: true, required: false
  private _fgfmInstallRefreshCount?: number; 
  public get fgfmInstallRefreshCount() {
    return this.getNumberAttribute('fgfm_install_refresh_count');
  }
  public set fgfmInstallRefreshCount(value: number) {
    this._fgfmInstallRefreshCount = value;
  }
  public resetFgfmInstallRefreshCount() {
    this._fgfmInstallRefreshCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgfmInstallRefreshCountInput() {
    return this._fgfmInstallRefreshCount;
  }

  // fgfm_keepalive_itvl - computed: true, optional: true, required: false
  private _fgfmKeepaliveItvl?: number; 
  public get fgfmKeepaliveItvl() {
    return this.getNumberAttribute('fgfm_keepalive_itvl');
  }
  public set fgfmKeepaliveItvl(value: number) {
    this._fgfmKeepaliveItvl = value;
  }
  public resetFgfmKeepaliveItvl() {
    this._fgfmKeepaliveItvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgfmKeepaliveItvlInput() {
    return this._fgfmKeepaliveItvl;
  }

  // fgfm_sock_timeout - computed: true, optional: true, required: false
  private _fgfmSockTimeout?: number; 
  public get fgfmSockTimeout() {
    return this.getNumberAttribute('fgfm_sock_timeout');
  }
  public set fgfmSockTimeout(value: number) {
    this._fgfmSockTimeout = value;
  }
  public resetFgfmSockTimeout() {
    this._fgfmSockTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgfmSockTimeoutInput() {
    return this._fgfmSockTimeout;
  }

  // force_remote_diff - computed: true, optional: true, required: false
  private _forceRemoteDiff?: string; 
  public get forceRemoteDiff() {
    return this.getStringAttribute('force_remote_diff');
  }
  public set forceRemoteDiff(value: string) {
    this._forceRemoteDiff = value;
  }
  public resetForceRemoteDiff() {
    this._forceRemoteDiff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRemoteDiffInput() {
    return this._forceRemoteDiff;
  }

  // fortiap_refresh_cnt - computed: true, optional: true, required: false
  private _fortiapRefreshCnt?: number; 
  public get fortiapRefreshCnt() {
    return this.getNumberAttribute('fortiap_refresh_cnt');
  }
  public set fortiapRefreshCnt(value: number) {
    this._fortiapRefreshCnt = value;
  }
  public resetFortiapRefreshCnt() {
    this._fortiapRefreshCnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiapRefreshCntInput() {
    return this._fortiapRefreshCnt;
  }

  // fortiap_refresh_itvl - computed: true, optional: true, required: false
  private _fortiapRefreshItvl?: number; 
  public get fortiapRefreshItvl() {
    return this.getNumberAttribute('fortiap_refresh_itvl');
  }
  public set fortiapRefreshItvl(value: number) {
    this._fortiapRefreshItvl = value;
  }
  public resetFortiapRefreshItvl() {
    this._fortiapRefreshItvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiapRefreshItvlInput() {
    return this._fortiapRefreshItvl;
  }

  // fortiext_refresh_cnt - computed: true, optional: true, required: false
  private _fortiextRefreshCnt?: number; 
  public get fortiextRefreshCnt() {
    return this.getNumberAttribute('fortiext_refresh_cnt');
  }
  public set fortiextRefreshCnt(value: number) {
    this._fortiextRefreshCnt = value;
  }
  public resetFortiextRefreshCnt() {
    this._fortiextRefreshCnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiextRefreshCntInput() {
    return this._fortiextRefreshCnt;
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

  // install_fds_timeout - computed: true, optional: true, required: false
  private _installFdsTimeout?: number; 
  public get installFdsTimeout() {
    return this.getNumberAttribute('install_fds_timeout');
  }
  public set installFdsTimeout(value: number) {
    this._installFdsTimeout = value;
  }
  public resetInstallFdsTimeout() {
    this._installFdsTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installFdsTimeoutInput() {
    return this._installFdsTimeout;
  }

  // install_image_timeout - computed: true, optional: true, required: false
  private _installImageTimeout?: number; 
  public get installImageTimeout() {
    return this.getNumberAttribute('install_image_timeout');
  }
  public set installImageTimeout(value: number) {
    this._installImageTimeout = value;
  }
  public resetInstallImageTimeout() {
    this._installImageTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installImageTimeoutInput() {
    return this._installImageTimeout;
  }

  // install_tunnel_retry_itvl - computed: true, optional: true, required: false
  private _installTunnelRetryItvl?: number; 
  public get installTunnelRetryItvl() {
    return this.getNumberAttribute('install_tunnel_retry_itvl');
  }
  public set installTunnelRetryItvl(value: number) {
    this._installTunnelRetryItvl = value;
  }
  public resetInstallTunnelRetryItvl() {
    this._installTunnelRetryItvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installTunnelRetryItvlInput() {
    return this._installTunnelRetryItvl;
  }

  // log_autoupdate - computed: true, optional: true, required: false
  private _logAutoupdate?: string; 
  public get logAutoupdate() {
    return this.getStringAttribute('log_autoupdate');
  }
  public set logAutoupdate(value: string) {
    this._logAutoupdate = value;
  }
  public resetLogAutoupdate() {
    this._logAutoupdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAutoupdateInput() {
    return this._logAutoupdate;
  }

  // max_revs - computed: true, optional: true, required: false
  private _maxRevs?: number; 
  public get maxRevs() {
    return this.getNumberAttribute('max_revs');
  }
  public set maxRevs(value: number) {
    this._maxRevs = value;
  }
  public resetMaxRevs() {
    this._maxRevs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRevsInput() {
    return this._maxRevs;
  }

  // nr_retry - computed: true, optional: true, required: false
  private _nrRetry?: number; 
  public get nrRetry() {
    return this.getNumberAttribute('nr_retry');
  }
  public set nrRetry(value: number) {
    this._nrRetry = value;
  }
  public resetNrRetry() {
    this._nrRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrRetryInput() {
    return this._nrRetry;
  }

  // retry - computed: true, optional: true, required: false
  private _retry?: string; 
  public get retry() {
    return this.getStringAttribute('retry');
  }
  public set retry(value: string) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // retry_intvl - computed: true, optional: true, required: false
  private _retryIntvl?: number; 
  public get retryIntvl() {
    return this.getNumberAttribute('retry_intvl');
  }
  public set retryIntvl(value: number) {
    this._retryIntvl = value;
  }
  public resetRetryIntvl() {
    this._retryIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntvlInput() {
    return this._retryIntvl;
  }

  // rollback_allow_reboot - computed: true, optional: true, required: false
  private _rollbackAllowReboot?: string; 
  public get rollbackAllowReboot() {
    return this.getStringAttribute('rollback_allow_reboot');
  }
  public set rollbackAllowReboot(value: string) {
    this._rollbackAllowReboot = value;
  }
  public resetRollbackAllowReboot() {
    this._rollbackAllowReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackAllowRebootInput() {
    return this._rollbackAllowReboot;
  }

  // script_logsize - computed: true, optional: true, required: false
  private _scriptLogsize?: number; 
  public get scriptLogsize() {
    return this.getNumberAttribute('script_logsize');
  }
  public set scriptLogsize(value: number) {
    this._scriptLogsize = value;
  }
  public resetScriptLogsize() {
    this._scriptLogsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptLogsizeInput() {
    return this._scriptLogsize;
  }

  // skip_scep_check - computed: true, optional: true, required: false
  private _skipScepCheck?: string; 
  public get skipScepCheck() {
    return this.getStringAttribute('skip_scep_check');
  }
  public set skipScepCheck(value: string) {
    this._skipScepCheck = value;
  }
  public resetSkipScepCheck() {
    this._skipScepCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipScepCheckInput() {
    return this._skipScepCheck;
  }

  // skip_tunnel_fcp_req - computed: true, optional: true, required: false
  private _skipTunnelFcpReq?: string; 
  public get skipTunnelFcpReq() {
    return this.getStringAttribute('skip_tunnel_fcp_req');
  }
  public set skipTunnelFcpReq(value: string) {
    this._skipTunnelFcpReq = value;
  }
  public resetSkipTunnelFcpReq() {
    this._skipTunnelFcpReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTunnelFcpReqInput() {
    return this._skipTunnelFcpReq;
  }

  // verify_install - computed: true, optional: true, required: false
  private _verifyInstall?: string; 
  public get verifyInstall() {
    return this.getStringAttribute('verify_install');
  }
  public set verifyInstall(value: string) {
    this._verifyInstall = value;
  }
  public resetVerifyInstall() {
    this._verifyInstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInstallInput() {
    return this._verifyInstall;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      concurrent_install_image_limit: cdktf.numberToTerraform(this._concurrentInstallImageLimit),
      concurrent_install_limit: cdktf.numberToTerraform(this._concurrentInstallLimit),
      concurrent_install_script_limit: cdktf.numberToTerraform(this._concurrentInstallScriptLimit),
      conf_merge_after_script: cdktf.stringToTerraform(this._confMergeAfterScript),
      discover_timeout: cdktf.numberToTerraform(this._discoverTimeout),
      dpm_logsize: cdktf.numberToTerraform(this._dpmLogsize),
      fgfm_auto_retrieve_timeout: cdktf.numberToTerraform(this._fgfmAutoRetrieveTimeout),
      fgfm_install_refresh_count: cdktf.numberToTerraform(this._fgfmInstallRefreshCount),
      fgfm_keepalive_itvl: cdktf.numberToTerraform(this._fgfmKeepaliveItvl),
      fgfm_sock_timeout: cdktf.numberToTerraform(this._fgfmSockTimeout),
      force_remote_diff: cdktf.stringToTerraform(this._forceRemoteDiff),
      fortiap_refresh_cnt: cdktf.numberToTerraform(this._fortiapRefreshCnt),
      fortiap_refresh_itvl: cdktf.numberToTerraform(this._fortiapRefreshItvl),
      fortiext_refresh_cnt: cdktf.numberToTerraform(this._fortiextRefreshCnt),
      id: cdktf.stringToTerraform(this._id),
      install_fds_timeout: cdktf.numberToTerraform(this._installFdsTimeout),
      install_image_timeout: cdktf.numberToTerraform(this._installImageTimeout),
      install_tunnel_retry_itvl: cdktf.numberToTerraform(this._installTunnelRetryItvl),
      log_autoupdate: cdktf.stringToTerraform(this._logAutoupdate),
      max_revs: cdktf.numberToTerraform(this._maxRevs),
      nr_retry: cdktf.numberToTerraform(this._nrRetry),
      retry: cdktf.stringToTerraform(this._retry),
      retry_intvl: cdktf.numberToTerraform(this._retryIntvl),
      rollback_allow_reboot: cdktf.stringToTerraform(this._rollbackAllowReboot),
      script_logsize: cdktf.numberToTerraform(this._scriptLogsize),
      skip_scep_check: cdktf.stringToTerraform(this._skipScepCheck),
      skip_tunnel_fcp_req: cdktf.stringToTerraform(this._skipTunnelFcpReq),
      verify_install: cdktf.stringToTerraform(this._verifyInstall),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      concurrent_install_image_limit: {
        value: cdktf.numberToHclTerraform(this._concurrentInstallImageLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      concurrent_install_limit: {
        value: cdktf.numberToHclTerraform(this._concurrentInstallLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      concurrent_install_script_limit: {
        value: cdktf.numberToHclTerraform(this._concurrentInstallScriptLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conf_merge_after_script: {
        value: cdktf.stringToHclTerraform(this._confMergeAfterScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discover_timeout: {
        value: cdktf.numberToHclTerraform(this._discoverTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dpm_logsize: {
        value: cdktf.numberToHclTerraform(this._dpmLogsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fgfm_auto_retrieve_timeout: {
        value: cdktf.numberToHclTerraform(this._fgfmAutoRetrieveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fgfm_install_refresh_count: {
        value: cdktf.numberToHclTerraform(this._fgfmInstallRefreshCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fgfm_keepalive_itvl: {
        value: cdktf.numberToHclTerraform(this._fgfmKeepaliveItvl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fgfm_sock_timeout: {
        value: cdktf.numberToHclTerraform(this._fgfmSockTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_remote_diff: {
        value: cdktf.stringToHclTerraform(this._forceRemoteDiff),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiap_refresh_cnt: {
        value: cdktf.numberToHclTerraform(this._fortiapRefreshCnt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fortiap_refresh_itvl: {
        value: cdktf.numberToHclTerraform(this._fortiapRefreshItvl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fortiext_refresh_cnt: {
        value: cdktf.numberToHclTerraform(this._fortiextRefreshCnt),
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
      install_fds_timeout: {
        value: cdktf.numberToHclTerraform(this._installFdsTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      install_image_timeout: {
        value: cdktf.numberToHclTerraform(this._installImageTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      install_tunnel_retry_itvl: {
        value: cdktf.numberToHclTerraform(this._installTunnelRetryItvl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_autoupdate: {
        value: cdktf.stringToHclTerraform(this._logAutoupdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_revs: {
        value: cdktf.numberToHclTerraform(this._maxRevs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nr_retry: {
        value: cdktf.numberToHclTerraform(this._nrRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry: {
        value: cdktf.stringToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_intvl: {
        value: cdktf.numberToHclTerraform(this._retryIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rollback_allow_reboot: {
        value: cdktf.stringToHclTerraform(this._rollbackAllowReboot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_logsize: {
        value: cdktf.numberToHclTerraform(this._scriptLogsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_scep_check: {
        value: cdktf.stringToHclTerraform(this._skipScepCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_tunnel_fcp_req: {
        value: cdktf.stringToHclTerraform(this._skipTunnelFcpReq),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_install: {
        value: cdktf.stringToHclTerraform(this._verifyInstall),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
