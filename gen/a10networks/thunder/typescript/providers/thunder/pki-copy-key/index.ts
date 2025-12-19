// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_copy_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiCopyKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Destination key file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_copy_key#dest_key PkiCopyKey#dest_key}
  */
  readonly destKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_copy_key#id PkiCopyKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Overwrite the destination file if already present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_copy_key#overwrite PkiCopyKey#overwrite}
  */
  readonly overwrite?: number;
  /**
  * Specify rotation number of SCEP/CMP generated key file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_copy_key#rotation PkiCopyKey#rotation}
  */
  readonly rotation?: number;
  /**
  * Source key file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_copy_key#src_key PkiCopyKey#src_key}
  */
  readonly srcKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_copy_key thunder_pki_copy_key}
*/
export class PkiCopyKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_pki_copy_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PkiCopyKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiCopyKey to import
  * @param importFromId The id of the existing PkiCopyKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_copy_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiCopyKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_pki_copy_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_copy_key thunder_pki_copy_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiCopyKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PkiCopyKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_pki_copy_key',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destKey = config.destKey;
    this._id = config.id;
    this._overwrite = config.overwrite;
    this._rotation = config.rotation;
    this._srcKey = config.srcKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dest_key - computed: false, optional: true, required: false
  private _destKey?: string; 
  public get destKey() {
    return this.getStringAttribute('dest_key');
  }
  public set destKey(value: string) {
    this._destKey = value;
  }
  public resetDestKey() {
    this._destKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destKeyInput() {
    return this._destKey;
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

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: number; 
  public get overwrite() {
    return this.getNumberAttribute('overwrite');
  }
  public set overwrite(value: number) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // rotation - computed: false, optional: true, required: false
  private _rotation?: number; 
  public get rotation() {
    return this.getNumberAttribute('rotation');
  }
  public set rotation(value: number) {
    this._rotation = value;
  }
  public resetRotation() {
    this._rotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationInput() {
    return this._rotation;
  }

  // src_key - computed: false, optional: true, required: false
  private _srcKey?: string; 
  public get srcKey() {
    return this.getStringAttribute('src_key');
  }
  public set srcKey(value: string) {
    this._srcKey = value;
  }
  public resetSrcKey() {
    this._srcKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcKeyInput() {
    return this._srcKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dest_key: cdktf.stringToTerraform(this._destKey),
      id: cdktf.stringToTerraform(this._id),
      overwrite: cdktf.numberToTerraform(this._overwrite),
      rotation: cdktf.numberToTerraform(this._rotation),
      src_key: cdktf.stringToTerraform(this._srcKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dest_key: {
        value: cdktf.stringToHclTerraform(this._destKey),
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
      overwrite: {
        value: cdktf.numberToHclTerraform(this._overwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rotation: {
        value: cdktf.numberToHclTerraform(this._rotation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_key: {
        value: cdktf.stringToHclTerraform(this._srcKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
