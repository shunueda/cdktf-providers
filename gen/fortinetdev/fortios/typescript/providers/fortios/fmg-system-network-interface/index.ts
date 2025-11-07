// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_network_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmgSystemNetworkInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_network_interface#allow_access FmgSystemNetworkInterface#allow_access}
  */
  readonly allowAccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_network_interface#description FmgSystemNetworkInterface#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_network_interface#id FmgSystemNetworkInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_network_interface#ip FmgSystemNetworkInterface#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_network_interface#name FmgSystemNetworkInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_network_interface#service_access FmgSystemNetworkInterface#service_access}
  */
  readonly serviceAccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_network_interface#status FmgSystemNetworkInterface#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_network_interface fortios_fmg_system_network_interface}
*/
export class FmgSystemNetworkInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_fmg_system_network_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FmgSystemNetworkInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FmgSystemNetworkInterface to import
  * @param importFromId The id of the existing FmgSystemNetworkInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_network_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FmgSystemNetworkInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_fmg_system_network_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_network_interface fortios_fmg_system_network_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmgSystemNetworkInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: FmgSystemNetworkInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_fmg_system_network_interface',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAccess = config.allowAccess;
    this._description = config.description;
    this._id = config.id;
    this._ip = config.ip;
    this._name = config.name;
    this._serviceAccess = config.serviceAccess;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_access - computed: false, optional: true, required: false
  private _allowAccess?: string[]; 
  public get allowAccess() {
    return this.getListAttribute('allow_access');
  }
  public set allowAccess(value: string[]) {
    this._allowAccess = value;
  }
  public resetAllowAccess() {
    this._allowAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAccessInput() {
    return this._allowAccess;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
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

  // service_access - computed: false, optional: true, required: false
  private _serviceAccess?: string[]; 
  public get serviceAccess() {
    return this.getListAttribute('service_access');
  }
  public set serviceAccess(value: string[]) {
    this._serviceAccess = value;
  }
  public resetServiceAccess() {
    this._serviceAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccessInput() {
    return this._serviceAccess;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_access: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowAccess),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      name: cdktf.stringToTerraform(this._name),
      service_access: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceAccess),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_access: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowAccess),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      service_access: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceAccess),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
