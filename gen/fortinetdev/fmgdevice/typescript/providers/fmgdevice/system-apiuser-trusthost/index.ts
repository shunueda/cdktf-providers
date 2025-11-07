// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser_trusthost
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemApiuserTrusthostAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser_trusthost#api_user SystemApiuserTrusthostA#api_user}
  */
  readonly apiUser: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser_trusthost#device_name SystemApiuserTrusthostA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser_trusthost#fosid SystemApiuserTrusthostA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser_trusthost#id SystemApiuserTrusthostA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser_trusthost#ipv4_trusthost SystemApiuserTrusthostA#ipv4_trusthost}
  */
  readonly ipv4Trusthost?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser_trusthost#ipv6_trusthost SystemApiuserTrusthostA#ipv6_trusthost}
  */
  readonly ipv6Trusthost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser_trusthost#type SystemApiuserTrusthostA#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser_trusthost fmgdevice_system_apiuser_trusthost}
*/
export class SystemApiuserTrusthostA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_apiuser_trusthost";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemApiuserTrusthostA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemApiuserTrusthostA to import
  * @param importFromId The id of the existing SystemApiuserTrusthostA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser_trusthost#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemApiuserTrusthostA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_apiuser_trusthost", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser_trusthost fmgdevice_system_apiuser_trusthost} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemApiuserTrusthostAConfig
  */
  public constructor(scope: Construct, id: string, config: SystemApiuserTrusthostAConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_apiuser_trusthost',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiUser = config.apiUser;
    this._deviceName = config.deviceName;
    this._fosid = config.fosid;
    this._id = config.id;
    this._ipv4Trusthost = config.ipv4Trusthost;
    this._ipv6Trusthost = config.ipv6Trusthost;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_user - computed: false, optional: false, required: true
  private _apiUser?: string; 
  public get apiUser() {
    return this.getStringAttribute('api_user');
  }
  public set apiUser(value: string) {
    this._apiUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUserInput() {
    return this._apiUser;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // ipv4_trusthost - computed: true, optional: true, required: false
  private _ipv4Trusthost?: string[]; 
  public get ipv4Trusthost() {
    return this.getListAttribute('ipv4_trusthost');
  }
  public set ipv4Trusthost(value: string[]) {
    this._ipv4Trusthost = value;
  }
  public resetIpv4Trusthost() {
    this._ipv4Trusthost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4TrusthostInput() {
    return this._ipv4Trusthost;
  }

  // ipv6_trusthost - computed: true, optional: true, required: false
  private _ipv6Trusthost?: string; 
  public get ipv6Trusthost() {
    return this.getStringAttribute('ipv6_trusthost');
  }
  public set ipv6Trusthost(value: string) {
    this._ipv6Trusthost = value;
  }
  public resetIpv6Trusthost() {
    this._ipv6Trusthost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TrusthostInput() {
    return this._ipv6Trusthost;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_user: cdktf.stringToTerraform(this._apiUser),
      device_name: cdktf.stringToTerraform(this._deviceName),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      ipv4_trusthost: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4Trusthost),
      ipv6_trusthost: cdktf.stringToTerraform(this._ipv6Trusthost),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_user: {
        value: cdktf.stringToHclTerraform(this._apiUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      ipv4_trusthost: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4Trusthost),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv6_trusthost: {
        value: cdktf.stringToHclTerraform(this._ipv6Trusthost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
