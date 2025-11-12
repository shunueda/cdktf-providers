// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiadcSystemGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_global#id DataFortiadcSystemGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_global fortiadc_system_global}
*/
export class DataFortiadcSystemGlobal extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiadcSystemGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiadcSystemGlobal to import
  * @param importFromId The id of the existing DataFortiadcSystemGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiadcSystemGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_global fortiadc_system_global} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiadcSystemGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiadcSystemGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_global',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_idle_timeout - computed: true, optional: false, required: false
  public get adminIdleTimeout() {
    return this.getStringAttribute('admin_idle_timeout');
  }

  // config_sync_enable - computed: true, optional: false, required: false
  public get configSyncEnable() {
    return this.getStringAttribute('config_sync_enable');
  }

  // config_sync_port - computed: true, optional: false, required: false
  public get configSyncPort() {
    return this.getStringAttribute('config_sync_port');
  }

  // default_intermediate_ca_group - computed: true, optional: false, required: false
  public get defaultIntermediateCaGroup() {
    return this.getStringAttribute('default_intermediate_ca_group');
  }

  // gui_device_latitude - computed: true, optional: false, required: false
  public get guiDeviceLatitude() {
    return this.getStringAttribute('gui_device_latitude');
  }

  // gui_device_longtitude - computed: true, optional: false, required: false
  public get guiDeviceLongtitude() {
    return this.getStringAttribute('gui_device_longtitude');
  }

  // gui_log - computed: true, optional: false, required: false
  public get guiLog() {
    return this.getStringAttribute('gui_log');
  }

  // gui_router - computed: true, optional: false, required: false
  public get guiRouter() {
    return this.getStringAttribute('gui_router');
  }

  // gui_system - computed: true, optional: false, required: false
  public get guiSystem() {
    return this.getStringAttribute('gui_system');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // http_port - computed: true, optional: false, required: false
  public get httpPort() {
    return this.getStringAttribute('http_port');
  }

  // https_port - computed: true, optional: false, required: false
  public get httpsPort() {
    return this.getStringAttribute('https_port');
  }

  // https_redirect - computed: true, optional: false, required: false
  public get httpsRedirect() {
    return this.getStringAttribute('https_redirect');
  }

  // https_server_cert - computed: true, optional: false, required: false
  public get httpsServerCert() {
    return this.getStringAttribute('https_server_cert');
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

  // pre_login_banner - computed: true, optional: false, required: false
  public get preLoginBanner() {
    return this.getStringAttribute('pre_login_banner');
  }

  // ssh_port - computed: true, optional: false, required: false
  public get sshPort() {
    return this.getStringAttribute('ssh_port');
  }

  // sys_global_language - computed: true, optional: false, required: false
  public get sysGlobalLanguage() {
    return this.getStringAttribute('sys_global_language');
  }

  // telnet_port - computed: true, optional: false, required: false
  public get telnetPort() {
    return this.getStringAttribute('telnet_port');
  }

  // use_default_hostname - computed: true, optional: false, required: false
  public get useDefaultHostname() {
    return this.getStringAttribute('use_default_hostname');
  }

  // vdom_admin - computed: true, optional: false, required: false
  public get vdomAdmin() {
    return this.getStringAttribute('vdom_admin');
  }

  // vdom_mode - computed: true, optional: false, required: false
  public get vdomMode() {
    return this.getStringAttribute('vdom_mode');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
