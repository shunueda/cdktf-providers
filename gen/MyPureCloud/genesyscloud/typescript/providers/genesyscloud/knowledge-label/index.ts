// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_label
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KnowledgeLabelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_label#id KnowledgeLabel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Knowledge base id of the label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_label#knowledge_base_id KnowledgeLabel#knowledge_base_id}
  */
  readonly knowledgeBaseId: string;
  /**
  * knowledge_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_label#knowledge_label KnowledgeLabel#knowledge_label}
  */
  readonly knowledgeLabel: KnowledgeLabelKnowledgeLabel;
}
export interface KnowledgeLabelKnowledgeLabel {
  /**
  * The color for the label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_label#color KnowledgeLabel#color}
  */
  readonly color: string;
  /**
  * The name of the label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_label#name KnowledgeLabel#name}
  */
  readonly name: string;
}

export function knowledgeLabelKnowledgeLabelToTerraform(struct?: KnowledgeLabelKnowledgeLabelOutputReference | KnowledgeLabelKnowledgeLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function knowledgeLabelKnowledgeLabelToHclTerraform(struct?: KnowledgeLabelKnowledgeLabelOutputReference | KnowledgeLabelKnowledgeLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeLabelKnowledgeLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KnowledgeLabelKnowledgeLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeLabelKnowledgeLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._name = value.name;
    }
  }

  // color - computed: false, optional: false, required: true
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_label genesyscloud_knowledge_label}
*/
export class KnowledgeLabel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_knowledge_label";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KnowledgeLabel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KnowledgeLabel to import
  * @param importFromId The id of the existing KnowledgeLabel that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_label#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KnowledgeLabel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_knowledge_label", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_label genesyscloud_knowledge_label} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KnowledgeLabelConfig
  */
  public constructor(scope: Construct, id: string, config: KnowledgeLabelConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_knowledge_label',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.72.2',
        providerVersionConstraint: '1.72.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._knowledgeBaseId = config.knowledgeBaseId;
    this._knowledgeLabel.internalValue = config.knowledgeLabel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // knowledge_base_id - computed: false, optional: false, required: true
  private _knowledgeBaseId?: string; 
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }
  public set knowledgeBaseId(value: string) {
    this._knowledgeBaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseIdInput() {
    return this._knowledgeBaseId;
  }

  // knowledge_label - computed: false, optional: false, required: true
  private _knowledgeLabel = new KnowledgeLabelKnowledgeLabelOutputReference(this, "knowledge_label");
  public get knowledgeLabel() {
    return this._knowledgeLabel;
  }
  public putKnowledgeLabel(value: KnowledgeLabelKnowledgeLabel) {
    this._knowledgeLabel.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeLabelInput() {
    return this._knowledgeLabel.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      knowledge_base_id: cdktf.stringToTerraform(this._knowledgeBaseId),
      knowledge_label: knowledgeLabelKnowledgeLabelToTerraform(this._knowledgeLabel.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      knowledge_base_id: {
        value: cdktf.stringToHclTerraform(this._knowledgeBaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      knowledge_label: {
        value: knowledgeLabelKnowledgeLabelToHclTerraform(this._knowledgeLabel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KnowledgeLabelKnowledgeLabelList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
