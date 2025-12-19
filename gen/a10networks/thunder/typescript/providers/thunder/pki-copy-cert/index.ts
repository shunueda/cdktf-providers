// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_copy_cert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiCopyCertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Destination certificate file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_copy_cert#dest_cert PkiCopyCert#dest_cert}
  */
  readonly destCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_copy_cert#id PkiCopyCert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Overwrite the destination file if already present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_copy_cert#overwrite PkiCopyCert#overwrite}
  */
  readonly overwrite?: number;
  /**
  * Specify rotation number of SCEP/CMP generated certificate file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_copy_cert#rotation PkiCopyCert#rotation}
  */
  readonly rotation?: number;
  /**
  * Source certificate file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_copy_cert#src_cert PkiCopyCert#src_cert}
  */
  readonly srcCert?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_copy_cert thunder_pki_copy_cert}
*/
export class PkiCopyCert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_pki_copy_cert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PkiCopyCert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiCopyCert to import
  * @param importFromId The id of the existing PkiCopyCert that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_copy_cert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiCopyCert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_pki_copy_cert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/pki_copy_cert thunder_pki_copy_cert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiCopyCertConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PkiCopyCertConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_pki_copy_cert',
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
    this._destCert = config.destCert;
    this._id = config.id;
    this._overwrite = config.overwrite;
    this._rotation = config.rotation;
    this._srcCert = config.srcCert;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dest_cert - computed: false, optional: true, required: false
  private _destCert?: string; 
  public get destCert() {
    return this.getStringAttribute('dest_cert');
  }
  public set destCert(value: string) {
    this._destCert = value;
  }
  public resetDestCert() {
    this._destCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destCertInput() {
    return this._destCert;
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

  // src_cert - computed: false, optional: true, required: false
  private _srcCert?: string; 
  public get srcCert() {
    return this.getStringAttribute('src_cert');
  }
  public set srcCert(value: string) {
    this._srcCert = value;
  }
  public resetSrcCert() {
    this._srcCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCertInput() {
    return this._srcCert;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dest_cert: cdktf.stringToTerraform(this._destCert),
      id: cdktf.stringToTerraform(this._id),
      overwrite: cdktf.numberToTerraform(this._overwrite),
      rotation: cdktf.numberToTerraform(this._rotation),
      src_cert: cdktf.stringToTerraform(this._srcCert),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dest_cert: {
        value: cdktf.stringToHclTerraform(this._destCert),
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
      src_cert: {
        value: cdktf.stringToHclTerraform(this._srcCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
