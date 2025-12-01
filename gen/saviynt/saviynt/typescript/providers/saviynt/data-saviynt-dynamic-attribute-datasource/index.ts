// https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/dynamic_attribute_datasource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSaviyntDynamicAttributeDatasourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * If false, do not store connection_attributes in state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/dynamic_attribute_datasource#authenticate DataSaviyntDynamicAttributeDatasource#authenticate}
  */
  readonly authenticate: boolean | cdktf.IResolvable;
  /**
  * Dynamic Attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/dynamic_attribute_datasource#dynamic_attributes DataSaviyntDynamicAttributeDatasource#dynamic_attributes}
  */
  readonly dynamicAttributes?: string[];
  /**
  * Endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/dynamic_attribute_datasource#endpoint DataSaviyntDynamicAttributeDatasource#endpoint}
  */
  readonly endpoint?: string[];
  /**
  * Logged In User
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/dynamic_attribute_datasource#loggedinuser DataSaviyntDynamicAttributeDatasource#loggedinuser}
  */
  readonly loggedinuser?: string;
  /**
  * Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/dynamic_attribute_datasource#max DataSaviyntDynamicAttributeDatasource#max}
  */
  readonly max?: string;
  /**
  * Offset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/dynamic_attribute_datasource#offset DataSaviyntDynamicAttributeDatasource#offset}
  */
  readonly offset?: string;
  /**
  * Request Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/dynamic_attribute_datasource#requesttype DataSaviyntDynamicAttributeDatasource#requesttype}
  */
  readonly requesttype?: string[];
  /**
  * Security System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/dynamic_attribute_datasource#securitysystem DataSaviyntDynamicAttributeDatasource#securitysystem}
  */
  readonly securitysystem?: string[];
}
export interface DataSaviyntDynamicAttributeDatasourceDynamicAttributesListStruct {
}

export function dataSaviyntDynamicAttributeDatasourceDynamicAttributesListStructToTerraform(struct?: DataSaviyntDynamicAttributeDatasourceDynamicAttributesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSaviyntDynamicAttributeDatasourceDynamicAttributesListStructToHclTerraform(struct?: DataSaviyntDynamicAttributeDatasourceDynamicAttributesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSaviyntDynamicAttributeDatasourceDynamicAttributesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSaviyntDynamicAttributeDatasourceDynamicAttributesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntDynamicAttributeDatasourceDynamicAttributesListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accounts_column - computed: true, optional: false, required: false
  public get accountsColumn() {
    return this.getStringAttribute('accounts_column');
  }

  // action_string - computed: true, optional: false, required: false
  public get actionString() {
    return this.getStringAttribute('action_string');
  }

  // action_to_perform_when_parent_attribute_changes - computed: true, optional: false, required: false
  public get actionToPerformWhenParentAttributeChanges() {
    return this.getStringAttribute('action_to_perform_when_parent_attribute_changes');
  }

  // attribute_group - computed: true, optional: false, required: false
  public get attributeGroup() {
    return this.getStringAttribute('attribute_group');
  }

  // attribute_lable - computed: true, optional: false, required: false
  public get attributeLable() {
    return this.getStringAttribute('attribute_lable');
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // attribute_type - computed: true, optional: false, required: false
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }

  // attribute_value - computed: true, optional: false, required: false
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // descriptionascsv - computed: true, optional: false, required: false
  public get descriptionascsv() {
    return this.getStringAttribute('descriptionascsv');
  }

  // editable - computed: true, optional: false, required: false
  public get editable() {
    return this.getStringAttribute('editable');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // hide_on_create - computed: true, optional: false, required: false
  public get hideOnCreate() {
    return this.getStringAttribute('hide_on_create');
  }

  // hide_on_update - computed: true, optional: false, required: false
  public get hideOnUpdate() {
    return this.getStringAttribute('hide_on_update');
  }

  // order_index - computed: true, optional: false, required: false
  public get orderIndex() {
    return this.getStringAttribute('order_index');
  }

  // parentattribute - computed: true, optional: false, required: false
  public get parentattribute() {
    return this.getStringAttribute('parentattribute');
  }

  // request_type - computed: true, optional: false, required: false
  public get requestType() {
    return this.getStringAttribute('request_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getStringAttribute('required');
  }

  // security_system - computed: true, optional: false, required: false
  public get securitySystem() {
    return this.getStringAttribute('security_system');
  }

  // showonchild - computed: true, optional: false, required: false
  public get showonchild() {
    return this.getStringAttribute('showonchild');
  }
}

export class DataSaviyntDynamicAttributeDatasourceDynamicAttributesListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataSaviyntDynamicAttributeDatasourceDynamicAttributesListStructOutputReference {
    return new DataSaviyntDynamicAttributeDatasourceDynamicAttributesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/dynamic_attribute_datasource saviynt_dynamic_attribute_datasource}
*/
export class DataSaviyntDynamicAttributeDatasource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_dynamic_attribute_datasource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSaviyntDynamicAttributeDatasource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSaviyntDynamicAttributeDatasource to import
  * @param importFromId The id of the existing DataSaviyntDynamicAttributeDatasource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/dynamic_attribute_datasource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSaviyntDynamicAttributeDatasource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_dynamic_attribute_datasource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/dynamic_attribute_datasource saviynt_dynamic_attribute_datasource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSaviyntDynamicAttributeDatasourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataSaviyntDynamicAttributeDatasourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_dynamic_attribute_datasource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
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
    this._dynamicAttributes = config.dynamicAttributes;
    this._endpoint = config.endpoint;
    this._loggedinuser = config.loggedinuser;
    this._max = config.max;
    this._offset = config.offset;
    this._requesttype = config.requesttype;
    this._securitysystem = config.securitysystem;
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

  // display_count - computed: true, optional: false, required: false
  public get displayCount() {
    return this.getNumberAttribute('display_count');
  }

  // dynamic_attributes - computed: false, optional: true, required: false
  private _dynamicAttributes?: string[]; 
  public get dynamicAttributes() {
    return this.getListAttribute('dynamic_attributes');
  }
  public set dynamicAttributes(value: string[]) {
    this._dynamicAttributes = value;
  }
  public resetDynamicAttributes() {
    this._dynamicAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicAttributesInput() {
    return this._dynamicAttributes;
  }

  // dynamic_attributes_list - computed: true, optional: false, required: false
  private _dynamicAttributesList = new DataSaviyntDynamicAttributeDatasourceDynamicAttributesListStructList(this, "dynamic_attributes_list", false);
  public get dynamicAttributesList() {
    return this._dynamicAttributesList;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string[]; 
  public get endpoint() {
    return this.getListAttribute('endpoint');
  }
  public set endpoint(value: string[]) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // loggedinuser - computed: false, optional: true, required: false
  private _loggedinuser?: string; 
  public get loggedinuser() {
    return this.getStringAttribute('loggedinuser');
  }
  public set loggedinuser(value: string) {
    this._loggedinuser = value;
  }
  public resetLoggedinuser() {
    this._loggedinuser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggedinuserInput() {
    return this._loggedinuser;
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // msg - computed: true, optional: false, required: false
  public get msg() {
    return this.getStringAttribute('msg');
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: string; 
  public get offset() {
    return this.getStringAttribute('offset');
  }
  public set offset(value: string) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // requesttype - computed: false, optional: true, required: false
  private _requesttype?: string[]; 
  public get requesttype() {
    return this.getListAttribute('requesttype');
  }
  public set requesttype(value: string[]) {
    this._requesttype = value;
  }
  public resetRequesttype() {
    this._requesttype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesttypeInput() {
    return this._requesttype;
  }

  // securitysystem - computed: false, optional: true, required: false
  private _securitysystem?: string[]; 
  public get securitysystem() {
    return this.getListAttribute('securitysystem');
  }
  public set securitysystem(value: string[]) {
    this._securitysystem = value;
  }
  public resetSecuritysystem() {
    this._securitysystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitysystemInput() {
    return this._securitysystem;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authenticate: cdktf.booleanToTerraform(this._authenticate),
      dynamic_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynamicAttributes),
      endpoint: cdktf.listMapper(cdktf.stringToTerraform, false)(this._endpoint),
      loggedinuser: cdktf.stringToTerraform(this._loggedinuser),
      max: cdktf.stringToTerraform(this._max),
      offset: cdktf.stringToTerraform(this._offset),
      requesttype: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requesttype),
      securitysystem: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securitysystem),
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
      dynamic_attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynamicAttributes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      endpoint: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._endpoint),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      loggedinuser: {
        value: cdktf.stringToHclTerraform(this._loggedinuser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max: {
        value: cdktf.stringToHclTerraform(this._max),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.stringToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requesttype: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requesttype),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      securitysystem: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securitysystem),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
