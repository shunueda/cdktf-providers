// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/interface_management_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmInterfaceManagementProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/interface_management_profile#id DataScmInterfaceManagementProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/interface_management_profile#name DataScmInterfaceManagementProfile#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/interface_management_profile scm_interface_management_profile}
*/
export class DataScmInterfaceManagementProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_interface_management_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmInterfaceManagementProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmInterfaceManagementProfile to import
  * @param importFromId The id of the existing DataScmInterfaceManagementProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/interface_management_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmInterfaceManagementProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_interface_management_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/interface_management_profile scm_interface_management_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmInterfaceManagementProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmInterfaceManagementProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_interface_management_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.3'
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

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // http - computed: true, optional: false, required: false
  public get http() {
    return this.getBooleanAttribute('http');
  }

  // http_ocsp - computed: true, optional: false, required: false
  public get httpOcsp() {
    return this.getBooleanAttribute('http_ocsp');
  }

  // https - computed: true, optional: false, required: false
  public get https() {
    return this.getBooleanAttribute('https');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // permitted_ip - computed: true, optional: false, required: false
  public get permittedIp() {
    return this.getListAttribute('permitted_ip');
  }

  // ping - computed: true, optional: false, required: false
  public get ping() {
    return this.getBooleanAttribute('ping');
  }

  // response_pages - computed: true, optional: false, required: false
  public get responsePages() {
    return this.getStringAttribute('response_pages');
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // ssh - computed: true, optional: false, required: false
  public get ssh() {
    return this.getBooleanAttribute('ssh');
  }

  // telnet - computed: true, optional: false, required: false
  public get telnet() {
    return this.getBooleanAttribute('telnet');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // userid_service - computed: true, optional: false, required: false
  public get useridService() {
    return this.getBooleanAttribute('userid_service');
  }

  // userid_syslog_listener_ssl - computed: true, optional: false, required: false
  public get useridSyslogListenerSsl() {
    return this.getBooleanAttribute('userid_syslog_listener_ssl');
  }

  // userid_syslog_listener_udp - computed: true, optional: false, required: false
  public get useridSyslogListenerUdp() {
    return this.getBooleanAttribute('userid_syslog_listener_udp');
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
