// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_mutual_tls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StageMutualTlsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allowed values:
  *   - `subject`
  *   - `common_name`
  *   - `email`
  *  Defaults to `email`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_mutual_tls#cert_attribute StageMutualTls#cert_attribute}
  */
  readonly certAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_mutual_tls#certificate_authorities StageMutualTls#certificate_authorities}
  */
  readonly certificateAuthorities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_mutual_tls#id StageMutualTls#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Allowed values:
  *   - `optional`
  *   - `required`
  *  Defaults to `optional`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_mutual_tls#mode StageMutualTls#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_mutual_tls#name StageMutualTls#name}
  */
  readonly name: string;
  /**
  * Allowed values:
  *   - `username`
  *   - `email`
  *  Defaults to `email`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_mutual_tls#user_attribute StageMutualTls#user_attribute}
  */
  readonly userAttribute?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_mutual_tls authentik_stage_mutual_tls}
*/
export class StageMutualTls extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_stage_mutual_tls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StageMutualTls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StageMutualTls to import
  * @param importFromId The id of the existing StageMutualTls that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_mutual_tls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StageMutualTls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_stage_mutual_tls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_mutual_tls authentik_stage_mutual_tls} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StageMutualTlsConfig
  */
  public constructor(scope: Construct, id: string, config: StageMutualTlsConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_stage_mutual_tls',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.1',
        providerVersionConstraint: '2025.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certAttribute = config.certAttribute;
    this._certificateAuthorities = config.certificateAuthorities;
    this._id = config.id;
    this._mode = config.mode;
    this._name = config.name;
    this._userAttribute = config.userAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_attribute - computed: false, optional: true, required: false
  private _certAttribute?: string; 
  public get certAttribute() {
    return this.getStringAttribute('cert_attribute');
  }
  public set certAttribute(value: string) {
    this._certAttribute = value;
  }
  public resetCertAttribute() {
    this._certAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certAttributeInput() {
    return this._certAttribute;
  }

  // certificate_authorities - computed: false, optional: true, required: false
  private _certificateAuthorities?: string[]; 
  public get certificateAuthorities() {
    return this.getListAttribute('certificate_authorities');
  }
  public set certificateAuthorities(value: string[]) {
    this._certificateAuthorities = value;
  }
  public resetCertificateAuthorities() {
    this._certificateAuthorities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthoritiesInput() {
    return this._certificateAuthorities;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // user_attribute - computed: false, optional: true, required: false
  private _userAttribute?: string; 
  public get userAttribute() {
    return this.getStringAttribute('user_attribute');
  }
  public set userAttribute(value: string) {
    this._userAttribute = value;
  }
  public resetUserAttribute() {
    this._userAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributeInput() {
    return this._userAttribute;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert_attribute: cdktf.stringToTerraform(this._certAttribute),
      certificate_authorities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificateAuthorities),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      user_attribute: cdktf.stringToTerraform(this._userAttribute),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_attribute: {
        value: cdktf.stringToHclTerraform(this._certAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_authorities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._certificateAuthorities),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      user_attribute: {
        value: cdktf.stringToHclTerraform(this._userAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
