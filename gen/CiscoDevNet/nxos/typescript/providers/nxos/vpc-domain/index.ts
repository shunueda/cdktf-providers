// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * vPC suspend locally.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#admin_state VpcDomain#admin_state}
  */
  readonly adminState?: string;
  /**
  * Auto Recovery.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#auto_recovery VpcDomain#auto_recovery}
  */
  readonly autoRecovery?: string;
  /**
  * Auto Recovery interval.
  *   - Range: `60`-`3600`
  *   - Default value: `240`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#auto_recovery_interval VpcDomain#auto_recovery_interval}
  */
  readonly autoRecoveryInterval?: number;
  /**
  * Delay restore for orphan ports.
  *   - Range: `0`-`300`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#delay_restore_orphan_port VpcDomain#delay_restore_orphan_port}
  */
  readonly delayRestoreOrphanPort?: number;
  /**
  * Delay restore for SVI.
  *   - Range: `1`-`3600`
  *   - Default value: `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#delay_restore_svi VpcDomain#delay_restore_svi}
  */
  readonly delayRestoreSvi?: number;
  /**
  * Delay restore for vPC links.
  *   - Range: `1`-`3600`
  *   - Default value: `30`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#delay_restore_vpc VpcDomain#delay_restore_vpc}
  */
  readonly delayRestoreVpc?: number;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#device VpcDomain#device}
  */
  readonly device?: string;
  /**
  * Domain id.
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#domain_id VpcDomain#domain_id}
  */
  readonly domainId: number;
  /**
  * DSCP.
  *   - Range: `0`-`63`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#dscp VpcDomain#dscp}
  */
  readonly dscp?: number;
  /**
  * Fast Convergence.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#fast_convergence VpcDomain#fast_convergence}
  */
  readonly fastConvergence?: string;
  /**
  * Graceful Type-1 Consistency Check.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#graceful_consistency_check VpcDomain#graceful_consistency_check}
  */
  readonly gracefulConsistencyCheck?: string;
  /**
  * L3 Peer Router.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#l3_peer_router VpcDomain#l3_peer_router}
  */
  readonly l3PeerRouter?: string;
  /**
  * L3 Peer Router Syslog.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#l3_peer_router_syslog VpcDomain#l3_peer_router_syslog}
  */
  readonly l3PeerRouterSyslog?: string;
  /**
  * L3 Peer Router Syslog Interval.
  *   - Range: `1`-`3600`
  *   - Default value: `3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#l3_peer_router_syslog_interval VpcDomain#l3_peer_router_syslog_interval}
  */
  readonly l3PeerRouterSyslogInterval?: number;
  /**
  * Peer Gateway.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#peer_gateway VpcDomain#peer_gateway}
  */
  readonly peerGateway?: string;
  /**
  * vPC peer IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#peer_ip VpcDomain#peer_ip}
  */
  readonly peerIp?: string;
  /**
  * vPC pair switches.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#peer_switch VpcDomain#peer_switch}
  */
  readonly peerSwitch?: string;
  /**
  * Role priority.
  *   - Range: `1`-`65535`
  *   - Default value: `32667`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#role_priority VpcDomain#role_priority}
  */
  readonly rolePriority?: number;
  /**
  * System MAC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#sys_mac VpcDomain#sys_mac}
  */
  readonly sysMac?: string;
  /**
  * System priority.
  *   - Range: `1`-`65535`
  *   - Default value: `32667`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#system_priority VpcDomain#system_priority}
  */
  readonly systemPriority?: number;
  /**
  * Tracking object to suspend vPC if object goes down.
  *   - Range: `0`-`500`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#track VpcDomain#track}
  */
  readonly track?: number;
  /**
  * vPC virtual IP address (vIP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#virtual_ip VpcDomain#virtual_ip}
  */
  readonly virtualIp?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain nxos_vpc_domain}
*/
export class VpcDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_vpc_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcDomain to import
  * @param importFromId The id of the existing VpcDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_vpc_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_domain nxos_vpc_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcDomainConfig
  */
  public constructor(scope: Construct, id: string, config: VpcDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_vpc_domain',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10',
        providerVersionConstraint: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminState = config.adminState;
    this._autoRecovery = config.autoRecovery;
    this._autoRecoveryInterval = config.autoRecoveryInterval;
    this._delayRestoreOrphanPort = config.delayRestoreOrphanPort;
    this._delayRestoreSvi = config.delayRestoreSvi;
    this._delayRestoreVpc = config.delayRestoreVpc;
    this._device = config.device;
    this._domainId = config.domainId;
    this._dscp = config.dscp;
    this._fastConvergence = config.fastConvergence;
    this._gracefulConsistencyCheck = config.gracefulConsistencyCheck;
    this._l3PeerRouter = config.l3PeerRouter;
    this._l3PeerRouterSyslog = config.l3PeerRouterSyslog;
    this._l3PeerRouterSyslogInterval = config.l3PeerRouterSyslogInterval;
    this._peerGateway = config.peerGateway;
    this._peerIp = config.peerIp;
    this._peerSwitch = config.peerSwitch;
    this._rolePriority = config.rolePriority;
    this._sysMac = config.sysMac;
    this._systemPriority = config.systemPriority;
    this._track = config.track;
    this._virtualIp = config.virtualIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state - computed: true, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // auto_recovery - computed: true, optional: true, required: false
  private _autoRecovery?: string; 
  public get autoRecovery() {
    return this.getStringAttribute('auto_recovery');
  }
  public set autoRecovery(value: string) {
    this._autoRecovery = value;
  }
  public resetAutoRecovery() {
    this._autoRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRecoveryInput() {
    return this._autoRecovery;
  }

  // auto_recovery_interval - computed: true, optional: true, required: false
  private _autoRecoveryInterval?: number; 
  public get autoRecoveryInterval() {
    return this.getNumberAttribute('auto_recovery_interval');
  }
  public set autoRecoveryInterval(value: number) {
    this._autoRecoveryInterval = value;
  }
  public resetAutoRecoveryInterval() {
    this._autoRecoveryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRecoveryIntervalInput() {
    return this._autoRecoveryInterval;
  }

  // delay_restore_orphan_port - computed: true, optional: true, required: false
  private _delayRestoreOrphanPort?: number; 
  public get delayRestoreOrphanPort() {
    return this.getNumberAttribute('delay_restore_orphan_port');
  }
  public set delayRestoreOrphanPort(value: number) {
    this._delayRestoreOrphanPort = value;
  }
  public resetDelayRestoreOrphanPort() {
    this._delayRestoreOrphanPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayRestoreOrphanPortInput() {
    return this._delayRestoreOrphanPort;
  }

  // delay_restore_svi - computed: true, optional: true, required: false
  private _delayRestoreSvi?: number; 
  public get delayRestoreSvi() {
    return this.getNumberAttribute('delay_restore_svi');
  }
  public set delayRestoreSvi(value: number) {
    this._delayRestoreSvi = value;
  }
  public resetDelayRestoreSvi() {
    this._delayRestoreSvi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayRestoreSviInput() {
    return this._delayRestoreSvi;
  }

  // delay_restore_vpc - computed: true, optional: true, required: false
  private _delayRestoreVpc?: number; 
  public get delayRestoreVpc() {
    return this.getNumberAttribute('delay_restore_vpc');
  }
  public set delayRestoreVpc(value: number) {
    this._delayRestoreVpc = value;
  }
  public resetDelayRestoreVpc() {
    this._delayRestoreVpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayRestoreVpcInput() {
    return this._delayRestoreVpc;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: number; 
  public get domainId() {
    return this.getNumberAttribute('domain_id');
  }
  public set domainId(value: number) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // dscp - computed: true, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // fast_convergence - computed: true, optional: true, required: false
  private _fastConvergence?: string; 
  public get fastConvergence() {
    return this.getStringAttribute('fast_convergence');
  }
  public set fastConvergence(value: string) {
    this._fastConvergence = value;
  }
  public resetFastConvergence() {
    this._fastConvergence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastConvergenceInput() {
    return this._fastConvergence;
  }

  // graceful_consistency_check - computed: true, optional: true, required: false
  private _gracefulConsistencyCheck?: string; 
  public get gracefulConsistencyCheck() {
    return this.getStringAttribute('graceful_consistency_check');
  }
  public set gracefulConsistencyCheck(value: string) {
    this._gracefulConsistencyCheck = value;
  }
  public resetGracefulConsistencyCheck() {
    this._gracefulConsistencyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulConsistencyCheckInput() {
    return this._gracefulConsistencyCheck;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // l3_peer_router - computed: true, optional: true, required: false
  private _l3PeerRouter?: string; 
  public get l3PeerRouter() {
    return this.getStringAttribute('l3_peer_router');
  }
  public set l3PeerRouter(value: string) {
    this._l3PeerRouter = value;
  }
  public resetL3PeerRouter() {
    this._l3PeerRouter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3PeerRouterInput() {
    return this._l3PeerRouter;
  }

  // l3_peer_router_syslog - computed: true, optional: true, required: false
  private _l3PeerRouterSyslog?: string; 
  public get l3PeerRouterSyslog() {
    return this.getStringAttribute('l3_peer_router_syslog');
  }
  public set l3PeerRouterSyslog(value: string) {
    this._l3PeerRouterSyslog = value;
  }
  public resetL3PeerRouterSyslog() {
    this._l3PeerRouterSyslog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3PeerRouterSyslogInput() {
    return this._l3PeerRouterSyslog;
  }

  // l3_peer_router_syslog_interval - computed: true, optional: true, required: false
  private _l3PeerRouterSyslogInterval?: number; 
  public get l3PeerRouterSyslogInterval() {
    return this.getNumberAttribute('l3_peer_router_syslog_interval');
  }
  public set l3PeerRouterSyslogInterval(value: number) {
    this._l3PeerRouterSyslogInterval = value;
  }
  public resetL3PeerRouterSyslogInterval() {
    this._l3PeerRouterSyslogInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3PeerRouterSyslogIntervalInput() {
    return this._l3PeerRouterSyslogInterval;
  }

  // peer_gateway - computed: true, optional: true, required: false
  private _peerGateway?: string; 
  public get peerGateway() {
    return this.getStringAttribute('peer_gateway');
  }
  public set peerGateway(value: string) {
    this._peerGateway = value;
  }
  public resetPeerGateway() {
    this._peerGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGatewayInput() {
    return this._peerGateway;
  }

  // peer_ip - computed: false, optional: true, required: false
  private _peerIp?: string; 
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }
  public set peerIp(value: string) {
    this._peerIp = value;
  }
  public resetPeerIp() {
    this._peerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpInput() {
    return this._peerIp;
  }

  // peer_switch - computed: true, optional: true, required: false
  private _peerSwitch?: string; 
  public get peerSwitch() {
    return this.getStringAttribute('peer_switch');
  }
  public set peerSwitch(value: string) {
    this._peerSwitch = value;
  }
  public resetPeerSwitch() {
    this._peerSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSwitchInput() {
    return this._peerSwitch;
  }

  // role_priority - computed: true, optional: true, required: false
  private _rolePriority?: number; 
  public get rolePriority() {
    return this.getNumberAttribute('role_priority');
  }
  public set rolePriority(value: number) {
    this._rolePriority = value;
  }
  public resetRolePriority() {
    this._rolePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolePriorityInput() {
    return this._rolePriority;
  }

  // sys_mac - computed: false, optional: true, required: false
  private _sysMac?: string; 
  public get sysMac() {
    return this.getStringAttribute('sys_mac');
  }
  public set sysMac(value: string) {
    this._sysMac = value;
  }
  public resetSysMac() {
    this._sysMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysMacInput() {
    return this._sysMac;
  }

  // system_priority - computed: true, optional: true, required: false
  private _systemPriority?: number; 
  public get systemPriority() {
    return this.getNumberAttribute('system_priority');
  }
  public set systemPriority(value: number) {
    this._systemPriority = value;
  }
  public resetSystemPriority() {
    this._systemPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPriorityInput() {
    return this._systemPriority;
  }

  // track - computed: true, optional: true, required: false
  private _track?: number; 
  public get track() {
    return this.getNumberAttribute('track');
  }
  public set track(value: number) {
    this._track = value;
  }
  public resetTrack() {
    this._track = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInput() {
    return this._track;
  }

  // virtual_ip - computed: false, optional: true, required: false
  private _virtualIp?: string; 
  public get virtualIp() {
    return this.getStringAttribute('virtual_ip');
  }
  public set virtualIp(value: string) {
    this._virtualIp = value;
  }
  public resetVirtualIp() {
    this._virtualIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualIpInput() {
    return this._virtualIp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state: cdktf.stringToTerraform(this._adminState),
      auto_recovery: cdktf.stringToTerraform(this._autoRecovery),
      auto_recovery_interval: cdktf.numberToTerraform(this._autoRecoveryInterval),
      delay_restore_orphan_port: cdktf.numberToTerraform(this._delayRestoreOrphanPort),
      delay_restore_svi: cdktf.numberToTerraform(this._delayRestoreSvi),
      delay_restore_vpc: cdktf.numberToTerraform(this._delayRestoreVpc),
      device: cdktf.stringToTerraform(this._device),
      domain_id: cdktf.numberToTerraform(this._domainId),
      dscp: cdktf.numberToTerraform(this._dscp),
      fast_convergence: cdktf.stringToTerraform(this._fastConvergence),
      graceful_consistency_check: cdktf.stringToTerraform(this._gracefulConsistencyCheck),
      l3_peer_router: cdktf.stringToTerraform(this._l3PeerRouter),
      l3_peer_router_syslog: cdktf.stringToTerraform(this._l3PeerRouterSyslog),
      l3_peer_router_syslog_interval: cdktf.numberToTerraform(this._l3PeerRouterSyslogInterval),
      peer_gateway: cdktf.stringToTerraform(this._peerGateway),
      peer_ip: cdktf.stringToTerraform(this._peerIp),
      peer_switch: cdktf.stringToTerraform(this._peerSwitch),
      role_priority: cdktf.numberToTerraform(this._rolePriority),
      sys_mac: cdktf.stringToTerraform(this._sysMac),
      system_priority: cdktf.numberToTerraform(this._systemPriority),
      track: cdktf.numberToTerraform(this._track),
      virtual_ip: cdktf.stringToTerraform(this._virtualIp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state: {
        value: cdktf.stringToHclTerraform(this._adminState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_recovery: {
        value: cdktf.stringToHclTerraform(this._autoRecovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_recovery_interval: {
        value: cdktf.numberToHclTerraform(this._autoRecoveryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delay_restore_orphan_port: {
        value: cdktf.numberToHclTerraform(this._delayRestoreOrphanPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delay_restore_svi: {
        value: cdktf.numberToHclTerraform(this._delayRestoreSvi),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delay_restore_vpc: {
        value: cdktf.numberToHclTerraform(this._delayRestoreVpc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktf.numberToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dscp: {
        value: cdktf.numberToHclTerraform(this._dscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fast_convergence: {
        value: cdktf.stringToHclTerraform(this._fastConvergence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graceful_consistency_check: {
        value: cdktf.stringToHclTerraform(this._gracefulConsistencyCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3_peer_router: {
        value: cdktf.stringToHclTerraform(this._l3PeerRouter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3_peer_router_syslog: {
        value: cdktf.stringToHclTerraform(this._l3PeerRouterSyslog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3_peer_router_syslog_interval: {
        value: cdktf.numberToHclTerraform(this._l3PeerRouterSyslogInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer_gateway: {
        value: cdktf.stringToHclTerraform(this._peerGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_ip: {
        value: cdktf.stringToHclTerraform(this._peerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_switch: {
        value: cdktf.stringToHclTerraform(this._peerSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_priority: {
        value: cdktf.numberToHclTerraform(this._rolePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sys_mac: {
        value: cdktf.stringToHclTerraform(this._sysMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_priority: {
        value: cdktf.numberToHclTerraform(this._systemPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      track: {
        value: cdktf.numberToHclTerraform(this._track),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtual_ip: {
        value: cdktf.stringToHclTerraform(this._virtualIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
