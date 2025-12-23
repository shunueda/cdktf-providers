// https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/data-sources/prompt_screen_partials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAuth0PromptScreenPartialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/data-sources/prompt_screen_partials#id DataAuth0PromptScreenPartials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of prompt to customize.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/data-sources/prompt_screen_partials#prompt_type DataAuth0PromptScreenPartials#prompt_type}
  */
  readonly promptType: string;
  /**
  * screen_partials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/data-sources/prompt_screen_partials#screen_partials DataAuth0PromptScreenPartials#screen_partials}
  */
  readonly screenPartials?: DataAuth0PromptScreenPartialsScreenPartials[] | cdktf.IResolvable;
}
export interface DataAuth0PromptScreenPartialsScreenPartialsInsertionPoints {
}

export function dataAuth0PromptScreenPartialsScreenPartialsInsertionPointsToTerraform(struct?: DataAuth0PromptScreenPartialsScreenPartialsInsertionPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0PromptScreenPartialsScreenPartialsInsertionPointsToHclTerraform(struct?: DataAuth0PromptScreenPartialsScreenPartialsInsertionPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0PromptScreenPartialsScreenPartialsInsertionPointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAuth0PromptScreenPartialsScreenPartialsInsertionPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0PromptScreenPartialsScreenPartialsInsertionPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // form_content - computed: true, optional: false, required: false
  public get formContent() {
    return this.getStringAttribute('form_content');
  }

  // form_content_end - computed: true, optional: false, required: false
  public get formContentEnd() {
    return this.getStringAttribute('form_content_end');
  }

  // form_content_start - computed: true, optional: false, required: false
  public get formContentStart() {
    return this.getStringAttribute('form_content_start');
  }

  // form_footer_end - computed: true, optional: false, required: false
  public get formFooterEnd() {
    return this.getStringAttribute('form_footer_end');
  }

  // form_footer_start - computed: true, optional: false, required: false
  public get formFooterStart() {
    return this.getStringAttribute('form_footer_start');
  }

  // secondary_actions_end - computed: true, optional: false, required: false
  public get secondaryActionsEnd() {
    return this.getStringAttribute('secondary_actions_end');
  }

  // secondary_actions_start - computed: true, optional: false, required: false
  public get secondaryActionsStart() {
    return this.getStringAttribute('secondary_actions_start');
  }
}

export class DataAuth0PromptScreenPartialsScreenPartialsInsertionPointsList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0PromptScreenPartialsScreenPartialsInsertionPointsOutputReference {
    return new DataAuth0PromptScreenPartialsScreenPartialsInsertionPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0PromptScreenPartialsScreenPartials {
}

export function dataAuth0PromptScreenPartialsScreenPartialsToTerraform(struct?: DataAuth0PromptScreenPartialsScreenPartials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0PromptScreenPartialsScreenPartialsToHclTerraform(struct?: DataAuth0PromptScreenPartialsScreenPartials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0PromptScreenPartialsScreenPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0PromptScreenPartialsScreenPartials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0PromptScreenPartialsScreenPartials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // insertion_points - computed: true, optional: false, required: false
  private _insertionPoints = new DataAuth0PromptScreenPartialsScreenPartialsInsertionPointsList(this, "insertion_points", false);
  public get insertionPoints() {
    return this._insertionPoints;
  }

  // screen_name - computed: true, optional: false, required: false
  public get screenName() {
    return this.getStringAttribute('screen_name');
  }
}

export class DataAuth0PromptScreenPartialsScreenPartialsList extends cdktf.ComplexList {
  public internalValue? : DataAuth0PromptScreenPartialsScreenPartials[] | cdktf.IResolvable

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
  public get(index: number): DataAuth0PromptScreenPartialsScreenPartialsOutputReference {
    return new DataAuth0PromptScreenPartialsScreenPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/data-sources/prompt_screen_partials auth0_prompt_screen_partials}
*/
export class DataAuth0PromptScreenPartials extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_prompt_screen_partials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAuth0PromptScreenPartials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAuth0PromptScreenPartials to import
  * @param importFromId The id of the existing DataAuth0PromptScreenPartials that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/data-sources/prompt_screen_partials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAuth0PromptScreenPartials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_prompt_screen_partials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/data-sources/prompt_screen_partials auth0_prompt_screen_partials} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAuth0PromptScreenPartialsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAuth0PromptScreenPartialsConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_prompt_screen_partials',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.37.0',
        providerVersionConstraint: '1.37.0'
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
    this._promptType = config.promptType;
    this._screenPartials.internalValue = config.screenPartials;
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

  // prompt_type - computed: false, optional: false, required: true
  private _promptType?: string; 
  public get promptType() {
    return this.getStringAttribute('prompt_type');
  }
  public set promptType(value: string) {
    this._promptType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promptTypeInput() {
    return this._promptType;
  }

  // screen_partials - computed: false, optional: true, required: false
  private _screenPartials = new DataAuth0PromptScreenPartialsScreenPartialsList(this, "screen_partials", false);
  public get screenPartials() {
    return this._screenPartials;
  }
  public putScreenPartials(value: DataAuth0PromptScreenPartialsScreenPartials[] | cdktf.IResolvable) {
    this._screenPartials.internalValue = value;
  }
  public resetScreenPartials() {
    this._screenPartials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get screenPartialsInput() {
    return this._screenPartials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      prompt_type: cdktf.stringToTerraform(this._promptType),
      screen_partials: cdktf.listMapper(dataAuth0PromptScreenPartialsScreenPartialsToTerraform, true)(this._screenPartials.internalValue),
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
      prompt_type: {
        value: cdktf.stringToHclTerraform(this._promptType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      screen_partials: {
        value: cdktf.listMapperHcl(dataAuth0PromptScreenPartialsScreenPartialsToHclTerraform, true)(this._screenPartials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAuth0PromptScreenPartialsScreenPartialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
