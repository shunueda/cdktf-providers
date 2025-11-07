// https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/data-sources/quickstart_packages
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFivetranQuickstartPackagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * packages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/data-sources/quickstart_packages#packages DataFivetranQuickstartPackages#packages}
  */
  readonly packages?: DataFivetranQuickstartPackagesPackages[] | cdktf.IResolvable;
}
export interface DataFivetranQuickstartPackagesPackages {
}

export function dataFivetranQuickstartPackagesPackagesToTerraform(struct?: DataFivetranQuickstartPackagesPackages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranQuickstartPackagesPackagesToHclTerraform(struct?: DataFivetranQuickstartPackagesPackages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranQuickstartPackagesPackagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranQuickstartPackagesPackages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranQuickstartPackagesPackages | cdktf.IResolvable | undefined) {
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

  // connector_types - computed: true, optional: false, required: false
  public get connectorTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('connector_types'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // output_model_names - computed: true, optional: false, required: false
  public get outputModelNames() {
    return cdktf.Fn.tolist(this.getListAttribute('output_model_names'));
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataFivetranQuickstartPackagesPackagesList extends cdktf.ComplexList {
  public internalValue? : DataFivetranQuickstartPackagesPackages[] | cdktf.IResolvable

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
  public get(index: number): DataFivetranQuickstartPackagesPackagesOutputReference {
    return new DataFivetranQuickstartPackagesPackagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/data-sources/quickstart_packages fivetran_quickstart_packages}
*/
export class DataFivetranQuickstartPackages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_quickstart_packages";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFivetranQuickstartPackages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFivetranQuickstartPackages to import
  * @param importFromId The id of the existing DataFivetranQuickstartPackages that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/data-sources/quickstart_packages#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFivetranQuickstartPackages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_quickstart_packages", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/data-sources/quickstart_packages fivetran_quickstart_packages} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFivetranQuickstartPackagesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFivetranQuickstartPackagesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fivetran_quickstart_packages',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._packages.internalValue = config.packages;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // packages - computed: false, optional: true, required: false
  private _packages = new DataFivetranQuickstartPackagesPackagesList(this, "packages", false);
  public get packages() {
    return this._packages;
  }
  public putPackages(value: DataFivetranQuickstartPackagesPackages[] | cdktf.IResolvable) {
    this._packages.internalValue = value;
  }
  public resetPackages() {
    this._packages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      packages: cdktf.listMapper(dataFivetranQuickstartPackagesPackagesToTerraform, true)(this._packages.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      packages: {
        value: cdktf.listMapperHcl(dataFivetranQuickstartPackagesPackagesToHclTerraform, true)(this._packages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFivetranQuickstartPackagesPackagesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
