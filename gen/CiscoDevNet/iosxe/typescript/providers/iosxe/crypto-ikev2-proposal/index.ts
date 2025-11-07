// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CryptoIkev2ProposalConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#device CryptoIkev2Proposal#device}
  */
  readonly device?: string;
  /**
  * AES-CBC-128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#encryption_aes_cbc_128 CryptoIkev2Proposal#encryption_aes_cbc_128}
  */
  readonly encryptionAesCbc128?: boolean | cdktf.IResolvable;
  /**
  * AES-CBC-192
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#encryption_aes_cbc_192 CryptoIkev2Proposal#encryption_aes_cbc_192}
  */
  readonly encryptionAesCbc192?: boolean | cdktf.IResolvable;
  /**
  * AES-CBC-256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#encryption_aes_cbc_256 CryptoIkev2Proposal#encryption_aes_cbc_256}
  */
  readonly encryptionAesCbc256?: boolean | cdktf.IResolvable;
  /**
  * Combined-mode,128 bit key,16 byte ICV(Authentication Tag)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#encryption_aes_gcm_128 CryptoIkev2Proposal#encryption_aes_gcm_128}
  */
  readonly encryptionAesGcm128?: boolean | cdktf.IResolvable;
  /**
  * Combined-mode,256 bit key,16 byte ICV(Authentication Tag)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#encryption_aes_gcm_256 CryptoIkev2Proposal#encryption_aes_gcm_256}
  */
  readonly encryptionAesGcm256?: boolean | cdktf.IResolvable;
  /**
  * 3DES
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#encryption_en_3des CryptoIkev2Proposal#encryption_en_3des}
  */
  readonly encryptionEn3Des?: boolean | cdktf.IResolvable;
  /**
  * DH 3072 MODP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#group_fifteen CryptoIkev2Proposal#group_fifteen}
  */
  readonly groupFifteen?: boolean | cdktf.IResolvable;
  /**
  * DH 2048 MODP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#group_fourteen CryptoIkev2Proposal#group_fourteen}
  */
  readonly groupFourteen?: boolean | cdktf.IResolvable;
  /**
  * DH 256 ECP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#group_nineteen CryptoIkev2Proposal#group_nineteen}
  */
  readonly groupNineteen?: boolean | cdktf.IResolvable;
  /**
  * DH 768 MODP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#group_one CryptoIkev2Proposal#group_one}
  */
  readonly groupOne?: boolean | cdktf.IResolvable;
  /**
  * DH 4096 MODP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#group_sixteen CryptoIkev2Proposal#group_sixteen}
  */
  readonly groupSixteen?: boolean | cdktf.IResolvable;
  /**
  * DH 384 ECP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#group_twenty CryptoIkev2Proposal#group_twenty}
  */
  readonly groupTwenty?: boolean | cdktf.IResolvable;
  /**
  * DH 2048 (256 subgroup) MODP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#group_twenty_four CryptoIkev2Proposal#group_twenty_four}
  */
  readonly groupTwentyFour?: boolean | cdktf.IResolvable;
  /**
  * DH 521 ECP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#group_twenty_one CryptoIkev2Proposal#group_twenty_one}
  */
  readonly groupTwentyOne?: boolean | cdktf.IResolvable;
  /**
  * DH 1024 MODP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#group_two CryptoIkev2Proposal#group_two}
  */
  readonly groupTwo?: boolean | cdktf.IResolvable;
  /**
  * Message Digest 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#integrity_md5 CryptoIkev2Proposal#integrity_md5}
  */
  readonly integrityMd5?: boolean | cdktf.IResolvable;
  /**
  * Secure Hash Standard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#integrity_sha1 CryptoIkev2Proposal#integrity_sha1}
  */
  readonly integritySha1?: boolean | cdktf.IResolvable;
  /**
  * Secure Hash Standard 2 (256 bit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#integrity_sha256 CryptoIkev2Proposal#integrity_sha256}
  */
  readonly integritySha256?: boolean | cdktf.IResolvable;
  /**
  * Secure Hash Standard 2 (384 bit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#integrity_sha384 CryptoIkev2Proposal#integrity_sha384}
  */
  readonly integritySha384?: boolean | cdktf.IResolvable;
  /**
  * Secure Hash Standard 2 (512 bit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#integrity_sha512 CryptoIkev2Proposal#integrity_sha512}
  */
  readonly integritySha512?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#name CryptoIkev2Proposal#name}
  */
  readonly name: string;
  /**
  * Message Digest 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#prf_md5 CryptoIkev2Proposal#prf_md5}
  */
  readonly prfMd5?: boolean | cdktf.IResolvable;
  /**
  * Secure Hash Standard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#prf_sha1 CryptoIkev2Proposal#prf_sha1}
  */
  readonly prfSha1?: boolean | cdktf.IResolvable;
  /**
  * Secure Hash Standard 2 (256 bit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#prf_sha256 CryptoIkev2Proposal#prf_sha256}
  */
  readonly prfSha256?: boolean | cdktf.IResolvable;
  /**
  * Secure Hash Standard 2 (384 bit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#prf_sha384 CryptoIkev2Proposal#prf_sha384}
  */
  readonly prfSha384?: boolean | cdktf.IResolvable;
  /**
  * Secure Hash Standard 2 (512 bit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#prf_sha512 CryptoIkev2Proposal#prf_sha512}
  */
  readonly prfSha512?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal iosxe_crypto_ikev2_proposal}
*/
export class CryptoIkev2Proposal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_crypto_ikev2_proposal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CryptoIkev2Proposal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CryptoIkev2Proposal to import
  * @param importFromId The id of the existing CryptoIkev2Proposal that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CryptoIkev2Proposal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_crypto_ikev2_proposal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2_proposal iosxe_crypto_ikev2_proposal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CryptoIkev2ProposalConfig
  */
  public constructor(scope: Construct, id: string, config: CryptoIkev2ProposalConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_crypto_ikev2_proposal',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.9.3'
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
    this._encryptionAesCbc128 = config.encryptionAesCbc128;
    this._encryptionAesCbc192 = config.encryptionAesCbc192;
    this._encryptionAesCbc256 = config.encryptionAesCbc256;
    this._encryptionAesGcm128 = config.encryptionAesGcm128;
    this._encryptionAesGcm256 = config.encryptionAesGcm256;
    this._encryptionEn3Des = config.encryptionEn3Des;
    this._groupFifteen = config.groupFifteen;
    this._groupFourteen = config.groupFourteen;
    this._groupNineteen = config.groupNineteen;
    this._groupOne = config.groupOne;
    this._groupSixteen = config.groupSixteen;
    this._groupTwenty = config.groupTwenty;
    this._groupTwentyFour = config.groupTwentyFour;
    this._groupTwentyOne = config.groupTwentyOne;
    this._groupTwo = config.groupTwo;
    this._integrityMd5 = config.integrityMd5;
    this._integritySha1 = config.integritySha1;
    this._integritySha256 = config.integritySha256;
    this._integritySha384 = config.integritySha384;
    this._integritySha512 = config.integritySha512;
    this._name = config.name;
    this._prfMd5 = config.prfMd5;
    this._prfSha1 = config.prfSha1;
    this._prfSha256 = config.prfSha256;
    this._prfSha384 = config.prfSha384;
    this._prfSha512 = config.prfSha512;
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

  // encryption_aes_cbc_128 - computed: false, optional: true, required: false
  private _encryptionAesCbc128?: boolean | cdktf.IResolvable; 
  public get encryptionAesCbc128() {
    return this.getBooleanAttribute('encryption_aes_cbc_128');
  }
  public set encryptionAesCbc128(value: boolean | cdktf.IResolvable) {
    this._encryptionAesCbc128 = value;
  }
  public resetEncryptionAesCbc128() {
    this._encryptionAesCbc128 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAesCbc128Input() {
    return this._encryptionAesCbc128;
  }

  // encryption_aes_cbc_192 - computed: false, optional: true, required: false
  private _encryptionAesCbc192?: boolean | cdktf.IResolvable; 
  public get encryptionAesCbc192() {
    return this.getBooleanAttribute('encryption_aes_cbc_192');
  }
  public set encryptionAesCbc192(value: boolean | cdktf.IResolvable) {
    this._encryptionAesCbc192 = value;
  }
  public resetEncryptionAesCbc192() {
    this._encryptionAesCbc192 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAesCbc192Input() {
    return this._encryptionAesCbc192;
  }

  // encryption_aes_cbc_256 - computed: false, optional: true, required: false
  private _encryptionAesCbc256?: boolean | cdktf.IResolvable; 
  public get encryptionAesCbc256() {
    return this.getBooleanAttribute('encryption_aes_cbc_256');
  }
  public set encryptionAesCbc256(value: boolean | cdktf.IResolvable) {
    this._encryptionAesCbc256 = value;
  }
  public resetEncryptionAesCbc256() {
    this._encryptionAesCbc256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAesCbc256Input() {
    return this._encryptionAesCbc256;
  }

  // encryption_aes_gcm_128 - computed: false, optional: true, required: false
  private _encryptionAesGcm128?: boolean | cdktf.IResolvable; 
  public get encryptionAesGcm128() {
    return this.getBooleanAttribute('encryption_aes_gcm_128');
  }
  public set encryptionAesGcm128(value: boolean | cdktf.IResolvable) {
    this._encryptionAesGcm128 = value;
  }
  public resetEncryptionAesGcm128() {
    this._encryptionAesGcm128 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAesGcm128Input() {
    return this._encryptionAesGcm128;
  }

  // encryption_aes_gcm_256 - computed: false, optional: true, required: false
  private _encryptionAesGcm256?: boolean | cdktf.IResolvable; 
  public get encryptionAesGcm256() {
    return this.getBooleanAttribute('encryption_aes_gcm_256');
  }
  public set encryptionAesGcm256(value: boolean | cdktf.IResolvable) {
    this._encryptionAesGcm256 = value;
  }
  public resetEncryptionAesGcm256() {
    this._encryptionAesGcm256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAesGcm256Input() {
    return this._encryptionAesGcm256;
  }

  // encryption_en_3des - computed: false, optional: true, required: false
  private _encryptionEn3Des?: boolean | cdktf.IResolvable; 
  public get encryptionEn3Des() {
    return this.getBooleanAttribute('encryption_en_3des');
  }
  public set encryptionEn3Des(value: boolean | cdktf.IResolvable) {
    this._encryptionEn3Des = value;
  }
  public resetEncryptionEn3Des() {
    this._encryptionEn3Des = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionEn3DesInput() {
    return this._encryptionEn3Des;
  }

  // group_fifteen - computed: false, optional: true, required: false
  private _groupFifteen?: boolean | cdktf.IResolvable; 
  public get groupFifteen() {
    return this.getBooleanAttribute('group_fifteen');
  }
  public set groupFifteen(value: boolean | cdktf.IResolvable) {
    this._groupFifteen = value;
  }
  public resetGroupFifteen() {
    this._groupFifteen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupFifteenInput() {
    return this._groupFifteen;
  }

  // group_fourteen - computed: false, optional: true, required: false
  private _groupFourteen?: boolean | cdktf.IResolvable; 
  public get groupFourteen() {
    return this.getBooleanAttribute('group_fourteen');
  }
  public set groupFourteen(value: boolean | cdktf.IResolvable) {
    this._groupFourteen = value;
  }
  public resetGroupFourteen() {
    this._groupFourteen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupFourteenInput() {
    return this._groupFourteen;
  }

  // group_nineteen - computed: false, optional: true, required: false
  private _groupNineteen?: boolean | cdktf.IResolvable; 
  public get groupNineteen() {
    return this.getBooleanAttribute('group_nineteen');
  }
  public set groupNineteen(value: boolean | cdktf.IResolvable) {
    this._groupNineteen = value;
  }
  public resetGroupNineteen() {
    this._groupNineteen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNineteenInput() {
    return this._groupNineteen;
  }

  // group_one - computed: false, optional: true, required: false
  private _groupOne?: boolean | cdktf.IResolvable; 
  public get groupOne() {
    return this.getBooleanAttribute('group_one');
  }
  public set groupOne(value: boolean | cdktf.IResolvable) {
    this._groupOne = value;
  }
  public resetGroupOne() {
    this._groupOne = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupOneInput() {
    return this._groupOne;
  }

  // group_sixteen - computed: false, optional: true, required: false
  private _groupSixteen?: boolean | cdktf.IResolvable; 
  public get groupSixteen() {
    return this.getBooleanAttribute('group_sixteen');
  }
  public set groupSixteen(value: boolean | cdktf.IResolvable) {
    this._groupSixteen = value;
  }
  public resetGroupSixteen() {
    this._groupSixteen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSixteenInput() {
    return this._groupSixteen;
  }

  // group_twenty - computed: false, optional: true, required: false
  private _groupTwenty?: boolean | cdktf.IResolvable; 
  public get groupTwenty() {
    return this.getBooleanAttribute('group_twenty');
  }
  public set groupTwenty(value: boolean | cdktf.IResolvable) {
    this._groupTwenty = value;
  }
  public resetGroupTwenty() {
    this._groupTwenty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTwentyInput() {
    return this._groupTwenty;
  }

  // group_twenty_four - computed: false, optional: true, required: false
  private _groupTwentyFour?: boolean | cdktf.IResolvable; 
  public get groupTwentyFour() {
    return this.getBooleanAttribute('group_twenty_four');
  }
  public set groupTwentyFour(value: boolean | cdktf.IResolvable) {
    this._groupTwentyFour = value;
  }
  public resetGroupTwentyFour() {
    this._groupTwentyFour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTwentyFourInput() {
    return this._groupTwentyFour;
  }

  // group_twenty_one - computed: false, optional: true, required: false
  private _groupTwentyOne?: boolean | cdktf.IResolvable; 
  public get groupTwentyOne() {
    return this.getBooleanAttribute('group_twenty_one');
  }
  public set groupTwentyOne(value: boolean | cdktf.IResolvable) {
    this._groupTwentyOne = value;
  }
  public resetGroupTwentyOne() {
    this._groupTwentyOne = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTwentyOneInput() {
    return this._groupTwentyOne;
  }

  // group_two - computed: false, optional: true, required: false
  private _groupTwo?: boolean | cdktf.IResolvable; 
  public get groupTwo() {
    return this.getBooleanAttribute('group_two');
  }
  public set groupTwo(value: boolean | cdktf.IResolvable) {
    this._groupTwo = value;
  }
  public resetGroupTwo() {
    this._groupTwo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTwoInput() {
    return this._groupTwo;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integrity_md5 - computed: false, optional: true, required: false
  private _integrityMd5?: boolean | cdktf.IResolvable; 
  public get integrityMd5() {
    return this.getBooleanAttribute('integrity_md5');
  }
  public set integrityMd5(value: boolean | cdktf.IResolvable) {
    this._integrityMd5 = value;
  }
  public resetIntegrityMd5() {
    this._integrityMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrityMd5Input() {
    return this._integrityMd5;
  }

  // integrity_sha1 - computed: false, optional: true, required: false
  private _integritySha1?: boolean | cdktf.IResolvable; 
  public get integritySha1() {
    return this.getBooleanAttribute('integrity_sha1');
  }
  public set integritySha1(value: boolean | cdktf.IResolvable) {
    this._integritySha1 = value;
  }
  public resetIntegritySha1() {
    this._integritySha1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integritySha1Input() {
    return this._integritySha1;
  }

  // integrity_sha256 - computed: false, optional: true, required: false
  private _integritySha256?: boolean | cdktf.IResolvable; 
  public get integritySha256() {
    return this.getBooleanAttribute('integrity_sha256');
  }
  public set integritySha256(value: boolean | cdktf.IResolvable) {
    this._integritySha256 = value;
  }
  public resetIntegritySha256() {
    this._integritySha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integritySha256Input() {
    return this._integritySha256;
  }

  // integrity_sha384 - computed: false, optional: true, required: false
  private _integritySha384?: boolean | cdktf.IResolvable; 
  public get integritySha384() {
    return this.getBooleanAttribute('integrity_sha384');
  }
  public set integritySha384(value: boolean | cdktf.IResolvable) {
    this._integritySha384 = value;
  }
  public resetIntegritySha384() {
    this._integritySha384 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integritySha384Input() {
    return this._integritySha384;
  }

  // integrity_sha512 - computed: false, optional: true, required: false
  private _integritySha512?: boolean | cdktf.IResolvable; 
  public get integritySha512() {
    return this.getBooleanAttribute('integrity_sha512');
  }
  public set integritySha512(value: boolean | cdktf.IResolvable) {
    this._integritySha512 = value;
  }
  public resetIntegritySha512() {
    this._integritySha512 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integritySha512Input() {
    return this._integritySha512;
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

  // prf_md5 - computed: false, optional: true, required: false
  private _prfMd5?: boolean | cdktf.IResolvable; 
  public get prfMd5() {
    return this.getBooleanAttribute('prf_md5');
  }
  public set prfMd5(value: boolean | cdktf.IResolvable) {
    this._prfMd5 = value;
  }
  public resetPrfMd5() {
    this._prfMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prfMd5Input() {
    return this._prfMd5;
  }

  // prf_sha1 - computed: false, optional: true, required: false
  private _prfSha1?: boolean | cdktf.IResolvable; 
  public get prfSha1() {
    return this.getBooleanAttribute('prf_sha1');
  }
  public set prfSha1(value: boolean | cdktf.IResolvable) {
    this._prfSha1 = value;
  }
  public resetPrfSha1() {
    this._prfSha1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prfSha1Input() {
    return this._prfSha1;
  }

  // prf_sha256 - computed: false, optional: true, required: false
  private _prfSha256?: boolean | cdktf.IResolvable; 
  public get prfSha256() {
    return this.getBooleanAttribute('prf_sha256');
  }
  public set prfSha256(value: boolean | cdktf.IResolvable) {
    this._prfSha256 = value;
  }
  public resetPrfSha256() {
    this._prfSha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prfSha256Input() {
    return this._prfSha256;
  }

  // prf_sha384 - computed: false, optional: true, required: false
  private _prfSha384?: boolean | cdktf.IResolvable; 
  public get prfSha384() {
    return this.getBooleanAttribute('prf_sha384');
  }
  public set prfSha384(value: boolean | cdktf.IResolvable) {
    this._prfSha384 = value;
  }
  public resetPrfSha384() {
    this._prfSha384 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prfSha384Input() {
    return this._prfSha384;
  }

  // prf_sha512 - computed: false, optional: true, required: false
  private _prfSha512?: boolean | cdktf.IResolvable; 
  public get prfSha512() {
    return this.getBooleanAttribute('prf_sha512');
  }
  public set prfSha512(value: boolean | cdktf.IResolvable) {
    this._prfSha512 = value;
  }
  public resetPrfSha512() {
    this._prfSha512 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prfSha512Input() {
    return this._prfSha512;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      encryption_aes_cbc_128: cdktf.booleanToTerraform(this._encryptionAesCbc128),
      encryption_aes_cbc_192: cdktf.booleanToTerraform(this._encryptionAesCbc192),
      encryption_aes_cbc_256: cdktf.booleanToTerraform(this._encryptionAesCbc256),
      encryption_aes_gcm_128: cdktf.booleanToTerraform(this._encryptionAesGcm128),
      encryption_aes_gcm_256: cdktf.booleanToTerraform(this._encryptionAesGcm256),
      encryption_en_3des: cdktf.booleanToTerraform(this._encryptionEn3Des),
      group_fifteen: cdktf.booleanToTerraform(this._groupFifteen),
      group_fourteen: cdktf.booleanToTerraform(this._groupFourteen),
      group_nineteen: cdktf.booleanToTerraform(this._groupNineteen),
      group_one: cdktf.booleanToTerraform(this._groupOne),
      group_sixteen: cdktf.booleanToTerraform(this._groupSixteen),
      group_twenty: cdktf.booleanToTerraform(this._groupTwenty),
      group_twenty_four: cdktf.booleanToTerraform(this._groupTwentyFour),
      group_twenty_one: cdktf.booleanToTerraform(this._groupTwentyOne),
      group_two: cdktf.booleanToTerraform(this._groupTwo),
      integrity_md5: cdktf.booleanToTerraform(this._integrityMd5),
      integrity_sha1: cdktf.booleanToTerraform(this._integritySha1),
      integrity_sha256: cdktf.booleanToTerraform(this._integritySha256),
      integrity_sha384: cdktf.booleanToTerraform(this._integritySha384),
      integrity_sha512: cdktf.booleanToTerraform(this._integritySha512),
      name: cdktf.stringToTerraform(this._name),
      prf_md5: cdktf.booleanToTerraform(this._prfMd5),
      prf_sha1: cdktf.booleanToTerraform(this._prfSha1),
      prf_sha256: cdktf.booleanToTerraform(this._prfSha256),
      prf_sha384: cdktf.booleanToTerraform(this._prfSha384),
      prf_sha512: cdktf.booleanToTerraform(this._prfSha512),
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
      encryption_aes_cbc_128: {
        value: cdktf.booleanToHclTerraform(this._encryptionAesCbc128),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_aes_cbc_192: {
        value: cdktf.booleanToHclTerraform(this._encryptionAesCbc192),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_aes_cbc_256: {
        value: cdktf.booleanToHclTerraform(this._encryptionAesCbc256),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_aes_gcm_128: {
        value: cdktf.booleanToHclTerraform(this._encryptionAesGcm128),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_aes_gcm_256: {
        value: cdktf.booleanToHclTerraform(this._encryptionAesGcm256),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_en_3des: {
        value: cdktf.booleanToHclTerraform(this._encryptionEn3Des),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_fifteen: {
        value: cdktf.booleanToHclTerraform(this._groupFifteen),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_fourteen: {
        value: cdktf.booleanToHclTerraform(this._groupFourteen),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_nineteen: {
        value: cdktf.booleanToHclTerraform(this._groupNineteen),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_one: {
        value: cdktf.booleanToHclTerraform(this._groupOne),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_sixteen: {
        value: cdktf.booleanToHclTerraform(this._groupSixteen),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_twenty: {
        value: cdktf.booleanToHclTerraform(this._groupTwenty),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_twenty_four: {
        value: cdktf.booleanToHclTerraform(this._groupTwentyFour),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_twenty_one: {
        value: cdktf.booleanToHclTerraform(this._groupTwentyOne),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_two: {
        value: cdktf.booleanToHclTerraform(this._groupTwo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      integrity_md5: {
        value: cdktf.booleanToHclTerraform(this._integrityMd5),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      integrity_sha1: {
        value: cdktf.booleanToHclTerraform(this._integritySha1),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      integrity_sha256: {
        value: cdktf.booleanToHclTerraform(this._integritySha256),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      integrity_sha384: {
        value: cdktf.booleanToHclTerraform(this._integritySha384),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      integrity_sha512: {
        value: cdktf.booleanToHclTerraform(this._integritySha512),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prf_md5: {
        value: cdktf.booleanToHclTerraform(this._prfMd5),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prf_sha1: {
        value: cdktf.booleanToHclTerraform(this._prfSha1),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prf_sha256: {
        value: cdktf.booleanToHclTerraform(this._prfSha256),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prf_sha384: {
        value: cdktf.booleanToHclTerraform(this._prfSha384),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prf_sha512: {
        value: cdktf.booleanToHclTerraform(this._prfSha512),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
