// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicenseManagerHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * license server ip address (length:1-31)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager_host#host_ipv4 LicenseManagerHost#host_ipv4}
  */
  readonly hostIpv4: string;
  /**
  * Configure license manager server ipv6-address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager_host#host_ipv6 LicenseManagerHost#host_ipv6}
  */
  readonly hostIpv6: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager_host#id LicenseManagerHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure the license manager port, default is 443
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager_host#port LicenseManagerHost#port}
  */
  readonly port?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager_host#uuid LicenseManagerHost#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager_host thunder_license_manager_host}
*/
export class LicenseManagerHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_license_manager_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LicenseManagerHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LicenseManagerHost to import
  * @param importFromId The id of the existing LicenseManagerHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LicenseManagerHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_license_manager_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager_host thunder_license_manager_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicenseManagerHostConfig
  */
  public constructor(scope: Construct, id: string, config: LicenseManagerHostConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_license_manager_host',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostIpv4 = config.hostIpv4;
    this._hostIpv6 = config.hostIpv6;
    this._id = config.id;
    this._port = config.port;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_ipv4 - computed: false, optional: false, required: true
  private _hostIpv4?: string; 
  public get hostIpv4() {
    return this.getStringAttribute('host_ipv4');
  }
  public set hostIpv4(value: string) {
    this._hostIpv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpv4Input() {
    return this._hostIpv4;
  }

  // host_ipv6 - computed: false, optional: false, required: true
  private _hostIpv6?: string; 
  public get hostIpv6() {
    return this.getStringAttribute('host_ipv6');
  }
  public set hostIpv6(value: string) {
    this._hostIpv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpv6Input() {
    return this._hostIpv6;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host_ipv4: cdktf.stringToTerraform(this._hostIpv4),
      host_ipv6: cdktf.stringToTerraform(this._hostIpv6),
      id: cdktf.stringToTerraform(this._id),
      port: cdktf.numberToTerraform(this._port),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_ipv4: {
        value: cdktf.stringToHclTerraform(this._hostIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_ipv6: {
        value: cdktf.stringToHclTerraform(this._hostIpv6),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
