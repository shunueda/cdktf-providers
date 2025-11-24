// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/data-sources/azure_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPolarisAzureSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * RSC cloud account ID (UUID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/data-sources/azure_subscription#id DataPolarisAzureSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Azure subscription name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/data-sources/azure_subscription#name DataPolarisAzureSubscription#name}
  */
  readonly name?: string;
  /**
  * Azure subscription ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/data-sources/azure_subscription#subscription_id DataPolarisAzureSubscription#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Azure tenant primary domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/data-sources/azure_subscription#tenant_domain DataPolarisAzureSubscription#tenant_domain}
  */
  readonly tenantDomain?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/data-sources/azure_subscription polaris_azure_subscription}
*/
export class DataPolarisAzureSubscription extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_azure_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPolarisAzureSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPolarisAzureSubscription to import
  * @param importFromId The id of the existing DataPolarisAzureSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/data-sources/azure_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPolarisAzureSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_azure_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/data-sources/azure_subscription polaris_azure_subscription} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPolarisAzureSubscriptionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPolarisAzureSubscriptionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'polaris_azure_subscription',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._subscriptionId = config.subscriptionId;
    this._tenantDomain = config.tenantDomain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // subscription_id - computed: true, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_domain - computed: true, optional: true, required: false
  private _tenantDomain?: string; 
  public get tenantDomain() {
    return this.getStringAttribute('tenant_domain');
  }
  public set tenantDomain(value: string) {
    this._tenantDomain = value;
  }
  public resetTenantDomain() {
    this._tenantDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDomainInput() {
    return this._tenantDomain;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenant_domain: cdktf.stringToTerraform(this._tenantDomain),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_domain: {
        value: cdktf.stringToHclTerraform(this._tenantDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
