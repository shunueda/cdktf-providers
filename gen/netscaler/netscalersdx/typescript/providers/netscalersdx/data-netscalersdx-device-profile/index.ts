// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/device_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetscalersdxDeviceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/device_profile#id DataNetscalersdxDeviceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Profile Name. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/device_profile#name DataNetscalersdxDeviceProfile#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/device_profile netscalersdx_device_profile}
*/
export class DataNetscalersdxDeviceProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_device_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetscalersdxDeviceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetscalersdxDeviceProfile to import
  * @param importFromId The id of the existing DataNetscalersdxDeviceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/device_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetscalersdxDeviceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_device_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/device_profile netscalersdx_device_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetscalersdxDeviceProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetscalersdxDeviceProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_device_profile',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2',
        providerVersionConstraint: '0.7.2'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cb_profile_name - computed: true, optional: false, required: false
  public get cbProfileName() {
    return this.getStringAttribute('cb_profile_name');
  }

  // host_password - computed: true, optional: false, required: false
  public get hostPassword() {
    return this.getStringAttribute('host_password');
  }

  // host_username - computed: true, optional: false, required: false
  public get hostUsername() {
    return this.getStringAttribute('host_username');
  }

  // http_port - computed: true, optional: false, required: false
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }

  // https_port - computed: true, optional: false, required: false
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
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

  // max_wait_time_reboot - computed: true, optional: false, required: false
  public get maxWaitTimeReboot() {
    return this.getStringAttribute('max_wait_time_reboot');
  }

  // name - computed: true, optional: true, required: false
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

  // ns_profile_name - computed: true, optional: false, required: false
  public get nsProfileName() {
    return this.getStringAttribute('ns_profile_name');
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // snmpauthpassword - computed: true, optional: false, required: false
  public get snmpauthpassword() {
    return this.getStringAttribute('snmpauthpassword');
  }

  // snmpauthprotocol - computed: true, optional: false, required: false
  public get snmpauthprotocol() {
    return this.getStringAttribute('snmpauthprotocol');
  }

  // snmpcommunity - computed: true, optional: false, required: false
  public get snmpcommunity() {
    return this.getStringAttribute('snmpcommunity');
  }

  // snmpprivpassword - computed: true, optional: false, required: false
  public get snmpprivpassword() {
    return this.getStringAttribute('snmpprivpassword');
  }

  // snmpprivprotocol - computed: true, optional: false, required: false
  public get snmpprivprotocol() {
    return this.getStringAttribute('snmpprivprotocol');
  }

  // snmpsecuritylevel - computed: true, optional: false, required: false
  public get snmpsecuritylevel() {
    return this.getStringAttribute('snmpsecuritylevel');
  }

  // snmpsecurityname - computed: true, optional: false, required: false
  public get snmpsecurityname() {
    return this.getStringAttribute('snmpsecurityname');
  }

  // snmpversion - computed: true, optional: false, required: false
  public get snmpversion() {
    return this.getStringAttribute('snmpversion');
  }

  // ssh_port - computed: true, optional: false, required: false
  public get sshPort() {
    return this.getStringAttribute('ssh_port');
  }

  // ssl_cert - computed: true, optional: false, required: false
  public get sslCert() {
    return this.getStringAttribute('ssl_cert');
  }

  // ssl_private_key - computed: true, optional: false, required: false
  public get sslPrivateKey() {
    return this.getStringAttribute('ssl_private_key');
  }

  // svm_ns_comm - computed: true, optional: false, required: false
  public get svmNsComm() {
    return this.getStringAttribute('svm_ns_comm');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_global_setting_for_communication_with_ns - computed: true, optional: false, required: false
  public get useGlobalSettingForCommunicationWithNs() {
    return this.getBooleanAttribute('use_global_setting_for_communication_with_ns');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
