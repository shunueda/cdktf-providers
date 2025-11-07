// https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkersCountConfig extends cdktf.TerraformMetaArguments {
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#analysis WorkersCount#analysis}
  */
  readonly analysis?: WorkersCountAnalysis[] | cdktf.IResolvable;
  /**
  * impact_analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#impact_analysis WorkersCount#impact_analysis}
  */
  readonly impactAnalysis?: WorkersCountImpactAnalysis[] | cdktf.IResolvable;
  /**
  * index block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#index WorkersCount#index}
  */
  readonly index?: WorkersCountIndex[] | cdktf.IResolvable;
  /**
  * migration_sbom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#migration_sbom WorkersCount#migration_sbom}
  */
  readonly migrationSbom?: WorkersCountMigrationSbom[] | cdktf.IResolvable;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#notification WorkersCount#notification}
  */
  readonly notification?: WorkersCountNotification[] | cdktf.IResolvable;
  /**
  * panoramic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#panoramic WorkersCount#panoramic}
  */
  readonly panoramic?: WorkersCountPanoramic[] | cdktf.IResolvable;
  /**
  * persist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#persist WorkersCount#persist}
  */
  readonly persist?: WorkersCountPersist[] | cdktf.IResolvable;
  /**
  * policy_enforcer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#policy_enforcer WorkersCount#policy_enforcer}
  */
  readonly policyEnforcer?: WorkersCountPolicyEnforcer[] | cdktf.IResolvable;
  /**
  * sbom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#sbom WorkersCount#sbom}
  */
  readonly sbom?: WorkersCountSbom[] | cdktf.IResolvable;
  /**
  * sbom_deleter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#sbom_deleter WorkersCount#sbom_deleter}
  */
  readonly sbomDeleter?: WorkersCountSbomDeleter[] | cdktf.IResolvable;
  /**
  * sbom_dependencies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#sbom_dependencies WorkersCount#sbom_dependencies}
  */
  readonly sbomDependencies?: WorkersCountSbomDependencies[] | cdktf.IResolvable;
  /**
  * sbom_enricher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#sbom_enricher WorkersCount#sbom_enricher}
  */
  readonly sbomEnricher?: WorkersCountSbomEnricher[] | cdktf.IResolvable;
  /**
  * sbom_impact_analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#sbom_impact_analysis WorkersCount#sbom_impact_analysis}
  */
  readonly sbomImpactAnalysis?: WorkersCountSbomImpactAnalysis[] | cdktf.IResolvable;
  /**
  * user_catalog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#user_catalog WorkersCount#user_catalog}
  */
  readonly userCatalog?: WorkersCountUserCatalog[] | cdktf.IResolvable;
}
export interface WorkersCountAnalysis {
  /**
  * Number of workers for existing content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#existing_content WorkersCount#existing_content}
  */
  readonly existingContent: number;
  /**
  * Number of workers for new content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#new_content WorkersCount#new_content}
  */
  readonly newContent: number;
}

export function workersCountAnalysisToTerraform(struct?: WorkersCountAnalysis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_content: cdktf.numberToTerraform(struct!.existingContent),
    new_content: cdktf.numberToTerraform(struct!.newContent),
  }
}


export function workersCountAnalysisToHclTerraform(struct?: WorkersCountAnalysis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_content: {
      value: cdktf.numberToHclTerraform(struct!.existingContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_content: {
      value: cdktf.numberToHclTerraform(struct!.newContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersCountAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersCountAnalysis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingContent = this._existingContent;
    }
    if (this._newContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.newContent = this._newContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersCountAnalysis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._existingContent = undefined;
      this._newContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._existingContent = value.existingContent;
      this._newContent = value.newContent;
    }
  }

  // existing_content - computed: false, optional: false, required: true
  private _existingContent?: number; 
  public get existingContent() {
    return this.getNumberAttribute('existing_content');
  }
  public set existingContent(value: number) {
    this._existingContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get existingContentInput() {
    return this._existingContent;
  }

  // new_content - computed: false, optional: false, required: true
  private _newContent?: number; 
  public get newContent() {
    return this.getNumberAttribute('new_content');
  }
  public set newContent(value: number) {
    this._newContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newContentInput() {
    return this._newContent;
  }
}

export class WorkersCountAnalysisList extends cdktf.ComplexList {
  public internalValue? : WorkersCountAnalysis[] | cdktf.IResolvable

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
  public get(index: number): WorkersCountAnalysisOutputReference {
    return new WorkersCountAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkersCountImpactAnalysis {
  /**
  * Number of workers for new content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#new_content WorkersCount#new_content}
  */
  readonly newContent: number;
}

export function workersCountImpactAnalysisToTerraform(struct?: WorkersCountImpactAnalysis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_content: cdktf.numberToTerraform(struct!.newContent),
  }
}


export function workersCountImpactAnalysisToHclTerraform(struct?: WorkersCountImpactAnalysis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_content: {
      value: cdktf.numberToHclTerraform(struct!.newContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersCountImpactAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersCountImpactAnalysis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.newContent = this._newContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersCountImpactAnalysis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newContent = value.newContent;
    }
  }

  // new_content - computed: false, optional: false, required: true
  private _newContent?: number; 
  public get newContent() {
    return this.getNumberAttribute('new_content');
  }
  public set newContent(value: number) {
    this._newContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newContentInput() {
    return this._newContent;
  }
}

export class WorkersCountImpactAnalysisList extends cdktf.ComplexList {
  public internalValue? : WorkersCountImpactAnalysis[] | cdktf.IResolvable

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
  public get(index: number): WorkersCountImpactAnalysisOutputReference {
    return new WorkersCountImpactAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkersCountIndex {
  /**
  * Number of workers for existing content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#existing_content WorkersCount#existing_content}
  */
  readonly existingContent: number;
  /**
  * Number of workers for new content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#new_content WorkersCount#new_content}
  */
  readonly newContent: number;
}

export function workersCountIndexToTerraform(struct?: WorkersCountIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_content: cdktf.numberToTerraform(struct!.existingContent),
    new_content: cdktf.numberToTerraform(struct!.newContent),
  }
}


export function workersCountIndexToHclTerraform(struct?: WorkersCountIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_content: {
      value: cdktf.numberToHclTerraform(struct!.existingContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_content: {
      value: cdktf.numberToHclTerraform(struct!.newContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersCountIndexOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersCountIndex | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingContent = this._existingContent;
    }
    if (this._newContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.newContent = this._newContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersCountIndex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._existingContent = undefined;
      this._newContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._existingContent = value.existingContent;
      this._newContent = value.newContent;
    }
  }

  // existing_content - computed: false, optional: false, required: true
  private _existingContent?: number; 
  public get existingContent() {
    return this.getNumberAttribute('existing_content');
  }
  public set existingContent(value: number) {
    this._existingContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get existingContentInput() {
    return this._existingContent;
  }

  // new_content - computed: false, optional: false, required: true
  private _newContent?: number; 
  public get newContent() {
    return this.getNumberAttribute('new_content');
  }
  public set newContent(value: number) {
    this._newContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newContentInput() {
    return this._newContent;
  }
}

export class WorkersCountIndexList extends cdktf.ComplexList {
  public internalValue? : WorkersCountIndex[] | cdktf.IResolvable

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
  public get(index: number): WorkersCountIndexOutputReference {
    return new WorkersCountIndexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkersCountMigrationSbom {
  /**
  * Number of workers for existing content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#existing_content WorkersCount#existing_content}
  */
  readonly existingContent: number;
  /**
  * Number of workers for new content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#new_content WorkersCount#new_content}
  */
  readonly newContent: number;
}

export function workersCountMigrationSbomToTerraform(struct?: WorkersCountMigrationSbom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_content: cdktf.numberToTerraform(struct!.existingContent),
    new_content: cdktf.numberToTerraform(struct!.newContent),
  }
}


export function workersCountMigrationSbomToHclTerraform(struct?: WorkersCountMigrationSbom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_content: {
      value: cdktf.numberToHclTerraform(struct!.existingContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_content: {
      value: cdktf.numberToHclTerraform(struct!.newContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersCountMigrationSbomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersCountMigrationSbom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingContent = this._existingContent;
    }
    if (this._newContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.newContent = this._newContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersCountMigrationSbom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._existingContent = undefined;
      this._newContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._existingContent = value.existingContent;
      this._newContent = value.newContent;
    }
  }

  // existing_content - computed: false, optional: false, required: true
  private _existingContent?: number; 
  public get existingContent() {
    return this.getNumberAttribute('existing_content');
  }
  public set existingContent(value: number) {
    this._existingContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get existingContentInput() {
    return this._existingContent;
  }

  // new_content - computed: false, optional: false, required: true
  private _newContent?: number; 
  public get newContent() {
    return this.getNumberAttribute('new_content');
  }
  public set newContent(value: number) {
    this._newContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newContentInput() {
    return this._newContent;
  }
}

export class WorkersCountMigrationSbomList extends cdktf.ComplexList {
  public internalValue? : WorkersCountMigrationSbom[] | cdktf.IResolvable

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
  public get(index: number): WorkersCountMigrationSbomOutputReference {
    return new WorkersCountMigrationSbomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkersCountNotification {
  /**
  * Number of workers for new content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#new_content WorkersCount#new_content}
  */
  readonly newContent: number;
}

export function workersCountNotificationToTerraform(struct?: WorkersCountNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_content: cdktf.numberToTerraform(struct!.newContent),
  }
}


export function workersCountNotificationToHclTerraform(struct?: WorkersCountNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_content: {
      value: cdktf.numberToHclTerraform(struct!.newContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersCountNotificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersCountNotification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.newContent = this._newContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersCountNotification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newContent = value.newContent;
    }
  }

  // new_content - computed: false, optional: false, required: true
  private _newContent?: number; 
  public get newContent() {
    return this.getNumberAttribute('new_content');
  }
  public set newContent(value: number) {
    this._newContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newContentInput() {
    return this._newContent;
  }
}

export class WorkersCountNotificationList extends cdktf.ComplexList {
  public internalValue? : WorkersCountNotification[] | cdktf.IResolvable

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
  public get(index: number): WorkersCountNotificationOutputReference {
    return new WorkersCountNotificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkersCountPanoramic {
  /**
  * Number of workers for new content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#new_content WorkersCount#new_content}
  */
  readonly newContent: number;
}

export function workersCountPanoramicToTerraform(struct?: WorkersCountPanoramic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_content: cdktf.numberToTerraform(struct!.newContent),
  }
}


export function workersCountPanoramicToHclTerraform(struct?: WorkersCountPanoramic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_content: {
      value: cdktf.numberToHclTerraform(struct!.newContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersCountPanoramicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersCountPanoramic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.newContent = this._newContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersCountPanoramic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newContent = value.newContent;
    }
  }

  // new_content - computed: false, optional: false, required: true
  private _newContent?: number; 
  public get newContent() {
    return this.getNumberAttribute('new_content');
  }
  public set newContent(value: number) {
    this._newContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newContentInput() {
    return this._newContent;
  }
}

export class WorkersCountPanoramicList extends cdktf.ComplexList {
  public internalValue? : WorkersCountPanoramic[] | cdktf.IResolvable

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
  public get(index: number): WorkersCountPanoramicOutputReference {
    return new WorkersCountPanoramicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkersCountPersist {
  /**
  * Number of workers for existing content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#existing_content WorkersCount#existing_content}
  */
  readonly existingContent: number;
  /**
  * Number of workers for new content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#new_content WorkersCount#new_content}
  */
  readonly newContent: number;
}

export function workersCountPersistToTerraform(struct?: WorkersCountPersist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_content: cdktf.numberToTerraform(struct!.existingContent),
    new_content: cdktf.numberToTerraform(struct!.newContent),
  }
}


export function workersCountPersistToHclTerraform(struct?: WorkersCountPersist | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_content: {
      value: cdktf.numberToHclTerraform(struct!.existingContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_content: {
      value: cdktf.numberToHclTerraform(struct!.newContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersCountPersistOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersCountPersist | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingContent = this._existingContent;
    }
    if (this._newContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.newContent = this._newContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersCountPersist | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._existingContent = undefined;
      this._newContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._existingContent = value.existingContent;
      this._newContent = value.newContent;
    }
  }

  // existing_content - computed: false, optional: false, required: true
  private _existingContent?: number; 
  public get existingContent() {
    return this.getNumberAttribute('existing_content');
  }
  public set existingContent(value: number) {
    this._existingContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get existingContentInput() {
    return this._existingContent;
  }

  // new_content - computed: false, optional: false, required: true
  private _newContent?: number; 
  public get newContent() {
    return this.getNumberAttribute('new_content');
  }
  public set newContent(value: number) {
    this._newContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newContentInput() {
    return this._newContent;
  }
}

export class WorkersCountPersistList extends cdktf.ComplexList {
  public internalValue? : WorkersCountPersist[] | cdktf.IResolvable

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
  public get(index: number): WorkersCountPersistOutputReference {
    return new WorkersCountPersistOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkersCountPolicyEnforcer {
  /**
  * Number of workers for existing content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#existing_content WorkersCount#existing_content}
  */
  readonly existingContent: number;
  /**
  * Number of workers for new content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#new_content WorkersCount#new_content}
  */
  readonly newContent: number;
}

export function workersCountPolicyEnforcerToTerraform(struct?: WorkersCountPolicyEnforcer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_content: cdktf.numberToTerraform(struct!.existingContent),
    new_content: cdktf.numberToTerraform(struct!.newContent),
  }
}


export function workersCountPolicyEnforcerToHclTerraform(struct?: WorkersCountPolicyEnforcer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_content: {
      value: cdktf.numberToHclTerraform(struct!.existingContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_content: {
      value: cdktf.numberToHclTerraform(struct!.newContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersCountPolicyEnforcerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersCountPolicyEnforcer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingContent = this._existingContent;
    }
    if (this._newContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.newContent = this._newContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersCountPolicyEnforcer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._existingContent = undefined;
      this._newContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._existingContent = value.existingContent;
      this._newContent = value.newContent;
    }
  }

  // existing_content - computed: false, optional: false, required: true
  private _existingContent?: number; 
  public get existingContent() {
    return this.getNumberAttribute('existing_content');
  }
  public set existingContent(value: number) {
    this._existingContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get existingContentInput() {
    return this._existingContent;
  }

  // new_content - computed: false, optional: false, required: true
  private _newContent?: number; 
  public get newContent() {
    return this.getNumberAttribute('new_content');
  }
  public set newContent(value: number) {
    this._newContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newContentInput() {
    return this._newContent;
  }
}

export class WorkersCountPolicyEnforcerList extends cdktf.ComplexList {
  public internalValue? : WorkersCountPolicyEnforcer[] | cdktf.IResolvable

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
  public get(index: number): WorkersCountPolicyEnforcerOutputReference {
    return new WorkersCountPolicyEnforcerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkersCountSbom {
  /**
  * Number of workers for existing content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#existing_content WorkersCount#existing_content}
  */
  readonly existingContent: number;
  /**
  * Number of workers for new content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#new_content WorkersCount#new_content}
  */
  readonly newContent: number;
}

export function workersCountSbomToTerraform(struct?: WorkersCountSbom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_content: cdktf.numberToTerraform(struct!.existingContent),
    new_content: cdktf.numberToTerraform(struct!.newContent),
  }
}


export function workersCountSbomToHclTerraform(struct?: WorkersCountSbom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_content: {
      value: cdktf.numberToHclTerraform(struct!.existingContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_content: {
      value: cdktf.numberToHclTerraform(struct!.newContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersCountSbomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersCountSbom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingContent = this._existingContent;
    }
    if (this._newContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.newContent = this._newContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersCountSbom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._existingContent = undefined;
      this._newContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._existingContent = value.existingContent;
      this._newContent = value.newContent;
    }
  }

  // existing_content - computed: false, optional: false, required: true
  private _existingContent?: number; 
  public get existingContent() {
    return this.getNumberAttribute('existing_content');
  }
  public set existingContent(value: number) {
    this._existingContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get existingContentInput() {
    return this._existingContent;
  }

  // new_content - computed: false, optional: false, required: true
  private _newContent?: number; 
  public get newContent() {
    return this.getNumberAttribute('new_content');
  }
  public set newContent(value: number) {
    this._newContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newContentInput() {
    return this._newContent;
  }
}

export class WorkersCountSbomList extends cdktf.ComplexList {
  public internalValue? : WorkersCountSbom[] | cdktf.IResolvable

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
  public get(index: number): WorkersCountSbomOutputReference {
    return new WorkersCountSbomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkersCountSbomDeleter {
  /**
  * Number of workers for existing content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#existing_content WorkersCount#existing_content}
  */
  readonly existingContent: number;
  /**
  * Number of workers for new content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#new_content WorkersCount#new_content}
  */
  readonly newContent: number;
}

export function workersCountSbomDeleterToTerraform(struct?: WorkersCountSbomDeleter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_content: cdktf.numberToTerraform(struct!.existingContent),
    new_content: cdktf.numberToTerraform(struct!.newContent),
  }
}


export function workersCountSbomDeleterToHclTerraform(struct?: WorkersCountSbomDeleter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_content: {
      value: cdktf.numberToHclTerraform(struct!.existingContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_content: {
      value: cdktf.numberToHclTerraform(struct!.newContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersCountSbomDeleterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersCountSbomDeleter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingContent = this._existingContent;
    }
    if (this._newContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.newContent = this._newContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersCountSbomDeleter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._existingContent = undefined;
      this._newContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._existingContent = value.existingContent;
      this._newContent = value.newContent;
    }
  }

  // existing_content - computed: false, optional: false, required: true
  private _existingContent?: number; 
  public get existingContent() {
    return this.getNumberAttribute('existing_content');
  }
  public set existingContent(value: number) {
    this._existingContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get existingContentInput() {
    return this._existingContent;
  }

  // new_content - computed: false, optional: false, required: true
  private _newContent?: number; 
  public get newContent() {
    return this.getNumberAttribute('new_content');
  }
  public set newContent(value: number) {
    this._newContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newContentInput() {
    return this._newContent;
  }
}

export class WorkersCountSbomDeleterList extends cdktf.ComplexList {
  public internalValue? : WorkersCountSbomDeleter[] | cdktf.IResolvable

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
  public get(index: number): WorkersCountSbomDeleterOutputReference {
    return new WorkersCountSbomDeleterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkersCountSbomDependencies {
  /**
  * Number of workers for existing content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#existing_content WorkersCount#existing_content}
  */
  readonly existingContent: number;
  /**
  * Number of workers for new content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#new_content WorkersCount#new_content}
  */
  readonly newContent: number;
}

export function workersCountSbomDependenciesToTerraform(struct?: WorkersCountSbomDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_content: cdktf.numberToTerraform(struct!.existingContent),
    new_content: cdktf.numberToTerraform(struct!.newContent),
  }
}


export function workersCountSbomDependenciesToHclTerraform(struct?: WorkersCountSbomDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_content: {
      value: cdktf.numberToHclTerraform(struct!.existingContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_content: {
      value: cdktf.numberToHclTerraform(struct!.newContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersCountSbomDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersCountSbomDependencies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingContent = this._existingContent;
    }
    if (this._newContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.newContent = this._newContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersCountSbomDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._existingContent = undefined;
      this._newContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._existingContent = value.existingContent;
      this._newContent = value.newContent;
    }
  }

  // existing_content - computed: false, optional: false, required: true
  private _existingContent?: number; 
  public get existingContent() {
    return this.getNumberAttribute('existing_content');
  }
  public set existingContent(value: number) {
    this._existingContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get existingContentInput() {
    return this._existingContent;
  }

  // new_content - computed: false, optional: false, required: true
  private _newContent?: number; 
  public get newContent() {
    return this.getNumberAttribute('new_content');
  }
  public set newContent(value: number) {
    this._newContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newContentInput() {
    return this._newContent;
  }
}

export class WorkersCountSbomDependenciesList extends cdktf.ComplexList {
  public internalValue? : WorkersCountSbomDependencies[] | cdktf.IResolvable

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
  public get(index: number): WorkersCountSbomDependenciesOutputReference {
    return new WorkersCountSbomDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkersCountSbomEnricher {
  /**
  * Number of workers for existing content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#existing_content WorkersCount#existing_content}
  */
  readonly existingContent: number;
  /**
  * Number of workers for new content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#new_content WorkersCount#new_content}
  */
  readonly newContent: number;
}

export function workersCountSbomEnricherToTerraform(struct?: WorkersCountSbomEnricher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_content: cdktf.numberToTerraform(struct!.existingContent),
    new_content: cdktf.numberToTerraform(struct!.newContent),
  }
}


export function workersCountSbomEnricherToHclTerraform(struct?: WorkersCountSbomEnricher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_content: {
      value: cdktf.numberToHclTerraform(struct!.existingContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_content: {
      value: cdktf.numberToHclTerraform(struct!.newContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersCountSbomEnricherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersCountSbomEnricher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingContent = this._existingContent;
    }
    if (this._newContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.newContent = this._newContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersCountSbomEnricher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._existingContent = undefined;
      this._newContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._existingContent = value.existingContent;
      this._newContent = value.newContent;
    }
  }

  // existing_content - computed: false, optional: false, required: true
  private _existingContent?: number; 
  public get existingContent() {
    return this.getNumberAttribute('existing_content');
  }
  public set existingContent(value: number) {
    this._existingContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get existingContentInput() {
    return this._existingContent;
  }

  // new_content - computed: false, optional: false, required: true
  private _newContent?: number; 
  public get newContent() {
    return this.getNumberAttribute('new_content');
  }
  public set newContent(value: number) {
    this._newContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newContentInput() {
    return this._newContent;
  }
}

export class WorkersCountSbomEnricherList extends cdktf.ComplexList {
  public internalValue? : WorkersCountSbomEnricher[] | cdktf.IResolvable

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
  public get(index: number): WorkersCountSbomEnricherOutputReference {
    return new WorkersCountSbomEnricherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkersCountSbomImpactAnalysis {
  /**
  * Number of workers for existing content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#existing_content WorkersCount#existing_content}
  */
  readonly existingContent: number;
  /**
  * Number of workers for new content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#new_content WorkersCount#new_content}
  */
  readonly newContent: number;
}

export function workersCountSbomImpactAnalysisToTerraform(struct?: WorkersCountSbomImpactAnalysis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_content: cdktf.numberToTerraform(struct!.existingContent),
    new_content: cdktf.numberToTerraform(struct!.newContent),
  }
}


export function workersCountSbomImpactAnalysisToHclTerraform(struct?: WorkersCountSbomImpactAnalysis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_content: {
      value: cdktf.numberToHclTerraform(struct!.existingContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_content: {
      value: cdktf.numberToHclTerraform(struct!.newContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersCountSbomImpactAnalysisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersCountSbomImpactAnalysis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingContent = this._existingContent;
    }
    if (this._newContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.newContent = this._newContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersCountSbomImpactAnalysis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._existingContent = undefined;
      this._newContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._existingContent = value.existingContent;
      this._newContent = value.newContent;
    }
  }

  // existing_content - computed: false, optional: false, required: true
  private _existingContent?: number; 
  public get existingContent() {
    return this.getNumberAttribute('existing_content');
  }
  public set existingContent(value: number) {
    this._existingContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get existingContentInput() {
    return this._existingContent;
  }

  // new_content - computed: false, optional: false, required: true
  private _newContent?: number; 
  public get newContent() {
    return this.getNumberAttribute('new_content');
  }
  public set newContent(value: number) {
    this._newContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newContentInput() {
    return this._newContent;
  }
}

export class WorkersCountSbomImpactAnalysisList extends cdktf.ComplexList {
  public internalValue? : WorkersCountSbomImpactAnalysis[] | cdktf.IResolvable

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
  public get(index: number): WorkersCountSbomImpactAnalysisOutputReference {
    return new WorkersCountSbomImpactAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkersCountUserCatalog {
  /**
  * Number of workers for existing content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#existing_content WorkersCount#existing_content}
  */
  readonly existingContent: number;
  /**
  * Number of workers for new content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#new_content WorkersCount#new_content}
  */
  readonly newContent: number;
}

export function workersCountUserCatalogToTerraform(struct?: WorkersCountUserCatalog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_content: cdktf.numberToTerraform(struct!.existingContent),
    new_content: cdktf.numberToTerraform(struct!.newContent),
  }
}


export function workersCountUserCatalogToHclTerraform(struct?: WorkersCountUserCatalog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_content: {
      value: cdktf.numberToHclTerraform(struct!.existingContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_content: {
      value: cdktf.numberToHclTerraform(struct!.newContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersCountUserCatalogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersCountUserCatalog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingContent = this._existingContent;
    }
    if (this._newContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.newContent = this._newContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersCountUserCatalog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._existingContent = undefined;
      this._newContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._existingContent = value.existingContent;
      this._newContent = value.newContent;
    }
  }

  // existing_content - computed: false, optional: false, required: true
  private _existingContent?: number; 
  public get existingContent() {
    return this.getNumberAttribute('existing_content');
  }
  public set existingContent(value: number) {
    this._existingContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get existingContentInput() {
    return this._existingContent;
  }

  // new_content - computed: false, optional: false, required: true
  private _newContent?: number; 
  public get newContent() {
    return this.getNumberAttribute('new_content');
  }
  public set newContent(value: number) {
    this._newContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newContentInput() {
    return this._newContent;
  }
}

export class WorkersCountUserCatalogList extends cdktf.ComplexList {
  public internalValue? : WorkersCountUserCatalog[] | cdktf.IResolvable

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
  public get(index: number): WorkersCountUserCatalogOutputReference {
    return new WorkersCountUserCatalogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count xray_workers_count}
*/
export class WorkersCount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xray_workers_count";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkersCount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkersCount to import
  * @param importFromId The id of the existing WorkersCount that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkersCount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xray_workers_count", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/workers_count xray_workers_count} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkersCountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WorkersCountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'xray_workers_count',
      terraformGeneratorMetadata: {
        providerName: 'xray',
        providerVersion: '3.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._analysis.internalValue = config.analysis;
    this._impactAnalysis.internalValue = config.impactAnalysis;
    this._index.internalValue = config.index;
    this._migrationSbom.internalValue = config.migrationSbom;
    this._notification.internalValue = config.notification;
    this._panoramic.internalValue = config.panoramic;
    this._persist.internalValue = config.persist;
    this._policyEnforcer.internalValue = config.policyEnforcer;
    this._sbom.internalValue = config.sbom;
    this._sbomDeleter.internalValue = config.sbomDeleter;
    this._sbomDependencies.internalValue = config.sbomDependencies;
    this._sbomEnricher.internalValue = config.sbomEnricher;
    this._sbomImpactAnalysis.internalValue = config.sbomImpactAnalysis;
    this._userCatalog.internalValue = config.userCatalog;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new WorkersCountAnalysisList(this, "analysis", true);
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: WorkersCountAnalysis[] | cdktf.IResolvable) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // impact_analysis - computed: false, optional: true, required: false
  private _impactAnalysis = new WorkersCountImpactAnalysisList(this, "impact_analysis", true);
  public get impactAnalysis() {
    return this._impactAnalysis;
  }
  public putImpactAnalysis(value: WorkersCountImpactAnalysis[] | cdktf.IResolvable) {
    this._impactAnalysis.internalValue = value;
  }
  public resetImpactAnalysis() {
    this._impactAnalysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impactAnalysisInput() {
    return this._impactAnalysis.internalValue;
  }

  // index - computed: false, optional: true, required: false
  private _index = new WorkersCountIndexList(this, "index", true);
  public get index() {
    return this._index;
  }
  public putIndex(value: WorkersCountIndex[] | cdktf.IResolvable) {
    this._index.internalValue = value;
  }
  public resetIndex() {
    this._index.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index.internalValue;
  }

  // migration_sbom - computed: false, optional: true, required: false
  private _migrationSbom = new WorkersCountMigrationSbomList(this, "migration_sbom", true);
  public get migrationSbom() {
    return this._migrationSbom;
  }
  public putMigrationSbom(value: WorkersCountMigrationSbom[] | cdktf.IResolvable) {
    this._migrationSbom.internalValue = value;
  }
  public resetMigrationSbom() {
    this._migrationSbom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationSbomInput() {
    return this._migrationSbom.internalValue;
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new WorkersCountNotificationList(this, "notification", true);
  public get notification() {
    return this._notification;
  }
  public putNotification(value: WorkersCountNotification[] | cdktf.IResolvable) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // panoramic - computed: false, optional: true, required: false
  private _panoramic = new WorkersCountPanoramicList(this, "panoramic", true);
  public get panoramic() {
    return this._panoramic;
  }
  public putPanoramic(value: WorkersCountPanoramic[] | cdktf.IResolvable) {
    this._panoramic.internalValue = value;
  }
  public resetPanoramic() {
    this._panoramic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramicInput() {
    return this._panoramic.internalValue;
  }

  // persist - computed: false, optional: true, required: false
  private _persist = new WorkersCountPersistList(this, "persist", true);
  public get persist() {
    return this._persist;
  }
  public putPersist(value: WorkersCountPersist[] | cdktf.IResolvable) {
    this._persist.internalValue = value;
  }
  public resetPersist() {
    this._persist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistInput() {
    return this._persist.internalValue;
  }

  // policy_enforcer - computed: false, optional: true, required: false
  private _policyEnforcer = new WorkersCountPolicyEnforcerList(this, "policy_enforcer", true);
  public get policyEnforcer() {
    return this._policyEnforcer;
  }
  public putPolicyEnforcer(value: WorkersCountPolicyEnforcer[] | cdktf.IResolvable) {
    this._policyEnforcer.internalValue = value;
  }
  public resetPolicyEnforcer() {
    this._policyEnforcer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyEnforcerInput() {
    return this._policyEnforcer.internalValue;
  }

  // sbom - computed: false, optional: true, required: false
  private _sbom = new WorkersCountSbomList(this, "sbom", true);
  public get sbom() {
    return this._sbom;
  }
  public putSbom(value: WorkersCountSbom[] | cdktf.IResolvable) {
    this._sbom.internalValue = value;
  }
  public resetSbom() {
    this._sbom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbomInput() {
    return this._sbom.internalValue;
  }

  // sbom_deleter - computed: false, optional: true, required: false
  private _sbomDeleter = new WorkersCountSbomDeleterList(this, "sbom_deleter", true);
  public get sbomDeleter() {
    return this._sbomDeleter;
  }
  public putSbomDeleter(value: WorkersCountSbomDeleter[] | cdktf.IResolvable) {
    this._sbomDeleter.internalValue = value;
  }
  public resetSbomDeleter() {
    this._sbomDeleter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbomDeleterInput() {
    return this._sbomDeleter.internalValue;
  }

  // sbom_dependencies - computed: false, optional: true, required: false
  private _sbomDependencies = new WorkersCountSbomDependenciesList(this, "sbom_dependencies", true);
  public get sbomDependencies() {
    return this._sbomDependencies;
  }
  public putSbomDependencies(value: WorkersCountSbomDependencies[] | cdktf.IResolvable) {
    this._sbomDependencies.internalValue = value;
  }
  public resetSbomDependencies() {
    this._sbomDependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbomDependenciesInput() {
    return this._sbomDependencies.internalValue;
  }

  // sbom_enricher - computed: false, optional: true, required: false
  private _sbomEnricher = new WorkersCountSbomEnricherList(this, "sbom_enricher", true);
  public get sbomEnricher() {
    return this._sbomEnricher;
  }
  public putSbomEnricher(value: WorkersCountSbomEnricher[] | cdktf.IResolvable) {
    this._sbomEnricher.internalValue = value;
  }
  public resetSbomEnricher() {
    this._sbomEnricher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbomEnricherInput() {
    return this._sbomEnricher.internalValue;
  }

  // sbom_impact_analysis - computed: false, optional: true, required: false
  private _sbomImpactAnalysis = new WorkersCountSbomImpactAnalysisList(this, "sbom_impact_analysis", true);
  public get sbomImpactAnalysis() {
    return this._sbomImpactAnalysis;
  }
  public putSbomImpactAnalysis(value: WorkersCountSbomImpactAnalysis[] | cdktf.IResolvable) {
    this._sbomImpactAnalysis.internalValue = value;
  }
  public resetSbomImpactAnalysis() {
    this._sbomImpactAnalysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbomImpactAnalysisInput() {
    return this._sbomImpactAnalysis.internalValue;
  }

  // user_catalog - computed: false, optional: true, required: false
  private _userCatalog = new WorkersCountUserCatalogList(this, "user_catalog", true);
  public get userCatalog() {
    return this._userCatalog;
  }
  public putUserCatalog(value: WorkersCountUserCatalog[] | cdktf.IResolvable) {
    this._userCatalog.internalValue = value;
  }
  public resetUserCatalog() {
    this._userCatalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCatalogInput() {
    return this._userCatalog.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analysis: cdktf.listMapper(workersCountAnalysisToTerraform, true)(this._analysis.internalValue),
      impact_analysis: cdktf.listMapper(workersCountImpactAnalysisToTerraform, true)(this._impactAnalysis.internalValue),
      index: cdktf.listMapper(workersCountIndexToTerraform, true)(this._index.internalValue),
      migration_sbom: cdktf.listMapper(workersCountMigrationSbomToTerraform, true)(this._migrationSbom.internalValue),
      notification: cdktf.listMapper(workersCountNotificationToTerraform, true)(this._notification.internalValue),
      panoramic: cdktf.listMapper(workersCountPanoramicToTerraform, true)(this._panoramic.internalValue),
      persist: cdktf.listMapper(workersCountPersistToTerraform, true)(this._persist.internalValue),
      policy_enforcer: cdktf.listMapper(workersCountPolicyEnforcerToTerraform, true)(this._policyEnforcer.internalValue),
      sbom: cdktf.listMapper(workersCountSbomToTerraform, true)(this._sbom.internalValue),
      sbom_deleter: cdktf.listMapper(workersCountSbomDeleterToTerraform, true)(this._sbomDeleter.internalValue),
      sbom_dependencies: cdktf.listMapper(workersCountSbomDependenciesToTerraform, true)(this._sbomDependencies.internalValue),
      sbom_enricher: cdktf.listMapper(workersCountSbomEnricherToTerraform, true)(this._sbomEnricher.internalValue),
      sbom_impact_analysis: cdktf.listMapper(workersCountSbomImpactAnalysisToTerraform, true)(this._sbomImpactAnalysis.internalValue),
      user_catalog: cdktf.listMapper(workersCountUserCatalogToTerraform, true)(this._userCatalog.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analysis: {
        value: cdktf.listMapperHcl(workersCountAnalysisToHclTerraform, true)(this._analysis.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkersCountAnalysisList",
      },
      impact_analysis: {
        value: cdktf.listMapperHcl(workersCountImpactAnalysisToHclTerraform, true)(this._impactAnalysis.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkersCountImpactAnalysisList",
      },
      index: {
        value: cdktf.listMapperHcl(workersCountIndexToHclTerraform, true)(this._index.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkersCountIndexList",
      },
      migration_sbom: {
        value: cdktf.listMapperHcl(workersCountMigrationSbomToHclTerraform, true)(this._migrationSbom.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkersCountMigrationSbomList",
      },
      notification: {
        value: cdktf.listMapperHcl(workersCountNotificationToHclTerraform, true)(this._notification.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkersCountNotificationList",
      },
      panoramic: {
        value: cdktf.listMapperHcl(workersCountPanoramicToHclTerraform, true)(this._panoramic.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkersCountPanoramicList",
      },
      persist: {
        value: cdktf.listMapperHcl(workersCountPersistToHclTerraform, true)(this._persist.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkersCountPersistList",
      },
      policy_enforcer: {
        value: cdktf.listMapperHcl(workersCountPolicyEnforcerToHclTerraform, true)(this._policyEnforcer.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkersCountPolicyEnforcerList",
      },
      sbom: {
        value: cdktf.listMapperHcl(workersCountSbomToHclTerraform, true)(this._sbom.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkersCountSbomList",
      },
      sbom_deleter: {
        value: cdktf.listMapperHcl(workersCountSbomDeleterToHclTerraform, true)(this._sbomDeleter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkersCountSbomDeleterList",
      },
      sbom_dependencies: {
        value: cdktf.listMapperHcl(workersCountSbomDependenciesToHclTerraform, true)(this._sbomDependencies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkersCountSbomDependenciesList",
      },
      sbom_enricher: {
        value: cdktf.listMapperHcl(workersCountSbomEnricherToHclTerraform, true)(this._sbomEnricher.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkersCountSbomEnricherList",
      },
      sbom_impact_analysis: {
        value: cdktf.listMapperHcl(workersCountSbomImpactAnalysisToHclTerraform, true)(this._sbomImpactAnalysis.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkersCountSbomImpactAnalysisList",
      },
      user_catalog: {
        value: cdktf.listMapperHcl(workersCountUserCatalogToHclTerraform, true)(this._userCatalog.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkersCountUserCatalogList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
