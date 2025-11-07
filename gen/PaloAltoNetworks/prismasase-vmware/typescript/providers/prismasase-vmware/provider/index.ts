// https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrismasaseVmwareProviderConfig {
  /**
  * The API key for Prisma Access ESXi deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs#prismasase_deployment_token PrismasaseVmwareProvider#prismasase_deployment_token}
  */
  readonly prismasaseDeploymentToken: string;
  /**
  * The private region name for the deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs#prismasase_private_location_name PrismasaseVmwareProvider#prismasase_private_location_name}
  */
  readonly prismasasePrivateLocationName: string;
  /**
  * The tenant ID for the deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs#prismasase_tenant_id PrismasaseVmwareProvider#prismasase_tenant_id}
  */
  readonly prismasaseTenantId: string;
  /**
  * The hostname of the VMware ESXi server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs#vcenter_hostname PrismasaseVmwareProvider#vcenter_hostname}
  */
  readonly vcenterHostname: string;
  /**
  * The password for VMware ESXi server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs#vcenter_password PrismasaseVmwareProvider#vcenter_password}
  */
  readonly vcenterPassword: string;
  /**
  * The username for VMware ESXi server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs#vcenter_username PrismasaseVmwareProvider#vcenter_username}
  */
  readonly vcenterUsername: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs#alias PrismasaseVmwareProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs prismasase-vmware}
*/
export class PrismasaseVmwareProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismasase-vmware";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrismasaseVmwareProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrismasaseVmwareProvider to import
  * @param importFromId The id of the existing PrismasaseVmwareProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrismasaseVmwareProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismasase-vmware", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs prismasase-vmware} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrismasaseVmwareProviderConfig
  */
  public constructor(scope: Construct, id: string, config: PrismasaseVmwareProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'prismasase-vmware',
      terraformGeneratorMetadata: {
        providerName: 'prismasase-vmware',
        providerVersion: '1.0.7'
      },
      terraformProviderSource: 'PaloAltoNetworks/prismasase-vmware'
    });
    this._prismasaseDeploymentToken = config.prismasaseDeploymentToken;
    this._prismasasePrivateLocationName = config.prismasasePrivateLocationName;
    this._prismasaseTenantId = config.prismasaseTenantId;
    this._vcenterHostname = config.vcenterHostname;
    this._vcenterPassword = config.vcenterPassword;
    this._vcenterUsername = config.vcenterUsername;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // prismasase_deployment_token - computed: false, optional: false, required: true
  private _prismasaseDeploymentToken?: string; 
  public get prismasaseDeploymentToken() {
    return this._prismasaseDeploymentToken;
  }
  public set prismasaseDeploymentToken(value: string | undefined) {
    this._prismasaseDeploymentToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prismasaseDeploymentTokenInput() {
    return this._prismasaseDeploymentToken;
  }

  // prismasase_private_location_name - computed: false, optional: false, required: true
  private _prismasasePrivateLocationName?: string; 
  public get prismasasePrivateLocationName() {
    return this._prismasasePrivateLocationName;
  }
  public set prismasasePrivateLocationName(value: string | undefined) {
    this._prismasasePrivateLocationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prismasasePrivateLocationNameInput() {
    return this._prismasasePrivateLocationName;
  }

  // prismasase_tenant_id - computed: false, optional: false, required: true
  private _prismasaseTenantId?: string; 
  public get prismasaseTenantId() {
    return this._prismasaseTenantId;
  }
  public set prismasaseTenantId(value: string | undefined) {
    this._prismasaseTenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prismasaseTenantIdInput() {
    return this._prismasaseTenantId;
  }

  // vcenter_hostname - computed: false, optional: false, required: true
  private _vcenterHostname?: string; 
  public get vcenterHostname() {
    return this._vcenterHostname;
  }
  public set vcenterHostname(value: string | undefined) {
    this._vcenterHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterHostnameInput() {
    return this._vcenterHostname;
  }

  // vcenter_password - computed: false, optional: false, required: true
  private _vcenterPassword?: string; 
  public get vcenterPassword() {
    return this._vcenterPassword;
  }
  public set vcenterPassword(value: string | undefined) {
    this._vcenterPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterPasswordInput() {
    return this._vcenterPassword;
  }

  // vcenter_username - computed: false, optional: false, required: true
  private _vcenterUsername?: string; 
  public get vcenterUsername() {
    return this._vcenterUsername;
  }
  public set vcenterUsername(value: string | undefined) {
    this._vcenterUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterUsernameInput() {
    return this._vcenterUsername;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      prismasase_deployment_token: cdktf.stringToTerraform(this._prismasaseDeploymentToken),
      prismasase_private_location_name: cdktf.stringToTerraform(this._prismasasePrivateLocationName),
      prismasase_tenant_id: cdktf.stringToTerraform(this._prismasaseTenantId),
      vcenter_hostname: cdktf.stringToTerraform(this._vcenterHostname),
      vcenter_password: cdktf.stringToTerraform(this._vcenterPassword),
      vcenter_username: cdktf.stringToTerraform(this._vcenterUsername),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      prismasase_deployment_token: {
        value: cdktf.stringToHclTerraform(this._prismasaseDeploymentToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prismasase_private_location_name: {
        value: cdktf.stringToHclTerraform(this._prismasasePrivateLocationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prismasase_tenant_id: {
        value: cdktf.stringToHclTerraform(this._prismasaseTenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcenter_hostname: {
        value: cdktf.stringToHclTerraform(this._vcenterHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcenter_password: {
        value: cdktf.stringToHclTerraform(this._vcenterPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcenter_username: {
        value: cdktf.stringToHclTerraform(this._vcenterUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
