// https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/data-sources/check_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUptimeCheckGroupsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataUptimeCheckGroupsCheckGroupsConfigResponseTime {
}

export function dataUptimeCheckGroupsCheckGroupsConfigResponseTimeToTerraform(struct?: DataUptimeCheckGroupsCheckGroupsConfigResponseTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUptimeCheckGroupsCheckGroupsConfigResponseTimeToHclTerraform(struct?: DataUptimeCheckGroupsCheckGroupsConfigResponseTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUptimeCheckGroupsCheckGroupsConfigResponseTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataUptimeCheckGroupsCheckGroupsConfigResponseTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUptimeCheckGroupsCheckGroupsConfigResponseTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // calculation_mode - computed: true, optional: false, required: false
  public get calculationMode() {
    return this.getStringAttribute('calculation_mode');
  }

  // check_type - computed: true, optional: false, required: false
  public get checkType() {
    return this.getStringAttribute('check_type');
  }

  // single_check - computed: true, optional: false, required: false
  public get singleCheck() {
    return this.getStringAttribute('single_check');
  }
}
export interface DataUptimeCheckGroupsCheckGroupsConfig {
}

export function dataUptimeCheckGroupsCheckGroupsConfigToTerraform(struct?: DataUptimeCheckGroupsCheckGroupsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUptimeCheckGroupsCheckGroupsConfigToHclTerraform(struct?: DataUptimeCheckGroupsCheckGroupsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUptimeCheckGroupsCheckGroupsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataUptimeCheckGroupsCheckGroupsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUptimeCheckGroupsCheckGroupsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // down_condition - computed: true, optional: false, required: false
  public get downCondition() {
    return this.getStringAttribute('down_condition');
  }

  // response_time - computed: true, optional: false, required: false
  private _responseTime = new DataUptimeCheckGroupsCheckGroupsConfigResponseTimeOutputReference(this, "response_time");
  public get responseTime() {
    return this._responseTime;
  }

  // services - computed: true, optional: false, required: false
  public get services() {
    return this.getListAttribute('services');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // uptime_percent_calculation - computed: true, optional: false, required: false
  public get uptimePercentCalculation() {
    return this.getStringAttribute('uptime_percent_calculation');
  }
}
export interface DataUptimeCheckGroupsCheckGroupsSla {
}

export function dataUptimeCheckGroupsCheckGroupsSlaToTerraform(struct?: DataUptimeCheckGroupsCheckGroupsSla): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUptimeCheckGroupsCheckGroupsSlaToHclTerraform(struct?: DataUptimeCheckGroupsCheckGroupsSla): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUptimeCheckGroupsCheckGroupsSlaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataUptimeCheckGroupsCheckGroupsSla | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUptimeCheckGroupsCheckGroupsSla | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // latency - computed: true, optional: false, required: false
  public get latency() {
    return this.getNumberAttribute('latency');
  }

  // uptime - computed: true, optional: false, required: false
  public get uptime() {
    return this.getNumberAttribute('uptime');
  }
}
export interface DataUptimeCheckGroupsCheckGroups {
}

export function dataUptimeCheckGroupsCheckGroupsToTerraform(struct?: DataUptimeCheckGroupsCheckGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUptimeCheckGroupsCheckGroupsToHclTerraform(struct?: DataUptimeCheckGroupsCheckGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUptimeCheckGroupsCheckGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUptimeCheckGroupsCheckGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUptimeCheckGroupsCheckGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataUptimeCheckGroupsCheckGroupsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // contact_groups - computed: true, optional: false, required: false
  public get contactGroups() {
    return this.getListAttribute('contact_groups');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // include_in_global_metrics - computed: true, optional: false, required: false
  public get includeInGlobalMetrics() {
    return this.getBooleanAttribute('include_in_global_metrics');
  }

  // is_paused - computed: true, optional: false, required: false
  public get isPaused() {
    return this.getBooleanAttribute('is_paused');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // sla - computed: true, optional: false, required: false
  private _sla = new DataUptimeCheckGroupsCheckGroupsSlaOutputReference(this, "sla");
  public get sla() {
    return this._sla;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class DataUptimeCheckGroupsCheckGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataUptimeCheckGroupsCheckGroupsOutputReference {
    return new DataUptimeCheckGroupsCheckGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/data-sources/check_groups uptime_check_groups}
*/
export class DataUptimeCheckGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_check_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUptimeCheckGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUptimeCheckGroups to import
  * @param importFromId The id of the existing DataUptimeCheckGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/data-sources/check_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUptimeCheckGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_check_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/data-sources/check_groups uptime_check_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUptimeCheckGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataUptimeCheckGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'uptime_check_groups',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.21.0',
        providerVersionConstraint: '2.21.0'
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

  // check_groups - computed: true, optional: false, required: false
  private _checkGroups = new DataUptimeCheckGroupsCheckGroupsList(this, "check_groups", false);
  public get checkGroups() {
    return this._checkGroups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
