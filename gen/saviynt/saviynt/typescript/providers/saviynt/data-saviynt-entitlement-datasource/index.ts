// https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/entitlement_datasource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSaviyntEntitlementDatasourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to authenticate and return sensitive data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/entitlement_datasource#authenticate DataSaviyntEntitlementDatasource#authenticate}
  */
  readonly authenticate: boolean | cdktf.IResolvable;
  /**
  * Filter by endpoint name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/entitlement_datasource#endpoint DataSaviyntEntitlementDatasource#endpoint}
  */
  readonly endpoint?: string;
  /**
  * SQL-like query for filtering entitlements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/entitlement_datasource#ent_query DataSaviyntEntitlementDatasource#ent_query}
  */
  readonly entQuery?: string;
  /**
  * Filter by entitlement value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/entitlement_datasource#entitlement_value DataSaviyntEntitlementDatasource#entitlement_value}
  */
  readonly entitlementValue?: string;
  /**
  * Filter by entitlement type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/entitlement_datasource#entitlementtype DataSaviyntEntitlementDatasource#entitlementtype}
  */
  readonly entitlementtype?: string;
}
export interface DataSaviyntEntitlementDatasourceResultsEntitlementMapDetails {
}

export function dataSaviyntEntitlementDatasourceResultsEntitlementMapDetailsToTerraform(struct?: DataSaviyntEntitlementDatasourceResultsEntitlementMapDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSaviyntEntitlementDatasourceResultsEntitlementMapDetailsToHclTerraform(struct?: DataSaviyntEntitlementDatasourceResultsEntitlementMapDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSaviyntEntitlementDatasourceResultsEntitlementMapDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSaviyntEntitlementDatasourceResultsEntitlementMapDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntEntitlementDatasourceResultsEntitlementMapDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_dependent_task - computed: true, optional: false, required: false
  public get addDependentTask() {
    return this.getBooleanAttribute('add_dependent_task');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exclude_entitlement - computed: true, optional: false, required: false
  public get excludeEntitlement() {
    return this.getBooleanAttribute('exclude_entitlement');
  }

  // export_primary - computed: true, optional: false, required: false
  public get exportPrimary() {
    return this.getStringAttribute('export_primary');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getStringAttribute('primary');
  }

  // primary_ent_key - computed: true, optional: false, required: false
  public get primaryEntKey() {
    return this.getStringAttribute('primary_ent_key');
  }

  // primary_ent_type - computed: true, optional: false, required: false
  public get primaryEntType() {
    return this.getStringAttribute('primary_ent_type');
  }

  // remove_dependent_ent_task - computed: true, optional: false, required: false
  public get removeDependentEntTask() {
    return this.getBooleanAttribute('remove_dependent_ent_task');
  }

  // request_filter - computed: true, optional: false, required: false
  public get requestFilter() {
    return this.getBooleanAttribute('request_filter');
  }
}

export class DataSaviyntEntitlementDatasourceResultsEntitlementMapDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataSaviyntEntitlementDatasourceResultsEntitlementMapDetailsOutputReference {
    return new DataSaviyntEntitlementDatasourceResultsEntitlementMapDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSaviyntEntitlementDatasourceResults {
}

export function dataSaviyntEntitlementDatasourceResultsToTerraform(struct?: DataSaviyntEntitlementDatasourceResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSaviyntEntitlementDatasourceResultsToHclTerraform(struct?: DataSaviyntEntitlementDatasourceResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSaviyntEntitlementDatasourceResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSaviyntEntitlementDatasourceResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntEntitlementDatasourceResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // child_entitlement_count - computed: true, optional: false, required: false
  public get childEntitlementCount() {
    return this.getNumberAttribute('child_entitlement_count');
  }

  // confidentiality - computed: true, optional: false, required: false
  public get confidentiality() {
    return this.getStringAttribute('confidentiality');
  }

  // createdate - computed: true, optional: false, required: false
  public get createdate() {
    return this.getStringAttribute('createdate');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // displayname - computed: true, optional: false, required: false
  public get displayname() {
    return this.getStringAttribute('displayname');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // endpoint_key - computed: true, optional: false, required: false
  public get endpointKey() {
    return this.getNumberAttribute('endpoint_key');
  }

  // entitlement_glossary - computed: true, optional: false, required: false
  public get entitlementGlossary() {
    return this.getStringAttribute('entitlement_glossary');
  }

  // entitlement_map_details - computed: true, optional: false, required: false
  private _entitlementMapDetails = new DataSaviyntEntitlementDatasourceResultsEntitlementMapDetailsList(this, "entitlement_map_details", false);
  public get entitlementMapDetails() {
    return this._entitlementMapDetails;
  }

  // entitlement_owner - computed: true, optional: false, required: false
  private _entitlementOwner = new cdktf.StringListMap(this, "entitlement_owner");
  public get entitlementOwner() {
    return this._entitlementOwner;
  }

  // entitlement_type - computed: true, optional: false, required: false
  public get entitlementType() {
    return this.getStringAttribute('entitlement_type');
  }

  // entitlement_type_key - computed: true, optional: false, required: false
  public get entitlementTypeKey() {
    return this.getNumberAttribute('entitlement_type_key');
  }

  // entitlement_type_name - computed: true, optional: false, required: false
  public get entitlementTypeName() {
    return this.getStringAttribute('entitlement_type_name');
  }

  // entitlement_value - computed: true, optional: false, required: false
  public get entitlementValue() {
    return this.getStringAttribute('entitlement_value');
  }

  // entitlement_valuekey - computed: true, optional: false, required: false
  public get entitlementValuekey() {
    return this.getStringAttribute('entitlement_valuekey');
  }

  // module - computed: true, optional: false, required: false
  public get module() {
    return this.getStringAttribute('module');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getStringAttribute('privileged');
  }

  // request_form - computed: true, optional: false, required: false
  public get requestForm() {
    return this.getStringAttribute('request_form');
  }

  // risk - computed: true, optional: false, required: false
  public get risk() {
    return this.getStringAttribute('risk');
  }

  // soxcritical - computed: true, optional: false, required: false
  public get soxcritical() {
    return this.getStringAttribute('soxcritical');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // syscritical - computed: true, optional: false, required: false
  public get syscritical() {
    return this.getStringAttribute('syscritical');
  }

  // updatedate - computed: true, optional: false, required: false
  public get updatedate() {
    return this.getStringAttribute('updatedate');
  }
}

export class DataSaviyntEntitlementDatasourceResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataSaviyntEntitlementDatasourceResultsOutputReference {
    return new DataSaviyntEntitlementDatasourceResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/entitlement_datasource saviynt_entitlement_datasource}
*/
export class DataSaviyntEntitlementDatasource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_entitlement_datasource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSaviyntEntitlementDatasource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSaviyntEntitlementDatasource to import
  * @param importFromId The id of the existing DataSaviyntEntitlementDatasource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/entitlement_datasource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSaviyntEntitlementDatasource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_entitlement_datasource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/entitlement_datasource saviynt_entitlement_datasource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSaviyntEntitlementDatasourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataSaviyntEntitlementDatasourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_entitlement_datasource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.3.0',
        providerVersionConstraint: '0.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticate = config.authenticate;
    this._endpoint = config.endpoint;
    this._entQuery = config.entQuery;
    this._entitlementValue = config.entitlementValue;
    this._entitlementtype = config.entitlementtype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authenticate - computed: false, optional: false, required: true
  private _authenticate?: boolean | cdktf.IResolvable; 
  public get authenticate() {
    return this.getBooleanAttribute('authenticate');
  }
  public set authenticate(value: boolean | cdktf.IResolvable) {
    this._authenticate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateInput() {
    return this._authenticate;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // ent_query - computed: false, optional: true, required: false
  private _entQuery?: string; 
  public get entQuery() {
    return this.getStringAttribute('ent_query');
  }
  public set entQuery(value: string) {
    this._entQuery = value;
  }
  public resetEntQuery() {
    this._entQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entQueryInput() {
    return this._entQuery;
  }

  // entitlement_value - computed: false, optional: true, required: false
  private _entitlementValue?: string; 
  public get entitlementValue() {
    return this.getStringAttribute('entitlement_value');
  }
  public set entitlementValue(value: string) {
    this._entitlementValue = value;
  }
  public resetEntitlementValue() {
    this._entitlementValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementValueInput() {
    return this._entitlementValue;
  }

  // entitlements_count - computed: true, optional: false, required: false
  public get entitlementsCount() {
    return this.getNumberAttribute('entitlements_count');
  }

  // entitlementtype - computed: false, optional: true, required: false
  private _entitlementtype?: string; 
  public get entitlementtype() {
    return this.getStringAttribute('entitlementtype');
  }
  public set entitlementtype(value: string) {
    this._entitlementtype = value;
  }
  public resetEntitlementtype() {
    this._entitlementtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementtypeInput() {
    return this._entitlementtype;
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataSaviyntEntitlementDatasourceResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // total_entitlement_count - computed: true, optional: false, required: false
  public get totalEntitlementCount() {
    return this.getNumberAttribute('total_entitlement_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authenticate: cdktf.booleanToTerraform(this._authenticate),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      ent_query: cdktf.stringToTerraform(this._entQuery),
      entitlement_value: cdktf.stringToTerraform(this._entitlementValue),
      entitlementtype: cdktf.stringToTerraform(this._entitlementtype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authenticate: {
        value: cdktf.booleanToHclTerraform(this._authenticate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ent_query: {
        value: cdktf.stringToHclTerraform(this._entQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entitlement_value: {
        value: cdktf.stringToHclTerraform(this._entitlementValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entitlementtype: {
        value: cdktf.stringToHclTerraform(this._entitlementtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
