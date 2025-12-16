// https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/pack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCriblioPackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/pack#disabled DataCriblioPack#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The consumer group to which this instance belongs. Defaults to 'Cribl'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/pack#group_id DataCriblioPack#group_id}
  */
  readonly groupId: string;
  /**
  * Pack name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/pack#id DataCriblioPack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Comma separated list of entities, "outputs", "inputs"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/pack#with DataCriblioPack#with}
  */
  readonly with?: string;
}
export interface DataCriblioPackItemsTags {
}

export function dataCriblioPackItemsTagsToTerraform(struct?: DataCriblioPackItemsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioPackItemsTagsToHclTerraform(struct?: DataCriblioPackItemsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioPackItemsTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioPackItemsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioPackItemsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getListAttribute('data_type');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getListAttribute('domain');
  }

  // streamtags - computed: true, optional: false, required: false
  public get streamtags() {
    return this.getListAttribute('streamtags');
  }

  // technology - computed: true, optional: false, required: false
  public get technology() {
    return this.getListAttribute('technology');
  }
}
export interface DataCriblioPackItems {
}

export function dataCriblioPackItemsToTerraform(struct?: DataCriblioPackItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioPackItemsToHclTerraform(struct?: DataCriblioPackItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioPackItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCriblioPackItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioPackItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // exports - computed: true, optional: false, required: false
  public get exports() {
    return this.getListAttribute('exports');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inputs - computed: true, optional: false, required: false
  public get inputs() {
    return this.getNumberAttribute('inputs');
  }

  // is_disabled - computed: true, optional: false, required: false
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }

  // min_log_stream_version - computed: true, optional: false, required: false
  public get minLogStreamVersion() {
    return this.getStringAttribute('min_log_stream_version');
  }

  // outputs - computed: true, optional: false, required: false
  public get outputs() {
    return this.getNumberAttribute('outputs');
  }

  // settings - computed: true, optional: false, required: false
  private _settings = new cdktf.StringMap(this, "settings");
  public get settings() {
    return this._settings;
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // spec - computed: true, optional: false, required: false
  public get spec() {
    return this.getStringAttribute('spec');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataCriblioPackItemsTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // warnings - computed: true, optional: false, required: false
  public get warnings() {
    return this.getStringAttribute('warnings');
  }
}

export class DataCriblioPackItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataCriblioPackItemsOutputReference {
    return new DataCriblioPackItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/pack criblio_pack}
*/
export class DataCriblioPack extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_pack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCriblioPack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCriblioPack to import
  * @param importFromId The id of the existing DataCriblioPack that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/pack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCriblioPack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_pack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/pack criblio_pack} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCriblioPackConfig
  */
  public constructor(scope: Construct, id: string, config: DataCriblioPackConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_pack',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.64',
        providerVersionConstraint: '1.20.64'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disabled = config.disabled;
    this._groupId = config.groupId;
    this._id = config.id;
    this._with = config.with;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataCriblioPackItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // with - computed: false, optional: true, required: false
  private _with?: string; 
  public get with() {
    return this.getStringAttribute('with');
  }
  public set with(value: string) {
    this._with = value;
  }
  public resetWith() {
    this._with = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withInput() {
    return this._with;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disabled: cdktf.booleanToTerraform(this._disabled),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      with: cdktf.stringToTerraform(this._with),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      with: {
        value: cdktf.stringToHclTerraform(this._with),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
