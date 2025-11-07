// https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_istanbul_extradata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BootstrapIstanbulExtradataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_istanbul_extradata#id BootstrapIstanbulExtradata#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * list of Istanbul address to construct extradata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_istanbul_extradata#istanbul_addresses BootstrapIstanbulExtradata#istanbul_addresses}
  */
  readonly istanbulAddresses: string[];
  /**
  * generate extradata using RLP encoding mode. Supported: ibft1 and ibft2. Default is ibft1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_istanbul_extradata#mode BootstrapIstanbulExtradata#mode}
  */
  readonly mode?: string;
  /**
  * Vanity Hex Value to be included in the extradata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_istanbul_extradata#vanity BootstrapIstanbulExtradata#vanity}
  */
  readonly vanity?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_istanbul_extradata quorum_bootstrap_istanbul_extradata}
*/
export class BootstrapIstanbulExtradata extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "quorum_bootstrap_istanbul_extradata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BootstrapIstanbulExtradata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BootstrapIstanbulExtradata to import
  * @param importFromId The id of the existing BootstrapIstanbulExtradata that should be imported. Refer to the {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_istanbul_extradata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BootstrapIstanbulExtradata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "quorum_bootstrap_istanbul_extradata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_istanbul_extradata quorum_bootstrap_istanbul_extradata} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BootstrapIstanbulExtradataConfig
  */
  public constructor(scope: Construct, id: string, config: BootstrapIstanbulExtradataConfig) {
    super(scope, id, {
      terraformResourceType: 'quorum_bootstrap_istanbul_extradata',
      terraformGeneratorMetadata: {
        providerName: 'quorum',
        providerVersion: '0.3.0'
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
    this._istanbulAddresses = config.istanbulAddresses;
    this._mode = config.mode;
    this._vanity = config.vanity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extradata - computed: true, optional: false, required: false
  public get extradata() {
    return this.getStringAttribute('extradata');
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

  // istanbul_addresses - computed: false, optional: false, required: true
  private _istanbulAddresses?: string[]; 
  public get istanbulAddresses() {
    return this.getListAttribute('istanbul_addresses');
  }
  public set istanbulAddresses(value: string[]) {
    this._istanbulAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get istanbulAddressesInput() {
    return this._istanbulAddresses;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // vanity - computed: false, optional: true, required: false
  private _vanity?: string; 
  public get vanity() {
    return this.getStringAttribute('vanity');
  }
  public set vanity(value: string) {
    this._vanity = value;
  }
  public resetVanity() {
    this._vanity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vanityInput() {
    return this._vanity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      istanbul_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._istanbulAddresses),
      mode: cdktf.stringToTerraform(this._mode),
      vanity: cdktf.stringToTerraform(this._vanity),
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
      istanbul_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._istanbulAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vanity: {
        value: cdktf.stringToHclTerraform(this._vanity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
