// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/taurusdb_mysql_proxy_flavors_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/taurusdb_mysql_proxy_flavors_v3#id DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/taurusdb_mysql_proxy_flavors_v3#instance_id DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3#instance_id}
  */
  readonly instanceId: string;
}
export interface DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroupsFlavors {
}

export function dataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroupsFlavorsToTerraform(struct?: DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroupsFlavors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroupsFlavorsToHclTerraform(struct?: DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroupsFlavors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroupsFlavorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroupsFlavors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroupsFlavors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // az_status - computed: true, optional: false, required: false
  private _azStatus = new cdktf.StringMap(this, "az_status");
  public get azStatus() {
    return this._azStatus;
  }

  // db_type - computed: true, optional: false, required: false
  public get dbType() {
    return this.getStringAttribute('db_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ram - computed: true, optional: false, required: false
  public get ram() {
    return this.getStringAttribute('ram');
  }

  // spec_code - computed: true, optional: false, required: false
  public get specCode() {
    return this.getStringAttribute('spec_code');
  }

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getStringAttribute('vcpus');
  }
}

export class DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroupsFlavorsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroupsFlavorsOutputReference {
    return new DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroupsFlavorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroups {
}

export function dataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroupsToTerraform(struct?: DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroupsToHclTerraform(struct?: DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flavors - computed: true, optional: false, required: false
  private _flavors = new DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroupsFlavorsList(this, "flavors", false);
  public get flavors() {
    return this._flavors;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroupsOutputReference {
    return new DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/taurusdb_mysql_proxy_flavors_v3 opentelekomcloud_taurusdb_mysql_proxy_flavors_v3}
*/
export class DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_taurusdb_mysql_proxy_flavors_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3 to import
  * @param importFromId The id of the existing DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/taurusdb_mysql_proxy_flavors_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_taurusdb_mysql_proxy_flavors_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/taurusdb_mysql_proxy_flavors_v3 opentelekomcloud_taurusdb_mysql_proxy_flavors_v3} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3Config
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_taurusdb_mysql_proxy_flavors_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.55',
        providerVersionConstraint: '1.36.55'
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
    this._instanceId = config.instanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // flavor_groups - computed: true, optional: false, required: false
  private _flavorGroups = new DataOpentelekomcloudTaurusdbMysqlProxyFlavorsV3FlavorGroupsList(this, "flavor_groups", false);
  public get flavorGroups() {
    return this._flavorGroups;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
