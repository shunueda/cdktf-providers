// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/domain_zone_dynhost_login
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainZoneDynhostLoginConfig extends cdktf.TerraformMetaArguments {
  /**
  * Suffix that will be concatenated to the zoneName to create the login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/domain_zone_dynhost_login#login_suffix DomainZoneDynhostLogin#login_suffix}
  */
  readonly loginSuffix: string;
  /**
  * Password of the login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/domain_zone_dynhost_login#password DomainZoneDynhostLogin#password}
  */
  readonly password: string;
  /**
  * Subdomain that the login will be allowed to update (use * to allow all)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/domain_zone_dynhost_login#sub_domain DomainZoneDynhostLogin#sub_domain}
  */
  readonly subDomain: string;
  /**
  * Zone name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/domain_zone_dynhost_login#zone_name DomainZoneDynhostLogin#zone_name}
  */
  readonly zoneName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/domain_zone_dynhost_login ovh_domain_zone_dynhost_login}
*/
export class DomainZoneDynhostLogin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_domain_zone_dynhost_login";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DomainZoneDynhostLogin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DomainZoneDynhostLogin to import
  * @param importFromId The id of the existing DomainZoneDynhostLogin that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/domain_zone_dynhost_login#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DomainZoneDynhostLogin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_domain_zone_dynhost_login", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/domain_zone_dynhost_login ovh_domain_zone_dynhost_login} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainZoneDynhostLoginConfig
  */
  public constructor(scope: Construct, id: string, config: DomainZoneDynhostLoginConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_domain_zone_dynhost_login',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._loginSuffix = config.loginSuffix;
    this._password = config.password;
    this._subDomain = config.subDomain;
    this._zoneName = config.zoneName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // login - computed: true, optional: false, required: false
  public get login() {
    return this.getStringAttribute('login');
  }

  // login_suffix - computed: false, optional: false, required: true
  private _loginSuffix?: string; 
  public get loginSuffix() {
    return this.getStringAttribute('login_suffix');
  }
  public set loginSuffix(value: string) {
    this._loginSuffix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginSuffixInput() {
    return this._loginSuffix;
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

  // sub_domain - computed: false, optional: false, required: true
  private _subDomain?: string; 
  public get subDomain() {
    return this.getStringAttribute('sub_domain');
  }
  public set subDomain(value: string) {
    this._subDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subDomainInput() {
    return this._subDomain;
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      login_suffix: cdktf.stringToTerraform(this._loginSuffix),
      password: cdktf.stringToTerraform(this._password),
      sub_domain: cdktf.stringToTerraform(this._subDomain),
      zone_name: cdktf.stringToTerraform(this._zoneName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      login_suffix: {
        value: cdktf.stringToHclTerraform(this._loginSuffix),
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
      sub_domain: {
        value: cdktf.stringToHclTerraform(this._subDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
