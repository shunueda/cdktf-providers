// https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/privilege_datasource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSaviyntPrivilegeDatasourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * If false, do not store sensitive attributes in state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/privilege_datasource#authenticate DataSaviyntPrivilegeDatasource#authenticate}
  */
  readonly authenticate: boolean | cdktf.IResolvable;
  /**
  * The name of the endpoint to query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/privilege_datasource#endpoint DataSaviyntPrivilegeDatasource#endpoint}
  */
  readonly endpoint: string;
  /**
  * The name of the entitlement type to query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/privilege_datasource#entitlement_type DataSaviyntPrivilegeDatasource#entitlement_type}
  */
  readonly entitlementType?: string;
  /**
  * Maximum number of privileges to retrieve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/privilege_datasource#max DataSaviyntPrivilegeDatasource#max}
  */
  readonly max?: string;
  /**
  * Pagination offset for retrieving privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/privilege_datasource#offset DataSaviyntPrivilegeDatasource#offset}
  */
  readonly offset?: string;
}
export interface DataSaviyntPrivilegeDatasourcePrivilegesListStruct {
  /**
  * Hide on create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/privilege_datasource#hide_on_create DataSaviyntPrivilegeDatasource#hide_on_create}
  */
  readonly hideOnCreate?: boolean | cdktf.IResolvable;
}

export function dataSaviyntPrivilegeDatasourcePrivilegesListStructToTerraform(struct?: DataSaviyntPrivilegeDatasourcePrivilegesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hide_on_create: cdktf.booleanToTerraform(struct!.hideOnCreate),
  }
}


export function dataSaviyntPrivilegeDatasourcePrivilegesListStructToHclTerraform(struct?: DataSaviyntPrivilegeDatasourcePrivilegesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hide_on_create: {
      value: cdktf.booleanToHclTerraform(struct!.hideOnCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSaviyntPrivilegeDatasourcePrivilegesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSaviyntPrivilegeDatasourcePrivilegesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hideOnCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideOnCreate = this._hideOnCreate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntPrivilegeDatasourcePrivilegesListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hideOnCreate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hideOnCreate = value.hideOnCreate;
    }
  }

  // action_string - computed: true, optional: false, required: false
  public get actionString() {
    return this.getStringAttribute('action_string');
  }

  // attribute_config - computed: true, optional: false, required: false
  public get attributeConfig() {
    return this.getStringAttribute('attribute_config');
  }

  // attribute_group - computed: true, optional: false, required: false
  public get attributeGroup() {
    return this.getStringAttribute('attribute_group');
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // attribute_type - computed: true, optional: false, required: false
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }

  // child_action - computed: true, optional: false, required: false
  public get childAction() {
    return this.getStringAttribute('child_action');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // hide_on_create - computed: true, optional: true, required: false
  private _hideOnCreate?: boolean | cdktf.IResolvable; 
  public get hideOnCreate() {
    return this.getBooleanAttribute('hide_on_create');
  }
  public set hideOnCreate(value: boolean | cdktf.IResolvable) {
    this._hideOnCreate = value;
  }
  public resetHideOnCreate() {
    this._hideOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideOnCreateInput() {
    return this._hideOnCreate;
  }

  // hide_on_update - computed: true, optional: false, required: false
  public get hideOnUpdate() {
    return this.getBooleanAttribute('hide_on_update');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // order_index - computed: true, optional: false, required: false
  public get orderIndex() {
    return this.getStringAttribute('order_index');
  }

  // parent_attribute - computed: true, optional: false, required: false
  public get parentAttribute() {
    return this.getStringAttribute('parent_attribute');
  }

  // requestable - computed: true, optional: false, required: false
  public get requestable() {
    return this.getBooleanAttribute('requestable');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}

export class DataSaviyntPrivilegeDatasourcePrivilegesListStructList extends cdktf.ComplexList {
  public internalValue? : DataSaviyntPrivilegeDatasourcePrivilegesListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataSaviyntPrivilegeDatasourcePrivilegesListStructOutputReference {
    return new DataSaviyntPrivilegeDatasourcePrivilegesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/privilege_datasource saviynt_privilege_datasource}
*/
export class DataSaviyntPrivilegeDatasource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_privilege_datasource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSaviyntPrivilegeDatasource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSaviyntPrivilegeDatasource to import
  * @param importFromId The id of the existing DataSaviyntPrivilegeDatasource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/privilege_datasource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSaviyntPrivilegeDatasource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_privilege_datasource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/privilege_datasource saviynt_privilege_datasource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSaviyntPrivilegeDatasourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataSaviyntPrivilegeDatasourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_privilege_datasource',
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
    this._endpoint = config.endpoint;
    this._entitlementType = config.entitlementType;
    this._max = config.max;
    this._offset = config.offset;
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

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // entitlement_type - computed: false, optional: true, required: false
  private _entitlementType?: string; 
  public get entitlementType() {
    return this.getStringAttribute('entitlement_type');
  }
  public set entitlementType(value: string) {
    this._entitlementType = value;
  }
  public resetEntitlementType() {
    this._entitlementType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementTypeInput() {
    return this._entitlementType;
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
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

  // privileges_list - computed: true, optional: false, required: false
  private _privilegesList = new DataSaviyntPrivilegeDatasourcePrivilegesListStructList(this, "privileges_list", false);
  public get privilegesList() {
    return this._privilegesList;
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
      endpoint: cdktf.stringToTerraform(this._endpoint),
      entitlement_type: cdktf.stringToTerraform(this._entitlementType),
      max: cdktf.stringToTerraform(this._max),
      offset: cdktf.stringToTerraform(this._offset),
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
      entitlement_type: {
        value: cdktf.stringToHclTerraform(this._entitlementType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
