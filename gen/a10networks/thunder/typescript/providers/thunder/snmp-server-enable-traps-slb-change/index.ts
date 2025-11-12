// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb_change
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerEnableTrapsSlbChangeAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable all system group traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb_change#all SnmpServerEnableTrapsSlbChangeA#all}
  */
  readonly all?: number;
  /**
  * Enable system connection resource event trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb_change#connection_resource_event SnmpServerEnableTrapsSlbChangeA#connection_resource_event}
  */
  readonly connectionResourceEvent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb_change#id SnmpServerEnableTrapsSlbChangeA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable partition resource usage warning trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb_change#resource_usage_warning SnmpServerEnableTrapsSlbChangeA#resource_usage_warning}
  */
  readonly resourceUsageWarning?: number;
  /**
  * Enable slb server create/delete trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb_change#server SnmpServerEnableTrapsSlbChangeA#server}
  */
  readonly server?: number;
  /**
  * Enable slb server port create/delete trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb_change#server_port SnmpServerEnableTrapsSlbChangeA#server_port}
  */
  readonly serverPort?: number;
  /**
  * Enable SSL certificate change trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb_change#ssl_cert_change SnmpServerEnableTrapsSlbChangeA#ssl_cert_change}
  */
  readonly sslCertChange?: number;
  /**
  * Enable SSL certificate expiring trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb_change#ssl_cert_expire SnmpServerEnableTrapsSlbChangeA#ssl_cert_expire}
  */
  readonly sslCertExpire?: number;
  /**
  * Enable slb system threshold trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb_change#system_threshold SnmpServerEnableTrapsSlbChangeA#system_threshold}
  */
  readonly systemThreshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb_change#uuid SnmpServerEnableTrapsSlbChangeA#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable slb vip create/delete trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb_change#vip SnmpServerEnableTrapsSlbChangeA#vip}
  */
  readonly vip?: number;
  /**
  * Enable slb vip-port create/delete trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb_change#vip_port SnmpServerEnableTrapsSlbChangeA#vip_port}
  */
  readonly vipPort?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb_change thunder_snmp_server_enable_traps_slb_change}
*/
export class SnmpServerEnableTrapsSlbChangeA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_enable_traps_slb_change";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerEnableTrapsSlbChangeA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerEnableTrapsSlbChangeA to import
  * @param importFromId The id of the existing SnmpServerEnableTrapsSlbChangeA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb_change#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerEnableTrapsSlbChangeA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_enable_traps_slb_change", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_slb_change thunder_snmp_server_enable_traps_slb_change} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerEnableTrapsSlbChangeAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpServerEnableTrapsSlbChangeAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_enable_traps_slb_change',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._all = config.all;
    this._connectionResourceEvent = config.connectionResourceEvent;
    this._id = config.id;
    this._resourceUsageWarning = config.resourceUsageWarning;
    this._server = config.server;
    this._serverPort = config.serverPort;
    this._sslCertChange = config.sslCertChange;
    this._sslCertExpire = config.sslCertExpire;
    this._systemThreshold = config.systemThreshold;
    this._uuid = config.uuid;
    this._vip = config.vip;
    this._vipPort = config.vipPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // connection_resource_event - computed: false, optional: true, required: false
  private _connectionResourceEvent?: number; 
  public get connectionResourceEvent() {
    return this.getNumberAttribute('connection_resource_event');
  }
  public set connectionResourceEvent(value: number) {
    this._connectionResourceEvent = value;
  }
  public resetConnectionResourceEvent() {
    this._connectionResourceEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionResourceEventInput() {
    return this._connectionResourceEvent;
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

  // resource_usage_warning - computed: false, optional: true, required: false
  private _resourceUsageWarning?: number; 
  public get resourceUsageWarning() {
    return this.getNumberAttribute('resource_usage_warning');
  }
  public set resourceUsageWarning(value: number) {
    this._resourceUsageWarning = value;
  }
  public resetResourceUsageWarning() {
    this._resourceUsageWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUsageWarningInput() {
    return this._resourceUsageWarning;
  }

  // server - computed: false, optional: true, required: false
  private _server?: number; 
  public get server() {
    return this.getNumberAttribute('server');
  }
  public set server(value: number) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // server_port - computed: false, optional: true, required: false
  private _serverPort?: number; 
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number) {
    this._serverPort = value;
  }
  public resetServerPort() {
    this._serverPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort;
  }

  // ssl_cert_change - computed: false, optional: true, required: false
  private _sslCertChange?: number; 
  public get sslCertChange() {
    return this.getNumberAttribute('ssl_cert_change');
  }
  public set sslCertChange(value: number) {
    this._sslCertChange = value;
  }
  public resetSslCertChange() {
    this._sslCertChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertChangeInput() {
    return this._sslCertChange;
  }

  // ssl_cert_expire - computed: false, optional: true, required: false
  private _sslCertExpire?: number; 
  public get sslCertExpire() {
    return this.getNumberAttribute('ssl_cert_expire');
  }
  public set sslCertExpire(value: number) {
    this._sslCertExpire = value;
  }
  public resetSslCertExpire() {
    this._sslCertExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertExpireInput() {
    return this._sslCertExpire;
  }

  // system_threshold - computed: false, optional: true, required: false
  private _systemThreshold?: number; 
  public get systemThreshold() {
    return this.getNumberAttribute('system_threshold');
  }
  public set systemThreshold(value: number) {
    this._systemThreshold = value;
  }
  public resetSystemThreshold() {
    this._systemThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemThresholdInput() {
    return this._systemThreshold;
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

  // vip - computed: false, optional: true, required: false
  private _vip?: number; 
  public get vip() {
    return this.getNumberAttribute('vip');
  }
  public set vip(value: number) {
    this._vip = value;
  }
  public resetVip() {
    this._vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }

  // vip_port - computed: false, optional: true, required: false
  private _vipPort?: number; 
  public get vipPort() {
    return this.getNumberAttribute('vip_port');
  }
  public set vipPort(value: number) {
    this._vipPort = value;
  }
  public resetVipPort() {
    this._vipPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipPortInput() {
    return this._vipPort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all: cdktf.numberToTerraform(this._all),
      connection_resource_event: cdktf.numberToTerraform(this._connectionResourceEvent),
      id: cdktf.stringToTerraform(this._id),
      resource_usage_warning: cdktf.numberToTerraform(this._resourceUsageWarning),
      server: cdktf.numberToTerraform(this._server),
      server_port: cdktf.numberToTerraform(this._serverPort),
      ssl_cert_change: cdktf.numberToTerraform(this._sslCertChange),
      ssl_cert_expire: cdktf.numberToTerraform(this._sslCertExpire),
      system_threshold: cdktf.numberToTerraform(this._systemThreshold),
      uuid: cdktf.stringToTerraform(this._uuid),
      vip: cdktf.numberToTerraform(this._vip),
      vip_port: cdktf.numberToTerraform(this._vipPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all: {
        value: cdktf.numberToHclTerraform(this._all),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_resource_event: {
        value: cdktf.numberToHclTerraform(this._connectionResourceEvent),
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
      resource_usage_warning: {
        value: cdktf.numberToHclTerraform(this._resourceUsageWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server: {
        value: cdktf.numberToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_port: {
        value: cdktf.numberToHclTerraform(this._serverPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_cert_change: {
        value: cdktf.numberToHclTerraform(this._sslCertChange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_cert_expire: {
        value: cdktf.numberToHclTerraform(this._sslCertExpire),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      system_threshold: {
        value: cdktf.numberToHclTerraform(this._systemThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip: {
        value: cdktf.numberToHclTerraform(this._vip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vip_port: {
        value: cdktf.numberToHclTerraform(this._vipPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
