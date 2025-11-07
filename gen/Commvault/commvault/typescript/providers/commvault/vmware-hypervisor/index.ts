// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmware_hypervisor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmwareHypervisorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies The clients that have the VSA package installed and that act as proxy clients for hypervisors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmware_hypervisor#access_nodes VmwareHypervisor#access_nodes}
  */
  readonly accessNodes: string;
  /**
  * Specifies the company id to which the Vmware Hypervisor should be associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmware_hypervisor#company_id VmwareHypervisor#company_id}
  */
  readonly companyId?: number;
  /**
  * Specifies The display name of the hypervisor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmware_hypervisor#display_name VmwareHypervisor#display_name}
  */
  readonly displayName: string;
  /**
  * Specifies The host name of the hypervisor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmware_hypervisor#host_name VmwareHypervisor#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmware_hypervisor#id VmwareHypervisor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies The password for the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmware_hypervisor#password VmwareHypervisor#password}
  */
  readonly password: string;
  /**
  * Specifies The user name for the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmware_hypervisor#user_name VmwareHypervisor#user_name}
  */
  readonly userName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmware_hypervisor commvault_vmware_hypervisor}
*/
export class VmwareHypervisor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_vmware_hypervisor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmwareHypervisor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmwareHypervisor to import
  * @param importFromId The id of the existing VmwareHypervisor that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmware_hypervisor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmwareHypervisor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_vmware_hypervisor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmware_hypervisor commvault_vmware_hypervisor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmwareHypervisorConfig
  */
  public constructor(scope: Construct, id: string, config: VmwareHypervisorConfig) {
    super(scope, id, {
      terraformResourceType: 'commvault_vmware_hypervisor',
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
    this._accessNodes = config.accessNodes;
    this._companyId = config.companyId;
    this._displayName = config.displayName;
    this._hostName = config.hostName;
    this._id = config.id;
    this._password = config.password;
    this._userName = config.userName;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_nodes: cdktf.stringToTerraform(this._accessNodes),
      company_id: cdktf.numberToTerraform(this._companyId),
      display_name: cdktf.stringToTerraform(this._displayName),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      user_name: cdktf.stringToTerraform(this._userName),
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
      company_id: {
        value: cdktf.numberToHclTerraform(this._companyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
