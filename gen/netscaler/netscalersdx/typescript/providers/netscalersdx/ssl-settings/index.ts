// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ssl_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ssl_settings#id SslSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable SSL Renegotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ssl_settings#sslreneg SslSettings#sslreneg}
  */
  readonly sslreneg?: boolean | cdktf.IResolvable;
  /**
  * Enable SSLv3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ssl_settings#sslv3 SslSettings#sslv3}
  */
  readonly sslv3?: boolean | cdktf.IResolvable;
  /**
  * Enable TLSv1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ssl_settings#tlsv1 SslSettings#tlsv1}
  */
  readonly tlsv1?: boolean | cdktf.IResolvable;
  /**
  * Enable TLSv1.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ssl_settings#tlsv1_1 SslSettings#tlsv1_1}
  */
  readonly tlsv11?: boolean | cdktf.IResolvable;
  /**
  * Enable TLSv1.2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ssl_settings#tlsv1_2 SslSettings#tlsv1_2}
  */
  readonly tlsv12?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ssl_settings netscalersdx_ssl_settings}
*/
export class SslSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_ssl_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslSettings to import
  * @param importFromId The id of the existing SslSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ssl_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_ssl_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ssl_settings netscalersdx_ssl_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SslSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_ssl_settings',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2'
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
    this._sslreneg = config.sslreneg;
    this._sslv3 = config.sslv3;
    this._tlsv1 = config.tlsv1;
    this._tlsv11 = config.tlsv11;
    this._tlsv12 = config.tlsv12;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // sslreneg - computed: true, optional: true, required: false
  private _sslreneg?: boolean | cdktf.IResolvable; 
  public get sslreneg() {
    return this.getBooleanAttribute('sslreneg');
  }
  public set sslreneg(value: boolean | cdktf.IResolvable) {
    this._sslreneg = value;
  }
  public resetSslreneg() {
    this._sslreneg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslrenegInput() {
    return this._sslreneg;
  }

  // sslv3 - computed: true, optional: true, required: false
  private _sslv3?: boolean | cdktf.IResolvable; 
  public get sslv3() {
    return this.getBooleanAttribute('sslv3');
  }
  public set sslv3(value: boolean | cdktf.IResolvable) {
    this._sslv3 = value;
  }
  public resetSslv3() {
    this._sslv3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3Input() {
    return this._sslv3;
  }

  // tlsv1 - computed: true, optional: true, required: false
  private _tlsv1?: boolean | cdktf.IResolvable; 
  public get tlsv1() {
    return this.getBooleanAttribute('tlsv1');
  }
  public set tlsv1(value: boolean | cdktf.IResolvable) {
    this._tlsv1 = value;
  }
  public resetTlsv1() {
    this._tlsv1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1Input() {
    return this._tlsv1;
  }

  // tlsv1_1 - computed: true, optional: true, required: false
  private _tlsv11?: boolean | cdktf.IResolvable; 
  public get tlsv11() {
    return this.getBooleanAttribute('tlsv1_1');
  }
  public set tlsv11(value: boolean | cdktf.IResolvable) {
    this._tlsv11 = value;
  }
  public resetTlsv11() {
    this._tlsv11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv11Input() {
    return this._tlsv11;
  }

  // tlsv1_2 - computed: true, optional: true, required: false
  private _tlsv12?: boolean | cdktf.IResolvable; 
  public get tlsv12() {
    return this.getBooleanAttribute('tlsv1_2');
  }
  public set tlsv12(value: boolean | cdktf.IResolvable) {
    this._tlsv12 = value;
  }
  public resetTlsv12() {
    this._tlsv12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv12Input() {
    return this._tlsv12;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      sslreneg: cdktf.booleanToTerraform(this._sslreneg),
      sslv3: cdktf.booleanToTerraform(this._sslv3),
      tlsv1: cdktf.booleanToTerraform(this._tlsv1),
      tlsv1_1: cdktf.booleanToTerraform(this._tlsv11),
      tlsv1_2: cdktf.booleanToTerraform(this._tlsv12),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslreneg: {
        value: cdktf.booleanToHclTerraform(this._sslreneg),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sslv3: {
        value: cdktf.booleanToHclTerraform(this._sslv3),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tlsv1: {
        value: cdktf.booleanToHclTerraform(this._tlsv1),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tlsv1_1: {
        value: cdktf.booleanToHclTerraform(this._tlsv11),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tlsv1_2: {
        value: cdktf.booleanToHclTerraform(this._tlsv12),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
