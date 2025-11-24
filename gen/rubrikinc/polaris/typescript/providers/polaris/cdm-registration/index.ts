// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_registration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdmRegistrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Password for the cluster admin account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_registration#admin_password CdmRegistration#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_registration#cluster_name CdmRegistration#cluster_name}
  */
  readonly clusterName: string;
  /**
  * The IP address of the cluster node to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_registration#cluster_node_ip_address CdmRegistration#cluster_node_ip_address}
  */
  readonly clusterNodeIpAddress: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_registration polaris_cdm_registration}
*/
export class CdmRegistration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_cdm_registration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdmRegistration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdmRegistration to import
  * @param importFromId The id of the existing CdmRegistration that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_registration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdmRegistration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_cdm_registration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_registration polaris_cdm_registration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdmRegistrationConfig
  */
  public constructor(scope: Construct, id: string, config: CdmRegistrationConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_cdm_registration',
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
    this._adminPassword = config.adminPassword;
    this._clusterName = config.clusterName;
    this._clusterNodeIpAddress = config.clusterNodeIpAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_node_ip_address - computed: false, optional: false, required: true
  private _clusterNodeIpAddress?: string; 
  public get clusterNodeIpAddress() {
    return this.getStringAttribute('cluster_node_ip_address');
  }
  public set clusterNodeIpAddress(value: string) {
    this._clusterNodeIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNodeIpAddressInput() {
    return this._clusterNodeIpAddress;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // registration_mode - computed: true, optional: false, required: false
  public get registrationMode() {
    return this.getStringAttribute('registration_mode');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_node_ip_address: cdktf.stringToTerraform(this._clusterNodeIpAddress),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_password: {
        value: cdktf.stringToHclTerraform(this._adminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_node_ip_address: {
        value: cdktf.stringToHclTerraform(this._clusterNodeIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
