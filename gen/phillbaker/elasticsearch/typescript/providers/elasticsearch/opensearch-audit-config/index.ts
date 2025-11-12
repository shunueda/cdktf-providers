// https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpensearchAuditConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#enabled OpensearchAuditConfig#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#id OpensearchAuditConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * audit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#audit OpensearchAuditConfig#audit}
  */
  readonly audit?: OpensearchAuditConfigAudit;
  /**
  * compliance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#compliance OpensearchAuditConfig#compliance}
  */
  readonly compliance?: OpensearchAuditConfigCompliance;
}
export interface OpensearchAuditConfigAudit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#disabled_rest_categories OpensearchAuditConfig#disabled_rest_categories}
  */
  readonly disabledRestCategories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#disabled_transport_categories OpensearchAuditConfig#disabled_transport_categories}
  */
  readonly disabledTransportCategories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#enable_rest OpensearchAuditConfig#enable_rest}
  */
  readonly enableRest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#enable_transport OpensearchAuditConfig#enable_transport}
  */
  readonly enableTransport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#exclude_sensitive_headers OpensearchAuditConfig#exclude_sensitive_headers}
  */
  readonly excludeSensitiveHeaders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#ignore_requests OpensearchAuditConfig#ignore_requests}
  */
  readonly ignoreRequests?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#ignore_users OpensearchAuditConfig#ignore_users}
  */
  readonly ignoreUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#log_request_body OpensearchAuditConfig#log_request_body}
  */
  readonly logRequestBody?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#resolve_bulk_requests OpensearchAuditConfig#resolve_bulk_requests}
  */
  readonly resolveBulkRequests?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#resolve_indices OpensearchAuditConfig#resolve_indices}
  */
  readonly resolveIndices?: boolean | cdktf.IResolvable;
}

export function opensearchAuditConfigAuditToTerraform(struct?: OpensearchAuditConfigAuditOutputReference | OpensearchAuditConfigAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled_rest_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disabledRestCategories),
    disabled_transport_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disabledTransportCategories),
    enable_rest: cdktf.booleanToTerraform(struct!.enableRest),
    enable_transport: cdktf.booleanToTerraform(struct!.enableTransport),
    exclude_sensitive_headers: cdktf.booleanToTerraform(struct!.excludeSensitiveHeaders),
    ignore_requests: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoreRequests),
    ignore_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoreUsers),
    log_request_body: cdktf.booleanToTerraform(struct!.logRequestBody),
    resolve_bulk_requests: cdktf.booleanToTerraform(struct!.resolveBulkRequests),
    resolve_indices: cdktf.booleanToTerraform(struct!.resolveIndices),
  }
}


export function opensearchAuditConfigAuditToHclTerraform(struct?: OpensearchAuditConfigAuditOutputReference | OpensearchAuditConfigAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled_rest_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disabledRestCategories),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    disabled_transport_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disabledTransportCategories),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enable_rest: {
      value: cdktf.booleanToHclTerraform(struct!.enableRest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_transport: {
      value: cdktf.booleanToHclTerraform(struct!.enableTransport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_sensitive_headers: {
      value: cdktf.booleanToHclTerraform(struct!.excludeSensitiveHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_requests: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoreRequests),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ignore_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoreUsers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    log_request_body: {
      value: cdktf.booleanToHclTerraform(struct!.logRequestBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resolve_bulk_requests: {
      value: cdktf.booleanToHclTerraform(struct!.resolveBulkRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resolve_indices: {
      value: cdktf.booleanToHclTerraform(struct!.resolveIndices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchAuditConfigAuditOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchAuditConfigAudit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabledRestCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledRestCategories = this._disabledRestCategories;
    }
    if (this._disabledTransportCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledTransportCategories = this._disabledTransportCategories;
    }
    if (this._enableRest !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRest = this._enableRest;
    }
    if (this._enableTransport !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTransport = this._enableTransport;
    }
    if (this._excludeSensitiveHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeSensitiveHeaders = this._excludeSensitiveHeaders;
    }
    if (this._ignoreRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreRequests = this._ignoreRequests;
    }
    if (this._ignoreUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUsers = this._ignoreUsers;
    }
    if (this._logRequestBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRequestBody = this._logRequestBody;
    }
    if (this._resolveBulkRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveBulkRequests = this._resolveBulkRequests;
    }
    if (this._resolveIndices !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveIndices = this._resolveIndices;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchAuditConfigAudit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabledRestCategories = undefined;
      this._disabledTransportCategories = undefined;
      this._enableRest = undefined;
      this._enableTransport = undefined;
      this._excludeSensitiveHeaders = undefined;
      this._ignoreRequests = undefined;
      this._ignoreUsers = undefined;
      this._logRequestBody = undefined;
      this._resolveBulkRequests = undefined;
      this._resolveIndices = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabledRestCategories = value.disabledRestCategories;
      this._disabledTransportCategories = value.disabledTransportCategories;
      this._enableRest = value.enableRest;
      this._enableTransport = value.enableTransport;
      this._excludeSensitiveHeaders = value.excludeSensitiveHeaders;
      this._ignoreRequests = value.ignoreRequests;
      this._ignoreUsers = value.ignoreUsers;
      this._logRequestBody = value.logRequestBody;
      this._resolveBulkRequests = value.resolveBulkRequests;
      this._resolveIndices = value.resolveIndices;
    }
  }

  // disabled_rest_categories - computed: false, optional: true, required: false
  private _disabledRestCategories?: string[]; 
  public get disabledRestCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('disabled_rest_categories'));
  }
  public set disabledRestCategories(value: string[]) {
    this._disabledRestCategories = value;
  }
  public resetDisabledRestCategories() {
    this._disabledRestCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledRestCategoriesInput() {
    return this._disabledRestCategories;
  }

  // disabled_transport_categories - computed: false, optional: true, required: false
  private _disabledTransportCategories?: string[]; 
  public get disabledTransportCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('disabled_transport_categories'));
  }
  public set disabledTransportCategories(value: string[]) {
    this._disabledTransportCategories = value;
  }
  public resetDisabledTransportCategories() {
    this._disabledTransportCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledTransportCategoriesInput() {
    return this._disabledTransportCategories;
  }

  // enable_rest - computed: false, optional: true, required: false
  private _enableRest?: boolean | cdktf.IResolvable; 
  public get enableRest() {
    return this.getBooleanAttribute('enable_rest');
  }
  public set enableRest(value: boolean | cdktf.IResolvable) {
    this._enableRest = value;
  }
  public resetEnableRest() {
    this._enableRest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRestInput() {
    return this._enableRest;
  }

  // enable_transport - computed: false, optional: true, required: false
  private _enableTransport?: boolean | cdktf.IResolvable; 
  public get enableTransport() {
    return this.getBooleanAttribute('enable_transport');
  }
  public set enableTransport(value: boolean | cdktf.IResolvable) {
    this._enableTransport = value;
  }
  public resetEnableTransport() {
    this._enableTransport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTransportInput() {
    return this._enableTransport;
  }

  // exclude_sensitive_headers - computed: false, optional: true, required: false
  private _excludeSensitiveHeaders?: boolean | cdktf.IResolvable; 
  public get excludeSensitiveHeaders() {
    return this.getBooleanAttribute('exclude_sensitive_headers');
  }
  public set excludeSensitiveHeaders(value: boolean | cdktf.IResolvable) {
    this._excludeSensitiveHeaders = value;
  }
  public resetExcludeSensitiveHeaders() {
    this._excludeSensitiveHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSensitiveHeadersInput() {
    return this._excludeSensitiveHeaders;
  }

  // ignore_requests - computed: false, optional: true, required: false
  private _ignoreRequests?: string[]; 
  public get ignoreRequests() {
    return cdktf.Fn.tolist(this.getListAttribute('ignore_requests'));
  }
  public set ignoreRequests(value: string[]) {
    this._ignoreRequests = value;
  }
  public resetIgnoreRequests() {
    this._ignoreRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreRequestsInput() {
    return this._ignoreRequests;
  }

  // ignore_users - computed: false, optional: true, required: false
  private _ignoreUsers?: string[]; 
  public get ignoreUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('ignore_users'));
  }
  public set ignoreUsers(value: string[]) {
    this._ignoreUsers = value;
  }
  public resetIgnoreUsers() {
    this._ignoreUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUsersInput() {
    return this._ignoreUsers;
  }

  // log_request_body - computed: false, optional: true, required: false
  private _logRequestBody?: boolean | cdktf.IResolvable; 
  public get logRequestBody() {
    return this.getBooleanAttribute('log_request_body');
  }
  public set logRequestBody(value: boolean | cdktf.IResolvable) {
    this._logRequestBody = value;
  }
  public resetLogRequestBody() {
    this._logRequestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRequestBodyInput() {
    return this._logRequestBody;
  }

  // resolve_bulk_requests - computed: false, optional: true, required: false
  private _resolveBulkRequests?: boolean | cdktf.IResolvable; 
  public get resolveBulkRequests() {
    return this.getBooleanAttribute('resolve_bulk_requests');
  }
  public set resolveBulkRequests(value: boolean | cdktf.IResolvable) {
    this._resolveBulkRequests = value;
  }
  public resetResolveBulkRequests() {
    this._resolveBulkRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveBulkRequestsInput() {
    return this._resolveBulkRequests;
  }

  // resolve_indices - computed: false, optional: true, required: false
  private _resolveIndices?: boolean | cdktf.IResolvable; 
  public get resolveIndices() {
    return this.getBooleanAttribute('resolve_indices');
  }
  public set resolveIndices(value: boolean | cdktf.IResolvable) {
    this._resolveIndices = value;
  }
  public resetResolveIndices() {
    this._resolveIndices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveIndicesInput() {
    return this._resolveIndices;
  }
}
export interface OpensearchAuditConfigComplianceReadWatchedField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#fields OpensearchAuditConfig#fields}
  */
  readonly fields: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#index OpensearchAuditConfig#index}
  */
  readonly index: string;
}

export function opensearchAuditConfigComplianceReadWatchedFieldToTerraform(struct?: OpensearchAuditConfigComplianceReadWatchedField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    index: cdktf.stringToTerraform(struct!.index),
  }
}


export function opensearchAuditConfigComplianceReadWatchedFieldToHclTerraform(struct?: OpensearchAuditConfigComplianceReadWatchedField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchAuditConfigComplianceReadWatchedFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpensearchAuditConfigComplianceReadWatchedField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchAuditConfigComplianceReadWatchedField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields = undefined;
      this._index = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields = value.fields;
      this._index = value.index;
    }
  }

  // fields - computed: false, optional: false, required: true
  private _fields?: string[]; 
  public get fields() {
    return cdktf.Fn.tolist(this.getListAttribute('fields'));
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }
}

export class OpensearchAuditConfigComplianceReadWatchedFieldList extends cdktf.ComplexList {
  public internalValue? : OpensearchAuditConfigComplianceReadWatchedField[] | cdktf.IResolvable

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
  public get(index: number): OpensearchAuditConfigComplianceReadWatchedFieldOutputReference {
    return new OpensearchAuditConfigComplianceReadWatchedFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchAuditConfigCompliance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#enabled OpensearchAuditConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#external_config OpensearchAuditConfig#external_config}
  */
  readonly externalConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#internal_config OpensearchAuditConfig#internal_config}
  */
  readonly internalConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#read_ignore_users OpensearchAuditConfig#read_ignore_users}
  */
  readonly readIgnoreUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#read_metadata_only OpensearchAuditConfig#read_metadata_only}
  */
  readonly readMetadataOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#write_ignore_users OpensearchAuditConfig#write_ignore_users}
  */
  readonly writeIgnoreUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#write_log_diffs OpensearchAuditConfig#write_log_diffs}
  */
  readonly writeLogDiffs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#write_metadata_only OpensearchAuditConfig#write_metadata_only}
  */
  readonly writeMetadataOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#write_watched_indices OpensearchAuditConfig#write_watched_indices}
  */
  readonly writeWatchedIndices?: string[];
  /**
  * read_watched_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#read_watched_field OpensearchAuditConfig#read_watched_field}
  */
  readonly readWatchedField?: OpensearchAuditConfigComplianceReadWatchedField[] | cdktf.IResolvable;
}

export function opensearchAuditConfigComplianceToTerraform(struct?: OpensearchAuditConfigComplianceOutputReference | OpensearchAuditConfigCompliance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    external_config: cdktf.booleanToTerraform(struct!.externalConfig),
    internal_config: cdktf.booleanToTerraform(struct!.internalConfig),
    read_ignore_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.readIgnoreUsers),
    read_metadata_only: cdktf.booleanToTerraform(struct!.readMetadataOnly),
    write_ignore_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.writeIgnoreUsers),
    write_log_diffs: cdktf.booleanToTerraform(struct!.writeLogDiffs),
    write_metadata_only: cdktf.booleanToTerraform(struct!.writeMetadataOnly),
    write_watched_indices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.writeWatchedIndices),
    read_watched_field: cdktf.listMapper(opensearchAuditConfigComplianceReadWatchedFieldToTerraform, true)(struct!.readWatchedField),
  }
}


export function opensearchAuditConfigComplianceToHclTerraform(struct?: OpensearchAuditConfigComplianceOutputReference | OpensearchAuditConfigCompliance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_config: {
      value: cdktf.booleanToHclTerraform(struct!.externalConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    internal_config: {
      value: cdktf.booleanToHclTerraform(struct!.internalConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_ignore_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.readIgnoreUsers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    read_metadata_only: {
      value: cdktf.booleanToHclTerraform(struct!.readMetadataOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write_ignore_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.writeIgnoreUsers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    write_log_diffs: {
      value: cdktf.booleanToHclTerraform(struct!.writeLogDiffs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write_metadata_only: {
      value: cdktf.booleanToHclTerraform(struct!.writeMetadataOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write_watched_indices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.writeWatchedIndices),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    read_watched_field: {
      value: cdktf.listMapperHcl(opensearchAuditConfigComplianceReadWatchedFieldToHclTerraform, true)(struct!.readWatchedField),
      isBlock: true,
      type: "set",
      storageClassType: "OpensearchAuditConfigComplianceReadWatchedFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchAuditConfigComplianceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchAuditConfigCompliance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._externalConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalConfig = this._externalConfig;
    }
    if (this._internalConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalConfig = this._internalConfig;
    }
    if (this._readIgnoreUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.readIgnoreUsers = this._readIgnoreUsers;
    }
    if (this._readMetadataOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readMetadataOnly = this._readMetadataOnly;
    }
    if (this._writeIgnoreUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeIgnoreUsers = this._writeIgnoreUsers;
    }
    if (this._writeLogDiffs !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeLogDiffs = this._writeLogDiffs;
    }
    if (this._writeMetadataOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeMetadataOnly = this._writeMetadataOnly;
    }
    if (this._writeWatchedIndices !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeWatchedIndices = this._writeWatchedIndices;
    }
    if (this._readWatchedField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readWatchedField = this._readWatchedField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchAuditConfigCompliance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._externalConfig = undefined;
      this._internalConfig = undefined;
      this._readIgnoreUsers = undefined;
      this._readMetadataOnly = undefined;
      this._writeIgnoreUsers = undefined;
      this._writeLogDiffs = undefined;
      this._writeMetadataOnly = undefined;
      this._writeWatchedIndices = undefined;
      this._readWatchedField.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._externalConfig = value.externalConfig;
      this._internalConfig = value.internalConfig;
      this._readIgnoreUsers = value.readIgnoreUsers;
      this._readMetadataOnly = value.readMetadataOnly;
      this._writeIgnoreUsers = value.writeIgnoreUsers;
      this._writeLogDiffs = value.writeLogDiffs;
      this._writeMetadataOnly = value.writeMetadataOnly;
      this._writeWatchedIndices = value.writeWatchedIndices;
      this._readWatchedField.internalValue = value.readWatchedField;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // external_config - computed: false, optional: true, required: false
  private _externalConfig?: boolean | cdktf.IResolvable; 
  public get externalConfig() {
    return this.getBooleanAttribute('external_config');
  }
  public set externalConfig(value: boolean | cdktf.IResolvable) {
    this._externalConfig = value;
  }
  public resetExternalConfig() {
    this._externalConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalConfigInput() {
    return this._externalConfig;
  }

  // internal_config - computed: false, optional: true, required: false
  private _internalConfig?: boolean | cdktf.IResolvable; 
  public get internalConfig() {
    return this.getBooleanAttribute('internal_config');
  }
  public set internalConfig(value: boolean | cdktf.IResolvable) {
    this._internalConfig = value;
  }
  public resetInternalConfig() {
    this._internalConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalConfigInput() {
    return this._internalConfig;
  }

  // read_ignore_users - computed: false, optional: true, required: false
  private _readIgnoreUsers?: string[]; 
  public get readIgnoreUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('read_ignore_users'));
  }
  public set readIgnoreUsers(value: string[]) {
    this._readIgnoreUsers = value;
  }
  public resetReadIgnoreUsers() {
    this._readIgnoreUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readIgnoreUsersInput() {
    return this._readIgnoreUsers;
  }

  // read_metadata_only - computed: false, optional: true, required: false
  private _readMetadataOnly?: boolean | cdktf.IResolvable; 
  public get readMetadataOnly() {
    return this.getBooleanAttribute('read_metadata_only');
  }
  public set readMetadataOnly(value: boolean | cdktf.IResolvable) {
    this._readMetadataOnly = value;
  }
  public resetReadMetadataOnly() {
    this._readMetadataOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readMetadataOnlyInput() {
    return this._readMetadataOnly;
  }

  // write_ignore_users - computed: false, optional: true, required: false
  private _writeIgnoreUsers?: string[]; 
  public get writeIgnoreUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('write_ignore_users'));
  }
  public set writeIgnoreUsers(value: string[]) {
    this._writeIgnoreUsers = value;
  }
  public resetWriteIgnoreUsers() {
    this._writeIgnoreUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeIgnoreUsersInput() {
    return this._writeIgnoreUsers;
  }

  // write_log_diffs - computed: false, optional: true, required: false
  private _writeLogDiffs?: boolean | cdktf.IResolvable; 
  public get writeLogDiffs() {
    return this.getBooleanAttribute('write_log_diffs');
  }
  public set writeLogDiffs(value: boolean | cdktf.IResolvable) {
    this._writeLogDiffs = value;
  }
  public resetWriteLogDiffs() {
    this._writeLogDiffs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeLogDiffsInput() {
    return this._writeLogDiffs;
  }

  // write_metadata_only - computed: false, optional: true, required: false
  private _writeMetadataOnly?: boolean | cdktf.IResolvable; 
  public get writeMetadataOnly() {
    return this.getBooleanAttribute('write_metadata_only');
  }
  public set writeMetadataOnly(value: boolean | cdktf.IResolvable) {
    this._writeMetadataOnly = value;
  }
  public resetWriteMetadataOnly() {
    this._writeMetadataOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeMetadataOnlyInput() {
    return this._writeMetadataOnly;
  }

  // write_watched_indices - computed: false, optional: true, required: false
  private _writeWatchedIndices?: string[]; 
  public get writeWatchedIndices() {
    return cdktf.Fn.tolist(this.getListAttribute('write_watched_indices'));
  }
  public set writeWatchedIndices(value: string[]) {
    this._writeWatchedIndices = value;
  }
  public resetWriteWatchedIndices() {
    this._writeWatchedIndices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeWatchedIndicesInput() {
    return this._writeWatchedIndices;
  }

  // read_watched_field - computed: false, optional: true, required: false
  private _readWatchedField = new OpensearchAuditConfigComplianceReadWatchedFieldList(this, "read_watched_field", true);
  public get readWatchedField() {
    return this._readWatchedField;
  }
  public putReadWatchedField(value: OpensearchAuditConfigComplianceReadWatchedField[] | cdktf.IResolvable) {
    this._readWatchedField.internalValue = value;
  }
  public resetReadWatchedField() {
    this._readWatchedField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readWatchedFieldInput() {
    return this._readWatchedField.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config elasticsearch_opensearch_audit_config}
*/
export class OpensearchAuditConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticsearch_opensearch_audit_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpensearchAuditConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpensearchAuditConfig to import
  * @param importFromId The id of the existing OpensearchAuditConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpensearchAuditConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticsearch_opensearch_audit_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_audit_config elasticsearch_opensearch_audit_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpensearchAuditConfigConfig
  */
  public constructor(scope: Construct, id: string, config: OpensearchAuditConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticsearch_opensearch_audit_config',
      terraformGeneratorMetadata: {
        providerName: 'elasticsearch',
        providerVersion: '2.0.7',
        providerVersionConstraint: '2.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._audit.internalValue = config.audit;
    this._compliance.internalValue = config.compliance;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // audit - computed: false, optional: true, required: false
  private _audit = new OpensearchAuditConfigAuditOutputReference(this, "audit");
  public get audit() {
    return this._audit;
  }
  public putAudit(value: OpensearchAuditConfigAudit) {
    this._audit.internalValue = value;
  }
  public resetAudit() {
    this._audit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditInput() {
    return this._audit.internalValue;
  }

  // compliance - computed: false, optional: true, required: false
  private _compliance = new OpensearchAuditConfigComplianceOutputReference(this, "compliance");
  public get compliance() {
    return this._compliance;
  }
  public putCompliance(value: OpensearchAuditConfigCompliance) {
    this._compliance.internalValue = value;
  }
  public resetCompliance() {
    this._compliance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceInput() {
    return this._compliance.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      audit: opensearchAuditConfigAuditToTerraform(this._audit.internalValue),
      compliance: opensearchAuditConfigComplianceToTerraform(this._compliance.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit: {
        value: opensearchAuditConfigAuditToHclTerraform(this._audit.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpensearchAuditConfigAuditList",
      },
      compliance: {
        value: opensearchAuditConfigComplianceToHclTerraform(this._compliance.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpensearchAuditConfigComplianceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
