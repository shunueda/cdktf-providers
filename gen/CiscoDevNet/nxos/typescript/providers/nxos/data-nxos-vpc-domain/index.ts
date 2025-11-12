// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/vpc_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNxosVpcDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/vpc_domain#device DataNxosVpcDomain#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/vpc_domain nxos_vpc_domain}
*/
export class DataNxosVpcDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_vpc_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNxosVpcDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNxosVpcDomain to import
  * @param importFromId The id of the existing DataNxosVpcDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/vpc_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNxosVpcDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_vpc_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/vpc_domain nxos_vpc_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNxosVpcDomainConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNxosVpcDomainConfig = {}) {
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
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state - computed: true, optional: false, required: false
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }

  // auto_recovery - computed: true, optional: false, required: false
  public get autoRecovery() {
    return this.getStringAttribute('auto_recovery');
  }

  // auto_recovery_interval - computed: true, optional: false, required: false
  public get autoRecoveryInterval() {
    return this.getNumberAttribute('auto_recovery_interval');
  }

  // delay_restore_orphan_port - computed: true, optional: false, required: false
  public get delayRestoreOrphanPort() {
    return this.getNumberAttribute('delay_restore_orphan_port');
  }

  // delay_restore_svi - computed: true, optional: false, required: false
  public get delayRestoreSvi() {
    return this.getNumberAttribute('delay_restore_svi');
  }

  // delay_restore_vpc - computed: true, optional: false, required: false
  public get delayRestoreVpc() {
    return this.getNumberAttribute('delay_restore_vpc');
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

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getNumberAttribute('domain_id');
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }

  // fast_convergence - computed: true, optional: false, required: false
  public get fastConvergence() {
    return this.getStringAttribute('fast_convergence');
  }

  // graceful_consistency_check - computed: true, optional: false, required: false
  public get gracefulConsistencyCheck() {
    return this.getStringAttribute('graceful_consistency_check');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // l3_peer_router - computed: true, optional: false, required: false
  public get l3PeerRouter() {
    return this.getStringAttribute('l3_peer_router');
  }

  // l3_peer_router_syslog - computed: true, optional: false, required: false
  public get l3PeerRouterSyslog() {
    return this.getStringAttribute('l3_peer_router_syslog');
  }

  // l3_peer_router_syslog_interval - computed: true, optional: false, required: false
  public get l3PeerRouterSyslogInterval() {
    return this.getNumberAttribute('l3_peer_router_syslog_interval');
  }

  // peer_gateway - computed: true, optional: false, required: false
  public get peerGateway() {
    return this.getStringAttribute('peer_gateway');
  }

  // peer_ip - computed: true, optional: false, required: false
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }

  // peer_switch - computed: true, optional: false, required: false
  public get peerSwitch() {
    return this.getStringAttribute('peer_switch');
  }

  // role_priority - computed: true, optional: false, required: false
  public get rolePriority() {
    return this.getNumberAttribute('role_priority');
  }

  // sys_mac - computed: true, optional: false, required: false
  public get sysMac() {
    return this.getStringAttribute('sys_mac');
  }

  // system_priority - computed: true, optional: false, required: false
  public get systemPriority() {
    return this.getNumberAttribute('system_priority');
  }

  // track - computed: true, optional: false, required: false
  public get track() {
    return this.getNumberAttribute('track');
  }

  // virtual_ip - computed: true, optional: false, required: false
  public get virtualIp() {
    return this.getStringAttribute('virtual_ip');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
