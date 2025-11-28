// https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/datacenters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcloudDatacentersConfig extends cdktf.TerraformMetaArguments {
}
export interface DataHcloudDatacentersDatacenters {
}

export function dataHcloudDatacentersDatacentersToTerraform(struct?: DataHcloudDatacentersDatacenters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcloudDatacentersDatacentersToHclTerraform(struct?: DataHcloudDatacentersDatacenters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcloudDatacentersDatacentersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHcloudDatacentersDatacenters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcloudDatacentersDatacenters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_server_type_ids - computed: true, optional: false, required: false
  public get availableServerTypeIds() {
    return this.getNumberListAttribute('available_server_type_ids');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  private _location = new cdktf.StringMap(this, "location");
  public get location() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // supported_server_type_ids - computed: true, optional: false, required: false
  public get supportedServerTypeIds() {
    return this.getNumberListAttribute('supported_server_type_ids');
  }
}

export class DataHcloudDatacentersDatacentersList extends cdktf.ComplexList {

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
  public get(index: number): DataHcloudDatacentersDatacentersOutputReference {
    return new DataHcloudDatacentersDatacentersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/datacenters hcloud_datacenters}
*/
export class DataHcloudDatacenters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcloud_datacenters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcloudDatacenters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcloudDatacenters to import
  * @param importFromId The id of the existing DataHcloudDatacenters that should be imported. Refer to the {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/datacenters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcloudDatacenters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcloud_datacenters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/datacenters hcloud_datacenters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcloudDatacentersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHcloudDatacentersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hcloud_datacenters',
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

  // datacenter_ids - computed: true, optional: false, required: false
  public get datacenterIds() {
    return this.getListAttribute('datacenter_ids');
  }

  // datacenters - computed: true, optional: false, required: false
  private _datacenters = new DataHcloudDatacentersDatacentersList(this, "datacenters", false);
  public get datacenters() {
    return this._datacenters;
  }

  // descriptions - computed: true, optional: false, required: false
  public get descriptions() {
    return this.getListAttribute('descriptions');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
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
