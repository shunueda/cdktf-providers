// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_javascript_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebAppJavascriptVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Choose custom version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_javascript_version#custom_javascript_version WebAppJavascriptVersion#custom_javascript_version}
  */
  readonly customJavascriptVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_javascript_version#id WebAppJavascriptVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_javascript_version dynatrace_web_app_javascript_version}
*/
export class WebAppJavascriptVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_web_app_javascript_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebAppJavascriptVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebAppJavascriptVersion to import
  * @param importFromId The id of the existing WebAppJavascriptVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_javascript_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebAppJavascriptVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_web_app_javascript_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_javascript_version dynatrace_web_app_javascript_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebAppJavascriptVersionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WebAppJavascriptVersionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_web_app_javascript_version',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customJavascriptVersion = config.customJavascriptVersion;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_javascript_version - computed: false, optional: true, required: false
  private _customJavascriptVersion?: string; 
  public get customJavascriptVersion() {
    return this.getStringAttribute('custom_javascript_version');
  }
  public set customJavascriptVersion(value: string) {
    this._customJavascriptVersion = value;
  }
  public resetCustomJavascriptVersion() {
    this._customJavascriptVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customJavascriptVersionInput() {
    return this._customJavascriptVersion;
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
      custom_javascript_version: cdktf.stringToTerraform(this._customJavascriptVersion),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_javascript_version: {
        value: cdktf.stringToHclTerraform(this._customJavascriptVersion),
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
