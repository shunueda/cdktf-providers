// https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/image_factory_versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTalosImageFactoryVersionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The filter to apply to the overlays list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/image_factory_versions#filters DataTalosImageFactoryVersions#filters}
  */
  readonly filters?: DataTalosImageFactoryVersionsFilters;
}
export interface DataTalosImageFactoryVersionsFilters {
  /**
  * If set to true, only stable versions will be returned. If set to false, all versions will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/image_factory_versions#stable_versions_only DataTalosImageFactoryVersions#stable_versions_only}
  */
  readonly stableVersionsOnly?: boolean | cdktf.IResolvable;
}

export function dataTalosImageFactoryVersionsFiltersToTerraform(struct?: DataTalosImageFactoryVersionsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stable_versions_only: cdktf.booleanToTerraform(struct!.stableVersionsOnly),
  }
}


export function dataTalosImageFactoryVersionsFiltersToHclTerraform(struct?: DataTalosImageFactoryVersionsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stable_versions_only: {
      value: cdktf.booleanToHclTerraform(struct!.stableVersionsOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTalosImageFactoryVersionsFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTalosImageFactoryVersionsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stableVersionsOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.stableVersionsOnly = this._stableVersionsOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTalosImageFactoryVersionsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stableVersionsOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stableVersionsOnly = value.stableVersionsOnly;
    }
  }

  // stable_versions_only - computed: false, optional: true, required: false
  private _stableVersionsOnly?: boolean | cdktf.IResolvable; 
  public get stableVersionsOnly() {
    return this.getBooleanAttribute('stable_versions_only');
  }
  public set stableVersionsOnly(value: boolean | cdktf.IResolvable) {
    this._stableVersionsOnly = value;
  }
  public resetStableVersionsOnly() {
    this._stableVersionsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stableVersionsOnlyInput() {
    return this._stableVersionsOnly;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/image_factory_versions talos_image_factory_versions}
*/
export class DataTalosImageFactoryVersions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "talos_image_factory_versions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTalosImageFactoryVersions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTalosImageFactoryVersions to import
  * @param importFromId The id of the existing DataTalosImageFactoryVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/image_factory_versions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTalosImageFactoryVersions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "talos_image_factory_versions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/image_factory_versions talos_image_factory_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTalosImageFactoryVersionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTalosImageFactoryVersionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'talos_image_factory_versions',
      terraformGeneratorMetadata: {
        providerName: 'talos',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters = new DataTalosImageFactoryVersionsFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTalosImageFactoryVersionsFilters) {
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

  // talos_versions - computed: true, optional: false, required: false
  public get talosVersions() {
    return this.getListAttribute('talos_versions');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: dataTalosImageFactoryVersionsFiltersToTerraform(this._filters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: dataTalosImageFactoryVersionsFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataTalosImageFactoryVersionsFilters",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
