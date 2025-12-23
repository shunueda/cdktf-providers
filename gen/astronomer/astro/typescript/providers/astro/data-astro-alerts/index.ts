// https://registry.terraform.io/providers/astronomer/astro/1.0.11/docs/data-sources/alerts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAstroAlertsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.11/docs/data-sources/alerts#alert_ids DataAstroAlerts#alert_ids}
  */
  readonly alertIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.11/docs/data-sources/alerts#alert_types DataAstroAlerts#alert_types}
  */
  readonly alertTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.11/docs/data-sources/alerts#deployment_ids DataAstroAlerts#deployment_ids}
  */
  readonly deploymentIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.11/docs/data-sources/alerts#entity_type DataAstroAlerts#entity_type}
  */
  readonly entityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.11/docs/data-sources/alerts#workspace_ids DataAstroAlerts#workspace_ids}
  */
  readonly workspaceIds?: string[];
}
export interface DataAstroAlertsAlertsCreatedBy {
}

export function dataAstroAlertsAlertsCreatedByToTerraform(struct?: DataAstroAlertsAlertsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroAlertsAlertsCreatedByToHclTerraform(struct?: DataAstroAlertsAlertsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroAlertsAlertsCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroAlertsAlertsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroAlertsAlertsCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_token_name - computed: true, optional: false, required: false
  public get apiTokenName() {
    return this.getStringAttribute('api_token_name');
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subject_type - computed: true, optional: false, required: false
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAstroAlertsAlertsRulesPatternMatches {
}

export function dataAstroAlertsAlertsRulesPatternMatchesToTerraform(struct?: DataAstroAlertsAlertsRulesPatternMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroAlertsAlertsRulesPatternMatchesToHclTerraform(struct?: DataAstroAlertsAlertsRulesPatternMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroAlertsAlertsRulesPatternMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAstroAlertsAlertsRulesPatternMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroAlertsAlertsRulesPatternMatches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // operator_type - computed: true, optional: false, required: false
  public get operatorType() {
    return this.getStringAttribute('operator_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataAstroAlertsAlertsRulesPatternMatchesList extends cdktf.ComplexList {

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
  public get(index: number): DataAstroAlertsAlertsRulesPatternMatchesOutputReference {
    return new DataAstroAlertsAlertsRulesPatternMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAstroAlertsAlertsRules {
}

export function dataAstroAlertsAlertsRulesToTerraform(struct?: DataAstroAlertsAlertsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroAlertsAlertsRulesToHclTerraform(struct?: DataAstroAlertsAlertsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroAlertsAlertsRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroAlertsAlertsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroAlertsAlertsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pattern_matches - computed: true, optional: false, required: false
  private _patternMatches = new DataAstroAlertsAlertsRulesPatternMatchesList(this, "pattern_matches", true);
  public get patternMatches() {
    return this._patternMatches;
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new cdktf.StringMap(this, "properties");
  public get properties() {
    return this._properties;
  }
}
export interface DataAstroAlertsAlertsUpdatedBy {
}

export function dataAstroAlertsAlertsUpdatedByToTerraform(struct?: DataAstroAlertsAlertsUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroAlertsAlertsUpdatedByToHclTerraform(struct?: DataAstroAlertsAlertsUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroAlertsAlertsUpdatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroAlertsAlertsUpdatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroAlertsAlertsUpdatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_token_name - computed: true, optional: false, required: false
  public get apiTokenName() {
    return this.getStringAttribute('api_token_name');
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subject_type - computed: true, optional: false, required: false
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAstroAlertsAlerts {
  /**
  * Alert identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.11/docs/data-sources/alerts#id DataAstroAlerts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataAstroAlertsAlertsToTerraform(struct?: DataAstroAlertsAlerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataAstroAlertsAlertsToHclTerraform(struct?: DataAstroAlertsAlerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAstroAlertsAlertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAstroAlertsAlerts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroAlertsAlerts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new DataAstroAlertsAlertsCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // entity_name - computed: true, optional: false, required: false
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAstroAlertsAlertsRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new DataAstroAlertsAlertsUpdatedByOutputReference(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}

export class DataAstroAlertsAlertsList extends cdktf.ComplexList {
  public internalValue? : DataAstroAlertsAlerts[] | cdktf.IResolvable

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
  public get(index: number): DataAstroAlertsAlertsOutputReference {
    return new DataAstroAlertsAlertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/astronomer/astro/1.0.11/docs/data-sources/alerts astro_alerts}
*/
export class DataAstroAlerts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astro_alerts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAstroAlerts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAstroAlerts to import
  * @param importFromId The id of the existing DataAstroAlerts that should be imported. Refer to the {@link https://registry.terraform.io/providers/astronomer/astro/1.0.11/docs/data-sources/alerts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAstroAlerts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astro_alerts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/astronomer/astro/1.0.11/docs/data-sources/alerts astro_alerts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAstroAlertsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAstroAlertsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'astro_alerts',
      terraformGeneratorMetadata: {
        providerName: 'astro',
        providerVersion: '1.0.11',
        providerVersionConstraint: '1.0.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertIds = config.alertIds;
    this._alertTypes = config.alertTypes;
    this._deploymentIds = config.deploymentIds;
    this._entityType = config.entityType;
    this._workspaceIds = config.workspaceIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_ids - computed: false, optional: true, required: false
  private _alertIds?: string[]; 
  public get alertIds() {
    return cdktf.Fn.tolist(this.getListAttribute('alert_ids'));
  }
  public set alertIds(value: string[]) {
    this._alertIds = value;
  }
  public resetAlertIds() {
    this._alertIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertIdsInput() {
    return this._alertIds;
  }

  // alert_types - computed: false, optional: true, required: false
  private _alertTypes?: string[]; 
  public get alertTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('alert_types'));
  }
  public set alertTypes(value: string[]) {
    this._alertTypes = value;
  }
  public resetAlertTypes() {
    this._alertTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTypesInput() {
    return this._alertTypes;
  }

  // alerts - computed: true, optional: false, required: false
  private _alerts = new DataAstroAlertsAlertsList(this, "alerts", true);
  public get alerts() {
    return this._alerts;
  }

  // deployment_ids - computed: false, optional: true, required: false
  private _deploymentIds?: string[]; 
  public get deploymentIds() {
    return cdktf.Fn.tolist(this.getListAttribute('deployment_ids'));
  }
  public set deploymentIds(value: string[]) {
    this._deploymentIds = value;
  }
  public resetDeploymentIds() {
    this._deploymentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdsInput() {
    return this._deploymentIds;
  }

  // entity_type - computed: false, optional: true, required: false
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  public resetEntityType() {
    this._entityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // workspace_ids - computed: false, optional: true, required: false
  private _workspaceIds?: string[]; 
  public get workspaceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('workspace_ids'));
  }
  public set workspaceIds(value: string[]) {
    this._workspaceIds = value;
  }
  public resetWorkspaceIds() {
    this._workspaceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdsInput() {
    return this._workspaceIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertIds),
      alert_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertTypes),
      deployment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deploymentIds),
      entity_type: cdktf.stringToTerraform(this._entityType),
      workspace_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workspaceIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alert_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      deployment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deploymentIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      entity_type: {
        value: cdktf.stringToHclTerraform(this._entityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workspaceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
