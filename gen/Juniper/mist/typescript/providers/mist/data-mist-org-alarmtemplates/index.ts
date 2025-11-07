// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/org_alarmtemplates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMistOrgAlarmtemplatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/org_alarmtemplates#org_id DataMistOrgAlarmtemplates#org_id}
  */
  readonly orgId: string;
}
export interface DataMistOrgAlarmtemplatesOrgAlarmtemplatesDelivery {
}

export function dataMistOrgAlarmtemplatesOrgAlarmtemplatesDeliveryToTerraform(struct?: DataMistOrgAlarmtemplatesOrgAlarmtemplatesDelivery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgAlarmtemplatesOrgAlarmtemplatesDeliveryToHclTerraform(struct?: DataMistOrgAlarmtemplatesOrgAlarmtemplatesDelivery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgAlarmtemplatesOrgAlarmtemplatesDeliveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistOrgAlarmtemplatesOrgAlarmtemplatesDelivery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgAlarmtemplatesOrgAlarmtemplatesDelivery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_emails - computed: true, optional: false, required: false
  public get additionalEmails() {
    return this.getListAttribute('additional_emails');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // to_org_admins - computed: true, optional: false, required: false
  public get toOrgAdmins() {
    return this.getBooleanAttribute('to_org_admins');
  }

  // to_site_admins - computed: true, optional: false, required: false
  public get toSiteAdmins() {
    return this.getBooleanAttribute('to_site_admins');
  }
}
export interface DataMistOrgAlarmtemplatesOrgAlarmtemplatesRulesDelivery {
}

export function dataMistOrgAlarmtemplatesOrgAlarmtemplatesRulesDeliveryToTerraform(struct?: DataMistOrgAlarmtemplatesOrgAlarmtemplatesRulesDelivery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgAlarmtemplatesOrgAlarmtemplatesRulesDeliveryToHclTerraform(struct?: DataMistOrgAlarmtemplatesOrgAlarmtemplatesRulesDelivery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgAlarmtemplatesOrgAlarmtemplatesRulesDeliveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistOrgAlarmtemplatesOrgAlarmtemplatesRulesDelivery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgAlarmtemplatesOrgAlarmtemplatesRulesDelivery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_emails - computed: true, optional: false, required: false
  public get additionalEmails() {
    return this.getListAttribute('additional_emails');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // to_org_admins - computed: true, optional: false, required: false
  public get toOrgAdmins() {
    return this.getBooleanAttribute('to_org_admins');
  }

  // to_site_admins - computed: true, optional: false, required: false
  public get toSiteAdmins() {
    return this.getBooleanAttribute('to_site_admins');
  }
}
export interface DataMistOrgAlarmtemplatesOrgAlarmtemplatesRules {
}

export function dataMistOrgAlarmtemplatesOrgAlarmtemplatesRulesToTerraform(struct?: DataMistOrgAlarmtemplatesOrgAlarmtemplatesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgAlarmtemplatesOrgAlarmtemplatesRulesToHclTerraform(struct?: DataMistOrgAlarmtemplatesOrgAlarmtemplatesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgAlarmtemplatesOrgAlarmtemplatesRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistOrgAlarmtemplatesOrgAlarmtemplatesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgAlarmtemplatesOrgAlarmtemplatesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delivery - computed: true, optional: false, required: false
  private _delivery = new DataMistOrgAlarmtemplatesOrgAlarmtemplatesRulesDeliveryOutputReference(this, "delivery");
  public get delivery() {
    return this._delivery;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataMistOrgAlarmtemplatesOrgAlarmtemplatesRulesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataMistOrgAlarmtemplatesOrgAlarmtemplatesRulesOutputReference {
    return new DataMistOrgAlarmtemplatesOrgAlarmtemplatesRulesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistOrgAlarmtemplatesOrgAlarmtemplates {
}

export function dataMistOrgAlarmtemplatesOrgAlarmtemplatesToTerraform(struct?: DataMistOrgAlarmtemplatesOrgAlarmtemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgAlarmtemplatesOrgAlarmtemplatesToHclTerraform(struct?: DataMistOrgAlarmtemplatesOrgAlarmtemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgAlarmtemplatesOrgAlarmtemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistOrgAlarmtemplatesOrgAlarmtemplates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgAlarmtemplatesOrgAlarmtemplates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getNumberAttribute('created_time');
  }

  // delivery - computed: true, optional: false, required: false
  private _delivery = new DataMistOrgAlarmtemplatesOrgAlarmtemplatesDeliveryOutputReference(this, "delivery");
  public get delivery() {
    return this._delivery;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getNumberAttribute('modified_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataMistOrgAlarmtemplatesOrgAlarmtemplatesRulesMap(this, "rules");
  public get rules() {
    return this._rules;
  }
}

export class DataMistOrgAlarmtemplatesOrgAlarmtemplatesList extends cdktf.ComplexList {

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
  public get(index: number): DataMistOrgAlarmtemplatesOrgAlarmtemplatesOutputReference {
    return new DataMistOrgAlarmtemplatesOrgAlarmtemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/org_alarmtemplates mist_org_alarmtemplates}
*/
export class DataMistOrgAlarmtemplates extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_alarmtemplates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMistOrgAlarmtemplates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMistOrgAlarmtemplates to import
  * @param importFromId The id of the existing DataMistOrgAlarmtemplates that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/org_alarmtemplates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMistOrgAlarmtemplates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_alarmtemplates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/org_alarmtemplates mist_org_alarmtemplates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMistOrgAlarmtemplatesConfig
  */
  public constructor(scope: Construct, id: string, config: DataMistOrgAlarmtemplatesConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_alarmtemplates',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._orgId = config.orgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // org_alarmtemplates - computed: true, optional: false, required: false
  private _orgAlarmtemplates = new DataMistOrgAlarmtemplatesOrgAlarmtemplatesList(this, "org_alarmtemplates", true);
  public get orgAlarmtemplates() {
    return this._orgAlarmtemplates;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      org_id: cdktf.stringToTerraform(this._orgId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
