// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID for a Certificate used for Passwordless authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_connection#certificate_id AdConnection#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * The domain against which to query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_connection#domain AdConnection#domain}
  */
  readonly domain: string;
  /**
  * A comma-separated list of the specific domain controllers used to query the domain. Can be specified as a hostname or IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_connection#domain_controllers AdConnection#domain_controllers}
  */
  readonly domainControllers?: string[];
  /**
  * The UUID of a Gateway associated with this AD Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_connection#gateway_id AdConnection#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * The human-readable name of the resource. Values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_connection#name AdConnection#name}
  */
  readonly name: string;
  /**
  * The password of the service account used to query the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_connection#service_account_password AdConnection#service_account_password}
  */
  readonly serviceAccountPassword: string;
  /**
  * The username of a service account used to query the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_connection#service_account_username AdConnection#service_account_username}
  */
  readonly serviceAccountUsername: string;
  /**
  * if `true`, Users will not need password to login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_connection#use_passwordless AdConnection#use_passwordless}
  */
  readonly usePasswordless?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_connection oktapam_ad_connection}
*/
export class AdConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_ad_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdConnection to import
  * @param importFromId The id of the existing AdConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_ad_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_connection oktapam_ad_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: AdConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'oktapam_ad_connection',
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
    this._certificateId = config.certificateId;
    this._domain = config.domain;
    this._domainControllers = config.domainControllers;
    this._gatewayId = config.gatewayId;
    this._name = config.name;
    this._serviceAccountPassword = config.serviceAccountPassword;
    this._serviceAccountUsername = config.serviceAccountUsername;
    this._usePasswordless = config.usePasswordless;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: true, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_controllers - computed: false, optional: true, required: false
  private _domainControllers?: string[]; 
  public get domainControllers() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_controllers'));
  }
  public set domainControllers(value: string[]) {
    this._domainControllers = value;
  }
  public resetDomainControllers() {
    this._domainControllers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainControllersInput() {
    return this._domainControllers;
  }

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
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

  // service_account_password - computed: false, optional: false, required: true
  private _serviceAccountPassword?: string; 
  public get serviceAccountPassword() {
    return this.getStringAttribute('service_account_password');
  }
  public set serviceAccountPassword(value: string) {
    this._serviceAccountPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountPasswordInput() {
    return this._serviceAccountPassword;
  }

  // service_account_username - computed: false, optional: false, required: true
  private _serviceAccountUsername?: string; 
  public get serviceAccountUsername() {
    return this.getStringAttribute('service_account_username');
  }
  public set serviceAccountUsername(value: string) {
    this._serviceAccountUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountUsernameInput() {
    return this._serviceAccountUsername;
  }

  // use_passwordless - computed: false, optional: true, required: false
  private _usePasswordless?: boolean | cdktf.IResolvable; 
  public get usePasswordless() {
    return this.getBooleanAttribute('use_passwordless');
  }
  public set usePasswordless(value: boolean | cdktf.IResolvable) {
    this._usePasswordless = value;
  }
  public resetUsePasswordless() {
    this._usePasswordless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePasswordlessInput() {
    return this._usePasswordless;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      domain: cdktf.stringToTerraform(this._domain),
      domain_controllers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainControllers),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      name: cdktf.stringToTerraform(this._name),
      service_account_password: cdktf.stringToTerraform(this._serviceAccountPassword),
      service_account_username: cdktf.stringToTerraform(this._serviceAccountUsername),
      use_passwordless: cdktf.booleanToTerraform(this._usePasswordless),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_controllers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainControllers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
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
      service_account_password: {
        value: cdktf.stringToHclTerraform(this._serviceAccountPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_username: {
        value: cdktf.stringToHclTerraform(this._serviceAccountUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_passwordless: {
        value: cdktf.booleanToHclTerraform(this._usePasswordless),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
