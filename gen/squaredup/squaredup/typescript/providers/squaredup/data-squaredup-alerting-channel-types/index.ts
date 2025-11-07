// https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/alerting_channel_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSquaredupAlertingChannelTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter Alerting Channel Types by Display Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/alerting_channel_types#display_name DataSquaredupAlertingChannelTypes#display_name}
  */
  readonly displayName?: string;
}
export interface DataSquaredupAlertingChannelTypesAlertingChannelTypes {
}

export function dataSquaredupAlertingChannelTypesAlertingChannelTypesToTerraform(struct?: DataSquaredupAlertingChannelTypesAlertingChannelTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSquaredupAlertingChannelTypesAlertingChannelTypesToHclTerraform(struct?: DataSquaredupAlertingChannelTypesAlertingChannelTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSquaredupAlertingChannelTypesAlertingChannelTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSquaredupAlertingChannelTypesAlertingChannelTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSquaredupAlertingChannelTypesAlertingChannelTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // image_preview_supported - computed: true, optional: false, required: false
  public get imagePreviewSupported() {
    return this.getBooleanAttribute('image_preview_supported');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataSquaredupAlertingChannelTypesAlertingChannelTypesList extends cdktf.ComplexList {

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
  public get(index: number): DataSquaredupAlertingChannelTypesAlertingChannelTypesOutputReference {
    return new DataSquaredupAlertingChannelTypesAlertingChannelTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/alerting_channel_types squaredup_alerting_channel_types}
*/
export class DataSquaredupAlertingChannelTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "squaredup_alerting_channel_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSquaredupAlertingChannelTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSquaredupAlertingChannelTypes to import
  * @param importFromId The id of the existing DataSquaredupAlertingChannelTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/alerting_channel_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSquaredupAlertingChannelTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "squaredup_alerting_channel_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/alerting_channel_types squaredup_alerting_channel_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSquaredupAlertingChannelTypesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSquaredupAlertingChannelTypesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'squaredup_alerting_channel_types',
      terraformGeneratorMetadata: {
        providerName: 'squaredup',
        providerVersion: '1.5.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerting_channel_types - computed: true, optional: false, required: false
  private _alertingChannelTypes = new DataSquaredupAlertingChannelTypesAlertingChannelTypesList(this, "alerting_channel_types", false);
  public get alertingChannelTypes() {
    return this._alertingChannelTypes;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
