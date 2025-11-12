// https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActiveActiveSubscriptionRegionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Delete regions flag has to be set for re-creating and deleting regions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions#delete_regions ActiveActiveSubscriptionRegions#delete_regions}
  */
  readonly deleteRegions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions#id ActiveActiveSubscriptionRegions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the subscription that the regions belong to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions#subscription_id ActiveActiveSubscriptionRegions#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions#region ActiveActiveSubscriptionRegions#region}
  */
  readonly region: ActiveActiveSubscriptionRegionsRegion[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions#timeouts ActiveActiveSubscriptionRegions#timeouts}
  */
  readonly timeouts?: ActiveActiveSubscriptionRegionsTimeouts;
}
export interface ActiveActiveSubscriptionRegionsRegionDatabase {
  /**
  * A numeric id for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions#database_id ActiveActiveSubscriptionRegions#database_id}
  */
  readonly databaseId: number;
  /**
  * A meaningful name to identify the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions#database_name ActiveActiveSubscriptionRegions#database_name}
  */
  readonly databaseName: string;
  /**
  * Write operations per second for creation plan databases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions#local_read_operations_per_second ActiveActiveSubscriptionRegions#local_read_operations_per_second}
  */
  readonly localReadOperationsPerSecond: number;
  /**
  * Write operations per second for creation plan databases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions#local_write_operations_per_second ActiveActiveSubscriptionRegions#local_write_operations_per_second}
  */
  readonly localWriteOperationsPerSecond: number;
}

export function activeActiveSubscriptionRegionsRegionDatabaseToTerraform(struct?: ActiveActiveSubscriptionRegionsRegionDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_id: cdktf.numberToTerraform(struct!.databaseId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    local_read_operations_per_second: cdktf.numberToTerraform(struct!.localReadOperationsPerSecond),
    local_write_operations_per_second: cdktf.numberToTerraform(struct!.localWriteOperationsPerSecond),
  }
}


export function activeActiveSubscriptionRegionsRegionDatabaseToHclTerraform(struct?: ActiveActiveSubscriptionRegionsRegionDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_id: {
      value: cdktf.numberToHclTerraform(struct!.databaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_read_operations_per_second: {
      value: cdktf.numberToHclTerraform(struct!.localReadOperationsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_write_operations_per_second: {
      value: cdktf.numberToHclTerraform(struct!.localWriteOperationsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActiveActiveSubscriptionRegionsRegionDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActiveActiveSubscriptionRegionsRegionDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseId = this._databaseId;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._localReadOperationsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.localReadOperationsPerSecond = this._localReadOperationsPerSecond;
    }
    if (this._localWriteOperationsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.localWriteOperationsPerSecond = this._localWriteOperationsPerSecond;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiveActiveSubscriptionRegionsRegionDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseId = undefined;
      this._databaseName = undefined;
      this._localReadOperationsPerSecond = undefined;
      this._localWriteOperationsPerSecond = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseId = value.databaseId;
      this._databaseName = value.databaseName;
      this._localReadOperationsPerSecond = value.localReadOperationsPerSecond;
      this._localWriteOperationsPerSecond = value.localWriteOperationsPerSecond;
    }
  }

  // database_id - computed: false, optional: false, required: true
  private _databaseId?: number; 
  public get databaseId() {
    return this.getNumberAttribute('database_id');
  }
  public set databaseId(value: number) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // local_read_operations_per_second - computed: false, optional: false, required: true
  private _localReadOperationsPerSecond?: number; 
  public get localReadOperationsPerSecond() {
    return this.getNumberAttribute('local_read_operations_per_second');
  }
  public set localReadOperationsPerSecond(value: number) {
    this._localReadOperationsPerSecond = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localReadOperationsPerSecondInput() {
    return this._localReadOperationsPerSecond;
  }

  // local_write_operations_per_second - computed: false, optional: false, required: true
  private _localWriteOperationsPerSecond?: number; 
  public get localWriteOperationsPerSecond() {
    return this.getNumberAttribute('local_write_operations_per_second');
  }
  public set localWriteOperationsPerSecond(value: number) {
    this._localWriteOperationsPerSecond = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localWriteOperationsPerSecondInput() {
    return this._localWriteOperationsPerSecond;
  }
}

export class ActiveActiveSubscriptionRegionsRegionDatabaseList extends cdktf.ComplexList {
  public internalValue? : ActiveActiveSubscriptionRegionsRegionDatabase[] | cdktf.IResolvable

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
  public get(index: number): ActiveActiveSubscriptionRegionsRegionDatabaseOutputReference {
    return new ActiveActiveSubscriptionRegionsRegionDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActiveActiveSubscriptionRegionsRegion {
  /**
  * The initial RESP version for all databases provisioned under this region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions#local_resp_version ActiveActiveSubscriptionRegions#local_resp_version}
  */
  readonly localRespVersion?: string;
  /**
  * Deployment CIDR mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions#networking_deployment_cidr ActiveActiveSubscriptionRegions#networking_deployment_cidr}
  */
  readonly networkingDeploymentCidr: string;
  /**
  * Defines whether the regions should be re-created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions#recreate_region ActiveActiveSubscriptionRegions#recreate_region}
  */
  readonly recreateRegion?: boolean | cdktf.IResolvable;
  /**
  * Deployment region as defined by cloud provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions#region ActiveActiveSubscriptionRegions#region}
  */
  readonly region: string;
  /**
  * database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions#database ActiveActiveSubscriptionRegions#database}
  */
  readonly database: ActiveActiveSubscriptionRegionsRegionDatabase[] | cdktf.IResolvable;
}

export function activeActiveSubscriptionRegionsRegionToTerraform(struct?: ActiveActiveSubscriptionRegionsRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_resp_version: cdktf.stringToTerraform(struct!.localRespVersion),
    networking_deployment_cidr: cdktf.stringToTerraform(struct!.networkingDeploymentCidr),
    recreate_region: cdktf.booleanToTerraform(struct!.recreateRegion),
    region: cdktf.stringToTerraform(struct!.region),
    database: cdktf.listMapper(activeActiveSubscriptionRegionsRegionDatabaseToTerraform, true)(struct!.database),
  }
}


export function activeActiveSubscriptionRegionsRegionToHclTerraform(struct?: ActiveActiveSubscriptionRegionsRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_resp_version: {
      value: cdktf.stringToHclTerraform(struct!.localRespVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networking_deployment_cidr: {
      value: cdktf.stringToHclTerraform(struct!.networkingDeploymentCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recreate_region: {
      value: cdktf.booleanToHclTerraform(struct!.recreateRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.listMapperHcl(activeActiveSubscriptionRegionsRegionDatabaseToHclTerraform, true)(struct!.database),
      isBlock: true,
      type: "set",
      storageClassType: "ActiveActiveSubscriptionRegionsRegionDatabaseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActiveActiveSubscriptionRegionsRegionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActiveActiveSubscriptionRegionsRegion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localRespVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRespVersion = this._localRespVersion;
    }
    if (this._networkingDeploymentCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkingDeploymentCidr = this._networkingDeploymentCidr;
    }
    if (this._recreateRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.recreateRegion = this._recreateRegion;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._database?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiveActiveSubscriptionRegionsRegion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localRespVersion = undefined;
      this._networkingDeploymentCidr = undefined;
      this._recreateRegion = undefined;
      this._region = undefined;
      this._database.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localRespVersion = value.localRespVersion;
      this._networkingDeploymentCidr = value.networkingDeploymentCidr;
      this._recreateRegion = value.recreateRegion;
      this._region = value.region;
      this._database.internalValue = value.database;
    }
  }

  // local_resp_version - computed: false, optional: true, required: false
  private _localRespVersion?: string; 
  public get localRespVersion() {
    return this.getStringAttribute('local_resp_version');
  }
  public set localRespVersion(value: string) {
    this._localRespVersion = value;
  }
  public resetLocalRespVersion() {
    this._localRespVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRespVersionInput() {
    return this._localRespVersion;
  }

  // networking_deployment_cidr - computed: false, optional: false, required: true
  private _networkingDeploymentCidr?: string; 
  public get networkingDeploymentCidr() {
    return this.getStringAttribute('networking_deployment_cidr');
  }
  public set networkingDeploymentCidr(value: string) {
    this._networkingDeploymentCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingDeploymentCidrInput() {
    return this._networkingDeploymentCidr;
  }

  // recreate_region - computed: false, optional: true, required: false
  private _recreateRegion?: boolean | cdktf.IResolvable; 
  public get recreateRegion() {
    return this.getBooleanAttribute('recreate_region');
  }
  public set recreateRegion(value: boolean | cdktf.IResolvable) {
    this._recreateRegion = value;
  }
  public resetRecreateRegion() {
    this._recreateRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recreateRegionInput() {
    return this._recreateRegion;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // database - computed: false, optional: false, required: true
  private _database = new ActiveActiveSubscriptionRegionsRegionDatabaseList(this, "database", true);
  public get database() {
    return this._database;
  }
  public putDatabase(value: ActiveActiveSubscriptionRegionsRegionDatabase[] | cdktf.IResolvable) {
    this._database.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }
}

export class ActiveActiveSubscriptionRegionsRegionList extends cdktf.ComplexList {
  public internalValue? : ActiveActiveSubscriptionRegionsRegion[] | cdktf.IResolvable

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
  public get(index: number): ActiveActiveSubscriptionRegionsRegionOutputReference {
    return new ActiveActiveSubscriptionRegionsRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActiveActiveSubscriptionRegionsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions#create ActiveActiveSubscriptionRegions#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions#delete ActiveActiveSubscriptionRegions#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions#read ActiveActiveSubscriptionRegions#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions#update ActiveActiveSubscriptionRegions#update}
  */
  readonly update?: string;
}

export function activeActiveSubscriptionRegionsTimeoutsToTerraform(struct?: ActiveActiveSubscriptionRegionsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function activeActiveSubscriptionRegionsTimeoutsToHclTerraform(struct?: ActiveActiveSubscriptionRegionsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActiveActiveSubscriptionRegionsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActiveActiveSubscriptionRegionsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiveActiveSubscriptionRegionsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions rediscloud_active_active_subscription_regions}
*/
export class ActiveActiveSubscriptionRegions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_active_active_subscription_regions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ActiveActiveSubscriptionRegions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActiveActiveSubscriptionRegions to import
  * @param importFromId The id of the existing ActiveActiveSubscriptionRegions that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActiveActiveSubscriptionRegions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_active_active_subscription_regions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/active_active_subscription_regions rediscloud_active_active_subscription_regions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActiveActiveSubscriptionRegionsConfig
  */
  public constructor(scope: Construct, id: string, config: ActiveActiveSubscriptionRegionsConfig) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_active_active_subscription_regions',
      terraformGeneratorMetadata: {
        providerName: 'rediscloud',
        providerVersion: '2.8.0',
        providerVersionConstraint: '2.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteRegions = config.deleteRegions;
    this._id = config.id;
    this._subscriptionId = config.subscriptionId;
    this._region.internalValue = config.region;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_regions - computed: false, optional: true, required: false
  private _deleteRegions?: boolean | cdktf.IResolvable; 
  public get deleteRegions() {
    return this.getBooleanAttribute('delete_regions');
  }
  public set deleteRegions(value: boolean | cdktf.IResolvable) {
    this._deleteRegions = value;
  }
  public resetDeleteRegions() {
    this._deleteRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRegionsInput() {
    return this._deleteRegions;
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

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // region - computed: false, optional: false, required: true
  private _region = new ActiveActiveSubscriptionRegionsRegionList(this, "region", true);
  public get region() {
    return this._region;
  }
  public putRegion(value: ActiveActiveSubscriptionRegionsRegion[] | cdktf.IResolvable) {
    this._region.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ActiveActiveSubscriptionRegionsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ActiveActiveSubscriptionRegionsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_regions: cdktf.booleanToTerraform(this._deleteRegions),
      id: cdktf.stringToTerraform(this._id),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      region: cdktf.listMapper(activeActiveSubscriptionRegionsRegionToTerraform, true)(this._region.internalValue),
      timeouts: activeActiveSubscriptionRegionsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_regions: {
        value: cdktf.booleanToHclTerraform(this._deleteRegions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.listMapperHcl(activeActiveSubscriptionRegionsRegionToHclTerraform, true)(this._region.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ActiveActiveSubscriptionRegionsRegionList",
      },
      timeouts: {
        value: activeActiveSubscriptionRegionsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActiveActiveSubscriptionRegionsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
