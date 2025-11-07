// https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/remote_services_thumbprint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdaRemoteServicesThumbprintConfig extends cdktf.TerraformMetaArguments {
  /**
  * The address of the remote appliance/service. **NOTE:** this method produces a thumbprint that is not verified nor safe for use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/remote_services_thumbprint#address DataVcdaRemoteServicesThumbprint#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/remote_services_thumbprint#id DataVcdaRemoteServicesThumbprint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the file that contains the last certificate in the chain (end entity cert) of the remote appliance/service in PEM format. On creation, include either `pem_file` or `address`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/remote_services_thumbprint#pem_file DataVcdaRemoteServicesThumbprint#pem_file}
  */
  readonly pemFile?: string;
  /**
  * The port of the remote appliance/service. Use only with `address`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/remote_services_thumbprint#port DataVcdaRemoteServicesThumbprint#port}
  */
  readonly port?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/remote_services_thumbprint vcda_remote_services_thumbprint}
*/
export class DataVcdaRemoteServicesThumbprint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcda_remote_services_thumbprint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdaRemoteServicesThumbprint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdaRemoteServicesThumbprint to import
  * @param importFromId The id of the existing DataVcdaRemoteServicesThumbprint that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/remote_services_thumbprint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdaRemoteServicesThumbprint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcda_remote_services_thumbprint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/remote_services_thumbprint vcda_remote_services_thumbprint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdaRemoteServicesThumbprintConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVcdaRemoteServicesThumbprintConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vcda_remote_services_thumbprint',
      terraformGeneratorMetadata: {
        providerName: 'vcda',
        providerVersion: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._id = config.id;
    this._pemFile = config.pemFile;
    this._port = config.port;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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

  // pem_file - computed: false, optional: true, required: false
  private _pemFile?: string; 
  public get pemFile() {
    return this.getStringAttribute('pem_file');
  }
  public set pemFile(value: string) {
    this._pemFile = value;
  }
  public resetPemFile() {
    this._pemFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemFileInput() {
    return this._pemFile;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
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
      address: cdktf.stringToTerraform(this._address),
      id: cdktf.stringToTerraform(this._id),
      pem_file: cdktf.stringToTerraform(this._pemFile),
      port: cdktf.stringToTerraform(this._port),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
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
      pem_file: {
        value: cdktf.stringToHclTerraform(this._pemFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
