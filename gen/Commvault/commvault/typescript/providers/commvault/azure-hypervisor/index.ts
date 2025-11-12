// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_hypervisor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureHypervisorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies The clients that have the VSA package installed and that act as proxy clients for Azure hypervisors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_hypervisor#access_nodes AzureHypervisor#access_nodes}
  */
  readonly accessNodes: string;
  /**
  * Specifies The application ID of the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_hypervisor#application_id AzureHypervisor#application_id}
  */
  readonly applicationId: string;
  /**
  * Specifies The password for the application ID of the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_hypervisor#application_password AzureHypervisor#application_password}
  */
  readonly applicationPassword: string;
  /**
  * Specifies the company id to which the Azure Hypervisor should be associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_hypervisor#company_id AzureHypervisor#company_id}
  */
  readonly companyId?: number;
  /**
  * Specifies The name of the hypervisor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_hypervisor#hypervisor_name AzureHypervisor#hypervisor_name}
  */
  readonly hypervisorName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_hypervisor#id AzureHypervisor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies The subscription ID for your Azure account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_hypervisor#subscription_id AzureHypervisor#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Specifies The tenant ID for your Azure account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_hypervisor#tenant_id AzureHypervisor#tenant_id}
  */
  readonly tenantId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_hypervisor commvault_azure_hypervisor}
*/
export class AzureHypervisor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_azure_hypervisor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureHypervisor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureHypervisor to import
  * @param importFromId The id of the existing AzureHypervisor that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_hypervisor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureHypervisor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_azure_hypervisor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_hypervisor commvault_azure_hypervisor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureHypervisorConfig
  */
  public constructor(scope: Construct, id: string, config: AzureHypervisorConfig) {
    super(scope, id, {
      terraformResourceType: 'commvault_azure_hypervisor',
      terraformGeneratorMetadata: {
        providerName: 'commvault',
        providerVersion: '1.2.10',
        providerVersionConstraint: '1.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessNodes = config.accessNodes;
    this._applicationId = config.applicationId;
    this._applicationPassword = config.applicationPassword;
    this._companyId = config.companyId;
    this._hypervisorName = config.hypervisorName;
    this._id = config.id;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_nodes - computed: false, optional: false, required: true
  private _accessNodes?: string; 
  public get accessNodes() {
    return this.getStringAttribute('access_nodes');
  }
  public set accessNodes(value: string) {
    this._accessNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessNodesInput() {
    return this._accessNodes;
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // application_password - computed: false, optional: false, required: true
  private _applicationPassword?: string; 
  public get applicationPassword() {
    return this.getStringAttribute('application_password');
  }
  public set applicationPassword(value: string) {
    this._applicationPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationPasswordInput() {
    return this._applicationPassword;
  }

  // company_id - computed: false, optional: true, required: false
  private _companyId?: number; 
  public get companyId() {
    return this.getNumberAttribute('company_id');
  }
  public set companyId(value: number) {
    this._companyId = value;
  }
  public resetCompanyId() {
    this._companyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyIdInput() {
    return this._companyId;
  }

  // hypervisor_name - computed: false, optional: false, required: true
  private _hypervisorName?: string; 
  public get hypervisorName() {
    return this.getStringAttribute('hypervisor_name');
  }
  public set hypervisorName(value: string) {
    this._hypervisorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorNameInput() {
    return this._hypervisorName;
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

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
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
      access_nodes: cdktf.stringToTerraform(this._accessNodes),
      application_id: cdktf.stringToTerraform(this._applicationId),
      application_password: cdktf.stringToTerraform(this._applicationPassword),
      company_id: cdktf.numberToTerraform(this._companyId),
      hypervisor_name: cdktf.stringToTerraform(this._hypervisorName),
      id: cdktf.stringToTerraform(this._id),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_nodes: {
        value: cdktf.stringToHclTerraform(this._accessNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_password: {
        value: cdktf.stringToHclTerraform(this._applicationPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company_id: {
        value: cdktf.numberToHclTerraform(this._companyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hypervisor_name: {
        value: cdktf.stringToHclTerraform(this._hypervisorName),
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
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
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
