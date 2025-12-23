// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_proxy_ca_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DistributedFirewallingProxyCaConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Content of proxy ca certificate to create only one cert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_proxy_ca_config#ca_cert DistributedFirewallingProxyCaConfig#ca_cert}
  */
  readonly caCert: string;
  /**
  * Content of proxy ca cert key to create only one cert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_proxy_ca_config#ca_key DistributedFirewallingProxyCaConfig#ca_key}
  */
  readonly caKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_proxy_ca_config#id DistributedFirewallingProxyCaConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_proxy_ca_config aviatrix_distributed_firewalling_proxy_ca_config}
*/
export class DistributedFirewallingProxyCaConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_distributed_firewalling_proxy_ca_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DistributedFirewallingProxyCaConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DistributedFirewallingProxyCaConfig to import
  * @param importFromId The id of the existing DistributedFirewallingProxyCaConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_proxy_ca_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DistributedFirewallingProxyCaConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_distributed_firewalling_proxy_ca_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_proxy_ca_config aviatrix_distributed_firewalling_proxy_ca_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DistributedFirewallingProxyCaConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DistributedFirewallingProxyCaConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_distributed_firewalling_proxy_ca_config',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caCert = config.caCert;
    this._caKey = config.caKey;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_cert - computed: false, optional: false, required: true
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // ca_key - computed: false, optional: false, required: true
  private _caKey?: string; 
  public get caKey() {
    return this.getStringAttribute('ca_key');
  }
  public set caKey(value: string) {
    this._caKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caKeyInput() {
    return this._caKey;
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
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

  // issuer_name - computed: true, optional: false, required: false
  public get issuerName() {
    return this.getStringAttribute('issuer_name');
  }

  // unique_serial - computed: true, optional: false, required: false
  public get uniqueSerial() {
    return this.getStringAttribute('unique_serial');
  }

  // upload_info - computed: true, optional: false, required: false
  public get uploadInfo() {
    return this.getStringAttribute('upload_info');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_cert: cdktf.stringToTerraform(this._caCert),
      ca_key: cdktf.stringToTerraform(this._caKey),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_cert: {
        value: cdktf.stringToHclTerraform(this._caCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_key: {
        value: cdktf.stringToHclTerraform(this._caKey),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
