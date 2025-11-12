// https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/sign
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SignConfig extends cdktf.TerraformMetaArguments {
  /**
  * How to handle conflicting signature values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/sign#conflict Sign#conflict}
  */
  readonly conflict?: string;
  /**
  * Address of sigstore PKI server (default https://fulcio.sigstore.dev).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/sign#fulcio_url Sign#fulcio_url}
  */
  readonly fulcioUrl?: string;
  /**
  * The digest of the container image to sign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/sign#image Sign#image}
  */
  readonly image: string;
  /**
  * Address of rekor transparency log server (default https://rekor.sigstore.dev).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/sign#rekor_url Sign#rekor_url}
  */
  readonly rekorUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/sign cosign_sign}
*/
export class Sign extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cosign_sign";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sign resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sign to import
  * @param importFromId The id of the existing Sign that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/sign#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sign to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cosign_sign", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/sign cosign_sign} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SignConfig
  */
  public constructor(scope: Construct, id: string, config: SignConfig) {
    super(scope, id, {
      terraformResourceType: 'cosign_sign',
      terraformGeneratorMetadata: {
        providerName: 'cosign',
        providerVersion: '0.1.0',
        providerVersionConstraint: '0.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._conflict = config.conflict;
    this._fulcioUrl = config.fulcioUrl;
    this._image = config.image;
    this._rekorUrl = config.rekorUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conflict - computed: true, optional: true, required: false
  private _conflict?: string; 
  public get conflict() {
    return this.getStringAttribute('conflict');
  }
  public set conflict(value: string) {
    this._conflict = value;
  }
  public resetConflict() {
    this._conflict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictInput() {
    return this._conflict;
  }

  // fulcio_url - computed: true, optional: true, required: false
  private _fulcioUrl?: string; 
  public get fulcioUrl() {
    return this.getStringAttribute('fulcio_url');
  }
  public set fulcioUrl(value: string) {
    this._fulcioUrl = value;
  }
  public resetFulcioUrl() {
    this._fulcioUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fulcioUrlInput() {
    return this._fulcioUrl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // rekor_url - computed: true, optional: true, required: false
  private _rekorUrl?: string; 
  public get rekorUrl() {
    return this.getStringAttribute('rekor_url');
  }
  public set rekorUrl(value: string) {
    this._rekorUrl = value;
  }
  public resetRekorUrl() {
    this._rekorUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rekorUrlInput() {
    return this._rekorUrl;
  }

  // signed_ref - computed: true, optional: false, required: false
  public get signedRef() {
    return this.getStringAttribute('signed_ref');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conflict: cdktf.stringToTerraform(this._conflict),
      fulcio_url: cdktf.stringToTerraform(this._fulcioUrl),
      image: cdktf.stringToTerraform(this._image),
      rekor_url: cdktf.stringToTerraform(this._rekorUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      conflict: {
        value: cdktf.stringToHclTerraform(this._conflict),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fulcio_url: {
        value: cdktf.stringToHclTerraform(this._fulcioUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rekor_url: {
        value: cdktf.stringToHclTerraform(this._rekorUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
