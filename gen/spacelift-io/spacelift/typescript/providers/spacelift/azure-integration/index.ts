// https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/azure_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default subscription ID to use, if one isn't specified at the stack/module level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/azure_integration#default_subscription_id AzureIntegration#default_subscription_id}
  */
  readonly defaultSubscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/azure_integration#id AzureIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels to set on the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/azure_integration#labels AzureIntegration#labels}
  */
  readonly labels?: string[];
  /**
  * The friendly name of the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/azure_integration#name AzureIntegration#name}
  */
  readonly name: string;
  /**
  * ID (slug) of the space the integration is in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/azure_integration#space_id AzureIntegration#space_id}
  */
  readonly spaceId?: string;
  /**
  * The Azure AD tenant ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/azure_integration#tenant_id AzureIntegration#tenant_id}
  */
  readonly tenantId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/azure_integration spacelift_azure_integration}
*/
export class AzureIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_azure_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureIntegration to import
  * @param importFromId The id of the existing AzureIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/azure_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_azure_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/azure_integration spacelift_azure_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: AzureIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_azure_integration',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.36.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultSubscriptionId = config.defaultSubscriptionId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._spaceId = config.spaceId;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_consent_provided - computed: true, optional: false, required: false
  public get adminConsentProvided() {
    return this.getBooleanAttribute('admin_consent_provided');
  }

  // admin_consent_url - computed: true, optional: false, required: false
  public get adminConsentUrl() {
    return this.getStringAttribute('admin_consent_url');
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // default_subscription_id - computed: false, optional: true, required: false
  private _defaultSubscriptionId?: string; 
  public get defaultSubscriptionId() {
    return this.getStringAttribute('default_subscription_id');
  }
  public set defaultSubscriptionId(value: string) {
    this._defaultSubscriptionId = value;
  }
  public resetDefaultSubscriptionId() {
    this._defaultSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSubscriptionIdInput() {
    return this._defaultSubscriptionId;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_subscription_id: cdktf.stringToTerraform(this._defaultSubscriptionId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      space_id: cdktf.stringToTerraform(this._spaceId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_subscription_id: {
        value: cdktf.stringToHclTerraform(this._defaultSubscriptionId),
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
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
