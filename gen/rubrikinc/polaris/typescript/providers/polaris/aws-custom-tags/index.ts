// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_custom_tags
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsCustomTagsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom tags to add to cloud resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_custom_tags#custom_tags AwsCustomTags#custom_tags}
  */
  readonly customTags: { [key: string]: string };
  /**
  * Should custom tags overwrite existing tags with the same keys. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_custom_tags#override_resource_tags AwsCustomTags#override_resource_tags}
  */
  readonly overrideResourceTags?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_custom_tags polaris_aws_custom_tags}
*/
export class AwsCustomTags extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_aws_custom_tags";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsCustomTags resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCustomTags to import
  * @param importFromId The id of the existing AwsCustomTags that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_custom_tags#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCustomTags to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_aws_custom_tags", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_custom_tags polaris_aws_custom_tags} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCustomTagsConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCustomTagsConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_aws_custom_tags',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customTags = config.customTags;
    this._overrideResourceTags = config.overrideResourceTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_tags - computed: false, optional: false, required: true
  private _customTags?: { [key: string]: string }; 
  public get customTags() {
    return this.getStringMapAttribute('custom_tags');
  }
  public set customTags(value: { [key: string]: string }) {
    this._customTags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // override_resource_tags - computed: false, optional: true, required: false
  private _overrideResourceTags?: boolean | cdktf.IResolvable; 
  public get overrideResourceTags() {
    return this.getBooleanAttribute('override_resource_tags');
  }
  public set overrideResourceTags(value: boolean | cdktf.IResolvable) {
    this._overrideResourceTags = value;
  }
  public resetOverrideResourceTags() {
    this._overrideResourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideResourceTagsInput() {
    return this._overrideResourceTags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._customTags),
      override_resource_tags: cdktf.booleanToTerraform(this._overrideResourceTags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      override_resource_tags: {
        value: cdktf.booleanToHclTerraform(this._overrideResourceTags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
