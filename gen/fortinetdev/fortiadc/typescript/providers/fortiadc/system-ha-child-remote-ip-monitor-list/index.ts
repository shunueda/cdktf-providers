// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha_child_remote_ip_monitor_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemHaChildRemoteIpMonitorListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha_child_remote_ip_monitor_list#health_check_interval SystemHaChildRemoteIpMonitorList#health_check_interval}
  */
  readonly healthCheckInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha_child_remote_ip_monitor_list#health_check_retry SystemHaChildRemoteIpMonitorList#health_check_retry}
  */
  readonly healthCheckRetry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha_child_remote_ip_monitor_list#health_check_timeout SystemHaChildRemoteIpMonitorList#health_check_timeout}
  */
  readonly healthCheckTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha_child_remote_ip_monitor_list#id SystemHaChildRemoteIpMonitorList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha_child_remote_ip_monitor_list#mkey SystemHaChildRemoteIpMonitorList#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha_child_remote_ip_monitor_list#remote_address SystemHaChildRemoteIpMonitorList#remote_address}
  */
  readonly remoteAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha_child_remote_ip_monitor_list#source_port SystemHaChildRemoteIpMonitorList#source_port}
  */
  readonly sourcePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha_child_remote_ip_monitor_list#vdom SystemHaChildRemoteIpMonitorList#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha_child_remote_ip_monitor_list fortiadc_system_ha_child_remote_ip_monitor_list}
*/
export class SystemHaChildRemoteIpMonitorList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_ha_child_remote_ip_monitor_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemHaChildRemoteIpMonitorList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemHaChildRemoteIpMonitorList to import
  * @param importFromId The id of the existing SystemHaChildRemoteIpMonitorList that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha_child_remote_ip_monitor_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemHaChildRemoteIpMonitorList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_ha_child_remote_ip_monitor_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha_child_remote_ip_monitor_list fortiadc_system_ha_child_remote_ip_monitor_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemHaChildRemoteIpMonitorListConfig
  */
  public constructor(scope: Construct, id: string, config: SystemHaChildRemoteIpMonitorListConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_ha_child_remote_ip_monitor_list',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._healthCheckInterval = config.healthCheckInterval;
    this._healthCheckRetry = config.healthCheckRetry;
    this._healthCheckTimeout = config.healthCheckTimeout;
    this._id = config.id;
    this._mkey = config.mkey;
    this._remoteAddress = config.remoteAddress;
    this._sourcePort = config.sourcePort;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // health_check_interval - computed: true, optional: true, required: false
  private _healthCheckInterval?: string; 
  public get healthCheckInterval() {
    return this.getStringAttribute('health_check_interval');
  }
  public set healthCheckInterval(value: string) {
    this._healthCheckInterval = value;
  }
  public resetHealthCheckInterval() {
    this._healthCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalInput() {
    return this._healthCheckInterval;
  }

  // health_check_retry - computed: true, optional: true, required: false
  private _healthCheckRetry?: string; 
  public get healthCheckRetry() {
    return this.getStringAttribute('health_check_retry');
  }
  public set healthCheckRetry(value: string) {
    this._healthCheckRetry = value;
  }
  public resetHealthCheckRetry() {
    this._healthCheckRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckRetryInput() {
    return this._healthCheckRetry;
  }

  // health_check_timeout - computed: true, optional: true, required: false
  private _healthCheckTimeout?: string; 
  public get healthCheckTimeout() {
    return this.getStringAttribute('health_check_timeout');
  }
  public set healthCheckTimeout(value: string) {
    this._healthCheckTimeout = value;
  }
  public resetHealthCheckTimeout() {
    this._healthCheckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTimeoutInput() {
    return this._healthCheckTimeout;
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

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // remote_address - computed: true, optional: true, required: false
  private _remoteAddress?: string; 
  public get remoteAddress() {
    return this.getStringAttribute('remote_address');
  }
  public set remoteAddress(value: string) {
    this._remoteAddress = value;
  }
  public resetRemoteAddress() {
    this._remoteAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress;
  }

  // source_port - computed: true, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      health_check_interval: cdktf.stringToTerraform(this._healthCheckInterval),
      health_check_retry: cdktf.stringToTerraform(this._healthCheckRetry),
      health_check_timeout: cdktf.stringToTerraform(this._healthCheckTimeout),
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      remote_address: cdktf.stringToTerraform(this._remoteAddress),
      source_port: cdktf.stringToTerraform(this._sourcePort),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      health_check_interval: {
        value: cdktf.stringToHclTerraform(this._healthCheckInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_retry: {
        value: cdktf.stringToHclTerraform(this._healthCheckRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_timeout: {
        value: cdktf.stringToHclTerraform(this._healthCheckTimeout),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_address: {
        value: cdktf.stringToHclTerraform(this._remoteAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port: {
        value: cdktf.stringToHclTerraform(this._sourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
