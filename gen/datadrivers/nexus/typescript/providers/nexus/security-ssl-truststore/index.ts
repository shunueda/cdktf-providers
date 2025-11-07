// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ssl_truststore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecuritySslTruststoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cert in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ssl_truststore#pem SecuritySslTruststore#pem}
  */
  readonly pem: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ssl_truststore nexus_security_ssl_truststore}
*/
export class SecuritySslTruststore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_security_ssl_truststore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecuritySslTruststore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecuritySslTruststore to import
  * @param importFromId The id of the existing SecuritySslTruststore that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ssl_truststore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecuritySslTruststore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_security_ssl_truststore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_ssl_truststore nexus_security_ssl_truststore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecuritySslTruststoreConfig
  */
  public constructor(scope: Construct, id: string, config: SecuritySslTruststoreConfig) {
    super(scope, id, {
      terraformResourceType: 'nexus_security_ssl_truststore',
      terraformGeneratorMetadata: {
        providerName: 'nexus',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._pem = config.pem;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pem - computed: false, optional: false, required: true
  private _pem?: string; 
  public get pem() {
    return this.getStringAttribute('pem');
  }
  public set pem(value: string) {
    this._pem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pemInput() {
    return this._pem;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      pem: cdktf.stringToTerraform(this._pem),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      pem: {
        value: cdktf.stringToHclTerraform(this._pem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
