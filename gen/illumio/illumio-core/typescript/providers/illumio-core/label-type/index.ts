// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/label_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LabelTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The display name of the label type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/label_type#display_name LabelType#display_name}
  */
  readonly displayName: string;
  /**
  * A unique identifier within the external data source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/label_type#external_data_reference LabelType#external_data_reference}
  */
  readonly externalDataReference?: string;
  /**
  * The data source from which a resource originates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/label_type#external_data_set LabelType#external_data_set}
  */
  readonly externalDataSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/label_type#id LabelType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key in key-value pair. The value must be a string between 1 and 64 characters long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/label_type#key LabelType#key}
  */
  readonly key: string;
  /**
  * display_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/label_type#display_info LabelType#display_info}
  */
  readonly displayInfo?: LabelTypeDisplayInfo;
}
export interface LabelTypeDisplayInfo {
  /**
  * Background color in hexadecimal for UI display
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/label_type#background_color LabelType#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * Optional pluralized form of the display name for the label type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/label_type#display_name_plural LabelType#display_name_plural}
  */
  readonly displayNamePlural?: string;
  /**
  * Foreground color in hexadecimal for UI display
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/label_type#foreground_color LabelType#foreground_color}
  */
  readonly foregroundColor?: string;
  /**
  * Icon for use in the UI display
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/label_type#icon LabelType#icon}
  */
  readonly icon?: string;
  /**
  * 1-2 initial characters for use in the UI display. Defaults to the first letter of the label type's display_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/label_type#initial LabelType#initial}
  */
  readonly initial?: string;
  /**
  * Optional user provided sort order for label type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/label_type#sort_ordinal LabelType#sort_ordinal}
  */
  readonly sortOrdinal?: string;
}

export function labelTypeDisplayInfoToTerraform(struct?: LabelTypeDisplayInfoOutputReference | LabelTypeDisplayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    display_name_plural: cdktf.stringToTerraform(struct!.displayNamePlural),
    foreground_color: cdktf.stringToTerraform(struct!.foregroundColor),
    icon: cdktf.stringToTerraform(struct!.icon),
    initial: cdktf.stringToTerraform(struct!.initial),
    sort_ordinal: cdktf.stringToTerraform(struct!.sortOrdinal),
  }
}


export function labelTypeDisplayInfoToHclTerraform(struct?: LabelTypeDisplayInfoOutputReference | LabelTypeDisplayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name_plural: {
      value: cdktf.stringToHclTerraform(struct!.displayNamePlural),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    foreground_color: {
      value: cdktf.stringToHclTerraform(struct!.foregroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial: {
      value: cdktf.stringToHclTerraform(struct!.initial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_ordinal: {
      value: cdktf.stringToHclTerraform(struct!.sortOrdinal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LabelTypeDisplayInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LabelTypeDisplayInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._displayNamePlural !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayNamePlural = this._displayNamePlural;
    }
    if (this._foregroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.foregroundColor = this._foregroundColor;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._initial !== undefined) {
      hasAnyValues = true;
      internalValueResult.initial = this._initial;
    }
    if (this._sortOrdinal !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortOrdinal = this._sortOrdinal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LabelTypeDisplayInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backgroundColor = undefined;
      this._displayNamePlural = undefined;
      this._foregroundColor = undefined;
      this._icon = undefined;
      this._initial = undefined;
      this._sortOrdinal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backgroundColor = value.backgroundColor;
      this._displayNamePlural = value.displayNamePlural;
      this._foregroundColor = value.foregroundColor;
      this._icon = value.icon;
      this._initial = value.initial;
      this._sortOrdinal = value.sortOrdinal;
    }
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // display_name_plural - computed: false, optional: true, required: false
  private _displayNamePlural?: string; 
  public get displayNamePlural() {
    return this.getStringAttribute('display_name_plural');
  }
  public set displayNamePlural(value: string) {
    this._displayNamePlural = value;
  }
  public resetDisplayNamePlural() {
    this._displayNamePlural = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNamePluralInput() {
    return this._displayNamePlural;
  }

  // foreground_color - computed: false, optional: true, required: false
  private _foregroundColor?: string; 
  public get foregroundColor() {
    return this.getStringAttribute('foreground_color');
  }
  public set foregroundColor(value: string) {
    this._foregroundColor = value;
  }
  public resetForegroundColor() {
    this._foregroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foregroundColorInput() {
    return this._foregroundColor;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // initial - computed: false, optional: true, required: false
  private _initial?: string; 
  public get initial() {
    return this.getStringAttribute('initial');
  }
  public set initial(value: string) {
    this._initial = value;
  }
  public resetInitial() {
    this._initial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialInput() {
    return this._initial;
  }

  // sort_ordinal - computed: false, optional: true, required: false
  private _sortOrdinal?: string; 
  public get sortOrdinal() {
    return this.getStringAttribute('sort_ordinal');
  }
  public set sortOrdinal(value: string) {
    this._sortOrdinal = value;
  }
  public resetSortOrdinal() {
    this._sortOrdinal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrdinalInput() {
    return this._sortOrdinal;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/label_type illumio-core_label_type}
*/
export class LabelType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_label_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LabelType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LabelType to import
  * @param importFromId The id of the existing LabelType that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/label_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LabelType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_label_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/label_type illumio-core_label_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LabelTypeConfig
  */
  public constructor(scope: Construct, id: string, config: LabelTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_label_type',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._externalDataReference = config.externalDataReference;
    this._externalDataSet = config.externalDataSet;
    this._id = config.id;
    this._key = config.key;
    this._displayInfo.internalValue = config.displayInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // caps - computed: true, optional: false, required: false
  public get caps() {
    return this.getListAttribute('caps');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // deleted_by - computed: true, optional: false, required: false
  private _deletedBy = new cdktf.StringMap(this, "deleted_by");
  public get deletedBy() {
    return this._deletedBy;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // external_data_reference - computed: false, optional: true, required: false
  private _externalDataReference?: string; 
  public get externalDataReference() {
    return this.getStringAttribute('external_data_reference');
  }
  public set externalDataReference(value: string) {
    this._externalDataReference = value;
  }
  public resetExternalDataReference() {
    this._externalDataReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataReferenceInput() {
    return this._externalDataReference;
  }

  // external_data_set - computed: false, optional: true, required: false
  private _externalDataSet?: string; 
  public get externalDataSet() {
    return this.getStringAttribute('external_data_set');
  }
  public set externalDataSet(value: string) {
    this._externalDataSet = value;
  }
  public resetExternalDataSet() {
    this._externalDataSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataSetInput() {
    return this._externalDataSet;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new cdktf.StringMap(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // usage - computed: true, optional: false, required: false
  private _usage = new cdktf.BooleanMap(this, "usage");
  public get usage() {
    return this._usage;
  }

  // display_info - computed: false, optional: true, required: false
  private _displayInfo = new LabelTypeDisplayInfoOutputReference(this, "display_info");
  public get displayInfo() {
    return this._displayInfo;
  }
  public putDisplayInfo(value: LabelTypeDisplayInfo) {
    this._displayInfo.internalValue = value;
  }
  public resetDisplayInfo() {
    this._displayInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInfoInput() {
    return this._displayInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      external_data_reference: cdktf.stringToTerraform(this._externalDataReference),
      external_data_set: cdktf.stringToTerraform(this._externalDataSet),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      display_info: labelTypeDisplayInfoToTerraform(this._displayInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_data_reference: {
        value: cdktf.stringToHclTerraform(this._externalDataReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_data_set: {
        value: cdktf.stringToHclTerraform(this._externalDataSet),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_info: {
        value: labelTypeDisplayInfoToHclTerraform(this._displayInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LabelTypeDisplayInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
