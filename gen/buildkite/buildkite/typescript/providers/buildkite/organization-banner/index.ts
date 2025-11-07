// https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/resources/organization_banner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationBannerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The organization banner's message. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/resources/organization_banner#message OrganizationBanner#message}
  */
  readonly message: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/resources/organization_banner buildkite_organization_banner}
*/
export class OrganizationBanner extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buildkite_organization_banner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationBanner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationBanner to import
  * @param importFromId The id of the existing OrganizationBanner that should be imported. Refer to the {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/resources/organization_banner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationBanner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buildkite_organization_banner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buildkite/buildkite/1.26.0/docs/resources/organization_banner buildkite_organization_banner} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationBannerConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationBannerConfig) {
    super(scope, id, {
      terraformResourceType: 'buildkite_organization_banner',
      terraformGeneratorMetadata: {
        providerName: 'buildkite',
        providerVersion: '1.26.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._message = config.message;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      message: cdktf.stringToTerraform(this._message),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      message: {
        value: cdktf.stringToHclTerraform(this._message),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
