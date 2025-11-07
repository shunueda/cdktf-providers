// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile_sslcertkey_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslprofileSslcertkeyBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile_sslcertkey_binding#cipherpriority SslprofileSslcertkeyBinding#cipherpriority}
  */
  readonly cipherpriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile_sslcertkey_binding#id SslprofileSslcertkeyBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile_sslcertkey_binding#name SslprofileSslcertkeyBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile_sslcertkey_binding#sslicacertkey SslprofileSslcertkeyBinding#sslicacertkey}
  */
  readonly sslicacertkey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile_sslcertkey_binding citrixadc_sslprofile_sslcertkey_binding}
*/
export class SslprofileSslcertkeyBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslprofile_sslcertkey_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslprofileSslcertkeyBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslprofileSslcertkeyBinding to import
  * @param importFromId The id of the existing SslprofileSslcertkeyBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile_sslcertkey_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslprofileSslcertkeyBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslprofile_sslcertkey_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile_sslcertkey_binding citrixadc_sslprofile_sslcertkey_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslprofileSslcertkeyBindingConfig
  */
  public constructor(scope: Construct, id: string, config: SslprofileSslcertkeyBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslprofile_sslcertkey_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cipherpriority = config.cipherpriority;
    this._id = config.id;
    this._name = config.name;
    this._sslicacertkey = config.sslicacertkey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cipherpriority - computed: true, optional: true, required: false
  private _cipherpriority?: number; 
  public get cipherpriority() {
    return this.getNumberAttribute('cipherpriority');
  }
  public set cipherpriority(value: number) {
    this._cipherpriority = value;
  }
  public resetCipherpriority() {
    this._cipherpriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherpriorityInput() {
    return this._cipherpriority;
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

  // sslicacertkey - computed: false, optional: false, required: true
  private _sslicacertkey?: string; 
  public get sslicacertkey() {
    return this.getStringAttribute('sslicacertkey');
  }
  public set sslicacertkey(value: string) {
    this._sslicacertkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslicacertkeyInput() {
    return this._sslicacertkey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cipherpriority: cdktf.numberToTerraform(this._cipherpriority),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      sslicacertkey: cdktf.stringToTerraform(this._sslicacertkey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cipherpriority: {
        value: cdktf.numberToHclTerraform(this._cipherpriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      sslicacertkey: {
        value: cdktf.stringToHclTerraform(this._sslicacertkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
