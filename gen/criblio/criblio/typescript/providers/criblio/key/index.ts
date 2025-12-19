// https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default: "aes-256-cbc"; must be one of ["aes-256-cbc", "aes-256-gcm"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/key#algorithm Key#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/key#description Key#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/key#expires Key#expires}
  */
  readonly expires?: number;
  /**
  * The consumer group to which this instance belongs. Defaults to 'default'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/key#group_id Key#group_id}
  */
  readonly groupId: string;
  /**
  * The id of this key metadata entity instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/key#id Key#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/key#keyclass Key#keyclass}
  */
  readonly keyclass?: number;
  /**
  * Default: "local"; must be "local"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/key#kms Key#kms}
  */
  readonly kms?: string;
  /**
  * Seed encryption with a [nonce](https://en.wikipedia.org/wiki/Cryptographic_nonce) to make the key more random and unique. Must be enabled with the aes-256-gcm algorithm. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/key#use_iv Key#use_iv}
  */
  readonly useIv?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/key criblio_key}
*/
export class Key extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Key resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Key to import
  * @param importFromId The id of the existing Key that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Key to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/key criblio_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyConfig
  */
  public constructor(scope: Construct, id: string, config: KeyConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_key',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.72',
        providerVersionConstraint: '1.20.72'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._description = config.description;
    this._expires = config.expires;
    this._groupId = config.groupId;
    this._id = config.id;
    this._keyclass = config.keyclass;
    this._kms = config.kms;
    this._useIv = config.useIv;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // expires - computed: true, optional: true, required: false
  private _expires?: number; 
  public get expires() {
    return this.getNumberAttribute('expires');
  }
  public set expires(value: number) {
    this._expires = value;
  }
  public resetExpires() {
    this._expires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInput() {
    return this._expires;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // keyclass - computed: true, optional: true, required: false
  private _keyclass?: number; 
  public get keyclass() {
    return this.getNumberAttribute('keyclass');
  }
  public set keyclass(value: number) {
    this._keyclass = value;
  }
  public resetKeyclass() {
    this._keyclass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyclassInput() {
    return this._keyclass;
  }

  // kms - computed: true, optional: true, required: false
  private _kms?: string; 
  public get kms() {
    return this.getStringAttribute('kms');
  }
  public set kms(value: string) {
    this._kms = value;
  }
  public resetKms() {
    this._kms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsInput() {
    return this._kms;
  }

  // use_iv - computed: true, optional: true, required: false
  private _useIv?: boolean | cdktf.IResolvable; 
  public get useIv() {
    return this.getBooleanAttribute('use_iv');
  }
  public set useIv(value: boolean | cdktf.IResolvable) {
    this._useIv = value;
  }
  public resetUseIv() {
    this._useIv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIvInput() {
    return this._useIv;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      description: cdktf.stringToTerraform(this._description),
      expires: cdktf.numberToTerraform(this._expires),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      keyclass: cdktf.numberToTerraform(this._keyclass),
      kms: cdktf.stringToTerraform(this._kms),
      use_iv: cdktf.booleanToTerraform(this._useIv),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expires: {
        value: cdktf.numberToHclTerraform(this._expires),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      keyclass: {
        value: cdktf.numberToHclTerraform(this._keyclass),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kms: {
        value: cdktf.stringToHclTerraform(this._kms),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_iv: {
        value: cdktf.booleanToHclTerraform(this._useIv),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
