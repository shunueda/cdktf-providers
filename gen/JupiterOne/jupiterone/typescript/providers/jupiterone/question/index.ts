// https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/question
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuestionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/question#description Question#description}
  */
  readonly description: string;
  /**
  * Frequency of automated question evaluation. Defaults to ONE_DAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/question#polling_interval Question#polling_interval}
  */
  readonly pollingInterval?: string;
  /**
  * Whether to enable daily trend data collection. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/question#show_trend Question#show_trend}
  */
  readonly showTrend?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/question#tags Question#tags}
  */
  readonly tags?: string[];
  /**
  * The title of the question
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/question#title Question#title}
  */
  readonly title: string;
  /**
  * compliance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/question#compliance Question#compliance}
  */
  readonly compliance?: QuestionCompliance[] | cdktf.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/question#query Question#query}
  */
  readonly query?: QuestionQuery[] | cdktf.IResolvable;
}
export interface QuestionCompliance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/question#controls Question#controls}
  */
  readonly controls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/question#requirements Question#requirements}
  */
  readonly requirements?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/question#standard Question#standard}
  */
  readonly standard: string;
}

export function questionComplianceToTerraform(struct?: QuestionCompliance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.controls),
    requirements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requirements),
    standard: cdktf.stringToTerraform(struct!.standard),
  }
}


export function questionComplianceToHclTerraform(struct?: QuestionCompliance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.controls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    requirements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requirements),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    standard: {
      value: cdktf.stringToHclTerraform(struct!.standard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuestionComplianceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuestionCompliance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controls !== undefined) {
      hasAnyValues = true;
      internalValueResult.controls = this._controls;
    }
    if (this._requirements !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirements = this._requirements;
    }
    if (this._standard !== undefined) {
      hasAnyValues = true;
      internalValueResult.standard = this._standard;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuestionCompliance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controls = undefined;
      this._requirements = undefined;
      this._standard = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controls = value.controls;
      this._requirements = value.requirements;
      this._standard = value.standard;
    }
  }

  // controls - computed: false, optional: true, required: false
  private _controls?: string[]; 
  public get controls() {
    return this.getListAttribute('controls');
  }
  public set controls(value: string[]) {
    this._controls = value;
  }
  public resetControls() {
    this._controls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlsInput() {
    return this._controls;
  }

  // requirements - computed: false, optional: true, required: false
  private _requirements?: string[]; 
  public get requirements() {
    return this.getListAttribute('requirements');
  }
  public set requirements(value: string[]) {
    this._requirements = value;
  }
  public resetRequirements() {
    this._requirements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsInput() {
    return this._requirements;
  }

  // standard - computed: false, optional: false, required: true
  private _standard?: string; 
  public get standard() {
    return this.getStringAttribute('standard');
  }
  public set standard(value: string) {
    this._standard = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standardInput() {
    return this._standard;
  }
}

export class QuestionComplianceList extends cdktf.ComplexList {
  public internalValue? : QuestionCompliance[] | cdktf.IResolvable

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
  public get(index: number): QuestionComplianceOutputReference {
    return new QuestionComplianceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuestionQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/question#include_deleted Question#include_deleted}
  */
  readonly includeDeleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/question#name Question#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/question#query Question#query}
  */
  readonly query: string;
  /**
  * Defaults to INFORMATIVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/question#results_are Question#results_are}
  */
  readonly resultsAre?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/question#version Question#version}
  */
  readonly version: string;
}

export function questionQueryToTerraform(struct?: QuestionQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_deleted: cdktf.booleanToTerraform(struct!.includeDeleted),
    name: cdktf.stringToTerraform(struct!.name),
    query: cdktf.stringToTerraform(struct!.query),
    results_are: cdktf.stringToTerraform(struct!.resultsAre),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function questionQueryToHclTerraform(struct?: QuestionQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_deleted: {
      value: cdktf.booleanToHclTerraform(struct!.includeDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    results_are: {
      value: cdktf.stringToHclTerraform(struct!.resultsAre),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuestionQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuestionQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDeleted = this._includeDeleted;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._resultsAre !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultsAre = this._resultsAre;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuestionQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeDeleted = undefined;
      this._name = undefined;
      this._query = undefined;
      this._resultsAre = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeDeleted = value.includeDeleted;
      this._name = value.name;
      this._query = value.query;
      this._resultsAre = value.resultsAre;
      this._version = value.version;
    }
  }

  // include_deleted - computed: true, optional: true, required: false
  private _includeDeleted?: boolean | cdktf.IResolvable; 
  public get includeDeleted() {
    return this.getBooleanAttribute('include_deleted');
  }
  public set includeDeleted(value: boolean | cdktf.IResolvable) {
    this._includeDeleted = value;
  }
  public resetIncludeDeleted() {
    this._includeDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDeletedInput() {
    return this._includeDeleted;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // results_are - computed: true, optional: true, required: false
  private _resultsAre?: string; 
  public get resultsAre() {
    return this.getStringAttribute('results_are');
  }
  public set resultsAre(value: string) {
    this._resultsAre = value;
  }
  public resetResultsAre() {
    this._resultsAre = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultsAreInput() {
    return this._resultsAre;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class QuestionQueryList extends cdktf.ComplexList {
  public internalValue? : QuestionQuery[] | cdktf.IResolvable

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
  public get(index: number): QuestionQueryOutputReference {
    return new QuestionQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/question jupiterone_question}
*/
export class Question extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jupiterone_question";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Question resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Question to import
  * @param importFromId The id of the existing Question that should be imported. Refer to the {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/question#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Question to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jupiterone_question", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/question jupiterone_question} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuestionConfig
  */
  public constructor(scope: Construct, id: string, config: QuestionConfig) {
    super(scope, id, {
      terraformResourceType: 'jupiterone_question',
      terraformGeneratorMetadata: {
        providerName: 'jupiterone',
        providerVersion: '1.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._pollingInterval = config.pollingInterval;
    this._showTrend = config.showTrend;
    this._tags = config.tags;
    this._title = config.title;
    this._compliance.internalValue = config.compliance;
    this._query.internalValue = config.query;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // polling_interval - computed: true, optional: true, required: false
  private _pollingInterval?: string; 
  public get pollingInterval() {
    return this.getStringAttribute('polling_interval');
  }
  public set pollingInterval(value: string) {
    this._pollingInterval = value;
  }
  public resetPollingInterval() {
    this._pollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
  }

  // show_trend - computed: true, optional: true, required: false
  private _showTrend?: boolean | cdktf.IResolvable; 
  public get showTrend() {
    return this.getBooleanAttribute('show_trend');
  }
  public set showTrend(value: boolean | cdktf.IResolvable) {
    this._showTrend = value;
  }
  public resetShowTrend() {
    this._showTrend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showTrendInput() {
    return this._showTrend;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // compliance - computed: false, optional: true, required: false
  private _compliance = new QuestionComplianceList(this, "compliance", false);
  public get compliance() {
    return this._compliance;
  }
  public putCompliance(value: QuestionCompliance[] | cdktf.IResolvable) {
    this._compliance.internalValue = value;
  }
  public resetCompliance() {
    this._compliance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceInput() {
    return this._compliance.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new QuestionQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: QuestionQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      polling_interval: cdktf.stringToTerraform(this._pollingInterval),
      show_trend: cdktf.booleanToTerraform(this._showTrend),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      title: cdktf.stringToTerraform(this._title),
      compliance: cdktf.listMapper(questionComplianceToTerraform, true)(this._compliance.internalValue),
      query: cdktf.listMapper(questionQueryToTerraform, true)(this._query.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polling_interval: {
        value: cdktf.stringToHclTerraform(this._pollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_trend: {
        value: cdktf.booleanToHclTerraform(this._showTrend),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compliance: {
        value: cdktf.listMapperHcl(questionComplianceToHclTerraform, true)(this._compliance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuestionComplianceList",
      },
      query: {
        value: cdktf.listMapperHcl(questionQueryToHclTerraform, true)(this._query.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuestionQueryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
