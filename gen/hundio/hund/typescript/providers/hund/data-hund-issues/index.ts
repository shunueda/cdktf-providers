// https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/data-sources/issues
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHundIssuesConfig extends cdktf.TerraformMetaArguments {
  /**
  * One or more Components to return Issues for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/data-sources/issues#components DataHundIssues#components}
  */
  readonly components?: string[];
  /**
  * When true, returns only resolved Issues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/data-sources/issues#resolved DataHundIssues#resolved}
  */
  readonly resolved?: boolean | cdktf.IResolvable;
  /**
  * When true, returns only ongoing Issues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/data-sources/issues#standing DataHundIssues#standing}
  */
  readonly standing?: boolean | cdktf.IResolvable;
  /**
  * When true, returns only upcoming scheduled Issues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/data-sources/issues#upcoming DataHundIssues#upcoming}
  */
  readonly upcoming?: boolean | cdktf.IResolvable;
}
export interface DataHundIssuesIssuesSchedule {
}

export function dataHundIssuesIssuesScheduleToTerraform(struct?: DataHundIssuesIssuesSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundIssuesIssuesScheduleToHclTerraform(struct?: DataHundIssuesIssuesSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundIssuesIssuesScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundIssuesIssuesSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundIssuesIssuesSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ended - computed: true, optional: false, required: false
  public get ended() {
    return this.getBooleanAttribute('ended');
  }

  // ends_at - computed: true, optional: false, required: false
  public get endsAt() {
    return this.getStringAttribute('ends_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notified - computed: true, optional: false, required: false
  public get notified() {
    return this.getBooleanAttribute('notified');
  }

  // notify_subscribers_at - computed: true, optional: false, required: false
  public get notifySubscribersAt() {
    return this.getStringAttribute('notify_subscribers_at');
  }

  // started - computed: true, optional: false, required: false
  public get started() {
    return this.getBooleanAttribute('started');
  }

  // starts_at - computed: true, optional: false, required: false
  public get startsAt() {
    return this.getStringAttribute('starts_at');
  }
}
export interface DataHundIssuesIssuesTemplateSchema {
}

export function dataHundIssuesIssuesTemplateSchemaToTerraform(struct?: DataHundIssuesIssuesTemplateSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundIssuesIssuesTemplateSchemaToHclTerraform(struct?: DataHundIssuesIssuesTemplateSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundIssuesIssuesTemplateSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataHundIssuesIssuesTemplateSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundIssuesIssuesTemplateSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataHundIssuesIssuesTemplateSchemaMap extends cdktf.ComplexMap {

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
  public get(key: string): DataHundIssuesIssuesTemplateSchemaOutputReference {
    return new DataHundIssuesIssuesTemplateSchemaOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataHundIssuesIssuesTemplateVariables {
}

export function dataHundIssuesIssuesTemplateVariablesToTerraform(struct?: DataHundIssuesIssuesTemplateVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundIssuesIssuesTemplateVariablesToHclTerraform(struct?: DataHundIssuesIssuesTemplateVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundIssuesIssuesTemplateVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataHundIssuesIssuesTemplateVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundIssuesIssuesTemplateVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datetime - computed: true, optional: false, required: false
  public get datetime() {
    return this.getStringAttribute('datetime');
  }

  // i18n_string - computed: true, optional: false, required: false
  private _i18NString = new cdktf.StringMap(this, "i18n_string");
  public get i18NString() {
    return this._i18NString;
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // string - computed: true, optional: false, required: false
  public get string() {
    return this.getStringAttribute('string');
  }
}

export class DataHundIssuesIssuesTemplateVariablesMap extends cdktf.ComplexMap {

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
  public get(key: string): DataHundIssuesIssuesTemplateVariablesOutputReference {
    return new DataHundIssuesIssuesTemplateVariablesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataHundIssuesIssuesTemplate {
}

export function dataHundIssuesIssuesTemplateToTerraform(struct?: DataHundIssuesIssuesTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundIssuesIssuesTemplateToHclTerraform(struct?: DataHundIssuesIssuesTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundIssuesIssuesTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundIssuesIssuesTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundIssuesIssuesTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // body_translations - computed: true, optional: false, required: false
  private _bodyTranslations = new cdktf.StringMap(this, "body_translations");
  public get bodyTranslations() {
    return this._bodyTranslations;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issue_template_id - computed: true, optional: false, required: false
  public get issueTemplateId() {
    return this.getStringAttribute('issue_template_id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // schema - computed: true, optional: false, required: false
  private _schema = new DataHundIssuesIssuesTemplateSchemaMap(this, "schema");
  public get schema() {
    return this._schema;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // title_translations - computed: true, optional: false, required: false
  private _titleTranslations = new cdktf.StringMap(this, "title_translations");
  public get titleTranslations() {
    return this._titleTranslations;
  }

  // variables - computed: true, optional: false, required: false
  private _variables = new DataHundIssuesIssuesTemplateVariablesMap(this, "variables");
  public get variables() {
    return this._variables;
  }
}
export interface DataHundIssuesIssuesUpdatesTemplateSchema {
}

export function dataHundIssuesIssuesUpdatesTemplateSchemaToTerraform(struct?: DataHundIssuesIssuesUpdatesTemplateSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundIssuesIssuesUpdatesTemplateSchemaToHclTerraform(struct?: DataHundIssuesIssuesUpdatesTemplateSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundIssuesIssuesUpdatesTemplateSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataHundIssuesIssuesUpdatesTemplateSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundIssuesIssuesUpdatesTemplateSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataHundIssuesIssuesUpdatesTemplateSchemaMap extends cdktf.ComplexMap {

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
  public get(key: string): DataHundIssuesIssuesUpdatesTemplateSchemaOutputReference {
    return new DataHundIssuesIssuesUpdatesTemplateSchemaOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataHundIssuesIssuesUpdatesTemplateVariables {
}

export function dataHundIssuesIssuesUpdatesTemplateVariablesToTerraform(struct?: DataHundIssuesIssuesUpdatesTemplateVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundIssuesIssuesUpdatesTemplateVariablesToHclTerraform(struct?: DataHundIssuesIssuesUpdatesTemplateVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundIssuesIssuesUpdatesTemplateVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataHundIssuesIssuesUpdatesTemplateVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundIssuesIssuesUpdatesTemplateVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datetime - computed: true, optional: false, required: false
  public get datetime() {
    return this.getStringAttribute('datetime');
  }

  // i18n_string - computed: true, optional: false, required: false
  private _i18NString = new cdktf.StringMap(this, "i18n_string");
  public get i18NString() {
    return this._i18NString;
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // string - computed: true, optional: false, required: false
  public get string() {
    return this.getStringAttribute('string');
  }
}

export class DataHundIssuesIssuesUpdatesTemplateVariablesMap extends cdktf.ComplexMap {

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
  public get(key: string): DataHundIssuesIssuesUpdatesTemplateVariablesOutputReference {
    return new DataHundIssuesIssuesUpdatesTemplateVariablesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataHundIssuesIssuesUpdatesTemplate {
}

export function dataHundIssuesIssuesUpdatesTemplateToTerraform(struct?: DataHundIssuesIssuesUpdatesTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundIssuesIssuesUpdatesTemplateToHclTerraform(struct?: DataHundIssuesIssuesUpdatesTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundIssuesIssuesUpdatesTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHundIssuesIssuesUpdatesTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundIssuesIssuesUpdatesTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // body_translations - computed: true, optional: false, required: false
  private _bodyTranslations = new cdktf.StringMap(this, "body_translations");
  public get bodyTranslations() {
    return this._bodyTranslations;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issue_template_id - computed: true, optional: false, required: false
  public get issueTemplateId() {
    return this.getStringAttribute('issue_template_id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // schema - computed: true, optional: false, required: false
  private _schema = new DataHundIssuesIssuesUpdatesTemplateSchemaMap(this, "schema");
  public get schema() {
    return this._schema;
  }

  // variables - computed: true, optional: false, required: false
  private _variables = new DataHundIssuesIssuesUpdatesTemplateVariablesMap(this, "variables");
  public get variables() {
    return this._variables;
  }
}
export interface DataHundIssuesIssuesUpdates {
}

export function dataHundIssuesIssuesUpdatesToTerraform(struct?: DataHundIssuesIssuesUpdates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundIssuesIssuesUpdatesToHclTerraform(struct?: DataHundIssuesIssuesUpdates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundIssuesIssuesUpdatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHundIssuesIssuesUpdates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundIssuesIssuesUpdates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_on_destroy - computed: true, optional: false, required: false
  public get archiveOnDestroy() {
    return this.getBooleanAttribute('archive_on_destroy');
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // body_html - computed: true, optional: false, required: false
  public get bodyHtml() {
    return this.getStringAttribute('body_html');
  }

  // body_html_translations - computed: true, optional: false, required: false
  private _bodyHtmlTranslations = new cdktf.StringMap(this, "body_html_translations");
  public get bodyHtmlTranslations() {
    return this._bodyHtmlTranslations;
  }

  // body_translations - computed: true, optional: false, required: false
  private _bodyTranslations = new cdktf.StringMap(this, "body_translations");
  public get bodyTranslations() {
    return this._bodyTranslations;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // effective - computed: true, optional: false, required: false
  public get effective() {
    return this.getBooleanAttribute('effective');
  }

  // effective_after - computed: true, optional: false, required: false
  public get effectiveAfter() {
    return this.getStringAttribute('effective_after');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issue_id - computed: true, optional: false, required: false
  public get issueId() {
    return this.getStringAttribute('issue_id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // reopening - computed: true, optional: false, required: false
  public get reopening() {
    return this.getBooleanAttribute('reopening');
  }

  // state_override - computed: true, optional: false, required: false
  public get stateOverride() {
    return this.getNumberAttribute('state_override');
  }

  // template - computed: true, optional: false, required: false
  private _template = new DataHundIssuesIssuesUpdatesTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataHundIssuesIssuesUpdatesList extends cdktf.ComplexList {

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
  public get(index: number): DataHundIssuesIssuesUpdatesOutputReference {
    return new DataHundIssuesIssuesUpdatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHundIssuesIssues {
}

export function dataHundIssuesIssuesToTerraform(struct?: DataHundIssuesIssues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHundIssuesIssuesToHclTerraform(struct?: DataHundIssuesIssues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHundIssuesIssuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHundIssuesIssues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHundIssuesIssues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_on_destroy - computed: true, optional: false, required: false
  public get archiveOnDestroy() {
    return this.getBooleanAttribute('archive_on_destroy');
  }

  // began_at - computed: true, optional: false, required: false
  public get beganAt() {
    return this.getStringAttribute('began_at');
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // body_html - computed: true, optional: false, required: false
  public get bodyHtml() {
    return this.getStringAttribute('body_html');
  }

  // body_html_translations - computed: true, optional: false, required: false
  private _bodyHtmlTranslations = new cdktf.StringMap(this, "body_html_translations");
  public get bodyHtmlTranslations() {
    return this._bodyHtmlTranslations;
  }

  // body_translations - computed: true, optional: false, required: false
  private _bodyTranslations = new cdktf.StringMap(this, "body_translations");
  public get bodyTranslations() {
    return this._bodyTranslations;
  }

  // cancelled_at - computed: true, optional: false, required: false
  public get cancelledAt() {
    return this.getStringAttribute('cancelled_at');
  }

  // component_ids - computed: true, optional: false, required: false
  public get componentIds() {
    return cdktf.Fn.tolist(this.getListAttribute('component_ids'));
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // ended_at - computed: true, optional: false, required: false
  public get endedAt() {
    return this.getStringAttribute('ended_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // open_graph_image_url - computed: true, optional: false, required: false
  public get openGraphImageUrl() {
    return this.getStringAttribute('open_graph_image_url');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // resolved - computed: true, optional: false, required: false
  public get resolved() {
    return this.getBooleanAttribute('resolved');
  }

  // retrospective - computed: true, optional: false, required: false
  public get retrospective() {
    return this.getBooleanAttribute('retrospective');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataHundIssuesIssuesScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // scheduled - computed: true, optional: false, required: false
  public get scheduled() {
    return this.getBooleanAttribute('scheduled');
  }

  // specialization - computed: true, optional: false, required: false
  public get specialization() {
    return this.getStringAttribute('specialization');
  }

  // standing - computed: true, optional: false, required: false
  public get standing() {
    return this.getBooleanAttribute('standing');
  }

  // state_override - computed: true, optional: false, required: false
  public get stateOverride() {
    return this.getNumberAttribute('state_override');
  }

  // template - computed: true, optional: false, required: false
  private _template = new DataHundIssuesIssuesTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // title_translations - computed: true, optional: false, required: false
  private _titleTranslations = new cdktf.StringMap(this, "title_translations");
  public get titleTranslations() {
    return this._titleTranslations;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updates - computed: true, optional: false, required: false
  private _updates = new DataHundIssuesIssuesUpdatesList(this, "updates", false);
  public get updates() {
    return this._updates;
  }
}

export class DataHundIssuesIssuesList extends cdktf.ComplexList {

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
  public get(index: number): DataHundIssuesIssuesOutputReference {
    return new DataHundIssuesIssuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/data-sources/issues hund_issues}
*/
export class DataHundIssues extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hund_issues";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHundIssues resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHundIssues to import
  * @param importFromId The id of the existing DataHundIssues that should be imported. Refer to the {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/data-sources/issues#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHundIssues to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hund_issues", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/data-sources/issues hund_issues} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHundIssuesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHundIssuesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hund_issues',
      terraformGeneratorMetadata: {
        providerName: 'hund',
        providerVersion: '0.1.0',
        providerVersionConstraint: '0.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._components = config.components;
    this._resolved = config.resolved;
    this._standing = config.standing;
    this._upcoming = config.upcoming;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // components - computed: false, optional: true, required: false
  private _components?: string[]; 
  public get components() {
    return cdktf.Fn.tolist(this.getListAttribute('components'));
  }
  public set components(value: string[]) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
  }

  // issues - computed: true, optional: false, required: false
  private _issues = new DataHundIssuesIssuesList(this, "issues", false);
  public get issues() {
    return this._issues;
  }

  // resolved - computed: false, optional: true, required: false
  private _resolved?: boolean | cdktf.IResolvable; 
  public get resolved() {
    return this.getBooleanAttribute('resolved');
  }
  public set resolved(value: boolean | cdktf.IResolvable) {
    this._resolved = value;
  }
  public resetResolved() {
    this._resolved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedInput() {
    return this._resolved;
  }

  // standing - computed: false, optional: true, required: false
  private _standing?: boolean | cdktf.IResolvable; 
  public get standing() {
    return this.getBooleanAttribute('standing');
  }
  public set standing(value: boolean | cdktf.IResolvable) {
    this._standing = value;
  }
  public resetStanding() {
    this._standing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standingInput() {
    return this._standing;
  }

  // upcoming - computed: false, optional: true, required: false
  private _upcoming?: boolean | cdktf.IResolvable; 
  public get upcoming() {
    return this.getBooleanAttribute('upcoming');
  }
  public set upcoming(value: boolean | cdktf.IResolvable) {
    this._upcoming = value;
  }
  public resetUpcoming() {
    this._upcoming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upcomingInput() {
    return this._upcoming;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      components: cdktf.listMapper(cdktf.stringToTerraform, false)(this._components),
      resolved: cdktf.booleanToTerraform(this._resolved),
      standing: cdktf.booleanToTerraform(this._standing),
      upcoming: cdktf.booleanToTerraform(this._upcoming),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      components: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._components),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resolved: {
        value: cdktf.booleanToHclTerraform(this._resolved),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      standing: {
        value: cdktf.booleanToHclTerraform(this._standing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      upcoming: {
        value: cdktf.booleanToHclTerraform(this._upcoming),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
