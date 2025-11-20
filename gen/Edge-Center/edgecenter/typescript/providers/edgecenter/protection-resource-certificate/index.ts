// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtectionResourceCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource_certificate#id ProtectionResourceCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of DDoS protection resource to manage certificate for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource_certificate#resource ProtectionResourceCertificate#resource}
  */
  readonly resource: string;
  /**
  * Public part of the SSL certificate. It is required add all chains. Each certificate chain should be separated by `\n`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource_certificate#ssl_crt ProtectionResourceCertificate#ssl_crt}
  */
  readonly sslCrt?: string;
  /**
  * Private key of the SSL certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource_certificate#ssl_key ProtectionResourceCertificate#ssl_key}
  */
  readonly sslKey?: string;
  /**
  * Select the SSL certificate type. Available values are `custom`, `le`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource_certificate#ssl_type ProtectionResourceCertificate#ssl_type}
  */
  readonly sslType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource_certificate edgecenter_protection_resource_certificate}
*/
export class ProtectionResourceCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_protection_resource_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProtectionResourceCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProtectionResourceCertificate to import
  * @param importFromId The id of the existing ProtectionResourceCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProtectionResourceCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_protection_resource_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource_certificate edgecenter_protection_resource_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtectionResourceCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: ProtectionResourceCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_protection_resource_certificate',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.5',
        providerVersionConstraint: '0.10.5'
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
    this._resource = config.resource;
    this._sslCrt = config.sslCrt;
    this._sslKey = config.sslKey;
    this._sslType = config.sslType;
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

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
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
      id: cdktf.stringToTerraform(this._id),
      resource: cdktf.stringToTerraform(this._resource),
      ssl_crt: cdktf.stringToTerraform(this._sslCrt),
      ssl_key: cdktf.stringToTerraform(this._sslKey),
      ssl_type: cdktf.stringToTerraform(this._sslType),
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
      resource: {
        value: cdktf.stringToHclTerraform(this._resource),
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
