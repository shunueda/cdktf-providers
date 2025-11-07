// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/quality_definitions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSonarrQualityDefinitionsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataSonarrQualityDefinitionsQualityDefinitions {
  /**
  * Minimum size MB/min.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/quality_definitions#min_size DataSonarrQualityDefinitions#min_size}
  */
  readonly minSize?: number;
}

export function dataSonarrQualityDefinitionsQualityDefinitionsToTerraform(struct?: DataSonarrQualityDefinitionsQualityDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_size: cdktf.numberToTerraform(struct!.minSize),
  }
}


export function dataSonarrQualityDefinitionsQualityDefinitionsToHclTerraform(struct?: DataSonarrQualityDefinitionsQualityDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_size: {
      value: cdktf.numberToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSonarrQualityDefinitionsQualityDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSonarrQualityDefinitionsQualityDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSonarrQualityDefinitionsQualityDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minSize = value.minSize;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // preferred_size - computed: true, optional: false, required: false
  public get preferredSize() {
    return this.getNumberAttribute('preferred_size');
  }

  // quality_id - computed: true, optional: false, required: false
  public get qualityId() {
    return this.getNumberAttribute('quality_id');
  }

  // quality_name - computed: true, optional: false, required: false
  public get qualityName() {
    return this.getStringAttribute('quality_name');
  }

  // resolution - computed: true, optional: false, required: false
  public get resolution() {
    return this.getNumberAttribute('resolution');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataSonarrQualityDefinitionsQualityDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataSonarrQualityDefinitionsQualityDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataSonarrQualityDefinitionsQualityDefinitionsOutputReference {
    return new DataSonarrQualityDefinitionsQualityDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/quality_definitions sonarr_quality_definitions}
*/
export class DataSonarrQualityDefinitions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_quality_definitions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSonarrQualityDefinitions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSonarrQualityDefinitions to import
  * @param importFromId The id of the existing DataSonarrQualityDefinitions that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/quality_definitions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSonarrQualityDefinitions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_quality_definitions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/quality_definitions sonarr_quality_definitions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSonarrQualityDefinitionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSonarrQualityDefinitionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sonarr_quality_definitions',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // quality_definitions - computed: true, optional: false, required: false
  private _qualityDefinitions = new DataSonarrQualityDefinitionsQualityDefinitionsList(this, "quality_definitions", true);
  public get qualityDefinitions() {
    return this._qualityDefinitions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
