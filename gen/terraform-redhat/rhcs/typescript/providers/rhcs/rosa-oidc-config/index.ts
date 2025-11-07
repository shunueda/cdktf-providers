// https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/rosa_oidc_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RosaOidcConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS STS Role ARN for cluster install (with get-secrets permission in the attached policy)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/rosa_oidc_config#installer_role_arn RosaOidcConfig#installer_role_arn}
  */
  readonly installerRoleArn?: string;
  /**
  * The bucket/issuer URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/rosa_oidc_config#issuer_url RosaOidcConfig#issuer_url}
  */
  readonly issuerUrl?: string;
  /**
  * Indicates whether it is a Red Hat managed or unmanaged (Customer hosted) OIDC configuration, for the cluster's OIDC provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/rosa_oidc_config#managed RosaOidcConfig#managed}
  */
  readonly managed: boolean | cdktf.IResolvable;
  /**
  * Indicates for unmanaged OIDC config, the secret ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/rosa_oidc_config#secret_arn RosaOidcConfig#secret_arn}
  */
  readonly secretArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/rosa_oidc_config rhcs_rosa_oidc_config}
*/
export class RosaOidcConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rhcs_rosa_oidc_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RosaOidcConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RosaOidcConfig to import
  * @param importFromId The id of the existing RosaOidcConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/rosa_oidc_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RosaOidcConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rhcs_rosa_oidc_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/rosa_oidc_config rhcs_rosa_oidc_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RosaOidcConfigConfig
  */
  public constructor(scope: Construct, id: string, config: RosaOidcConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'rhcs_rosa_oidc_config',
      terraformGeneratorMetadata: {
        providerName: 'rhcs',
        providerVersion: '1.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._installerRoleArn = config.installerRoleArn;
    this._issuerUrl = config.issuerUrl;
    this._managed = config.managed;
    this._secretArn = config.secretArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // installer_role_arn - computed: false, optional: true, required: false
  private _installerRoleArn?: string; 
  public get installerRoleArn() {
    return this.getStringAttribute('installer_role_arn');
  }
  public set installerRoleArn(value: string) {
    this._installerRoleArn = value;
  }
  public resetInstallerRoleArn() {
    this._installerRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installerRoleArnInput() {
    return this._installerRoleArn;
  }

  // issuer_url - computed: true, optional: true, required: false
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  public resetIssuerUrl() {
    this._issuerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // managed - computed: false, optional: false, required: true
  private _managed?: boolean | cdktf.IResolvable; 
  public get managed() {
    return this.getBooleanAttribute('managed');
  }
  public set managed(value: boolean | cdktf.IResolvable) {
    this._managed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
  }

  // oidc_endpoint_url - computed: true, optional: false, required: false
  public get oidcEndpointUrl() {
    return this.getStringAttribute('oidc_endpoint_url');
  }

  // secret_arn - computed: false, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      installer_role_arn: cdktf.stringToTerraform(this._installerRoleArn),
      issuer_url: cdktf.stringToTerraform(this._issuerUrl),
      managed: cdktf.booleanToTerraform(this._managed),
      secret_arn: cdktf.stringToTerraform(this._secretArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      installer_role_arn: {
        value: cdktf.stringToHclTerraform(this._installerRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer_url: {
        value: cdktf.stringToHclTerraform(this._issuerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed: {
        value: cdktf.booleanToHclTerraform(this._managed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secret_arn: {
        value: cdktf.stringToHclTerraform(this._secretArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
