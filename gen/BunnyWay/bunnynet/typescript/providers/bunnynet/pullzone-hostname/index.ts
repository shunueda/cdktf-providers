// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_hostname
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PullzoneHostnameConfig extends cdktf.TerraformMetaArguments {
  /**
  * The certificate for the hostname, in PEM format. ***Important***: the Bunny API will not return the certificate data, so you'll have to make sure you're importing the correct certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_hostname#certificate PullzoneHostname#certificate}
  */
  readonly certificate?: string;
  /**
  * The certificate private key for the hostname, in PEM format. ***Important***: the Bunny API will not return the certificate key, so you'll have to make sure you're importing the correct certificate key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_hostname#certificate_key PullzoneHostname#certificate_key}
  */
  readonly certificateKey?: string;
  /**
  * Indicates whether SSL should be enforced for the hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_hostname#force_ssl PullzoneHostname#force_ssl}
  */
  readonly forceSsl?: boolean | cdktf.IResolvable;
  /**
  * The hostname value for the domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_hostname#name PullzoneHostname#name}
  */
  readonly name: string;
  /**
  * The ID of the linked pull zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_hostname#pullzone PullzoneHostname#pullzone}
  */
  readonly pullzone: number;
  /**
  * Indicates whether the hostname should support HTTPS. If a custom certificate is not provided via the <code>certificate</code> attribute, a Domain-validated TLS certificate will be automatically obtained and managed by Bunny. ***Important***: it is not possible to tell managed and custom certificates apart for imported resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_hostname#tls_enabled PullzoneHostname#tls_enabled}
  */
  readonly tlsEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_hostname bunnynet_pullzone_hostname}
*/
export class PullzoneHostname extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_pullzone_hostname";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PullzoneHostname resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PullzoneHostname to import
  * @param importFromId The id of the existing PullzoneHostname that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_hostname#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PullzoneHostname to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_pullzone_hostname", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/pullzone_hostname bunnynet_pullzone_hostname} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PullzoneHostnameConfig
  */
  public constructor(scope: Construct, id: string, config: PullzoneHostnameConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_pullzone_hostname',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificate = config.certificate;
    this._certificateKey = config.certificateKey;
    this._forceSsl = config.forceSsl;
    this._name = config.name;
    this._pullzone = config.pullzone;
    this._tlsEnabled = config.tlsEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // certificate_key - computed: true, optional: true, required: false
  private _certificateKey?: string; 
  public get certificateKey() {
    return this.getStringAttribute('certificate_key');
  }
  public set certificateKey(value: string) {
    this._certificateKey = value;
  }
  public resetCertificateKey() {
    this._certificateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateKeyInput() {
    return this._certificateKey;
  }

  // force_ssl - computed: true, optional: true, required: false
  private _forceSsl?: boolean | cdktf.IResolvable; 
  public get forceSsl() {
    return this.getBooleanAttribute('force_ssl');
  }
  public set forceSsl(value: boolean | cdktf.IResolvable) {
    this._forceSsl = value;
  }
  public resetForceSsl() {
    this._forceSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSslInput() {
    return this._forceSsl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_internal - computed: true, optional: false, required: false
  public get isInternal() {
    return this.getBooleanAttribute('is_internal');
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

  // pullzone - computed: false, optional: false, required: true
  private _pullzone?: number; 
  public get pullzone() {
    return this.getNumberAttribute('pullzone');
  }
  public set pullzone(value: number) {
    this._pullzone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pullzoneInput() {
    return this._pullzone;
  }

  // tls_enabled - computed: true, optional: true, required: false
  private _tlsEnabled?: boolean | cdktf.IResolvable; 
  public get tlsEnabled() {
    return this.getBooleanAttribute('tls_enabled');
  }
  public set tlsEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsEnabled = value;
  }
  public resetTlsEnabled() {
    this._tlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnabledInput() {
    return this._tlsEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate: cdktf.stringToTerraform(this._certificate),
      certificate_key: cdktf.stringToTerraform(this._certificateKey),
      force_ssl: cdktf.booleanToTerraform(this._forceSsl),
      name: cdktf.stringToTerraform(this._name),
      pullzone: cdktf.numberToTerraform(this._pullzone),
      tls_enabled: cdktf.booleanToTerraform(this._tlsEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_key: {
        value: cdktf.stringToHclTerraform(this._certificateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_ssl: {
        value: cdktf.booleanToHclTerraform(this._forceSsl),
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
      pullzone: {
        value: cdktf.numberToHclTerraform(this._pullzone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._tlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
