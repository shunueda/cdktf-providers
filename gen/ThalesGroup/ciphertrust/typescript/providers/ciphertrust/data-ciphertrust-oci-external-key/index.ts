// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_external_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCiphertrustOciExternalKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * CipherTrust key ID. If specified only this parameter is used. Specify cckm_key_id or (name and optionally cckm_vault_name) to uniquely identify the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_external_key#cckm_key_id DataCiphertrustOciExternalKey#cckm_key_id}
  */
  readonly cckmKeyId?: string;
  /**
  * CipherTrust Manager vault ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_external_key#cckm_vault_id DataCiphertrustOciExternalKey#cckm_vault_id}
  */
  readonly cckmVaultId?: string;
  /**
  * CipherTrust Manager vault name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_external_key#cckm_vault_name DataCiphertrustOciExternalKey#cckm_vault_name}
  */
  readonly cckmVaultName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_external_key#id DataCiphertrustOciExternalKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key name. Specify cckm_key_id or (name and optionally cckm_vault_name) to uniquely identify the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_external_key#name DataCiphertrustOciExternalKey#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_external_key ciphertrust_oci_external_key}
*/
export class DataCiphertrustOciExternalKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_oci_external_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCiphertrustOciExternalKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCiphertrustOciExternalKey to import
  * @param importFromId The id of the existing DataCiphertrustOciExternalKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_external_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCiphertrustOciExternalKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_oci_external_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_external_key ciphertrust_oci_external_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCiphertrustOciExternalKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCiphertrustOciExternalKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_oci_external_key',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cckmKeyId = config.cckmKeyId;
    this._cckmVaultId = config.cckmVaultId;
    this._cckmVaultName = config.cckmVaultName;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // blocked - computed: true, optional: false, required: false
  public get blocked() {
    return this.getBooleanAttribute('blocked');
  }

  // cckm_key_id - computed: true, optional: true, required: false
  private _cckmKeyId?: string; 
  public get cckmKeyId() {
    return this.getStringAttribute('cckm_key_id');
  }
  public set cckmKeyId(value: string) {
    this._cckmKeyId = value;
  }
  public resetCckmKeyId() {
    this._cckmKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cckmKeyIdInput() {
    return this._cckmKeyId;
  }

  // cckm_vault_id - computed: true, optional: true, required: false
  private _cckmVaultId?: string; 
  public get cckmVaultId() {
    return this.getStringAttribute('cckm_vault_id');
  }
  public set cckmVaultId(value: string) {
    this._cckmVaultId = value;
  }
  public resetCckmVaultId() {
    this._cckmVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cckmVaultIdInput() {
    return this._cckmVaultId;
  }

  // cckm_vault_name - computed: true, optional: true, required: false
  private _cckmVaultName?: string; 
  public get cckmVaultName() {
    return this.getStringAttribute('cckm_vault_name');
  }
  public set cckmVaultName(value: string) {
    this._cckmVaultName = value;
  }
  public resetCckmVaultName() {
    this._cckmVaultName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cckmVaultNameInput() {
    return this._cckmVaultName;
  }

  // cloud_name - computed: true, optional: false, required: false
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // key_length - computed: true, optional: false, required: false
  public get keyLength() {
    return this.getNumberAttribute('key_length');
  }

  // key_material_origin - computed: true, optional: false, required: false
  public get keyMaterialOrigin() {
    return this.getStringAttribute('key_material_origin');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // linked_state - computed: true, optional: false, required: false
  public get linkedState() {
    return this.getBooleanAttribute('linked_state');
  }

  // name - computed: true, optional: true, required: false
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

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tenancy - computed: true, optional: false, required: false
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cckm_key_id: cdktf.stringToTerraform(this._cckmKeyId),
      cckm_vault_id: cdktf.stringToTerraform(this._cckmVaultId),
      cckm_vault_name: cdktf.stringToTerraform(this._cckmVaultName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cckm_key_id: {
        value: cdktf.stringToHclTerraform(this._cckmKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cckm_vault_id: {
        value: cdktf.stringToHclTerraform(this._cckmVaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cckm_vault_name: {
        value: cdktf.stringToHclTerraform(this._cckmVaultName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
