// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_image_terms
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentsAzureImageTermsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag to enable or disable automatic acceptance of Azure Marketplace image terms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_image_terms#accepted EnvironmentsAzureImageTerms#accepted}
  */
  readonly accepted: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_image_terms cdp_environments_azure_image_terms}
*/
export class EnvironmentsAzureImageTerms extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_environments_azure_image_terms";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnvironmentsAzureImageTerms resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnvironmentsAzureImageTerms to import
  * @param importFromId The id of the existing EnvironmentsAzureImageTerms that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_image_terms#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnvironmentsAzureImageTerms to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_environments_azure_image_terms", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_image_terms cdp_environments_azure_image_terms} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentsAzureImageTermsConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentsAzureImageTermsConfig) {
    super(scope, id, {
      terraformResourceType: 'cdp_environments_azure_image_terms',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accepted = config.accepted;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accepted - computed: false, optional: false, required: true
  private _accepted?: boolean | cdktf.IResolvable; 
  public get accepted() {
    return this.getBooleanAttribute('accepted');
  }
  public set accepted(value: boolean | cdktf.IResolvable) {
    this._accepted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptedInput() {
    return this._accepted;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accepted: cdktf.booleanToTerraform(this._accepted),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accepted: {
        value: cdktf.booleanToHclTerraform(this._accepted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
