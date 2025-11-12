// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/hosting_privatedatabase_whitelist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostingPrivatedatabaseWhitelistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/hosting_privatedatabase_whitelist#id HostingPrivatedatabaseWhitelist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The whitelisted IP in your instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/hosting_privatedatabase_whitelist#ip HostingPrivatedatabaseWhitelist#ip}
  */
  readonly ip: string;
  /**
  * Custom name for your Whitelisted IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/hosting_privatedatabase_whitelist#name HostingPrivatedatabaseWhitelist#name}
  */
  readonly name: string;
  /**
  * Authorize this IP to access service port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/hosting_privatedatabase_whitelist#service HostingPrivatedatabaseWhitelist#service}
  */
  readonly service: boolean | cdktf.IResolvable;
  /**
  * The internal name of your private database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/hosting_privatedatabase_whitelist#service_name HostingPrivatedatabaseWhitelist#service_name}
  */
  readonly serviceName: string;
  /**
  * Authorize this IP to access SFTP port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/hosting_privatedatabase_whitelist#sftp HostingPrivatedatabaseWhitelist#sftp}
  */
  readonly sftp: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/hosting_privatedatabase_whitelist ovh_hosting_privatedatabase_whitelist}
*/
export class HostingPrivatedatabaseWhitelist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_hosting_privatedatabase_whitelist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HostingPrivatedatabaseWhitelist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HostingPrivatedatabaseWhitelist to import
  * @param importFromId The id of the existing HostingPrivatedatabaseWhitelist that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/hosting_privatedatabase_whitelist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HostingPrivatedatabaseWhitelist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_hosting_privatedatabase_whitelist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/hosting_privatedatabase_whitelist ovh_hosting_privatedatabase_whitelist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostingPrivatedatabaseWhitelistConfig
  */
  public constructor(scope: Construct, id: string, config: HostingPrivatedatabaseWhitelistConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_hosting_privatedatabase_whitelist',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
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
    this._ip = config.ip;
    this._name = config.name;
    this._service = config.service;
    this._serviceName = config.serviceName;
    this._sftp = config.sftp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // service - computed: false, optional: false, required: true
  private _service?: boolean | cdktf.IResolvable; 
  public get service() {
    return this.getBooleanAttribute('service');
  }
  public set service(value: boolean | cdktf.IResolvable) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // sftp - computed: false, optional: false, required: true
  private _sftp?: boolean | cdktf.IResolvable; 
  public get sftp() {
    return this.getBooleanAttribute('sftp');
  }
  public set sftp(value: boolean | cdktf.IResolvable) {
    this._sftp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpInput() {
    return this._sftp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      name: cdktf.stringToTerraform(this._name),
      service: cdktf.booleanToTerraform(this._service),
      service_name: cdktf.stringToTerraform(this._serviceName),
      sftp: cdktf.booleanToTerraform(this._sftp),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
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
      service: {
        value: cdktf.booleanToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sftp: {
        value: cdktf.booleanToHclTerraform(this._sftp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
