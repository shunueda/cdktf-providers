// https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/image_factory_overlays_versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTalosImageFactoryOverlaysVersionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The filter to apply to the overlays list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/image_factory_overlays_versions#filters DataTalosImageFactoryOverlaysVersions#filters}
  */
  readonly filters?: DataTalosImageFactoryOverlaysVersionsFilters;
  /**
  * The talos version to get overlays for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/image_factory_overlays_versions#talos_version DataTalosImageFactoryOverlaysVersions#talos_version}
  */
  readonly talosVersion: string;
}
export interface DataTalosImageFactoryOverlaysVersionsFilters {
  /**
  * The name of the overlay to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/image_factory_overlays_versions#name DataTalosImageFactoryOverlaysVersions#name}
  */
  readonly name?: string;
}

export function dataTalosImageFactoryOverlaysVersionsFiltersToTerraform(struct?: DataTalosImageFactoryOverlaysVersionsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataTalosImageFactoryOverlaysVersionsFiltersToHclTerraform(struct?: DataTalosImageFactoryOverlaysVersionsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataTalosImageFactoryOverlaysVersionsFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTalosImageFactoryOverlaysVersionsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTalosImageFactoryOverlaysVersionsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataTalosImageFactoryOverlaysVersionsOverlaysInfo {
}

export function dataTalosImageFactoryOverlaysVersionsOverlaysInfoToTerraform(struct?: DataTalosImageFactoryOverlaysVersionsOverlaysInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTalosImageFactoryOverlaysVersionsOverlaysInfoToHclTerraform(struct?: DataTalosImageFactoryOverlaysVersionsOverlaysInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTalosImageFactoryOverlaysVersionsOverlaysInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTalosImageFactoryOverlaysVersionsOverlaysInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTalosImageFactoryOverlaysVersionsOverlaysInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }
}

export class DataTalosImageFactoryOverlaysVersionsOverlaysInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTalosImageFactoryOverlaysVersionsOverlaysInfoOutputReference {
    return new DataTalosImageFactoryOverlaysVersionsOverlaysInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/image_factory_overlays_versions talos_image_factory_overlays_versions}
*/
export class DataTalosImageFactoryOverlaysVersions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "talos_image_factory_overlays_versions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTalosImageFactoryOverlaysVersions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTalosImageFactoryOverlaysVersions to import
  * @param importFromId The id of the existing DataTalosImageFactoryOverlaysVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/image_factory_overlays_versions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTalosImageFactoryOverlaysVersions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "talos_image_factory_overlays_versions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/image_factory_overlays_versions talos_image_factory_overlays_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTalosImageFactoryOverlaysVersionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTalosImageFactoryOverlaysVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'talos_image_factory_overlays_versions',
      terraformGeneratorMetadata: {
        providerName: 'talos',
        providerVersion: '0.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters.internalValue = config.filters;
    this._talosVersion = config.talosVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters = new DataTalosImageFactoryOverlaysVersionsFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTalosImageFactoryOverlaysVersionsFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // overlays_info - computed: true, optional: false, required: false
  private _overlaysInfo = new DataTalosImageFactoryOverlaysVersionsOverlaysInfoList(this, "overlays_info", false);
  public get overlaysInfo() {
    return this._overlaysInfo;
  }

  // talos_version - computed: false, optional: false, required: true
  private _talosVersion?: string; 
  public get talosVersion() {
    return this.getStringAttribute('talos_version');
  }
  public set talosVersion(value: string) {
    this._talosVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get talosVersionInput() {
    return this._talosVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: dataTalosImageFactoryOverlaysVersionsFiltersToTerraform(this._filters.internalValue),
      talos_version: cdktf.stringToTerraform(this._talosVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: dataTalosImageFactoryOverlaysVersionsFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataTalosImageFactoryOverlaysVersionsFilters",
      },
      talos_version: {
        value: cdktf.stringToHclTerraform(this._talosVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
