// https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpensearchRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_role#cluster_permissions OpensearchRole#cluster_permissions}
  */
  readonly clusterPermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_role#description OpensearchRole#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_role#id OpensearchRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_role#role_name OpensearchRole#role_name}
  */
  readonly roleName: string;
  /**
  * index_permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_role#index_permissions OpensearchRole#index_permissions}
  */
  readonly indexPermissions?: OpensearchRoleIndexPermissions[] | cdktf.IResolvable;
  /**
  * tenant_permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_role#tenant_permissions OpensearchRole#tenant_permissions}
  */
  readonly tenantPermissions?: OpensearchRoleTenantPermissions[] | cdktf.IResolvable;
}
export interface OpensearchRoleIndexPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_role#allowed_actions OpensearchRole#allowed_actions}
  */
  readonly allowedActions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_role#document_level_security OpensearchRole#document_level_security}
  */
  readonly documentLevelSecurity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_role#field_level_security OpensearchRole#field_level_security}
  */
  readonly fieldLevelSecurity?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_role#index_patterns OpensearchRole#index_patterns}
  */
  readonly indexPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_role#masked_fields OpensearchRole#masked_fields}
  */
  readonly maskedFields?: string[];
}

export function opensearchRoleIndexPermissionsToTerraform(struct?: OpensearchRoleIndexPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedActions),
    document_level_security: cdktf.stringToTerraform(struct!.documentLevelSecurity),
    field_level_security: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fieldLevelSecurity),
    index_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.indexPatterns),
    masked_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.maskedFields),
  }
}


export function opensearchRoleIndexPermissionsToHclTerraform(struct?: OpensearchRoleIndexPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedActions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    document_level_security: {
      value: cdktf.stringToHclTerraform(struct!.documentLevelSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_level_security: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fieldLevelSecurity),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    index_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.indexPatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    masked_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.maskedFields),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchRoleIndexPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpensearchRoleIndexPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedActions = this._allowedActions;
    }
    if (this._documentLevelSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentLevelSecurity = this._documentLevelSecurity;
    }
    if (this._fieldLevelSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldLevelSecurity = this._fieldLevelSecurity;
    }
    if (this._indexPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexPatterns = this._indexPatterns;
    }
    if (this._maskedFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskedFields = this._maskedFields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchRoleIndexPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedActions = undefined;
      this._documentLevelSecurity = undefined;
      this._fieldLevelSecurity = undefined;
      this._indexPatterns = undefined;
      this._maskedFields = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedActions = value.allowedActions;
      this._documentLevelSecurity = value.documentLevelSecurity;
      this._fieldLevelSecurity = value.fieldLevelSecurity;
      this._indexPatterns = value.indexPatterns;
      this._maskedFields = value.maskedFields;
    }
  }

  // allowed_actions - computed: false, optional: true, required: false
  private _allowedActions?: string[]; 
  public get allowedActions() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_actions'));
  }
  public set allowedActions(value: string[]) {
    this._allowedActions = value;
  }
  public resetAllowedActions() {
    this._allowedActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedActionsInput() {
    return this._allowedActions;
  }

  // document_level_security - computed: false, optional: true, required: false
  private _documentLevelSecurity?: string; 
  public get documentLevelSecurity() {
    return this.getStringAttribute('document_level_security');
  }
  public set documentLevelSecurity(value: string) {
    this._documentLevelSecurity = value;
  }
  public resetDocumentLevelSecurity() {
    this._documentLevelSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentLevelSecurityInput() {
    return this._documentLevelSecurity;
  }

  // field_level_security - computed: false, optional: true, required: false
  private _fieldLevelSecurity?: string[]; 
  public get fieldLevelSecurity() {
    return cdktf.Fn.tolist(this.getListAttribute('field_level_security'));
  }
  public set fieldLevelSecurity(value: string[]) {
    this._fieldLevelSecurity = value;
  }
  public resetFieldLevelSecurity() {
    this._fieldLevelSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldLevelSecurityInput() {
    return this._fieldLevelSecurity;
  }

  // index_patterns - computed: false, optional: true, required: false
  private _indexPatterns?: string[]; 
  public get indexPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('index_patterns'));
  }
  public set indexPatterns(value: string[]) {
    this._indexPatterns = value;
  }
  public resetIndexPatterns() {
    this._indexPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexPatternsInput() {
    return this._indexPatterns;
  }

  // masked_fields - computed: false, optional: true, required: false
  private _maskedFields?: string[]; 
  public get maskedFields() {
    return cdktf.Fn.tolist(this.getListAttribute('masked_fields'));
  }
  public set maskedFields(value: string[]) {
    this._maskedFields = value;
  }
  public resetMaskedFields() {
    this._maskedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskedFieldsInput() {
    return this._maskedFields;
  }
}

export class OpensearchRoleIndexPermissionsList extends cdktf.ComplexList {
  public internalValue? : OpensearchRoleIndexPermissions[] | cdktf.IResolvable

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
  public get(index: number): OpensearchRoleIndexPermissionsOutputReference {
    return new OpensearchRoleIndexPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchRoleTenantPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_role#allowed_actions OpensearchRole#allowed_actions}
  */
  readonly allowedActions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_role#tenant_patterns OpensearchRole#tenant_patterns}
  */
  readonly tenantPatterns?: string[];
}

export function opensearchRoleTenantPermissionsToTerraform(struct?: OpensearchRoleTenantPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedActions),
    tenant_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tenantPatterns),
  }
}


export function opensearchRoleTenantPermissionsToHclTerraform(struct?: OpensearchRoleTenantPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedActions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tenant_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tenantPatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchRoleTenantPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpensearchRoleTenantPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedActions = this._allowedActions;
    }
    if (this._tenantPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantPatterns = this._tenantPatterns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchRoleTenantPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedActions = undefined;
      this._tenantPatterns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedActions = value.allowedActions;
      this._tenantPatterns = value.tenantPatterns;
    }
  }

  // allowed_actions - computed: false, optional: true, required: false
  private _allowedActions?: string[]; 
  public get allowedActions() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_actions'));
  }
  public set allowedActions(value: string[]) {
    this._allowedActions = value;
  }
  public resetAllowedActions() {
    this._allowedActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedActionsInput() {
    return this._allowedActions;
  }

  // tenant_patterns - computed: false, optional: true, required: false
  private _tenantPatterns?: string[]; 
  public get tenantPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('tenant_patterns'));
  }
  public set tenantPatterns(value: string[]) {
    this._tenantPatterns = value;
  }
  public resetTenantPatterns() {
    this._tenantPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantPatternsInput() {
    return this._tenantPatterns;
  }
}

export class OpensearchRoleTenantPermissionsList extends cdktf.ComplexList {
  public internalValue? : OpensearchRoleTenantPermissions[] | cdktf.IResolvable

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
  public get(index: number): OpensearchRoleTenantPermissionsOutputReference {
    return new OpensearchRoleTenantPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_role elasticsearch_opensearch_role}
*/
export class OpensearchRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticsearch_opensearch_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpensearchRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpensearchRole to import
  * @param importFromId The id of the existing OpensearchRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpensearchRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticsearch_opensearch_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_role elasticsearch_opensearch_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpensearchRoleConfig
  */
  public constructor(scope: Construct, id: string, config: OpensearchRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticsearch_opensearch_role',
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
    this._clusterPermissions = config.clusterPermissions;
    this._description = config.description;
    this._id = config.id;
    this._roleName = config.roleName;
    this._indexPermissions.internalValue = config.indexPermissions;
    this._tenantPermissions.internalValue = config.tenantPermissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_permissions - computed: false, optional: true, required: false
  private _clusterPermissions?: string[]; 
  public get clusterPermissions() {
    return cdktf.Fn.tolist(this.getListAttribute('cluster_permissions'));
  }
  public set clusterPermissions(value: string[]) {
    this._clusterPermissions = value;
  }
  public resetClusterPermissions() {
    this._clusterPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPermissionsInput() {
    return this._clusterPermissions;
  }

  // description - computed: false, optional: true, required: false
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

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // index_permissions - computed: false, optional: true, required: false
  private _indexPermissions = new OpensearchRoleIndexPermissionsList(this, "index_permissions", true);
  public get indexPermissions() {
    return this._indexPermissions;
  }
  public putIndexPermissions(value: OpensearchRoleIndexPermissions[] | cdktf.IResolvable) {
    this._indexPermissions.internalValue = value;
  }
  public resetIndexPermissions() {
    this._indexPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexPermissionsInput() {
    return this._indexPermissions.internalValue;
  }

  // tenant_permissions - computed: false, optional: true, required: false
  private _tenantPermissions = new OpensearchRoleTenantPermissionsList(this, "tenant_permissions", true);
  public get tenantPermissions() {
    return this._tenantPermissions;
  }
  public putTenantPermissions(value: OpensearchRoleTenantPermissions[] | cdktf.IResolvable) {
    this._tenantPermissions.internalValue = value;
  }
  public resetTenantPermissions() {
    this._tenantPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantPermissionsInput() {
    return this._tenantPermissions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clusterPermissions),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      role_name: cdktf.stringToTerraform(this._roleName),
      index_permissions: cdktf.listMapper(opensearchRoleIndexPermissionsToTerraform, true)(this._indexPermissions.internalValue),
      tenant_permissions: cdktf.listMapper(opensearchRoleTenantPermissionsToTerraform, true)(this._tenantPermissions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clusterPermissions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_permissions: {
        value: cdktf.listMapperHcl(opensearchRoleIndexPermissionsToHclTerraform, true)(this._indexPermissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpensearchRoleIndexPermissionsList",
      },
      tenant_permissions: {
        value: cdktf.listMapperHcl(opensearchRoleTenantPermissionsToHclTerraform, true)(this._tenantPermissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpensearchRoleTenantPermissionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
