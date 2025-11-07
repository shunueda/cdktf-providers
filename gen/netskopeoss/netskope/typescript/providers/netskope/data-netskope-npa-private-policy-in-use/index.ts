// https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_private_policy_in_use
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetskopeNpaPrivatePolicyInUseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_private_policy_in_use#ids DataNetskopeNpaPrivatePolicyInUse#ids}
  */
  readonly ids?: string[];
}
export interface DataNetskopeNpaPrivatePolicyInUseDataData {
}

export function dataNetskopeNpaPrivatePolicyInUseDataDataToTerraform(struct?: DataNetskopeNpaPrivatePolicyInUseDataData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPrivatePolicyInUseDataDataToHclTerraform(struct?: DataNetskopeNpaPrivatePolicyInUseDataData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPrivatePolicyInUseDataDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPrivatePolicyInUseDataData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPrivatePolicyInUseDataData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}
export interface DataNetskopeNpaPrivatePolicyInUseData {
}

export function dataNetskopeNpaPrivatePolicyInUseDataToTerraform(struct?: DataNetskopeNpaPrivatePolicyInUseData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPrivatePolicyInUseDataToHclTerraform(struct?: DataNetskopeNpaPrivatePolicyInUseData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPrivatePolicyInUseDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaPrivatePolicyInUseData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPrivatePolicyInUseData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataNetskopeNpaPrivatePolicyInUseDataDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataNetskopeNpaPrivatePolicyInUseDataList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaPrivatePolicyInUseDataOutputReference {
    return new DataNetskopeNpaPrivatePolicyInUseDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_private_policy_in_use netskope_npa_private_policy_in_use}
*/
export class DataNetskopeNpaPrivatePolicyInUse extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskope_npa_private_policy_in_use";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetskopeNpaPrivatePolicyInUse resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetskopeNpaPrivatePolicyInUse to import
  * @param importFromId The id of the existing DataNetskopeNpaPrivatePolicyInUse that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_private_policy_in_use#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetskopeNpaPrivatePolicyInUse to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskope_npa_private_policy_in_use", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_private_policy_in_use netskope_npa_private_policy_in_use} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetskopeNpaPrivatePolicyInUseConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetskopeNpaPrivatePolicyInUseConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netskope_npa_private_policy_in_use',
      terraformGeneratorMetadata: {
        providerName: 'netskope',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ids = config.ids;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataNetskopeNpaPrivatePolicyInUseDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
