// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dasb_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DasbDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The department ID to which the device belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dasb_device#department_id DasbDevice#department_id}
  */
  readonly departmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dasb_device#id DasbDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dasb_device#ip DasbDevice#ip}
  */
  readonly ip: string;
  /**
  * Asset multi-node: fields ip and port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dasb_device#ip_port_set DasbDevice#ip_port_set}
  */
  readonly ipPortSet?: string[];
  /**
  * Hostname, can be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dasb_device#name DasbDevice#name}
  */
  readonly name?: string;
  /**
  * Operating system name, only Linux, Windows or MySQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dasb_device#os_name DasbDevice#os_name}
  */
  readonly osName: string;
  /**
  * Management port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dasb_device#port DasbDevice#port}
  */
  readonly port: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dasb_device tencentcloud_dasb_device}
*/
export class DasbDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dasb_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DasbDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DasbDevice to import
  * @param importFromId The id of the existing DasbDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dasb_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DasbDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dasb_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dasb_device tencentcloud_dasb_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DasbDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DasbDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dasb_device',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._departmentId = config.departmentId;
    this._id = config.id;
    this._ip = config.ip;
    this._ipPortSet = config.ipPortSet;
    this._name = config.name;
    this._osName = config.osName;
    this._port = config.port;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // department_id - computed: false, optional: true, required: false
  private _departmentId?: string; 
  public get departmentId() {
    return this.getStringAttribute('department_id');
  }
  public set departmentId(value: string) {
    this._departmentId = value;
  }
  public resetDepartmentId() {
    this._departmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentIdInput() {
    return this._departmentId;
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

  // ip_port_set - computed: true, optional: true, required: false
  private _ipPortSet?: string[]; 
  public get ipPortSet() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_port_set'));
  }
  public set ipPortSet(value: string[]) {
    this._ipPortSet = value;
  }
  public resetIpPortSet() {
    this._ipPortSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPortSetInput() {
    return this._ipPortSet;
  }

  // name - computed: false, optional: true, required: false
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

  // os_name - computed: false, optional: false, required: true
  private _osName?: string; 
  public get osName() {
    return this.getStringAttribute('os_name');
  }
  public set osName(value: string) {
    this._osName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osNameInput() {
    return this._osName;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      department_id: cdktf.stringToTerraform(this._departmentId),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      ip_port_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipPortSet),
      name: cdktf.stringToTerraform(this._name),
      os_name: cdktf.stringToTerraform(this._osName),
      port: cdktf.numberToTerraform(this._port),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      department_id: {
        value: cdktf.stringToHclTerraform(this._departmentId),
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
      ip_port_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipPortSet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_name: {
        value: cdktf.stringToHclTerraform(this._osName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
