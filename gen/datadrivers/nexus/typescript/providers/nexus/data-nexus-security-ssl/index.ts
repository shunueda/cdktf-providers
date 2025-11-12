// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_ssl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNexusSecuritySslConfig extends cdktf.TerraformMetaArguments {
  /**
  * Hostname for looking up certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_ssl#host DataNexusSecuritySsl#host}
  */
  readonly host: string;
  /**
  * Port for looking up certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_ssl#port DataNexusSecuritySsl#port}
  */
  readonly port?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_ssl nexus_security_ssl}
*/
export class DataNexusSecuritySsl extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_security_ssl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNexusSecuritySsl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNexusSecuritySsl to import
  * @param importFromId The id of the existing DataNexusSecuritySsl that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_ssl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNexusSecuritySsl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_security_ssl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/security_ssl nexus_security_ssl} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNexusSecuritySslConfig
  */
  public constructor(scope: Construct, id: string, config: DataNexusSecuritySslConfig) {
    super(scope, id, {
      terraformResourceType: 'nexus_security_ssl',
      terraformGeneratorMetadata: {
        providerName: 'nexus',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._host = config.host;
    this._port = config.port;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getNumberAttribute('expires_on');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issued_on - computed: true, optional: false, required: false
  public get issuedOn() {
    return this.getNumberAttribute('issued_on');
  }

  // issuer_common_name - computed: true, optional: false, required: false
  public get issuerCommonName() {
    return this.getStringAttribute('issuer_common_name');
  }

  // issuer_organization - computed: true, optional: false, required: false
  public get issuerOrganization() {
    return this.getStringAttribute('issuer_organization');
  }

  // issuer_organization_unit - computed: true, optional: false, required: false
  public get issuerOrganizationUnit() {
    return this.getStringAttribute('issuer_organization_unit');
  }

  // pem - computed: true, optional: false, required: false
  public get pem() {
    return this.getStringAttribute('pem');
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // subject_common_name - computed: true, optional: false, required: false
  public get subjectCommonName() {
    return this.getStringAttribute('subject_common_name');
  }

  // subject_organization - computed: true, optional: false, required: false
  public get subjectOrganization() {
    return this.getStringAttribute('subject_organization');
  }

  // subject_organization_unit - computed: true, optional: false, required: false
  public get subjectOrganizationUnit() {
    return this.getStringAttribute('subject_organization_unit');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host: cdktf.stringToTerraform(this._host),
      port: cdktf.numberToTerraform(this._port),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
