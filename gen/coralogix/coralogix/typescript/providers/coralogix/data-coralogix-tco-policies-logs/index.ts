// https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/data-sources/tco_policies_logs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCoralogixTcoPoliciesLogsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataCoralogixTcoPoliciesLogsPoliciesApplications {
}

export function dataCoralogixTcoPoliciesLogsPoliciesApplicationsToTerraform(struct?: DataCoralogixTcoPoliciesLogsPoliciesApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixTcoPoliciesLogsPoliciesApplicationsToHclTerraform(struct?: DataCoralogixTcoPoliciesLogsPoliciesApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixTcoPoliciesLogsPoliciesApplicationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixTcoPoliciesLogsPoliciesApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixTcoPoliciesLogsPoliciesApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
}
export interface DataCoralogixTcoPoliciesLogsPoliciesSubsystems {
}

export function dataCoralogixTcoPoliciesLogsPoliciesSubsystemsToTerraform(struct?: DataCoralogixTcoPoliciesLogsPoliciesSubsystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixTcoPoliciesLogsPoliciesSubsystemsToHclTerraform(struct?: DataCoralogixTcoPoliciesLogsPoliciesSubsystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixTcoPoliciesLogsPoliciesSubsystemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixTcoPoliciesLogsPoliciesSubsystems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixTcoPoliciesLogsPoliciesSubsystems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
}
export interface DataCoralogixTcoPoliciesLogsPolicies {
}

export function dataCoralogixTcoPoliciesLogsPoliciesToTerraform(struct?: DataCoralogixTcoPoliciesLogsPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixTcoPoliciesLogsPoliciesToHclTerraform(struct?: DataCoralogixTcoPoliciesLogsPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixTcoPoliciesLogsPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixTcoPoliciesLogsPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixTcoPoliciesLogsPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // applications - computed: true, optional: false, required: false
  private _applications = new DataCoralogixTcoPoliciesLogsPoliciesApplicationsOutputReference(this, "applications");
  public get applications() {
    return this._applications;
  }

  // archive_retention_id - computed: true, optional: false, required: false
  public get archiveRetentionId() {
    return this.getStringAttribute('archive_retention_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // severities - computed: true, optional: false, required: false
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }

  // subsystems - computed: true, optional: false, required: false
  private _subsystems = new DataCoralogixTcoPoliciesLogsPoliciesSubsystemsOutputReference(this, "subsystems");
  public get subsystems() {
    return this._subsystems;
  }
}

export class DataCoralogixTcoPoliciesLogsPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixTcoPoliciesLogsPoliciesOutputReference {
    return new DataCoralogixTcoPoliciesLogsPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/data-sources/tco_policies_logs coralogix_tco_policies_logs}
*/
export class DataCoralogixTcoPoliciesLogs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_tco_policies_logs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCoralogixTcoPoliciesLogs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCoralogixTcoPoliciesLogs to import
  * @param importFromId The id of the existing DataCoralogixTcoPoliciesLogs that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/data-sources/tco_policies_logs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCoralogixTcoPoliciesLogs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_tco_policies_logs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/data-sources/tco_policies_logs coralogix_tco_policies_logs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCoralogixTcoPoliciesLogsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCoralogixTcoPoliciesLogsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'coralogix_tco_policies_logs',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
        providerVersion: '3.0.1',
        providerVersionConstraint: '3.0.1'
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataCoralogixTcoPoliciesLogsPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
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
