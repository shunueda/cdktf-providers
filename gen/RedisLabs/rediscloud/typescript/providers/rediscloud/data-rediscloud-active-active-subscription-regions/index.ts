// https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/active_active_subscription_regions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRediscloudActiveActiveSubscriptionRegionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/active_active_subscription_regions#id DataRediscloudActiveActiveSubscriptionRegions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Active-Active subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/active_active_subscription_regions#subscription_name DataRediscloudActiveActiveSubscriptionRegions#subscription_name}
  */
  readonly subscriptionName: string;
}
export interface DataRediscloudActiveActiveSubscriptionRegionsRegionsDatabases {
}

export function dataRediscloudActiveActiveSubscriptionRegionsRegionsDatabasesToTerraform(struct?: DataRediscloudActiveActiveSubscriptionRegionsRegionsDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudActiveActiveSubscriptionRegionsRegionsDatabasesToHclTerraform(struct?: DataRediscloudActiveActiveSubscriptionRegionsRegionsDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudActiveActiveSubscriptionRegionsRegionsDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudActiveActiveSubscriptionRegionsRegionsDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudActiveActiveSubscriptionRegionsRegionsDatabases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_id - computed: true, optional: false, required: false
  public get databaseId() {
    return this.getNumberAttribute('database_id');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // read_operations_per_second - computed: true, optional: false, required: false
  public get readOperationsPerSecond() {
    return this.getNumberAttribute('read_operations_per_second');
  }

  // write_operations_per_second - computed: true, optional: false, required: false
  public get writeOperationsPerSecond() {
    return this.getNumberAttribute('write_operations_per_second');
  }
}

export class DataRediscloudActiveActiveSubscriptionRegionsRegionsDatabasesList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudActiveActiveSubscriptionRegionsRegionsDatabasesOutputReference {
    return new DataRediscloudActiveActiveSubscriptionRegionsRegionsDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudActiveActiveSubscriptionRegionsRegions {
}

export function dataRediscloudActiveActiveSubscriptionRegionsRegionsToTerraform(struct?: DataRediscloudActiveActiveSubscriptionRegionsRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudActiveActiveSubscriptionRegionsRegionsToHclTerraform(struct?: DataRediscloudActiveActiveSubscriptionRegionsRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudActiveActiveSubscriptionRegionsRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudActiveActiveSubscriptionRegionsRegions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudActiveActiveSubscriptionRegionsRegions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // databases - computed: true, optional: false, required: false
  private _databases = new DataRediscloudActiveActiveSubscriptionRegionsRegionsDatabasesList(this, "databases", false);
  public get databases() {
    return this._databases;
  }

  // networking_deployment_cidr - computed: true, optional: false, required: false
  public get networkingDeploymentCidr() {
    return this.getStringAttribute('networking_deployment_cidr');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataRediscloudActiveActiveSubscriptionRegionsRegionsList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudActiveActiveSubscriptionRegionsRegionsOutputReference {
    return new DataRediscloudActiveActiveSubscriptionRegionsRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/active_active_subscription_regions rediscloud_active_active_subscription_regions}
*/
export class DataRediscloudActiveActiveSubscriptionRegions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_active_active_subscription_regions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRediscloudActiveActiveSubscriptionRegions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRediscloudActiveActiveSubscriptionRegions to import
  * @param importFromId The id of the existing DataRediscloudActiveActiveSubscriptionRegions that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/active_active_subscription_regions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRediscloudActiveActiveSubscriptionRegions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_active_active_subscription_regions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/active_active_subscription_regions rediscloud_active_active_subscription_regions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRediscloudActiveActiveSubscriptionRegionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataRediscloudActiveActiveSubscriptionRegionsConfig) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_active_active_subscription_regions',
      terraformGeneratorMetadata: {
        providerName: 'rediscloud',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
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
    this._subscriptionName = config.subscriptionName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // regions - computed: true, optional: false, required: false
  private _regions = new DataRediscloudActiveActiveSubscriptionRegionsRegionsList(this, "regions", false);
  public get regions() {
    return this._regions;
  }

  // subscription_name - computed: false, optional: false, required: true
  private _subscriptionName?: string; 
  public get subscriptionName() {
    return this.getStringAttribute('subscription_name');
  }
  public set subscriptionName(value: string) {
    this._subscriptionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionNameInput() {
    return this._subscriptionName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      subscription_name: cdktf.stringToTerraform(this._subscriptionName),
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
      subscription_name: {
        value: cdktf.stringToHclTerraform(this._subscriptionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
