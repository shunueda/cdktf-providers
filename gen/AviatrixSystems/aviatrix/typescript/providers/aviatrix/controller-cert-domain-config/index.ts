// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_cert_domain_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ControllerCertDomainConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain name that is used in FQDN for generating cert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_cert_domain_config#cert_domain ControllerCertDomainConfig#cert_domain}
  */
  readonly certDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_cert_domain_config#id ControllerCertDomainConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_cert_domain_config aviatrix_controller_cert_domain_config}
*/
export class ControllerCertDomainConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_controller_cert_domain_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ControllerCertDomainConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ControllerCertDomainConfig to import
  * @param importFromId The id of the existing ControllerCertDomainConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_cert_domain_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ControllerCertDomainConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_controller_cert_domain_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_cert_domain_config aviatrix_controller_cert_domain_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ControllerCertDomainConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ControllerCertDomainConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_controller_cert_domain_config',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certDomain = config.certDomain;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_domain - computed: false, optional: true, required: false
  private _certDomain?: string; 
  public get certDomain() {
    return this.getStringAttribute('cert_domain');
  }
  public set certDomain(value: string) {
    this._certDomain = value;
  }
  public resetCertDomain() {
    this._certDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certDomainInput() {
    return this._certDomain;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert_domain: cdktf.stringToTerraform(this._certDomain),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_domain: {
        value: cdktf.stringToHclTerraform(this._certDomain),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
