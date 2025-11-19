// https://registry.terraform.io/providers/segmentio/segment/1.6.1/docs/data-sources/source_metadata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSegmentSourceMetadataAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id for this Source metadata in the Segment catalog. Config API note: analogous to `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.1/docs/data-sources/source_metadata#id DataSegmentSourceMetadataA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSegmentSourceMetadataLogosA {
  /**
  * The alternative text for this logo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.1/docs/data-sources/source_metadata#alt DataSegmentSourceMetadataA#alt}
  */
  readonly alt?: string;
  /**
  * The logo mark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.1/docs/data-sources/source_metadata#mark DataSegmentSourceMetadataA#mark}
  */
  readonly mark?: string;
}

export function dataSegmentSourceMetadataLogosAToTerraform(struct?: DataSegmentSourceMetadataLogosA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alt: cdktf.stringToTerraform(struct!.alt),
    mark: cdktf.stringToTerraform(struct!.mark),
  }
}


export function dataSegmentSourceMetadataLogosAToHclTerraform(struct?: DataSegmentSourceMetadataLogosA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alt: {
      value: cdktf.stringToHclTerraform(struct!.alt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mark: {
      value: cdktf.stringToHclTerraform(struct!.mark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSegmentSourceMetadataLogosAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSegmentSourceMetadataLogosA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alt !== undefined) {
      hasAnyValues = true;
      internalValueResult.alt = this._alt;
    }
    if (this._mark !== undefined) {
      hasAnyValues = true;
      internalValueResult.mark = this._mark;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSegmentSourceMetadataLogosA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alt = undefined;
      this._mark = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alt = value.alt;
      this._mark = value.mark;
    }
  }

  // alt - computed: true, optional: true, required: false
  private _alt?: string; 
  public get alt() {
    return this.getStringAttribute('alt');
  }
  public set alt(value: string) {
    this._alt = value;
  }
  public resetAlt() {
    this._alt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altInput() {
    return this._alt;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // mark - computed: true, optional: true, required: false
  private _mark?: string; 
  public get mark() {
    return this.getStringAttribute('mark');
  }
  public set mark(value: string) {
    this._mark = value;
  }
  public resetMark() {
    this._mark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markInput() {
    return this._mark;
  }
}
export interface DataSegmentSourceMetadataOptionsA {
}

export function dataSegmentSourceMetadataOptionsAToTerraform(struct?: DataSegmentSourceMetadataOptionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSegmentSourceMetadataOptionsAToHclTerraform(struct?: DataSegmentSourceMetadataOptionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSegmentSourceMetadataOptionsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSegmentSourceMetadataOptionsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSegmentSourceMetadataOptionsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSegmentSourceMetadataOptionsAList extends cdktf.ComplexList {

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
  public get(index: number): DataSegmentSourceMetadataOptionsAOutputReference {
    return new DataSegmentSourceMetadataOptionsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/segmentio/segment/1.6.1/docs/data-sources/source_metadata segment_source_metadata}
*/
export class DataSegmentSourceMetadataA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "segment_source_metadata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSegmentSourceMetadataA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSegmentSourceMetadataA to import
  * @param importFromId The id of the existing DataSegmentSourceMetadataA that should be imported. Refer to the {@link https://registry.terraform.io/providers/segmentio/segment/1.6.1/docs/data-sources/source_metadata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSegmentSourceMetadataA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "segment_source_metadata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/segmentio/segment/1.6.1/docs/data-sources/source_metadata segment_source_metadata} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSegmentSourceMetadataAConfig
  */
  public constructor(scope: Construct, id: string, config: DataSegmentSourceMetadataAConfig) {
    super(scope, id, {
      terraformResourceType: 'segment_source_metadata',
      terraformGeneratorMetadata: {
        providerName: 'segment',
        providerVersion: '1.6.1',
        providerVersionConstraint: '1.6.1'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // categories - computed: true, optional: false, required: false
  public get categories() {
    return this.getListAttribute('categories');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // is_cloud_event_source - computed: true, optional: false, required: false
  public get isCloudEventSource() {
    return this.getBooleanAttribute('is_cloud_event_source');
  }

  // logos - computed: true, optional: false, required: false
  private _logos = new DataSegmentSourceMetadataLogosAOutputReference(this, "logos");
  public get logos() {
    return this._logos;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // options - computed: true, optional: false, required: false
  private _options = new DataSegmentSourceMetadataOptionsAList(this, "options", false);
  public get options() {
    return this._options;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
