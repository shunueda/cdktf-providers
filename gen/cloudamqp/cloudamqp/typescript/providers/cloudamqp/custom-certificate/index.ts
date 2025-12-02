// https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/custom_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The PEM-encoded Certificate Authority (CA).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/custom_certificate#ca CustomCertificate#ca}
  */
  readonly ca: string;
  /**
  * The PEM-encoded certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/custom_certificate#cert CustomCertificate#cert}
  */
  readonly cert: string;
  /**
  * The CloudAMQP instance identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/custom_certificate#instance_id CustomCertificate#instance_id}
  */
  readonly instanceId: number;
  /**
  * The PEM-encoded private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/custom_certificate#private_key CustomCertificate#private_key}
  */
  readonly privateKey: string;
  /**
  * A hostname (Server Name Indication) that this certificate applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/custom_certificate#sni_hosts CustomCertificate#sni_hosts}
  */
  readonly sniHosts: string;
  /**
  *  An argument to trigger force new (default: 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/custom_certificate#version CustomCertificate#version}
  */
  readonly version?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/custom_certificate cloudamqp_custom_certificate}
*/
export class CustomCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudamqp_custom_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomCertificate to import
  * @param importFromId The id of the existing CustomCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/custom_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudamqp_custom_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/custom_certificate cloudamqp_custom_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CustomCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudamqp_custom_certificate',
      terraformGeneratorMetadata: {
        providerName: 'cloudamqp',
        providerVersion: '1.39.0',
        providerVersionConstraint: '1.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ca = config.ca;
    this._cert = config.cert;
    this._instanceId = config.instanceId;
    this._privateKey = config.privateKey;
    this._sniHosts = config.sniHosts;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca - computed: false, optional: false, required: true
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // sni_hosts - computed: false, optional: false, required: true
  private _sniHosts?: string; 
  public get sniHosts() {
    return this.getStringAttribute('sni_hosts');
  }
  public set sniHosts(value: string) {
    this._sniHosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sniHostsInput() {
    return this._sniHosts;
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca: cdktf.stringToTerraform(this._ca),
      cert: cdktf.stringToTerraform(this._cert),
      instance_id: cdktf.numberToTerraform(this._instanceId),
      private_key: cdktf.stringToTerraform(this._privateKey),
      sni_hosts: cdktf.stringToTerraform(this._sniHosts),
      version: cdktf.numberToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca: {
        value: cdktf.stringToHclTerraform(this._ca),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.numberToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sni_hosts: {
        value: cdktf.stringToHclTerraform(this._sniHosts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
