// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/crypto_ikev2_proposal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeCryptoIkev2ProposalConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/crypto_ikev2_proposal#device DataIosxeCryptoIkev2Proposal#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/crypto_ikev2_proposal#name DataIosxeCryptoIkev2Proposal#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/crypto_ikev2_proposal iosxe_crypto_ikev2_proposal}
*/
export class DataIosxeCryptoIkev2Proposal extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_crypto_ikev2_proposal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeCryptoIkev2Proposal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeCryptoIkev2Proposal to import
  * @param importFromId The id of the existing DataIosxeCryptoIkev2Proposal that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/crypto_ikev2_proposal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeCryptoIkev2Proposal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_crypto_ikev2_proposal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/crypto_ikev2_proposal iosxe_crypto_ikev2_proposal} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeCryptoIkev2ProposalConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeCryptoIkev2ProposalConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_crypto_ikev2_proposal',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.2',
        providerVersionConstraint: '0.10.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // encryption_aes_cbc_128 - computed: true, optional: false, required: false
  public get encryptionAesCbc128() {
    return this.getBooleanAttribute('encryption_aes_cbc_128');
  }

  // encryption_aes_cbc_192 - computed: true, optional: false, required: false
  public get encryptionAesCbc192() {
    return this.getBooleanAttribute('encryption_aes_cbc_192');
  }

  // encryption_aes_cbc_256 - computed: true, optional: false, required: false
  public get encryptionAesCbc256() {
    return this.getBooleanAttribute('encryption_aes_cbc_256');
  }

  // encryption_aes_gcm_128 - computed: true, optional: false, required: false
  public get encryptionAesGcm128() {
    return this.getBooleanAttribute('encryption_aes_gcm_128');
  }

  // encryption_aes_gcm_256 - computed: true, optional: false, required: false
  public get encryptionAesGcm256() {
    return this.getBooleanAttribute('encryption_aes_gcm_256');
  }

  // encryption_en_3des - computed: true, optional: false, required: false
  public get encryptionEn3Des() {
    return this.getBooleanAttribute('encryption_en_3des');
  }

  // group_fifteen - computed: true, optional: false, required: false
  public get groupFifteen() {
    return this.getBooleanAttribute('group_fifteen');
  }

  // group_fourteen - computed: true, optional: false, required: false
  public get groupFourteen() {
    return this.getBooleanAttribute('group_fourteen');
  }

  // group_nineteen - computed: true, optional: false, required: false
  public get groupNineteen() {
    return this.getBooleanAttribute('group_nineteen');
  }

  // group_one - computed: true, optional: false, required: false
  public get groupOne() {
    return this.getBooleanAttribute('group_one');
  }

  // group_sixteen - computed: true, optional: false, required: false
  public get groupSixteen() {
    return this.getBooleanAttribute('group_sixteen');
  }

  // group_twenty - computed: true, optional: false, required: false
  public get groupTwenty() {
    return this.getBooleanAttribute('group_twenty');
  }

  // group_twenty_four - computed: true, optional: false, required: false
  public get groupTwentyFour() {
    return this.getBooleanAttribute('group_twenty_four');
  }

  // group_twenty_one - computed: true, optional: false, required: false
  public get groupTwentyOne() {
    return this.getBooleanAttribute('group_twenty_one');
  }

  // group_two - computed: true, optional: false, required: false
  public get groupTwo() {
    return this.getBooleanAttribute('group_two');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integrity_md5 - computed: true, optional: false, required: false
  public get integrityMd5() {
    return this.getBooleanAttribute('integrity_md5');
  }

  // integrity_sha1 - computed: true, optional: false, required: false
  public get integritySha1() {
    return this.getBooleanAttribute('integrity_sha1');
  }

  // integrity_sha256 - computed: true, optional: false, required: false
  public get integritySha256() {
    return this.getBooleanAttribute('integrity_sha256');
  }

  // integrity_sha384 - computed: true, optional: false, required: false
  public get integritySha384() {
    return this.getBooleanAttribute('integrity_sha384');
  }

  // integrity_sha512 - computed: true, optional: false, required: false
  public get integritySha512() {
    return this.getBooleanAttribute('integrity_sha512');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // prf_md5 - computed: true, optional: false, required: false
  public get prfMd5() {
    return this.getBooleanAttribute('prf_md5');
  }

  // prf_sha1 - computed: true, optional: false, required: false
  public get prfSha1() {
    return this.getBooleanAttribute('prf_sha1');
  }

  // prf_sha256 - computed: true, optional: false, required: false
  public get prfSha256() {
    return this.getBooleanAttribute('prf_sha256');
  }

  // prf_sha384 - computed: true, optional: false, required: false
  public get prfSha384() {
    return this.getBooleanAttribute('prf_sha384');
  }

  // prf_sha512 - computed: true, optional: false, required: false
  public get prfSha512() {
    return this.getBooleanAttribute('prf_sha512');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
