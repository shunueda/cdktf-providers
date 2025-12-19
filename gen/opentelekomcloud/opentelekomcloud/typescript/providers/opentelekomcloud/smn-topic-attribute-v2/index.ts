// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/smn_topic_attribute_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmnTopicAttributeV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/smn_topic_attribute_v2#attribute_name SmnTopicAttributeV2#attribute_name}
  */
  readonly attributeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/smn_topic_attribute_v2#id SmnTopicAttributeV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/smn_topic_attribute_v2#topic_attribute SmnTopicAttributeV2#topic_attribute}
  */
  readonly topicAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/smn_topic_attribute_v2#topic_urn SmnTopicAttributeV2#topic_urn}
  */
  readonly topicUrn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/smn_topic_attribute_v2 opentelekomcloud_smn_topic_attribute_v2}
*/
export class SmnTopicAttributeV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_smn_topic_attribute_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SmnTopicAttributeV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmnTopicAttributeV2 to import
  * @param importFromId The id of the existing SmnTopicAttributeV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/smn_topic_attribute_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmnTopicAttributeV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_smn_topic_attribute_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/smn_topic_attribute_v2 opentelekomcloud_smn_topic_attribute_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmnTopicAttributeV2Config
  */
  public constructor(scope: Construct, id: string, config: SmnTopicAttributeV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_smn_topic_attribute_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.55',
        providerVersionConstraint: '1.36.55'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributeName = config.attributeName;
    this._id = config.id;
    this._topicAttribute = config.topicAttribute;
    this._topicUrn = config.topicUrn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_name - computed: false, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
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

  // topic_attribute - computed: false, optional: false, required: true
  private _topicAttribute?: string; 
  public get topicAttribute() {
    return this.getStringAttribute('topic_attribute');
  }
  public set topicAttribute(value: string) {
    this._topicAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicAttributeInput() {
    return this._topicAttribute;
  }

  // topic_urn - computed: false, optional: false, required: true
  private _topicUrn?: string; 
  public get topicUrn() {
    return this.getStringAttribute('topic_urn');
  }
  public set topicUrn(value: string) {
    this._topicUrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicUrnInput() {
    return this._topicUrn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_name: cdktf.stringToTerraform(this._attributeName),
      id: cdktf.stringToTerraform(this._id),
      topic_attribute: cdktf.stringToTerraform(this._topicAttribute),
      topic_urn: cdktf.stringToTerraform(this._topicUrn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_name: {
        value: cdktf.stringToHclTerraform(this._attributeName),
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
      topic_attribute: {
        value: cdktf.stringToHclTerraform(this._topicAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic_urn: {
        value: cdktf.stringToHclTerraform(this._topicUrn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
