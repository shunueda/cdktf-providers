// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/resource_group_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceGroupProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * If `true`, will enable the discovery of local accounts on servers within the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/resource_group_project#account_discovery ResourceGroupProject#account_discovery}
  */
  readonly accountDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Assigns Gateways with labels matching all selectors. At least one selector is required to forward traffic through a Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/resource_group_project#gateway_selector ResourceGroupProject#gateway_selector}
  */
  readonly gatewaySelector?: string;
  /**
  * The human-readable name of the resource. Values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/resource_group_project#name ResourceGroupProject#name}
  */
  readonly name: string;
  /**
  * The UUID of a OktaPA Resource Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/resource_group_project#resource_group ResourceGroupProject#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * The SSH certificate type used by access requests. Options include: [`CERT_TYPE_ED25519_01`, `CERT_TYPE_ECDSA_521_01`, `CERT_TYPE_ECDSA_384_01`, `CERT_TYPE_ECDSA_256_01`, `CERT_TYPE_RSA_01`]. 'CERT_TYPE_RSA_01' is a deprecated key algorithm type. This option should only be used to connect to legacy systems that cannot use newer SSH versions. If you do need to use 'CERT_TYPE_RSA_01', it is recommended to connect via a gateway with traffic forwarding. Otherwise, please use a more current key algorithm. If left unspecified, 'CERT_TYPE_ED25519_01' is used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/resource_group_project#ssh_certificate_type ResourceGroupProject#ssh_certificate_type}
  */
  readonly sshCertificateType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/resource_group_project oktapam_resource_group_project}
*/
export class ResourceGroupProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_resource_group_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceGroupProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceGroupProject to import
  * @param importFromId The id of the existing ResourceGroupProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/resource_group_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceGroupProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_resource_group_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/resource_group_project oktapam_resource_group_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceGroupProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceGroupProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'oktapam_resource_group_project',
      terraformGeneratorMetadata: {
        providerName: 'oktapam',
        providerVersion: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountDiscovery = config.accountDiscovery;
    this._gatewaySelector = config.gatewaySelector;
    this._name = config.name;
    this._resourceGroup = config.resourceGroup;
    this._sshCertificateType = config.sshCertificateType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_discovery - computed: false, optional: true, required: false
  private _accountDiscovery?: boolean | cdktf.IResolvable; 
  public get accountDiscovery() {
    return this.getBooleanAttribute('account_discovery');
  }
  public set accountDiscovery(value: boolean | cdktf.IResolvable) {
    this._accountDiscovery = value;
  }
  public resetAccountDiscovery() {
    this._accountDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDiscoveryInput() {
    return this._accountDiscovery;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // gateway_selector - computed: false, optional: true, required: false
  private _gatewaySelector?: string; 
  public get gatewaySelector() {
    return this.getStringAttribute('gateway_selector');
  }
  public set gatewaySelector(value: string) {
    this._gatewaySelector = value;
  }
  public resetGatewaySelector() {
    this._gatewaySelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaySelectorInput() {
    return this._gatewaySelector;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // ssh_certificate_type - computed: false, optional: true, required: false
  private _sshCertificateType?: string; 
  public get sshCertificateType() {
    return this.getStringAttribute('ssh_certificate_type');
  }
  public set sshCertificateType(value: string) {
    this._sshCertificateType = value;
  }
  public resetSshCertificateType() {
    this._sshCertificateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshCertificateTypeInput() {
    return this._sshCertificateType;
  }

  // team - computed: true, optional: false, required: false
  public get team() {
    return this.getStringAttribute('team');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_discovery: cdktf.booleanToTerraform(this._accountDiscovery),
      gateway_selector: cdktf.stringToTerraform(this._gatewaySelector),
      name: cdktf.stringToTerraform(this._name),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      ssh_certificate_type: cdktf.stringToTerraform(this._sshCertificateType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_discovery: {
        value: cdktf.booleanToHclTerraform(this._accountDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_selector: {
        value: cdktf.stringToHclTerraform(this._gatewaySelector),
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
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_certificate_type: {
        value: cdktf.stringToHclTerraform(this._sshCertificateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
