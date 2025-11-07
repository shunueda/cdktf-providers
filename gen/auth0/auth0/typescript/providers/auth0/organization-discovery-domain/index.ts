// https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_discovery_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationDiscoveryDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The domain name for organization discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_discovery_domain#domain OrganizationDiscoveryDomain#domain}
  */
  readonly domain: string;
  /**
  * The ID of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_discovery_domain#organization_id OrganizationDiscoveryDomain#organization_id}
  */
  readonly organizationId: string;
  /**
  * Verification status. Must be either 'pending' or 'verified'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_discovery_domain#status OrganizationDiscoveryDomain#status}
  */
  readonly status: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_discovery_domain auth0_organization_discovery_domain}
*/
export class OrganizationDiscoveryDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_organization_discovery_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationDiscoveryDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationDiscoveryDomain to import
  * @param importFromId The id of the existing OrganizationDiscoveryDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_discovery_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationDiscoveryDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_organization_discovery_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_discovery_domain auth0_organization_discovery_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationDiscoveryDomainConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationDiscoveryDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_organization_discovery_domain',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.33.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._organizationId = config.organizationId;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // verification_host - computed: true, optional: false, required: false
  public get verificationHost() {
    return this.getStringAttribute('verification_host');
  }

  // verification_txt - computed: true, optional: false, required: false
  public get verificationTxt() {
    return this.getStringAttribute('verification_txt');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
