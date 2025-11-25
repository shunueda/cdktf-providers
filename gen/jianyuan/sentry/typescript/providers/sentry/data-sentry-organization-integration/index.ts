// https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/data-sources/organization_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSentryOrganizationIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/data-sources/organization_integration#name DataSentryOrganizationIntegration#name}
  */
  readonly name: string;
  /**
  * The organization the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/data-sources/organization_integration#organization DataSentryOrganizationIntegration#organization}
  */
  readonly organization: string;
  /**
  * Specific integration provider to filter by such as `slack`. See [the list of supported providers](https://docs.sentry.io/product/integrations/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/data-sources/organization_integration#provider_key DataSentryOrganizationIntegration#provider_key}
  */
  readonly providerKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/data-sources/organization_integration sentry_organization_integration}
*/
export class DataSentryOrganizationIntegration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sentry_organization_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSentryOrganizationIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSentryOrganizationIntegration to import
  * @param importFromId The id of the existing DataSentryOrganizationIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/data-sources/organization_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSentryOrganizationIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sentry_organization_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/data-sources/organization_integration sentry_organization_integration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSentryOrganizationIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataSentryOrganizationIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'sentry_organization_integration',
      terraformGeneratorMetadata: {
        providerName: 'sentry',
        providerVersion: '0.14.7',
        providerVersionConstraint: '0.14.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._organization = config.organization;
    this._providerKey = config.providerKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
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

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // provider_key - computed: false, optional: false, required: true
  private _providerKey?: string; 
  public get providerKey() {
    return this.getStringAttribute('provider_key');
  }
  public set providerKey(value: string) {
    this._providerKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerKeyInput() {
    return this._providerKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      provider_key: cdktf.stringToTerraform(this._providerKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_key: {
        value: cdktf.stringToHclTerraform(this._providerKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
