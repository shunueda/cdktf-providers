// https://registry.terraform.io/providers/files-com/files/0.1.375/docs/data-sources/gpg_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesGpgKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Your GPG key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/data-sources/gpg_key#id DataFilesGpgKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/data-sources/gpg_key files_gpg_key}
*/
export class DataFilesGpgKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_gpg_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesGpgKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesGpgKey to import
  * @param importFromId The id of the existing DataFilesGpgKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/data-sources/gpg_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesGpgKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_gpg_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/data-sources/gpg_key files_gpg_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesGpgKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesGpgKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'files_gpg_key',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.375'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // generated_private_key - computed: true, optional: false, required: false
  public get generatedPrivateKey() {
    return this.getStringAttribute('generated_private_key');
  }

  // generated_public_key - computed: true, optional: false, required: false
  public get generatedPublicKey() {
    return this.getStringAttribute('generated_public_key');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // partner_id - computed: true, optional: false, required: false
  public get partnerId() {
    return this.getNumberAttribute('partner_id');
  }

  // partner_name - computed: true, optional: false, required: false
  public get partnerName() {
    return this.getStringAttribute('partner_name');
  }

  // private_key_md5 - computed: true, optional: false, required: false
  public get privateKeyMd5() {
    return this.getStringAttribute('private_key_md5');
  }

  // private_key_password_md5 - computed: true, optional: false, required: false
  public get privateKeyPasswordMd5() {
    return this.getStringAttribute('private_key_password_md5');
  }

  // public_key_md5 - computed: true, optional: false, required: false
  public get publicKeyMd5() {
    return this.getStringAttribute('public_key_md5');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
