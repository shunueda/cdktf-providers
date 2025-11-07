// https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/hosts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataXenorchestraHostsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/hosts#id DataXenorchestraHosts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The pool id used to filter the resulting hosts by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/hosts#pool_id DataXenorchestraHosts#pool_id}
  */
  readonly poolId: string;
  /**
  * The host field to sort the results by (id and name_label are supported).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/hosts#sort_by DataXenorchestraHosts#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Valid options are `asc` or `desc` and sort order is applied to `sort_by` argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/hosts#sort_order DataXenorchestraHosts#sort_order}
  */
  readonly sortOrder?: string;
  /**
  * The tags (labels) applied to the given entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/hosts#tags DataXenorchestraHosts#tags}
  */
  readonly tags?: string[];
}
export interface DataXenorchestraHostsHosts {
}

export function dataXenorchestraHostsHostsToTerraform(struct?: DataXenorchestraHostsHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataXenorchestraHostsHostsToHclTerraform(struct?: DataXenorchestraHostsHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataXenorchestraHostsHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataXenorchestraHostsHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataXenorchestraHostsHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpus - computed: true, optional: false, required: false
  private _cpus = new cdktf.NumberMap(this, "cpus");
  public get cpus() {
    return this._cpus;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // memory_usage - computed: true, optional: false, required: false
  public get memoryUsage() {
    return this.getNumberAttribute('memory_usage');
  }

  // name_label - computed: true, optional: false, required: false
  public get nameLabel() {
    return this.getStringAttribute('name_label');
  }

  // pool_id - computed: true, optional: false, required: false
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
}

export class DataXenorchestraHostsHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataXenorchestraHostsHostsOutputReference {
    return new DataXenorchestraHostsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/hosts xenorchestra_hosts}
*/
export class DataXenorchestraHosts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xenorchestra_hosts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataXenorchestraHosts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataXenorchestraHosts to import
  * @param importFromId The id of the existing DataXenorchestraHosts that should be imported. Refer to the {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/hosts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataXenorchestraHosts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xenorchestra_hosts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/hosts xenorchestra_hosts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataXenorchestraHostsConfig
  */
  public constructor(scope: Construct, id: string, config: DataXenorchestraHostsConfig) {
    super(scope, id, {
      terraformResourceType: 'xenorchestra_hosts',
      terraformGeneratorMetadata: {
        providerName: 'xenorchestra',
        providerVersion: '0.26.1'
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
    this._poolId = config.poolId;
    this._sortBy = config.sortBy;
    this._sortOrder = config.sortOrder;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataXenorchestraHostsHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
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

  // master - computed: true, optional: false, required: false
  public get master() {
    return this.getStringAttribute('master');
  }

  // pool_id - computed: false, optional: false, required: true
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: string; 
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
  public set sortOrder(value: string) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pool_id: cdktf.stringToTerraform(this._poolId),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      sort_order: cdktf.stringToTerraform(this._sortOrder),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
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
      pool_id: {
        value: cdktf.stringToHclTerraform(this._poolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_by: {
        value: cdktf.stringToHclTerraform(this._sortBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_order: {
        value: cdktf.stringToHclTerraform(this._sortOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
