// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environment_family_subscription_detail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environment_family_subscription_detail#fusion_environment_family_id DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail#fusion_environment_family_id}
  */
  readonly fusionEnvironmentFamilyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environment_family_subscription_detail#id DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkus {
}

export function dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusToTerraform(struct?: DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // license_part_description - computed: true, optional: false, required: false
  public get licensePartDescription() {
    return this.getStringAttribute('license_part_description');
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }

  // sku - computed: true, optional: false, required: false
  public get sku() {
    return this.getStringAttribute('sku');
  }
}

export class DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference {
    return new DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptions {
}

export function dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsToTerraform(struct?: DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // classic_subscription_id - computed: true, optional: false, required: false
  public get classicSubscriptionId() {
    return this.getStringAttribute('classic_subscription_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // skus - computed: true, optional: false, required: false
  private _skus = new DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList(this, "skus", false);
  public get skus() {
    return this._skus;
  }
}

export class DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference {
    return new DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environment_family_subscription_detail oci_fusion_apps_fusion_environment_family_subscription_detail}
*/
export class DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fusion_apps_fusion_environment_family_subscription_detail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail to import
  * @param importFromId The id of the existing DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environment_family_subscription_detail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fusion_apps_fusion_environment_family_subscription_detail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environment_family_subscription_detail oci_fusion_apps_fusion_environment_family_subscription_detail} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fusion_apps_fusion_environment_family_subscription_detail',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fusionEnvironmentFamilyId = config.fusionEnvironmentFamilyId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fusion_environment_family_id - computed: false, optional: false, required: true
  private _fusionEnvironmentFamilyId?: string; 
  public get fusionEnvironmentFamilyId() {
    return this.getStringAttribute('fusion_environment_family_id');
  }
  public set fusionEnvironmentFamilyId(value: string) {
    this._fusionEnvironmentFamilyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fusionEnvironmentFamilyIdInput() {
    return this._fusionEnvironmentFamilyId;
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

  // subscriptions - computed: true, optional: false, required: false
  private _subscriptions = new DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList(this, "subscriptions", false);
  public get subscriptions() {
    return this._subscriptions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fusion_environment_family_id: cdktf.stringToTerraform(this._fusionEnvironmentFamilyId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fusion_environment_family_id: {
        value: cdktf.stringToHclTerraform(this._fusionEnvironmentFamilyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
