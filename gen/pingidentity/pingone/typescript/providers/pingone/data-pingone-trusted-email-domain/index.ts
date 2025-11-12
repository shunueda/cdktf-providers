// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/trusted_email_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingoneTrustedEmailDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string that specifies the domain name to use, which must be provided and must be unique within an environment (for example, `demo.bxretail.org`).  Exactly one of the following must be defined: `trusted_email_domain_id`, `domain_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/trusted_email_domain#domain_name DataPingoneTrustedEmailDomain#domain_name}
  */
  readonly domainName?: string;
  /**
  * The ID of the environment that is configured with the trusted email domain.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/trusted_email_domain#environment_id DataPingoneTrustedEmailDomain#environment_id}
  */
  readonly environmentId: string;
  /**
  * The ID of the trusted email domain.  Must be a valid PingOne resource ID.  Exactly one of the following must be defined: `trusted_email_domain_id`, `domain_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/trusted_email_domain#trusted_email_domain_id DataPingoneTrustedEmailDomain#trusted_email_domain_id}
  */
  readonly trustedEmailDomainId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/trusted_email_domain pingone_trusted_email_domain}
*/
export class DataPingoneTrustedEmailDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_trusted_email_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingoneTrustedEmailDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingoneTrustedEmailDomain to import
  * @param importFromId The id of the existing DataPingoneTrustedEmailDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/trusted_email_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingoneTrustedEmailDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_trusted_email_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/trusted_email_domain pingone_trusted_email_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingoneTrustedEmailDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingoneTrustedEmailDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_trusted_email_domain',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainName = config.domainName;
    this._environmentId = config.environmentId;
    this._trustedEmailDomainId = config.trustedEmailDomainId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // trusted_email_domain_id - computed: false, optional: true, required: false
  private _trustedEmailDomainId?: string; 
  public get trustedEmailDomainId() {
    return this.getStringAttribute('trusted_email_domain_id');
  }
  public set trustedEmailDomainId(value: string) {
    this._trustedEmailDomainId = value;
  }
  public resetTrustedEmailDomainId() {
    this._trustedEmailDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedEmailDomainIdInput() {
    return this._trustedEmailDomainId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      trusted_email_domain_id: cdktf.stringToTerraform(this._trustedEmailDomainId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusted_email_domain_id: {
        value: cdktf.stringToHclTerraform(this._trustedEmailDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
