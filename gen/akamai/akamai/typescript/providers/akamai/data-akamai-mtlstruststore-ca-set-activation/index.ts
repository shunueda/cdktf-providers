// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_activation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiMtlstruststoreCaSetActivationConfig extends cdktf.TerraformMetaArguments {
  /**
  * CA set identifier that filters out the activations or deactivations. Either 'ca_set_id' or 'ca_set_name' must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_activation#ca_set_id DataAkamaiMtlstruststoreCaSetActivation#ca_set_id}
  */
  readonly caSetId?: string;
  /**
  * The name of the CA set. Either 'ca_set_id' or 'ca_set_name' must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_activation#ca_set_name DataAkamaiMtlstruststoreCaSetActivation#ca_set_name}
  */
  readonly caSetName?: string;
  /**
  * Uniquely identifies the activation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_activation#id DataAkamaiMtlstruststoreCaSetActivation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_activation akamai_mtlstruststore_ca_set_activation}
*/
export class DataAkamaiMtlstruststoreCaSetActivation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_mtlstruststore_ca_set_activation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiMtlstruststoreCaSetActivation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiMtlstruststoreCaSetActivation to import
  * @param importFromId The id of the existing DataAkamaiMtlstruststoreCaSetActivation that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_activation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiMtlstruststoreCaSetActivation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_mtlstruststore_ca_set_activation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_activation akamai_mtlstruststore_ca_set_activation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiMtlstruststoreCaSetActivationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiMtlstruststoreCaSetActivationConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_mtlstruststore_ca_set_activation',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caSetId = config.caSetId;
    this._caSetName = config.caSetName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_set_id - computed: true, optional: true, required: false
  private _caSetId?: string; 
  public get caSetId() {
    return this.getStringAttribute('ca_set_id');
  }
  public set caSetId(value: string) {
    this._caSetId = value;
  }
  public resetCaSetId() {
    this._caSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSetIdInput() {
    return this._caSetId;
  }

  // ca_set_name - computed: true, optional: true, required: false
  private _caSetName?: string; 
  public get caSetName() {
    return this.getStringAttribute('ca_set_name');
  }
  public set caSetName(value: string) {
    this._caSetName = value;
  }
  public resetCaSetName() {
    this._caSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSetNameInput() {
    return this._caSetName;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_date - computed: true, optional: false, required: false
  public get modifiedDate() {
    return this.getStringAttribute('modified_date');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_set_id: cdktf.stringToTerraform(this._caSetId),
      ca_set_name: cdktf.stringToTerraform(this._caSetName),
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_set_id: {
        value: cdktf.stringToHclTerraform(this._caSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_set_name: {
        value: cdktf.stringToHclTerraform(this._caSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
