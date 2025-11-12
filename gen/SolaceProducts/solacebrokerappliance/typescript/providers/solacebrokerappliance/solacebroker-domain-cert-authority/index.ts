// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_domain_cert_authority
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerDomainCertAuthorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Certificate Authority.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_domain_cert_authority#cert_authority_name SolacebrokerDomainCertAuthority#cert_authority_name}
  */
  readonly certAuthorityName: string;
  /**
  * The PEM formatted content for the trusted root certificate of a domain Certificate Authority.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_domain_cert_authority#cert_content SolacebrokerDomainCertAuthority#cert_content}
  */
  readonly certContent?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_domain_cert_authority solacebroker_domain_cert_authority}
*/
export class SolacebrokerDomainCertAuthority extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_domain_cert_authority";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerDomainCertAuthority resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerDomainCertAuthority to import
  * @param importFromId The id of the existing SolacebrokerDomainCertAuthority that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_domain_cert_authority#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerDomainCertAuthority to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_domain_cert_authority", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_domain_cert_authority solacebroker_domain_cert_authority} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerDomainCertAuthorityConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerDomainCertAuthorityConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_domain_cert_authority',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certAuthorityName = config.certAuthorityName;
    this._certContent = config.certContent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_authority_name - computed: false, optional: false, required: true
  private _certAuthorityName?: string; 
  public get certAuthorityName() {
    return this.getStringAttribute('cert_authority_name');
  }
  public set certAuthorityName(value: string) {
    this._certAuthorityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certAuthorityNameInput() {
    return this._certAuthorityName;
  }

  // cert_content - computed: false, optional: true, required: false
  private _certContent?: string; 
  public get certContent() {
    return this.getStringAttribute('cert_content');
  }
  public set certContent(value: string) {
    this._certContent = value;
  }
  public resetCertContent() {
    this._certContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certContentInput() {
    return this._certContent;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert_authority_name: cdktf.stringToTerraform(this._certAuthorityName),
      cert_content: cdktf.stringToTerraform(this._certContent),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_authority_name: {
        value: cdktf.stringToHclTerraform(this._certAuthorityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_content: {
        value: cdktf.stringToHclTerraform(this._certContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
