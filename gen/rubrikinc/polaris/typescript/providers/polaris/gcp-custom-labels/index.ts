// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_custom_labels
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpCustomLabelsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom labels to add to cloud resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_custom_labels#custom_labels GcpCustomLabels#custom_labels}
  */
  readonly customLabels: { [key: string]: string };
  /**
  * Should custom labels overwrite existing labels with the same keys. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_custom_labels#override_resource_labels GcpCustomLabels#override_resource_labels}
  */
  readonly overrideResourceLabels?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_custom_labels polaris_gcp_custom_labels}
*/
export class GcpCustomLabels extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_gcp_custom_labels";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpCustomLabels resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpCustomLabels to import
  * @param importFromId The id of the existing GcpCustomLabels that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_custom_labels#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpCustomLabels to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_gcp_custom_labels", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_custom_labels polaris_gcp_custom_labels} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpCustomLabelsConfig
  */
  public constructor(scope: Construct, id: string, config: GcpCustomLabelsConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_gcp_custom_labels',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customLabels = config.customLabels;
    this._overrideResourceLabels = config.overrideResourceLabels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_labels - computed: false, optional: false, required: true
  private _customLabels?: { [key: string]: string }; 
  public get customLabels() {
    return this.getStringMapAttribute('custom_labels');
  }
  public set customLabels(value: { [key: string]: string }) {
    this._customLabels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customLabelsInput() {
    return this._customLabels;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // override_resource_labels - computed: false, optional: true, required: false
  private _overrideResourceLabels?: boolean | cdktf.IResolvable; 
  public get overrideResourceLabels() {
    return this.getBooleanAttribute('override_resource_labels');
  }
  public set overrideResourceLabels(value: boolean | cdktf.IResolvable) {
    this._overrideResourceLabels = value;
  }
  public resetOverrideResourceLabels() {
    this._overrideResourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideResourceLabelsInput() {
    return this._overrideResourceLabels;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._customLabels),
      override_resource_labels: cdktf.booleanToTerraform(this._overrideResourceLabels),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      override_resource_labels: {
        value: cdktf.booleanToHclTerraform(this._overrideResourceLabels),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
