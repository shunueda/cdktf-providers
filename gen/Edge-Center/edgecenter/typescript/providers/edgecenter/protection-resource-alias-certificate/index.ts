// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/protection_resource_alias_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtectionResourceAliasCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of alias of DDoS protection resource. Has form `<resource_id>:<alias_id>`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/protection_resource_alias_certificate#alias ProtectionResourceAliasCertificate#alias}
  */
  readonly alias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/protection_resource_alias_certificate#id ProtectionResourceAliasCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Public part of the SSL certificate. Add all the certificate chains. Each certificate chain should be separated by `\n`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/protection_resource_alias_certificate#ssl_crt ProtectionResourceAliasCertificate#ssl_crt}
  */
  readonly sslCrt?: string;
  /**
  * Private key of the SSL certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/protection_resource_alias_certificate#ssl_key ProtectionResourceAliasCertificate#ssl_key}
  */
  readonly sslKey?: string;
  /**
  * Select the SSL certificate type. Available values are `custom`, `le`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/protection_resource_alias_certificate#ssl_type ProtectionResourceAliasCertificate#ssl_type}
  */
  readonly sslType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/protection_resource_alias_certificate edgecenter_protection_resource_alias_certificate}
*/
export class ProtectionResourceAliasCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_protection_resource_alias_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProtectionResourceAliasCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProtectionResourceAliasCertificate to import
  * @param importFromId The id of the existing ProtectionResourceAliasCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/protection_resource_alias_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProtectionResourceAliasCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_protection_resource_alias_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/protection_resource_alias_certificate edgecenter_protection_resource_alias_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtectionResourceAliasCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: ProtectionResourceAliasCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_protection_resource_alias_certificate',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.4',
        providerVersionConstraint: '0.10.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._id = config.id;
    this._sslCrt = config.sslCrt;
    this._sslKey = config.sslKey;
    this._sslType = config.sslType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
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

  // ssl_crt - computed: false, optional: true, required: false
  private _sslCrt?: string; 
  public get sslCrt() {
    return this.getStringAttribute('ssl_crt');
  }
  public set sslCrt(value: string) {
    this._sslCrt = value;
  }
  public resetSslCrt() {
    this._sslCrt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCrtInput() {
    return this._sslCrt;
  }

  // ssl_expire - computed: true, optional: false, required: false
  public get sslExpire() {
    return this.getNumberAttribute('ssl_expire');
  }

  // ssl_key - computed: false, optional: true, required: false
  private _sslKey?: string; 
  public get sslKey() {
    return this.getStringAttribute('ssl_key');
  }
  public set sslKey(value: string) {
    this._sslKey = value;
  }
  public resetSslKey() {
    this._sslKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyInput() {
    return this._sslKey;
  }

  // ssl_status - computed: true, optional: false, required: false
  public get sslStatus() {
    return this.getStringAttribute('ssl_status');
  }

  // ssl_type - computed: false, optional: false, required: true
  private _sslType?: string; 
  public get sslType() {
    return this.getStringAttribute('ssl_type');
  }
  public set sslType(value: string) {
    this._sslType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTypeInput() {
    return this._sslType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      id: cdktf.stringToTerraform(this._id),
      ssl_crt: cdktf.stringToTerraform(this._sslCrt),
      ssl_key: cdktf.stringToTerraform(this._sslKey),
      ssl_type: cdktf.stringToTerraform(this._sslType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
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
      ssl_crt: {
        value: cdktf.stringToHclTerraform(this._sslCrt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_key: {
        value: cdktf.stringToHclTerraform(this._sslKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_type: {
        value: cdktf.stringToHclTerraform(this._sslType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
