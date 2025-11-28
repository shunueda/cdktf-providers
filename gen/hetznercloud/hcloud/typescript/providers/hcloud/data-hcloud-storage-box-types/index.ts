// https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcloudStorageBoxTypesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataHcloudStorageBoxTypesStorageBoxTypes {
}

export function dataHcloudStorageBoxTypesStorageBoxTypesToTerraform(struct?: DataHcloudStorageBoxTypesStorageBoxTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcloudStorageBoxTypesStorageBoxTypesToHclTerraform(struct?: DataHcloudStorageBoxTypesStorageBoxTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcloudStorageBoxTypesStorageBoxTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHcloudStorageBoxTypesStorageBoxTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcloudStorageBoxTypesStorageBoxTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automatic_snapshot_limit - computed: true, optional: false, required: false
  public get automaticSnapshotLimit() {
    return this.getNumberAttribute('automatic_snapshot_limit');
  }

  // deprecation_announced - computed: true, optional: false, required: false
  public get deprecationAnnounced() {
    return this.getStringAttribute('deprecation_announced');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_deprecated - computed: true, optional: false, required: false
  public get isDeprecated() {
    return this.getBooleanAttribute('is_deprecated');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // snapshot_limit - computed: true, optional: false, required: false
  public get snapshotLimit() {
    return this.getNumberAttribute('snapshot_limit');
  }

  // subaccounts_limit - computed: true, optional: false, required: false
  public get subaccountsLimit() {
    return this.getNumberAttribute('subaccounts_limit');
  }

  // unavailable_after - computed: true, optional: false, required: false
  public get unavailableAfter() {
    return this.getStringAttribute('unavailable_after');
  }
}

export class DataHcloudStorageBoxTypesStorageBoxTypesList extends cdktf.ComplexList {

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
  public get(index: number): DataHcloudStorageBoxTypesStorageBoxTypesOutputReference {
    return new DataHcloudStorageBoxTypesStorageBoxTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box_types hcloud_storage_box_types}
*/
export class DataHcloudStorageBoxTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcloud_storage_box_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcloudStorageBoxTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcloudStorageBoxTypes to import
  * @param importFromId The id of the existing DataHcloudStorageBoxTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcloudStorageBoxTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcloud_storage_box_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box_types hcloud_storage_box_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcloudStorageBoxTypesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHcloudStorageBoxTypesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hcloud_storage_box_types',
      terraformGeneratorMetadata: {
        providerName: 'hcloud',
        providerVersion: '1.57.0',
        providerVersionConstraint: '1.57.0'
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

  // storage_box_types - computed: true, optional: false, required: false
  private _storageBoxTypes = new DataHcloudStorageBoxTypesStorageBoxTypesList(this, "storage_box_types", false);
  public get storageBoxTypes() {
    return this._storageBoxTypes;
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
