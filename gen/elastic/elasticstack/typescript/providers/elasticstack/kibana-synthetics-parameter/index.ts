// https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_synthetics_parameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KibanaSyntheticsParameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_synthetics_parameter#description KibanaSyntheticsParameter#description}
  */
  readonly description?: string;
  /**
  * The key of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_synthetics_parameter#key KibanaSyntheticsParameter#key}
  */
  readonly key: string;
  /**
  * Whether the parameter should be shared across spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_synthetics_parameter#share_across_spaces KibanaSyntheticsParameter#share_across_spaces}
  */
  readonly shareAcrossSpaces?: boolean | cdktf.IResolvable;
  /**
  * An array of tags to categorize the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_synthetics_parameter#tags KibanaSyntheticsParameter#tags}
  */
  readonly tags?: string[];
  /**
  * The value associated with the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_synthetics_parameter#value KibanaSyntheticsParameter#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_synthetics_parameter elasticstack_kibana_synthetics_parameter}
*/
export class KibanaSyntheticsParameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_kibana_synthetics_parameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KibanaSyntheticsParameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KibanaSyntheticsParameter to import
  * @param importFromId The id of the existing KibanaSyntheticsParameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_synthetics_parameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KibanaSyntheticsParameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_kibana_synthetics_parameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_synthetics_parameter elasticstack_kibana_synthetics_parameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KibanaSyntheticsParameterConfig
  */
  public constructor(scope: Construct, id: string, config: KibanaSyntheticsParameterConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_kibana_synthetics_parameter',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.1',
        providerVersionConstraint: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._key = config.key;
    this._shareAcrossSpaces = config.shareAcrossSpaces;
    this._tags = config.tags;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // share_across_spaces - computed: true, optional: true, required: false
  private _shareAcrossSpaces?: boolean | cdktf.IResolvable; 
  public get shareAcrossSpaces() {
    return this.getBooleanAttribute('share_across_spaces');
  }
  public set shareAcrossSpaces(value: boolean | cdktf.IResolvable) {
    this._shareAcrossSpaces = value;
  }
  public resetShareAcrossSpaces() {
    this._shareAcrossSpaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareAcrossSpacesInput() {
    return this._shareAcrossSpaces;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      key: cdktf.stringToTerraform(this._key),
      share_across_spaces: cdktf.booleanToTerraform(this._shareAcrossSpaces),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_across_spaces: {
        value: cdktf.booleanToHclTerraform(this._shareAcrossSpaces),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
