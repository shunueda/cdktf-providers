// https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/stack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEcStackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Lock the `latest` `version_regex` obtained, so that the new stack release doesn't cascade the changes down to the deployments. It can be changed at any time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/stack#lock DataEcStack#lock}
  */
  readonly lock?: boolean | cdktf.IResolvable;
  /**
  * Region where the stack pack is. For Elastic Cloud Enterprise (ECE) installations, use `ece-region`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/stack#region DataEcStack#region}
  */
  readonly region: string;
  /**
  * Regex to filter the available stacks. Can be any valid regex expression, when multiple stacks are matched through a regex, the latest version is returned. `latest` is also accepted to obtain the latest available stack version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/stack#version_regex DataEcStack#version_regex}
  */
  readonly versionRegex: string;
}
export interface DataEcStackApm {
}

export function dataEcStackApmToTerraform(struct?: DataEcStackApm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcStackApmToHclTerraform(struct?: DataEcStackApm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcStackApmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEcStackApm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcStackApm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_constraints_max - computed: true, optional: false, required: false
  public get capacityConstraintsMax() {
    return this.getNumberAttribute('capacity_constraints_max');
  }

  // capacity_constraints_min - computed: true, optional: false, required: false
  public get capacityConstraintsMin() {
    return this.getNumberAttribute('capacity_constraints_min');
  }

  // compatible_node_types - computed: true, optional: false, required: false
  public get compatibleNodeTypes() {
    return this.getListAttribute('compatible_node_types');
  }

  // denylist - computed: true, optional: false, required: false
  public get denylist() {
    return this.getListAttribute('denylist');
  }

  // docker_image - computed: true, optional: false, required: false
  public get dockerImage() {
    return this.getStringAttribute('docker_image');
  }
}

export class DataEcStackApmList extends cdktf.ComplexList {

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
  public get(index: number): DataEcStackApmOutputReference {
    return new DataEcStackApmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEcStackElasticsearch {
}

export function dataEcStackElasticsearchToTerraform(struct?: DataEcStackElasticsearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcStackElasticsearchToHclTerraform(struct?: DataEcStackElasticsearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcStackElasticsearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEcStackElasticsearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcStackElasticsearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_constraints_max - computed: true, optional: false, required: false
  public get capacityConstraintsMax() {
    return this.getNumberAttribute('capacity_constraints_max');
  }

  // capacity_constraints_min - computed: true, optional: false, required: false
  public get capacityConstraintsMin() {
    return this.getNumberAttribute('capacity_constraints_min');
  }

  // compatible_node_types - computed: true, optional: false, required: false
  public get compatibleNodeTypes() {
    return this.getListAttribute('compatible_node_types');
  }

  // default_plugins - computed: true, optional: false, required: false
  public get defaultPlugins() {
    return this.getListAttribute('default_plugins');
  }

  // denylist - computed: true, optional: false, required: false
  public get denylist() {
    return this.getListAttribute('denylist');
  }

  // docker_image - computed: true, optional: false, required: false
  public get dockerImage() {
    return this.getStringAttribute('docker_image');
  }

  // plugins - computed: true, optional: false, required: false
  public get plugins() {
    return this.getListAttribute('plugins');
  }
}

export class DataEcStackElasticsearchList extends cdktf.ComplexList {

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
  public get(index: number): DataEcStackElasticsearchOutputReference {
    return new DataEcStackElasticsearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEcStackEnterpriseSearch {
}

export function dataEcStackEnterpriseSearchToTerraform(struct?: DataEcStackEnterpriseSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcStackEnterpriseSearchToHclTerraform(struct?: DataEcStackEnterpriseSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcStackEnterpriseSearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEcStackEnterpriseSearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcStackEnterpriseSearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_constraints_max - computed: true, optional: false, required: false
  public get capacityConstraintsMax() {
    return this.getNumberAttribute('capacity_constraints_max');
  }

  // capacity_constraints_min - computed: true, optional: false, required: false
  public get capacityConstraintsMin() {
    return this.getNumberAttribute('capacity_constraints_min');
  }

  // compatible_node_types - computed: true, optional: false, required: false
  public get compatibleNodeTypes() {
    return this.getListAttribute('compatible_node_types');
  }

  // denylist - computed: true, optional: false, required: false
  public get denylist() {
    return this.getListAttribute('denylist');
  }

  // docker_image - computed: true, optional: false, required: false
  public get dockerImage() {
    return this.getStringAttribute('docker_image');
  }
}

export class DataEcStackEnterpriseSearchList extends cdktf.ComplexList {

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
  public get(index: number): DataEcStackEnterpriseSearchOutputReference {
    return new DataEcStackEnterpriseSearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEcStackKibana {
}

export function dataEcStackKibanaToTerraform(struct?: DataEcStackKibana): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcStackKibanaToHclTerraform(struct?: DataEcStackKibana): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcStackKibanaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEcStackKibana | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcStackKibana | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_constraints_max - computed: true, optional: false, required: false
  public get capacityConstraintsMax() {
    return this.getNumberAttribute('capacity_constraints_max');
  }

  // capacity_constraints_min - computed: true, optional: false, required: false
  public get capacityConstraintsMin() {
    return this.getNumberAttribute('capacity_constraints_min');
  }

  // compatible_node_types - computed: true, optional: false, required: false
  public get compatibleNodeTypes() {
    return this.getListAttribute('compatible_node_types');
  }

  // denylist - computed: true, optional: false, required: false
  public get denylist() {
    return this.getListAttribute('denylist');
  }

  // docker_image - computed: true, optional: false, required: false
  public get dockerImage() {
    return this.getStringAttribute('docker_image');
  }
}

export class DataEcStackKibanaList extends cdktf.ComplexList {

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
  public get(index: number): DataEcStackKibanaOutputReference {
    return new DataEcStackKibanaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/stack ec_stack}
*/
export class DataEcStack extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ec_stack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEcStack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEcStack to import
  * @param importFromId The id of the existing DataEcStack that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/stack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEcStack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ec_stack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/stack ec_stack} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEcStackConfig
  */
  public constructor(scope: Construct, id: string, config: DataEcStackConfig) {
    super(scope, id, {
      terraformResourceType: 'ec_stack',
      terraformGeneratorMetadata: {
        providerName: 'ec',
        providerVersion: '0.12.2',
        providerVersionConstraint: '0.12.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._lock = config.lock;
    this._region = config.region;
    this._versionRegex = config.versionRegex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessible - computed: true, optional: false, required: false
  public get accessible() {
    return this.getBooleanAttribute('accessible');
  }

  // allowlisted - computed: true, optional: false, required: false
  public get allowlisted() {
    return this.getBooleanAttribute('allowlisted');
  }

  // apm - computed: true, optional: false, required: false
  private _apm = new DataEcStackApmList(this, "apm", false);
  public get apm() {
    return this._apm;
  }

  // elasticsearch - computed: true, optional: false, required: false
  private _elasticsearch = new DataEcStackElasticsearchList(this, "elasticsearch", false);
  public get elasticsearch() {
    return this._elasticsearch;
  }

  // enterprise_search - computed: true, optional: false, required: false
  private _enterpriseSearch = new DataEcStackEnterpriseSearchList(this, "enterprise_search", false);
  public get enterpriseSearch() {
    return this._enterpriseSearch;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kibana - computed: true, optional: false, required: false
  private _kibana = new DataEcStackKibanaList(this, "kibana", false);
  public get kibana() {
    return this._kibana;
  }

  // lock - computed: false, optional: true, required: false
  private _lock?: boolean | cdktf.IResolvable; 
  public get lock() {
    return this.getBooleanAttribute('lock');
  }
  public set lock(value: boolean | cdktf.IResolvable) {
    this._lock = value;
  }
  public resetLock() {
    this._lock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockInput() {
    return this._lock;
  }

  // min_upgradable_from - computed: true, optional: false, required: false
  public get minUpgradableFrom() {
    return this.getStringAttribute('min_upgradable_from');
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

  // upgradable_to - computed: true, optional: false, required: false
  public get upgradableTo() {
    return this.getListAttribute('upgradable_to');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // version_regex - computed: false, optional: false, required: true
  private _versionRegex?: string; 
  public get versionRegex() {
    return this.getStringAttribute('version_regex');
  }
  public set versionRegex(value: string) {
    this._versionRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionRegexInput() {
    return this._versionRegex;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      lock: cdktf.booleanToTerraform(this._lock),
      region: cdktf.stringToTerraform(this._region),
      version_regex: cdktf.stringToTerraform(this._versionRegex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      lock: {
        value: cdktf.booleanToHclTerraform(this._lock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_regex: {
        value: cdktf.stringToHclTerraform(this._versionRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
