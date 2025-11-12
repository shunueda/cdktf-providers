// https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/rosa_oidc_config_input
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RosaOidcConfigInputConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-defined prefix for OIDC resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/rosa_oidc_config_input#prefix RosaOidcConfigInput#prefix}
  */
  readonly prefix?: string;
  /**
  * Unique identifier of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/rosa_oidc_config_input#region RosaOidcConfigInput#region}
  */
  readonly region: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/rosa_oidc_config_input rhcs_rosa_oidc_config_input}
*/
export class RosaOidcConfigInput extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rhcs_rosa_oidc_config_input";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RosaOidcConfigInput resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RosaOidcConfigInput to import
  * @param importFromId The id of the existing RosaOidcConfigInput that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/rosa_oidc_config_input#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RosaOidcConfigInput to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rhcs_rosa_oidc_config_input", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/rosa_oidc_config_input rhcs_rosa_oidc_config_input} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RosaOidcConfigInputConfig
  */
  public constructor(scope: Construct, id: string, config: RosaOidcConfigInputConfig) {
    super(scope, id, {
      terraformResourceType: 'rhcs_rosa_oidc_config_input',
      terraformGeneratorMetadata: {
        providerName: 'rhcs',
        providerVersion: '1.7.2',
        providerVersionConstraint: '1.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._prefix = config.prefix;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // discovery_doc - computed: true, optional: false, required: false
  public get discoveryDoc() {
    return this.getStringAttribute('discovery_doc');
  }

  // issuer_url - computed: true, optional: false, required: false
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }

  // jwks - computed: true, optional: false, required: false
  public get jwks() {
    return this.getStringAttribute('jwks');
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // private_key_file_name - computed: true, optional: false, required: false
  public get privateKeyFileName() {
    return this.getStringAttribute('private_key_file_name');
  }

  // private_key_secret_name - computed: true, optional: false, required: false
  public get privateKeySecretName() {
    return this.getStringAttribute('private_key_secret_name');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      prefix: cdktf.stringToTerraform(this._prefix),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
