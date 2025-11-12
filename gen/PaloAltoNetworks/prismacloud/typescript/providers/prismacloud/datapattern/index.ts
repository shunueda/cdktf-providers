// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/datapattern
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatapatternConfig extends cdktf.TerraformMetaArguments {
  /**
  * Pattern description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/datapattern#description Datapattern#description}
  */
  readonly description?: string;
  /**
  * Detection technique
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/datapattern#detection_technique Datapattern#detection_technique}
  */
  readonly detectionTechnique?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/datapattern#id Datapattern#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Pattern name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/datapattern#name Datapattern#name}
  */
  readonly name: string;
  /**
  * List of proximity keywords
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/datapattern#proximity_keywords Datapattern#proximity_keywords}
  */
  readonly proximityKeywords?: string[];
  /**
  * regexes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/datapattern#regexes Datapattern#regexes}
  */
  readonly regexes: DatapatternRegexes[] | cdktf.IResolvable;
}
export interface DatapatternRegexes {
  /**
  * Regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/datapattern#regex Datapattern#regex}
  */
  readonly regex: string;
  /**
  * Weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/datapattern#weight Datapattern#weight}
  */
  readonly weight?: number;
}

export function datapatternRegexesToTerraform(struct?: DatapatternRegexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex: cdktf.stringToTerraform(struct!.regex),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function datapatternRegexesToHclTerraform(struct?: DatapatternRegexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatapatternRegexesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatapatternRegexes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatapatternRegexes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regex = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regex = value.regex;
      this._weight = value.weight;
    }
  }

  // regex - computed: false, optional: false, required: true
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DatapatternRegexesList extends cdktf.ComplexList {
  public internalValue? : DatapatternRegexes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatapatternRegexesOutputReference {
    return new DatapatternRegexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/datapattern prismacloud_datapattern}
*/
export class Datapattern extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_datapattern";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Datapattern resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Datapattern to import
  * @param importFromId The id of the existing Datapattern that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/datapattern#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Datapattern to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_datapattern", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/datapattern prismacloud_datapattern} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatapatternConfig
  */
  public constructor(scope: Construct, id: string, config: DatapatternConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_datapattern',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
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
    this._detectionTechnique = config.detectionTechnique;
    this._id = config.id;
    this._name = config.name;
    this._proximityKeywords = config.proximityKeywords;
    this._regexes.internalValue = config.regexes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: false, optional: true, required: false
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

  // detection_technique - computed: false, optional: true, required: false
  private _detectionTechnique?: string; 
  public get detectionTechnique() {
    return this.getStringAttribute('detection_technique');
  }
  public set detectionTechnique(value: string) {
    this._detectionTechnique = value;
  }
  public resetDetectionTechnique() {
    this._detectionTechnique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionTechniqueInput() {
    return this._detectionTechnique;
  }

  // entity - computed: true, optional: false, required: false
  public get entity() {
    return this.getStringAttribute('entity');
  }

  // grammar - computed: true, optional: false, required: false
  public get grammar() {
    return this.getStringAttribute('grammar');
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

  // is_editable - computed: true, optional: false, required: false
  public get isEditable() {
    return this.getBooleanAttribute('is_editable');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
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

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // pattern_id - computed: true, optional: false, required: false
  public get patternId() {
    return this.getStringAttribute('pattern_id');
  }

  // proximity_keywords - computed: false, optional: true, required: false
  private _proximityKeywords?: string[]; 
  public get proximityKeywords() {
    return cdktf.Fn.tolist(this.getListAttribute('proximity_keywords'));
  }
  public set proximityKeywords(value: string[]) {
    this._proximityKeywords = value;
  }
  public resetProximityKeywords() {
    this._proximityKeywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityKeywordsInput() {
    return this._proximityKeywords;
  }

  // root_type - computed: true, optional: false, required: false
  public get rootType() {
    return this.getStringAttribute('root_type');
  }

  // s3_path - computed: true, optional: false, required: false
  public get s3Path() {
    return this.getStringAttribute('s3_path');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // regexes - computed: false, optional: false, required: true
  private _regexes = new DatapatternRegexesList(this, "regexes", true);
  public get regexes() {
    return this._regexes;
  }
  public putRegexes(value: DatapatternRegexes[] | cdktf.IResolvable) {
    this._regexes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexesInput() {
    return this._regexes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      detection_technique: cdktf.stringToTerraform(this._detectionTechnique),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      proximity_keywords: cdktf.listMapper(cdktf.stringToTerraform, false)(this._proximityKeywords),
      regexes: cdktf.listMapper(datapatternRegexesToTerraform, true)(this._regexes.internalValue),
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
      detection_technique: {
        value: cdktf.stringToHclTerraform(this._detectionTechnique),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proximity_keywords: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._proximityKeywords),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      regexes: {
        value: cdktf.listMapperHcl(datapatternRegexesToHclTerraform, true)(this._regexes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatapatternRegexesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
