// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/amazon_hypervisor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AmazonHypervisorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies The access key ID for your Amazon account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/amazon_hypervisor#access_key AmazonHypervisor#access_key}
  */
  readonly accessKey?: string;
  /**
  * Specifies The clients that have the VSA package installed and that act as proxy clients for Amazon hypervisors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/amazon_hypervisor#access_nodes AmazonHypervisor#access_nodes}
  */
  readonly accessNodes: string;
  /**
  * Specifies The name of the Amazon hypervisor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/amazon_hypervisor#client_name AmazonHypervisor#client_name}
  */
  readonly clientName: string;
  /**
  * Specifies the company id to which the Amazon Hypervisor should be associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/amazon_hypervisor#company_id AmazonHypervisor#company_id}
  */
  readonly companyId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/amazon_hypervisor#id AmazonHypervisor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the regions used for the Hypervisor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/amazon_hypervisor#regions AmazonHypervisor#regions}
  */
  readonly regions?: string;
  /**
  * Specifies The secret key ID for your Amazon account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/amazon_hypervisor#secret_key AmazonHypervisor#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Specifies whether you want to use IAM role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/amazon_hypervisor#use_iam_role AmazonHypervisor#use_iam_role}
  */
  readonly useIamRole: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/amazon_hypervisor commvault_amazon_hypervisor}
*/
export class AmazonHypervisor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_amazon_hypervisor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AmazonHypervisor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AmazonHypervisor to import
  * @param importFromId The id of the existing AmazonHypervisor that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/amazon_hypervisor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AmazonHypervisor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_amazon_hypervisor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/amazon_hypervisor commvault_amazon_hypervisor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AmazonHypervisorConfig
  */
  public constructor(scope: Construct, id: string, config: AmazonHypervisorConfig) {
    super(scope, id, {
      terraformResourceType: 'commvault_amazon_hypervisor',
      terraformGeneratorMetadata: {
        providerName: 'commvault',
        providerVersion: '1.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKey = config.accessKey;
    this._accessNodes = config.accessNodes;
    this._clientName = config.clientName;
    this._companyId = config.companyId;
    this._id = config.id;
    this._regions = config.regions;
    this._secretKey = config.secretKey;
    this._useIamRole = config.useIamRole;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

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

  // client_name - computed: false, optional: false, required: true
  private _clientName?: string; 
  public get clientName() {
    return this.getStringAttribute('client_name');
  }
  public set clientName(value: string) {
    this._clientName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameInput() {
    return this._clientName;
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

  // regions - computed: false, optional: true, required: false
  private _regions?: string; 
  public get regions() {
    return this.getStringAttribute('regions');
  }
  public set regions(value: string) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // use_iam_role - computed: false, optional: false, required: true
  private _useIamRole?: boolean | cdktf.IResolvable; 
  public get useIamRole() {
    return this.getBooleanAttribute('use_iam_role');
  }
  public set useIamRole(value: boolean | cdktf.IResolvable) {
    this._useIamRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useIamRoleInput() {
    return this._useIamRole;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      access_nodes: cdktf.stringToTerraform(this._accessNodes),
      client_name: cdktf.stringToTerraform(this._clientName),
      company_id: cdktf.numberToTerraform(this._companyId),
      id: cdktf.stringToTerraform(this._id),
      regions: cdktf.stringToTerraform(this._regions),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      use_iam_role: cdktf.booleanToTerraform(this._useIamRole),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_nodes: {
        value: cdktf.stringToHclTerraform(this._accessNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_name: {
        value: cdktf.stringToHclTerraform(this._clientName),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regions: {
        value: cdktf.stringToHclTerraform(this._regions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_iam_role: {
        value: cdktf.booleanToHclTerraform(this._useIamRole),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
