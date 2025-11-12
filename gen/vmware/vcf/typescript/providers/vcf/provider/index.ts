// https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VcfProviderConfig {
  /**
  * Allow unverified TLS certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs#allow_unverified_tls VcfProvider#allow_unverified_tls}
  */
  readonly allowUnverifiedTls?: boolean | cdktf.IResolvable;
  /**
  * The fully qualified domain name or IP address of the Cloud Builder instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs#cloud_builder_host VcfProvider#cloud_builder_host}
  */
  readonly cloudBuilderHost?: string;
  /**
  * The password to authenticate to the Cloud Builder instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs#cloud_builder_password VcfProvider#cloud_builder_password}
  */
  readonly cloudBuilderPassword?: string;
  /**
  * The username to authenticate to the Cloud Builder instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs#cloud_builder_username VcfProvider#cloud_builder_username}
  */
  readonly cloudBuilderUsername?: string;
  /**
  * The fully qualified domain name or IP address of the SDDC Manager instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs#sddc_manager_host VcfProvider#sddc_manager_host}
  */
  readonly sddcManagerHost?: string;
  /**
  * The password to authenticate to the SDDC Manager instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs#sddc_manager_password VcfProvider#sddc_manager_password}
  */
  readonly sddcManagerPassword?: string;
  /**
  * The username to authenticate to the SDDC Manager instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs#sddc_manager_username VcfProvider#sddc_manager_username}
  */
  readonly sddcManagerUsername?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs#alias VcfProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs vcf}
*/
export class VcfProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VcfProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VcfProvider to import
  * @param importFromId The id of the existing VcfProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VcfProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs vcf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VcfProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VcfProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vcf',
      terraformGeneratorMetadata: {
        providerName: 'vcf',
        providerVersion: '0.16.2',
        providerVersionConstraint: '0.16.2'
      },
      terraformProviderSource: 'vmware/vcf'
    });
    this._allowUnverifiedTls = config.allowUnverifiedTls;
    this._cloudBuilderHost = config.cloudBuilderHost;
    this._cloudBuilderPassword = config.cloudBuilderPassword;
    this._cloudBuilderUsername = config.cloudBuilderUsername;
    this._sddcManagerHost = config.sddcManagerHost;
    this._sddcManagerPassword = config.sddcManagerPassword;
    this._sddcManagerUsername = config.sddcManagerUsername;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_unverified_tls - computed: false, optional: true, required: false
  private _allowUnverifiedTls?: boolean | cdktf.IResolvable; 
  public get allowUnverifiedTls() {
    return this._allowUnverifiedTls;
  }
  public set allowUnverifiedTls(value: boolean | cdktf.IResolvable | undefined) {
    this._allowUnverifiedTls = value;
  }
  public resetAllowUnverifiedTls() {
    this._allowUnverifiedTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnverifiedTlsInput() {
    return this._allowUnverifiedTls;
  }

  // cloud_builder_host - computed: false, optional: true, required: false
  private _cloudBuilderHost?: string; 
  public get cloudBuilderHost() {
    return this._cloudBuilderHost;
  }
  public set cloudBuilderHost(value: string | undefined) {
    this._cloudBuilderHost = value;
  }
  public resetCloudBuilderHost() {
    this._cloudBuilderHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudBuilderHostInput() {
    return this._cloudBuilderHost;
  }

  // cloud_builder_password - computed: false, optional: true, required: false
  private _cloudBuilderPassword?: string; 
  public get cloudBuilderPassword() {
    return this._cloudBuilderPassword;
  }
  public set cloudBuilderPassword(value: string | undefined) {
    this._cloudBuilderPassword = value;
  }
  public resetCloudBuilderPassword() {
    this._cloudBuilderPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudBuilderPasswordInput() {
    return this._cloudBuilderPassword;
  }

  // cloud_builder_username - computed: false, optional: true, required: false
  private _cloudBuilderUsername?: string; 
  public get cloudBuilderUsername() {
    return this._cloudBuilderUsername;
  }
  public set cloudBuilderUsername(value: string | undefined) {
    this._cloudBuilderUsername = value;
  }
  public resetCloudBuilderUsername() {
    this._cloudBuilderUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudBuilderUsernameInput() {
    return this._cloudBuilderUsername;
  }

  // sddc_manager_host - computed: false, optional: true, required: false
  private _sddcManagerHost?: string; 
  public get sddcManagerHost() {
    return this._sddcManagerHost;
  }
  public set sddcManagerHost(value: string | undefined) {
    this._sddcManagerHost = value;
  }
  public resetSddcManagerHost() {
    this._sddcManagerHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sddcManagerHostInput() {
    return this._sddcManagerHost;
  }

  // sddc_manager_password - computed: false, optional: true, required: false
  private _sddcManagerPassword?: string; 
  public get sddcManagerPassword() {
    return this._sddcManagerPassword;
  }
  public set sddcManagerPassword(value: string | undefined) {
    this._sddcManagerPassword = value;
  }
  public resetSddcManagerPassword() {
    this._sddcManagerPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sddcManagerPasswordInput() {
    return this._sddcManagerPassword;
  }

  // sddc_manager_username - computed: false, optional: true, required: false
  private _sddcManagerUsername?: string; 
  public get sddcManagerUsername() {
    return this._sddcManagerUsername;
  }
  public set sddcManagerUsername(value: string | undefined) {
    this._sddcManagerUsername = value;
  }
  public resetSddcManagerUsername() {
    this._sddcManagerUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sddcManagerUsernameInput() {
    return this._sddcManagerUsername;
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
      allow_unverified_tls: cdktf.booleanToTerraform(this._allowUnverifiedTls),
      cloud_builder_host: cdktf.stringToTerraform(this._cloudBuilderHost),
      cloud_builder_password: cdktf.stringToTerraform(this._cloudBuilderPassword),
      cloud_builder_username: cdktf.stringToTerraform(this._cloudBuilderUsername),
      sddc_manager_host: cdktf.stringToTerraform(this._sddcManagerHost),
      sddc_manager_password: cdktf.stringToTerraform(this._sddcManagerPassword),
      sddc_manager_username: cdktf.stringToTerraform(this._sddcManagerUsername),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_unverified_tls: {
        value: cdktf.booleanToHclTerraform(this._allowUnverifiedTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloud_builder_host: {
        value: cdktf.stringToHclTerraform(this._cloudBuilderHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_builder_password: {
        value: cdktf.stringToHclTerraform(this._cloudBuilderPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_builder_username: {
        value: cdktf.stringToHclTerraform(this._cloudBuilderUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sddc_manager_host: {
        value: cdktf.stringToHclTerraform(this._sddcManagerHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sddc_manager_password: {
        value: cdktf.stringToHclTerraform(this._sddcManagerPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sddc_manager_username: {
        value: cdktf.stringToHclTerraform(this._sddcManagerUsername),
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
