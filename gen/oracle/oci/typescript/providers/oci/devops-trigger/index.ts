// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevopsTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#connection_id DevopsTrigger#connection_id}
  */
  readonly connectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#defined_tags DevopsTrigger#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#description DevopsTrigger#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#display_name DevopsTrigger#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#freeform_tags DevopsTrigger#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#id DevopsTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#project_id DevopsTrigger#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#repository_id DevopsTrigger#repository_id}
  */
  readonly repositoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#trigger_source DevopsTrigger#trigger_source}
  */
  readonly triggerSource: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#actions DevopsTrigger#actions}
  */
  readonly actions: DevopsTriggerActions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#timeouts DevopsTrigger#timeouts}
  */
  readonly timeouts?: DevopsTriggerTimeouts;
}
export interface DevopsTriggerActionsFilterExcludeFileFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#file_paths DevopsTrigger#file_paths}
  */
  readonly filePaths?: string[];
}

export function devopsTriggerActionsFilterExcludeFileFilterToTerraform(struct?: DevopsTriggerActionsFilterExcludeFileFilterOutputReference | DevopsTriggerActionsFilterExcludeFileFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filePaths),
  }
}


export function devopsTriggerActionsFilterExcludeFileFilterToHclTerraform(struct?: DevopsTriggerActionsFilterExcludeFileFilterOutputReference | DevopsTriggerActionsFilterExcludeFileFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsTriggerActionsFilterExcludeFileFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsTriggerActionsFilterExcludeFileFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePaths = this._filePaths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsTriggerActionsFilterExcludeFileFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filePaths = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filePaths = value.filePaths;
    }
  }

  // file_paths - computed: true, optional: true, required: false
  private _filePaths?: string[]; 
  public get filePaths() {
    return this.getListAttribute('file_paths');
  }
  public set filePaths(value: string[]) {
    this._filePaths = value;
  }
  public resetFilePaths() {
    this._filePaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathsInput() {
    return this._filePaths;
  }
}
export interface DevopsTriggerActionsFilterExclude {
  /**
  * file_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#file_filter DevopsTrigger#file_filter}
  */
  readonly fileFilter?: DevopsTriggerActionsFilterExcludeFileFilter;
}

export function devopsTriggerActionsFilterExcludeToTerraform(struct?: DevopsTriggerActionsFilterExcludeOutputReference | DevopsTriggerActionsFilterExclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_filter: devopsTriggerActionsFilterExcludeFileFilterToTerraform(struct!.fileFilter),
  }
}


export function devopsTriggerActionsFilterExcludeToHclTerraform(struct?: DevopsTriggerActionsFilterExcludeOutputReference | DevopsTriggerActionsFilterExclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_filter: {
      value: devopsTriggerActionsFilterExcludeFileFilterToHclTerraform(struct!.fileFilter),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsTriggerActionsFilterExcludeFileFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsTriggerActionsFilterExcludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsTriggerActionsFilterExclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileFilter = this._fileFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsTriggerActionsFilterExclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileFilter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileFilter.internalValue = value.fileFilter;
    }
  }

  // file_filter - computed: false, optional: true, required: false
  private _fileFilter = new DevopsTriggerActionsFilterExcludeFileFilterOutputReference(this, "file_filter");
  public get fileFilter() {
    return this._fileFilter;
  }
  public putFileFilter(value: DevopsTriggerActionsFilterExcludeFileFilter) {
    this._fileFilter.internalValue = value;
  }
  public resetFileFilter() {
    this._fileFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFilterInput() {
    return this._fileFilter.internalValue;
  }
}
export interface DevopsTriggerActionsFilterIncludeFileFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#file_paths DevopsTrigger#file_paths}
  */
  readonly filePaths?: string[];
}

export function devopsTriggerActionsFilterIncludeFileFilterToTerraform(struct?: DevopsTriggerActionsFilterIncludeFileFilterOutputReference | DevopsTriggerActionsFilterIncludeFileFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filePaths),
  }
}


export function devopsTriggerActionsFilterIncludeFileFilterToHclTerraform(struct?: DevopsTriggerActionsFilterIncludeFileFilterOutputReference | DevopsTriggerActionsFilterIncludeFileFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsTriggerActionsFilterIncludeFileFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsTriggerActionsFilterIncludeFileFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePaths = this._filePaths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsTriggerActionsFilterIncludeFileFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filePaths = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filePaths = value.filePaths;
    }
  }

  // file_paths - computed: true, optional: true, required: false
  private _filePaths?: string[]; 
  public get filePaths() {
    return this.getListAttribute('file_paths');
  }
  public set filePaths(value: string[]) {
    this._filePaths = value;
  }
  public resetFilePaths() {
    this._filePaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathsInput() {
    return this._filePaths;
  }
}
export interface DevopsTriggerActionsFilterInclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#base_ref DevopsTrigger#base_ref}
  */
  readonly baseRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#head_ref DevopsTrigger#head_ref}
  */
  readonly headRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#repository_name DevopsTrigger#repository_name}
  */
  readonly repositoryName?: string;
  /**
  * file_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#file_filter DevopsTrigger#file_filter}
  */
  readonly fileFilter?: DevopsTriggerActionsFilterIncludeFileFilter;
}

export function devopsTriggerActionsFilterIncludeToTerraform(struct?: DevopsTriggerActionsFilterIncludeOutputReference | DevopsTriggerActionsFilterInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_ref: cdktf.stringToTerraform(struct!.baseRef),
    head_ref: cdktf.stringToTerraform(struct!.headRef),
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
    file_filter: devopsTriggerActionsFilterIncludeFileFilterToTerraform(struct!.fileFilter),
  }
}


export function devopsTriggerActionsFilterIncludeToHclTerraform(struct?: DevopsTriggerActionsFilterIncludeOutputReference | DevopsTriggerActionsFilterInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_ref: {
      value: cdktf.stringToHclTerraform(struct!.baseRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    head_ref: {
      value: cdktf.stringToHclTerraform(struct!.headRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_name: {
      value: cdktf.stringToHclTerraform(struct!.repositoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_filter: {
      value: devopsTriggerActionsFilterIncludeFileFilterToHclTerraform(struct!.fileFilter),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsTriggerActionsFilterIncludeFileFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsTriggerActionsFilterIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsTriggerActionsFilterInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseRef = this._baseRef;
    }
    if (this._headRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.headRef = this._headRef;
    }
    if (this._repositoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName;
    }
    if (this._fileFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileFilter = this._fileFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsTriggerActionsFilterInclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseRef = undefined;
      this._headRef = undefined;
      this._repositoryName = undefined;
      this._fileFilter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseRef = value.baseRef;
      this._headRef = value.headRef;
      this._repositoryName = value.repositoryName;
      this._fileFilter.internalValue = value.fileFilter;
    }
  }

  // base_ref - computed: true, optional: true, required: false
  private _baseRef?: string; 
  public get baseRef() {
    return this.getStringAttribute('base_ref');
  }
  public set baseRef(value: string) {
    this._baseRef = value;
  }
  public resetBaseRef() {
    this._baseRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseRefInput() {
    return this._baseRef;
  }

  // head_ref - computed: true, optional: true, required: false
  private _headRef?: string; 
  public get headRef() {
    return this.getStringAttribute('head_ref');
  }
  public set headRef(value: string) {
    this._headRef = value;
  }
  public resetHeadRef() {
    this._headRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headRefInput() {
    return this._headRef;
  }

  // repository_name - computed: true, optional: true, required: false
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  public resetRepositoryName() {
    this._repositoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }

  // file_filter - computed: false, optional: true, required: false
  private _fileFilter = new DevopsTriggerActionsFilterIncludeFileFilterOutputReference(this, "file_filter");
  public get fileFilter() {
    return this._fileFilter;
  }
  public putFileFilter(value: DevopsTriggerActionsFilterIncludeFileFilter) {
    this._fileFilter.internalValue = value;
  }
  public resetFileFilter() {
    this._fileFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFilterInput() {
    return this._fileFilter.internalValue;
  }
}
export interface DevopsTriggerActionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#events DevopsTrigger#events}
  */
  readonly events?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#trigger_source DevopsTrigger#trigger_source}
  */
  readonly triggerSource: string;
  /**
  * exclude block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#exclude DevopsTrigger#exclude}
  */
  readonly exclude?: DevopsTriggerActionsFilterExclude;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#include DevopsTrigger#include}
  */
  readonly include?: DevopsTriggerActionsFilterInclude;
}

export function devopsTriggerActionsFilterToTerraform(struct?: DevopsTriggerActionsFilterOutputReference | DevopsTriggerActionsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    trigger_source: cdktf.stringToTerraform(struct!.triggerSource),
    exclude: devopsTriggerActionsFilterExcludeToTerraform(struct!.exclude),
    include: devopsTriggerActionsFilterIncludeToTerraform(struct!.include),
  }
}


export function devopsTriggerActionsFilterToHclTerraform(struct?: DevopsTriggerActionsFilterOutputReference | DevopsTriggerActionsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trigger_source: {
      value: cdktf.stringToHclTerraform(struct!.triggerSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude: {
      value: devopsTriggerActionsFilterExcludeToHclTerraform(struct!.exclude),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsTriggerActionsFilterExcludeList",
    },
    include: {
      value: devopsTriggerActionsFilterIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsTriggerActionsFilterIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsTriggerActionsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsTriggerActionsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._triggerSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerSource = this._triggerSource;
    }
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsTriggerActionsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._events = undefined;
      this._triggerSource = undefined;
      this._exclude.internalValue = undefined;
      this._include.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._events = value.events;
      this._triggerSource = value.triggerSource;
      this._exclude.internalValue = value.exclude;
      this._include.internalValue = value.include;
    }
  }

  // events - computed: true, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // trigger_source - computed: false, optional: false, required: true
  private _triggerSource?: string; 
  public get triggerSource() {
    return this.getStringAttribute('trigger_source');
  }
  public set triggerSource(value: string) {
    this._triggerSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerSourceInput() {
    return this._triggerSource;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new DevopsTriggerActionsFilterExcludeOutputReference(this, "exclude");
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: DevopsTriggerActionsFilterExclude) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // include - computed: false, optional: true, required: false
  private _include = new DevopsTriggerActionsFilterIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: DevopsTriggerActionsFilterInclude) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }
}
export interface DevopsTriggerActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#build_pipeline_id DevopsTrigger#build_pipeline_id}
  */
  readonly buildPipelineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#type DevopsTrigger#type}
  */
  readonly type: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#filter DevopsTrigger#filter}
  */
  readonly filter?: DevopsTriggerActionsFilter;
}

export function devopsTriggerActionsToTerraform(struct?: DevopsTriggerActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_pipeline_id: cdktf.stringToTerraform(struct!.buildPipelineId),
    type: cdktf.stringToTerraform(struct!.type),
    filter: devopsTriggerActionsFilterToTerraform(struct!.filter),
  }
}


export function devopsTriggerActionsToHclTerraform(struct?: DevopsTriggerActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_pipeline_id: {
      value: cdktf.stringToHclTerraform(struct!.buildPipelineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: devopsTriggerActionsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsTriggerActionsFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsTriggerActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsTriggerActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildPipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildPipelineId = this._buildPipelineId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsTriggerActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buildPipelineId = undefined;
      this._type = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buildPipelineId = value.buildPipelineId;
      this._type = value.type;
      this._filter.internalValue = value.filter;
    }
  }

  // build_pipeline_id - computed: false, optional: false, required: true
  private _buildPipelineId?: string; 
  public get buildPipelineId() {
    return this.getStringAttribute('build_pipeline_id');
  }
  public set buildPipelineId(value: string) {
    this._buildPipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildPipelineIdInput() {
    return this._buildPipelineId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DevopsTriggerActionsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DevopsTriggerActionsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class DevopsTriggerActionsList extends cdktf.ComplexList {
  public internalValue? : DevopsTriggerActions[] | cdktf.IResolvable

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
  public get(index: number): DevopsTriggerActionsOutputReference {
    return new DevopsTriggerActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsTriggerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#create DevopsTrigger#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#delete DevopsTrigger#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#update DevopsTrigger#update}
  */
  readonly update?: string;
}

export function devopsTriggerTimeoutsToTerraform(struct?: DevopsTriggerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function devopsTriggerTimeoutsToHclTerraform(struct?: DevopsTriggerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsTriggerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsTriggerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsTriggerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger oci_devops_trigger}
*/
export class DevopsTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_devops_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevopsTrigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevopsTrigger to import
  * @param importFromId The id of the existing DevopsTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevopsTrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_devops_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/devops_trigger oci_devops_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevopsTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: DevopsTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_devops_trigger',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionId = config.connectionId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._projectId = config.projectId;
    this._repositoryId = config.repositoryId;
    this._triggerSource = config.triggerSource;
    this._actions.internalValue = config.actions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_id - computed: true, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // repository_id - computed: true, optional: true, required: false
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  public resetRepositoryId() {
    this._repositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // trigger_source - computed: false, optional: false, required: true
  private _triggerSource?: string; 
  public get triggerSource() {
    return this.getStringAttribute('trigger_source');
  }
  public set triggerSource(value: string) {
    this._triggerSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerSourceInput() {
    return this._triggerSource;
  }

  // trigger_url - computed: true, optional: false, required: false
  public get triggerUrl() {
    return this.getStringAttribute('trigger_url');
  }

  // actions - computed: false, optional: false, required: true
  private _actions = new DevopsTriggerActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: DevopsTriggerActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DevopsTriggerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DevopsTriggerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_id: cdktf.stringToTerraform(this._connectionId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      trigger_source: cdktf.stringToTerraform(this._triggerSource),
      actions: cdktf.listMapper(devopsTriggerActionsToTerraform, true)(this._actions.internalValue),
      timeouts: devopsTriggerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_id: {
        value: cdktf.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_source: {
        value: cdktf.stringToHclTerraform(this._triggerSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      actions: {
        value: cdktf.listMapperHcl(devopsTriggerActionsToHclTerraform, true)(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsTriggerActionsList",
      },
      timeouts: {
        value: devopsTriggerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DevopsTriggerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
