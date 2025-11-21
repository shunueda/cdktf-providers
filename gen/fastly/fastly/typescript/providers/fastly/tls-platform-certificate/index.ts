// https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/tls_platform_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TlsPlatformCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable checking whether the root of the certificate chain is trusted. Useful for development purposes to allow use of self-signed CAs. Defaults to false. Write-only on create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/tls_platform_certificate#allow_untrusted_root TlsPlatformCertificate#allow_untrusted_root}
  */
  readonly allowUntrustedRoot?: boolean | cdktf.IResolvable;
  /**
  * PEM-formatted certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/tls_platform_certificate#certificate_body TlsPlatformCertificate#certificate_body}
  */
  readonly certificateBody: string;
  /**
  * ID of TLS configuration to be used to terminate TLS traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/tls_platform_certificate#configuration_id TlsPlatformCertificate#configuration_id}
  */
  readonly configurationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/tls_platform_certificate#id TlsPlatformCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PEM-formatted certificate chain from the `certificate_body` to its root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/tls_platform_certificate#intermediates_blob TlsPlatformCertificate#intermediates_blob}
  */
  readonly intermediatesBlob: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/tls_platform_certificate fastly_tls_platform_certificate}
*/
export class TlsPlatformCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fastly_tls_platform_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TlsPlatformCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TlsPlatformCertificate to import
  * @param importFromId The id of the existing TlsPlatformCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/tls_platform_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TlsPlatformCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fastly_tls_platform_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/tls_platform_certificate fastly_tls_platform_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TlsPlatformCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: TlsPlatformCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'fastly_tls_platform_certificate',
      terraformGeneratorMetadata: {
        providerName: 'fastly',
        providerVersion: '8.5.0',
        providerVersionConstraint: '8.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowUntrustedRoot = config.allowUntrustedRoot;
    this._certificateBody = config.certificateBody;
    this._configurationId = config.configurationId;
    this._id = config.id;
    this._intermediatesBlob = config.intermediatesBlob;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_untrusted_root - computed: false, optional: true, required: false
  private _allowUntrustedRoot?: boolean | cdktf.IResolvable; 
  public get allowUntrustedRoot() {
    return this.getBooleanAttribute('allow_untrusted_root');
  }
  public set allowUntrustedRoot(value: boolean | cdktf.IResolvable) {
    this._allowUntrustedRoot = value;
  }
  public resetAllowUntrustedRoot() {
    this._allowUntrustedRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUntrustedRootInput() {
    return this._allowUntrustedRoot;
  }

  // certificate_body - computed: false, optional: false, required: true
  private _certificateBody?: string; 
  public get certificateBody() {
    return this.getStringAttribute('certificate_body');
  }
  public set certificateBody(value: string) {
    this._certificateBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateBodyInput() {
    return this._certificateBody;
  }

  // configuration_id - computed: false, optional: false, required: true
  private _configurationId?: string; 
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }
  public set configurationId(value: string) {
    this._configurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationIdInput() {
    return this._configurationId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // domains - computed: true, optional: false, required: false
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
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

  // intermediates_blob - computed: false, optional: false, required: true
  private _intermediatesBlob?: string; 
  public get intermediatesBlob() {
    return this.getStringAttribute('intermediates_blob');
  }
  public set intermediatesBlob(value: string) {
    this._intermediatesBlob = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intermediatesBlobInput() {
    return this._intermediatesBlob;
  }

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // replace - computed: true, optional: false, required: false
  public get replace() {
    return this.getBooleanAttribute('replace');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_untrusted_root: cdktf.booleanToTerraform(this._allowUntrustedRoot),
      certificate_body: cdktf.stringToTerraform(this._certificateBody),
      configuration_id: cdktf.stringToTerraform(this._configurationId),
      id: cdktf.stringToTerraform(this._id),
      intermediates_blob: cdktf.stringToTerraform(this._intermediatesBlob),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_untrusted_root: {
        value: cdktf.booleanToHclTerraform(this._allowUntrustedRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate_body: {
        value: cdktf.stringToHclTerraform(this._certificateBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_id: {
        value: cdktf.stringToHclTerraform(this._configurationId),
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
      intermediates_blob: {
        value: cdktf.stringToHclTerraform(this._intermediatesBlob),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
