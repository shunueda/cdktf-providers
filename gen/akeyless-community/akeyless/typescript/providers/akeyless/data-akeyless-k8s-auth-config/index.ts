// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/k8s_auth_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkeylessK8SAuthConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * K8S Auth config name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/k8s_auth_config#name DataAkeylessK8SAuthConfig#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/k8s_auth_config akeyless_k8s_auth_config}
*/
export class DataAkeylessK8SAuthConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_k8s_auth_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkeylessK8SAuthConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkeylessK8SAuthConfig to import
  * @param importFromId The id of the existing DataAkeylessK8SAuthConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/k8s_auth_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkeylessK8SAuthConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_k8s_auth_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/k8s_auth_config akeyless_k8s_auth_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkeylessK8SAuthConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkeylessK8SAuthConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_k8s_auth_config',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1',
        providerVersionConstraint: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // am_token_expiration - computed: true, optional: false, required: false
  public get amTokenExpiration() {
    return this.getNumberAttribute('am_token_expiration');
  }

  // auth_method_access_id - computed: true, optional: false, required: false
  public get authMethodAccessId() {
    return this.getStringAttribute('auth_method_access_id');
  }

  // auth_method_prv_key_pem - computed: true, optional: false, required: false
  public get authMethodPrvKeyPem() {
    return this.getStringAttribute('auth_method_prv_key_pem');
  }

  // disable_iss_validation - computed: true, optional: false, required: false
  public get disableIssValidation() {
    return this.getBooleanAttribute('disable_iss_validation');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // k8s_ca_cert - computed: true, optional: false, required: false
  public get k8SCaCert() {
    return this.getStringAttribute('k8s_ca_cert');
  }

  // k8s_host - computed: true, optional: false, required: false
  public get k8SHost() {
    return this.getStringAttribute('k8s_host');
  }

  // k8s_issuer - computed: true, optional: false, required: false
  public get k8SIssuer() {
    return this.getStringAttribute('k8s_issuer');
  }

  // k8s_pub_keys_pem - computed: true, optional: false, required: false
  public get k8SPubKeysPem() {
    return cdktf.Fn.tolist(this.getListAttribute('k8s_pub_keys_pem'));
  }

  // k8s_token_reviewer_jwt - computed: true, optional: false, required: false
  public get k8STokenReviewerJwt() {
    return this.getStringAttribute('k8s_token_reviewer_jwt');
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

  // protection_key - computed: true, optional: false, required: false
  public get protectionKey() {
    return this.getStringAttribute('protection_key');
  }

  // use_local_ca_jwt - computed: true, optional: false, required: false
  public get useLocalCaJwt() {
    return this.getBooleanAttribute('use_local_ca_jwt');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
