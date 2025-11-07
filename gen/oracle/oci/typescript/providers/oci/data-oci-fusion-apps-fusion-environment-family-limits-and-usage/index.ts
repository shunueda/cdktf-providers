// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fusion_apps_fusion_environment_family_limits_and_usage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fusion_apps_fusion_environment_family_limits_and_usage#fusion_environment_family_id DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage#fusion_environment_family_id}
  */
  readonly fusionEnvironmentFamilyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fusion_apps_fusion_environment_family_limits_and_usage#id DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsage {
}

export function dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageToTerraform(struct?: DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getNumberAttribute('limit');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getNumberAttribute('usage');
  }
}

export class DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference {
    return new DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsage {
}

export function dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageToTerraform(struct?: DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getNumberAttribute('limit');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getNumberAttribute('usage');
  }
}

export class DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference {
    return new DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsage {
}

export function dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageToTerraform(struct?: DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getNumberAttribute('limit');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getNumberAttribute('usage');
  }
}

export class DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference {
    return new DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fusion_apps_fusion_environment_family_limits_and_usage oci_fusion_apps_fusion_environment_family_limits_and_usage}
*/
export class DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fusion_apps_fusion_environment_family_limits_and_usage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage to import
  * @param importFromId The id of the existing DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fusion_apps_fusion_environment_family_limits_and_usage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fusion_apps_fusion_environment_family_limits_and_usage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fusion_apps_fusion_environment_family_limits_and_usage oci_fusion_apps_fusion_environment_family_limits_and_usage} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fusion_apps_fusion_environment_family_limits_and_usage',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
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

  // development_limit_and_usage - computed: true, optional: false, required: false
  private _developmentLimitAndUsage = new DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList(this, "development_limit_and_usage", false);
  public get developmentLimitAndUsage() {
    return this._developmentLimitAndUsage;
  }

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

  // production_limit_and_usage - computed: true, optional: false, required: false
  private _productionLimitAndUsage = new DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList(this, "production_limit_and_usage", false);
  public get productionLimitAndUsage() {
    return this._productionLimitAndUsage;
  }

  // test_limit_and_usage - computed: true, optional: false, required: false
  private _testLimitAndUsage = new DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList(this, "test_limit_and_usage", false);
  public get testLimitAndUsage() {
    return this._testLimitAndUsage;
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
