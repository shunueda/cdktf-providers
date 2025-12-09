// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformLoggingauditsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits#id DataSamsungcloudplatformLoggingaudits#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Logging object ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits#object_id DataSamsungcloudplatformLoggingaudits#object_id}
  */
  readonly objectId?: string;
  /**
  * Logging object name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits#object_name DataSamsungcloudplatformLoggingaudits#object_name}
  */
  readonly objectName?: string;
  /**
  * Request page number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits#page DataSamsungcloudplatformLoggingaudits#page}
  */
  readonly page?: number;
  /**
  * Offering scope. One of ALL, PUBLIC, PRIVATE, GOV.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits#product_offering DataSamsungcloudplatformLoggingaudits#product_offering}
  */
  readonly productOffering?: string;
  /**
  * requesting client type. One of Console, Api, System.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits#request_client_type DataSamsungcloudplatformLoggingaudits#request_client_type}
  */
  readonly requestClientType?: string;
  /**
  * Request start date. Default : date 3 months ago
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits#request_end_dt DataSamsungcloudplatformLoggingaudits#request_end_dt}
  */
  readonly requestEndDt?: string;
  /**
  * Request start date. Default : current date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits#request_start_dt DataSamsungcloudplatformLoggingaudits#request_start_dt}
  */
  readonly requestStartDt?: string;
  /**
  * Page count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits#size DataSamsungcloudplatformLoggingaudits#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits#sort DataSamsungcloudplatformLoggingaudits#sort}
  */
  readonly sort?: string[];
  /**
  * Job result's state. Success or Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits#state DataSamsungcloudplatformLoggingaudits#state}
  */
  readonly state?: string;
  /**
  * Name of logging target products
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits#target_product_names DataSamsungcloudplatformLoggingaudits#target_product_names}
  */
  readonly targetProductNames?: string[];
  /**
  * Logging target regions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits#target_regions DataSamsungcloudplatformLoggingaudits#target_regions}
  */
  readonly targetRegions?: string[];
  /**
  * Logging target resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits#target_resources DataSamsungcloudplatformLoggingaudits#target_resources}
  */
  readonly targetResources?: string[];
  /**
  * User name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits#user_name DataSamsungcloudplatformLoggingaudits#user_name}
  */
  readonly userName?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits#filter DataSamsungcloudplatformLoggingaudits#filter}
  */
  readonly filter?: DataSamsungcloudplatformLoggingauditsFilter[] | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformLoggingauditsContents {
}

export function dataSamsungcloudplatformLoggingauditsContentsToTerraform(struct?: DataSamsungcloudplatformLoggingauditsContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformLoggingauditsContentsToHclTerraform(struct?: DataSamsungcloudplatformLoggingauditsContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformLoggingauditsContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformLoggingauditsContents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformLoggingauditsContents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audit_content - computed: true, optional: false, required: false
  public get auditContent() {
    return this.getStringAttribute('audit_content');
  }

  // audit_detail_content - computed: true, optional: false, required: false
  public get auditDetailContent() {
    return this.getStringAttribute('audit_detail_content');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_namespace_id - computed: true, optional: false, required: false
  public get clusterNamespaceId() {
    return this.getStringAttribute('cluster_namespace_id');
  }

  // event_topic_name - computed: true, optional: false, required: false
  public get eventTopicName() {
    return this.getStringAttribute('event_topic_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_error_message - computed: true, optional: false, required: false
  public get logErrorMessage() {
    return this.getStringAttribute('log_error_message');
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // object_name - computed: true, optional: false, required: false
  public get objectName() {
    return this.getStringAttribute('object_name');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // request_client_type - computed: true, optional: false, required: false
  public get requestClientType() {
    return this.getStringAttribute('request_client_type');
  }

  // request_dt - computed: true, optional: false, required: false
  public get requestDt() {
    return this.getStringAttribute('request_dt');
  }

  // requested_by - computed: true, optional: false, required: false
  public get requestedBy() {
    return this.getStringAttribute('requested_by');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // user_email - computed: true, optional: false, required: false
  public get userEmail() {
    return this.getStringAttribute('user_email');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataSamsungcloudplatformLoggingauditsContentsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformLoggingauditsContentsOutputReference {
    return new DataSamsungcloudplatformLoggingauditsContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformLoggingauditsFilter {
  /**
  * Filtering target name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits#name DataSamsungcloudplatformLoggingaudits#name}
  */
  readonly name: string;
  /**
  * Enable regex match for values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits#use_regex DataSamsungcloudplatformLoggingaudits#use_regex}
  */
  readonly useRegex?: boolean | cdktf.IResolvable;
  /**
  * Filtering values. Each matching value is appended. (OR rule)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits#values DataSamsungcloudplatformLoggingaudits#values}
  */
  readonly values: string[];
}

export function dataSamsungcloudplatformLoggingauditsFilterToTerraform(struct?: DataSamsungcloudplatformLoggingauditsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    use_regex: cdktf.booleanToTerraform(struct!.useRegex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataSamsungcloudplatformLoggingauditsFilterToHclTerraform(struct?: DataSamsungcloudplatformLoggingauditsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_regex: {
      value: cdktf.booleanToHclTerraform(struct!.useRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSamsungcloudplatformLoggingauditsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformLoggingauditsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._useRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRegex = this._useRegex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformLoggingauditsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._useRegex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._useRegex = value.useRegex;
      this._values = value.values;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // use_regex - computed: false, optional: true, required: false
  private _useRegex?: boolean | cdktf.IResolvable; 
  public get useRegex() {
    return this.getBooleanAttribute('use_regex');
  }
  public set useRegex(value: boolean | cdktf.IResolvable) {
    this._useRegex = value;
  }
  public resetUseRegex() {
    this._useRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRegexInput() {
    return this._useRegex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataSamsungcloudplatformLoggingauditsFilterList extends cdktf.ComplexList {
  public internalValue? : DataSamsungcloudplatformLoggingauditsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataSamsungcloudplatformLoggingauditsFilterOutputReference {
    return new DataSamsungcloudplatformLoggingauditsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits samsungcloudplatform_loggingaudits}
*/
export class DataSamsungcloudplatformLoggingaudits extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_loggingaudits";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformLoggingaudits resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformLoggingaudits to import
  * @param importFromId The id of the existing DataSamsungcloudplatformLoggingaudits that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformLoggingaudits to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_loggingaudits", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudits samsungcloudplatform_loggingaudits} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformLoggingauditsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformLoggingauditsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_loggingaudits',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._objectId = config.objectId;
    this._objectName = config.objectName;
    this._page = config.page;
    this._productOffering = config.productOffering;
    this._requestClientType = config.requestClientType;
    this._requestEndDt = config.requestEndDt;
    this._requestStartDt = config.requestStartDt;
    this._size = config.size;
    this._sort = config.sort;
    this._state = config.state;
    this._targetProductNames = config.targetProductNames;
    this._targetRegions = config.targetRegions;
    this._targetResources = config.targetResources;
    this._userName = config.userName;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contents - computed: true, optional: false, required: false
  private _contents = new DataSamsungcloudplatformLoggingauditsContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
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

  // object_id - computed: false, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // object_name - computed: false, optional: true, required: false
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  public resetObjectName() {
    this._objectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // page - computed: false, optional: true, required: false
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // product_offering - computed: false, optional: true, required: false
  private _productOffering?: string; 
  public get productOffering() {
    return this.getStringAttribute('product_offering');
  }
  public set productOffering(value: string) {
    this._productOffering = value;
  }
  public resetProductOffering() {
    this._productOffering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productOfferingInput() {
    return this._productOffering;
  }

  // request_client_type - computed: false, optional: true, required: false
  private _requestClientType?: string; 
  public get requestClientType() {
    return this.getStringAttribute('request_client_type');
  }
  public set requestClientType(value: string) {
    this._requestClientType = value;
  }
  public resetRequestClientType() {
    this._requestClientType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestClientTypeInput() {
    return this._requestClientType;
  }

  // request_end_dt - computed: false, optional: true, required: false
  private _requestEndDt?: string; 
  public get requestEndDt() {
    return this.getStringAttribute('request_end_dt');
  }
  public set requestEndDt(value: string) {
    this._requestEndDt = value;
  }
  public resetRequestEndDt() {
    this._requestEndDt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestEndDtInput() {
    return this._requestEndDt;
  }

  // request_start_dt - computed: false, optional: true, required: false
  private _requestStartDt?: string; 
  public get requestStartDt() {
    return this.getStringAttribute('request_start_dt');
  }
  public set requestStartDt(value: string) {
    this._requestStartDt = value;
  }
  public resetRequestStartDt() {
    this._requestStartDt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestStartDtInput() {
    return this._requestStartDt;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string[]; 
  public get sort() {
    return cdktf.Fn.tolist(this.getListAttribute('sort'));
  }
  public set sort(value: string[]) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // target_product_names - computed: false, optional: true, required: false
  private _targetProductNames?: string[]; 
  public get targetProductNames() {
    return cdktf.Fn.tolist(this.getListAttribute('target_product_names'));
  }
  public set targetProductNames(value: string[]) {
    this._targetProductNames = value;
  }
  public resetTargetProductNames() {
    this._targetProductNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProductNamesInput() {
    return this._targetProductNames;
  }

  // target_regions - computed: false, optional: true, required: false
  private _targetRegions?: string[]; 
  public get targetRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('target_regions'));
  }
  public set targetRegions(value: string[]) {
    this._targetRegions = value;
  }
  public resetTargetRegions() {
    this._targetRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRegionsInput() {
    return this._targetRegions;
  }

  // target_resources - computed: false, optional: true, required: false
  private _targetResources?: string[]; 
  public get targetResources() {
    return cdktf.Fn.tolist(this.getListAttribute('target_resources'));
  }
  public set targetResources(value: string[]) {
    this._targetResources = value;
  }
  public resetTargetResources() {
    this._targetResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourcesInput() {
    return this._targetResources;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataSamsungcloudplatformLoggingauditsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataSamsungcloudplatformLoggingauditsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      object_id: cdktf.stringToTerraform(this._objectId),
      object_name: cdktf.stringToTerraform(this._objectName),
      page: cdktf.numberToTerraform(this._page),
      product_offering: cdktf.stringToTerraform(this._productOffering),
      request_client_type: cdktf.stringToTerraform(this._requestClientType),
      request_end_dt: cdktf.stringToTerraform(this._requestEndDt),
      request_start_dt: cdktf.stringToTerraform(this._requestStartDt),
      size: cdktf.numberToTerraform(this._size),
      sort: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sort),
      state: cdktf.stringToTerraform(this._state),
      target_product_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetProductNames),
      target_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetRegions),
      target_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetResources),
      user_name: cdktf.stringToTerraform(this._userName),
      filter: cdktf.listMapper(dataSamsungcloudplatformLoggingauditsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_id: {
        value: cdktf.stringToHclTerraform(this._objectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_name: {
        value: cdktf.stringToHclTerraform(this._objectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      product_offering: {
        value: cdktf.stringToHclTerraform(this._productOffering),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_client_type: {
        value: cdktf.stringToHclTerraform(this._requestClientType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_end_dt: {
        value: cdktf.stringToHclTerraform(this._requestEndDt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_start_dt: {
        value: cdktf.stringToHclTerraform(this._requestStartDt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sort: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sort),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_product_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetProductNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetRegions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_resources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetResources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataSamsungcloudplatformLoggingauditsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSamsungcloudplatformLoggingauditsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
