// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/system_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetscalersdxSystemSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of this data source. It is the unique randomstring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/system_settings#id DataNetscalersdxSystemSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/system_settings netscalersdx_system_settings}
*/
export class DataNetscalersdxSystemSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_system_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetscalersdxSystemSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetscalersdxSystemSettings to import
  * @param importFromId The id of the existing DataNetscalersdxSystemSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/system_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetscalersdxSystemSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_system_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/system_settings netscalersdx_system_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetscalersdxSystemSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetscalersdxSystemSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_system_settings',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2'
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

  // authorize_deviceapiproxy - computed: true, optional: false, required: false
  public get authorizeDeviceapiproxy() {
    return this.getBooleanAttribute('authorize_deviceapiproxy');
  }

  // basicauth - computed: true, optional: false, required: false
  public get basicauth() {
    return this.getBooleanAttribute('basicauth');
  }

  // disable_agent_old_password_input - computed: true, optional: false, required: false
  public get disableAgentOldPasswordInput() {
    return this.getBooleanAttribute('disable_agent_old_password_input');
  }

  // disk_utilization_threshold - computed: true, optional: false, required: false
  public get diskUtilizationThreshold() {
    return this.getNumberAttribute('disk_utilization_threshold');
  }

  // enable_apiproxy_credentials - computed: true, optional: false, required: false
  public get enableApiproxyCredentials() {
    return this.getBooleanAttribute('enable_apiproxy_credentials');
  }

  // enable_certificate_download - computed: true, optional: false, required: false
  public get enableCertificateDownload() {
    return this.getBooleanAttribute('enable_certificate_download');
  }

  // enable_cuxip - computed: true, optional: false, required: false
  public get enableCuxip() {
    return this.getBooleanAttribute('enable_cuxip');
  }

  // enable_delete_interface_on_adc - computed: true, optional: false, required: false
  public get enableDeleteInterfaceOnAdc() {
    return this.getBooleanAttribute('enable_delete_interface_on_adc');
  }

  // enable_nsrecover_login - computed: true, optional: false, required: false
  public get enableNsrecoverLogin() {
    return this.getBooleanAttribute('enable_nsrecover_login');
  }

  // enable_session_timeout - computed: true, optional: false, required: false
  public get enableSessionTimeout() {
    return this.getBooleanAttribute('enable_session_timeout');
  }

  // enable_shell_access - computed: true, optional: false, required: false
  public get enableShellAccess() {
    return this.getBooleanAttribute('enable_shell_access');
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

  // is_metering_enabled - computed: true, optional: false, required: false
  public get isMeteringEnabled() {
    return this.getBooleanAttribute('is_metering_enabled');
  }

  // keep_adc_image_count - computed: true, optional: false, required: false
  public get keepAdcImageCount() {
    return this.getNumberAttribute('keep_adc_image_count');
  }

  // keep_alive_ping_interval - computed: true, optional: false, required: false
  public get keepAlivePingInterval() {
    return this.getNumberAttribute('keep_alive_ping_interval');
  }

  // prompt_creds_for_stylebooks - computed: true, optional: false, required: false
  public get promptCredsForStylebooks() {
    return this.getBooleanAttribute('prompt_creds_for_stylebooks');
  }

  // secure_access_only - computed: true, optional: false, required: false
  public get secureAccessOnly() {
    return this.getBooleanAttribute('secure_access_only');
  }

  // session_timeout - computed: true, optional: false, required: false
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }

  // session_timeout_unit - computed: true, optional: false, required: false
  public get sessionTimeoutUnit() {
    return this.getStringAttribute('session_timeout_unit');
  }

  // svm_ns_comm - computed: true, optional: false, required: false
  public get svmNsComm() {
    return this.getStringAttribute('svm_ns_comm');
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
