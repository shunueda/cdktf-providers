// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_ssl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerEnableTrapsSslAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_ssl#id SnmpServerEnableTrapsSslA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable SSL server certificate error trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_ssl#server_certificate_error SnmpServerEnableTrapsSslA#server_certificate_error}
  */
  readonly serverCertificateError?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_ssl#uuid SnmpServerEnableTrapsSslA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_ssl thunder_snmp_server_enable_traps_ssl}
*/
export class SnmpServerEnableTrapsSslA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_enable_traps_ssl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerEnableTrapsSslA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerEnableTrapsSslA to import
  * @param importFromId The id of the existing SnmpServerEnableTrapsSslA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_ssl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerEnableTrapsSslA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_enable_traps_ssl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_ssl thunder_snmp_server_enable_traps_ssl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerEnableTrapsSslAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpServerEnableTrapsSslAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_enable_traps_ssl',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._serverCertificateError = config.serverCertificateError;
    this._uuid = config.uuid;
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

  // server_certificate_error - computed: false, optional: true, required: false
  private _serverCertificateError?: number; 
  public get serverCertificateError() {
    return this.getNumberAttribute('server_certificate_error');
  }
  public set serverCertificateError(value: number) {
    this._serverCertificateError = value;
  }
  public resetServerCertificateError() {
    this._serverCertificateError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateErrorInput() {
    return this._serverCertificateError;
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
      id: cdktf.stringToTerraform(this._id),
      server_certificate_error: cdktf.numberToTerraform(this._serverCertificateError),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      server_certificate_error: {
        value: cdktf.numberToHclTerraform(this._serverCertificateError),
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
