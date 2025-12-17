// https://registry.terraform.io/providers/databricks/databricks/1.100.0/docs/data-sources/service_principals
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksServicePrincipalsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.100.0/docs/data-sources/service_principals#application_ids DataDatabricksServicePrincipals#application_ids}
  */
  readonly applicationIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.100.0/docs/data-sources/service_principals#display_name_contains DataDatabricksServicePrincipals#display_name_contains}
  */
  readonly displayNameContains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.100.0/docs/data-sources/service_principals#id DataDatabricksServicePrincipals#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * service_principals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.100.0/docs/data-sources/service_principals#service_principals DataDatabricksServicePrincipals#service_principals}
  */
  readonly servicePrincipals?: DataDatabricksServicePrincipalsServicePrincipals[] | cdktf.IResolvable;
}
export interface DataDatabricksServicePrincipalsServicePrincipals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.100.0/docs/data-sources/service_principals#acl_principal_id DataDatabricksServicePrincipals#acl_principal_id}
  */
  readonly aclPrincipalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.100.0/docs/data-sources/service_principals#active DataDatabricksServicePrincipals#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.100.0/docs/data-sources/service_principals#application_id DataDatabricksServicePrincipals#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.100.0/docs/data-sources/service_principals#display_name DataDatabricksServicePrincipals#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.100.0/docs/data-sources/service_principals#external_id DataDatabricksServicePrincipals#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.100.0/docs/data-sources/service_principals#home DataDatabricksServicePrincipals#home}
  */
  readonly home?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.100.0/docs/data-sources/service_principals#id DataDatabricksServicePrincipals#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.100.0/docs/data-sources/service_principals#repos DataDatabricksServicePrincipals#repos}
  */
  readonly repos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.100.0/docs/data-sources/service_principals#scim_id DataDatabricksServicePrincipals#scim_id}
  */
  readonly scimId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.100.0/docs/data-sources/service_principals#sp_id DataDatabricksServicePrincipals#sp_id}
  */
  readonly spId?: string;
}

export function dataDatabricksServicePrincipalsServicePrincipalsToTerraform(struct?: DataDatabricksServicePrincipalsServicePrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_principal_id: cdktf.stringToTerraform(struct!.aclPrincipalId),
    active: cdktf.booleanToTerraform(struct!.active),
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    home: cdktf.stringToTerraform(struct!.home),
    id: cdktf.stringToTerraform(struct!.id),
    repos: cdktf.stringToTerraform(struct!.repos),
    scim_id: cdktf.stringToTerraform(struct!.scimId),
    sp_id: cdktf.stringToTerraform(struct!.spId),
  }
}


export function dataDatabricksServicePrincipalsServicePrincipalsToHclTerraform(struct?: DataDatabricksServicePrincipalsServicePrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_principal_id: {
      value: cdktf.stringToHclTerraform(struct!.aclPrincipalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    home: {
      value: cdktf.stringToHclTerraform(struct!.home),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repos: {
      value: cdktf.stringToHclTerraform(struct!.repos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scim_id: {
      value: cdktf.stringToHclTerraform(struct!.scimId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_id: {
      value: cdktf.stringToHclTerraform(struct!.spId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksServicePrincipalsServicePrincipalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksServicePrincipalsServicePrincipals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclPrincipalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclPrincipalId = this._aclPrincipalId;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._home !== undefined) {
      hasAnyValues = true;
      internalValueResult.home = this._home;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._repos !== undefined) {
      hasAnyValues = true;
      internalValueResult.repos = this._repos;
    }
    if (this._scimId !== undefined) {
      hasAnyValues = true;
      internalValueResult.scimId = this._scimId;
    }
    if (this._spId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spId = this._spId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksServicePrincipalsServicePrincipals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclPrincipalId = undefined;
      this._active = undefined;
      this._applicationId = undefined;
      this._displayName = undefined;
      this._externalId = undefined;
      this._home = undefined;
      this._id = undefined;
      this._repos = undefined;
      this._scimId = undefined;
      this._spId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclPrincipalId = value.aclPrincipalId;
      this._active = value.active;
      this._applicationId = value.applicationId;
      this._displayName = value.displayName;
      this._externalId = value.externalId;
      this._home = value.home;
      this._id = value.id;
      this._repos = value.repos;
      this._scimId = value.scimId;
      this._spId = value.spId;
    }
  }

  // acl_principal_id - computed: true, optional: true, required: false
  private _aclPrincipalId?: string; 
  public get aclPrincipalId() {
    return this.getStringAttribute('acl_principal_id');
  }
  public set aclPrincipalId(value: string) {
    this._aclPrincipalId = value;
  }
  public resetAclPrincipalId() {
    this._aclPrincipalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclPrincipalIdInput() {
    return this._aclPrincipalId;
  }

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
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

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // home - computed: true, optional: true, required: false
  private _home?: string; 
  public get home() {
    return this.getStringAttribute('home');
  }
  public set home(value: string) {
    this._home = value;
  }
  public resetHome() {
    this._home = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeInput() {
    return this._home;
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

  // repos - computed: true, optional: true, required: false
  private _repos?: string; 
  public get repos() {
    return this.getStringAttribute('repos');
  }
  public set repos(value: string) {
    this._repos = value;
  }
  public resetRepos() {
    this._repos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reposInput() {
    return this._repos;
  }

  // scim_id - computed: true, optional: true, required: false
  private _scimId?: string; 
  public get scimId() {
    return this.getStringAttribute('scim_id');
  }
  public set scimId(value: string) {
    this._scimId = value;
  }
  public resetScimId() {
    this._scimId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimIdInput() {
    return this._scimId;
  }

  // sp_id - computed: true, optional: true, required: false
  private _spId?: string; 
  public get spId() {
    return this.getStringAttribute('sp_id');
  }
  public set spId(value: string) {
    this._spId = value;
  }
  public resetSpId() {
    this._spId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spIdInput() {
    return this._spId;
  }
}

export class DataDatabricksServicePrincipalsServicePrincipalsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksServicePrincipalsServicePrincipals[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksServicePrincipalsServicePrincipalsOutputReference {
    return new DataDatabricksServicePrincipalsServicePrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.100.0/docs/data-sources/service_principals databricks_service_principals}
*/
export class DataDatabricksServicePrincipals extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_service_principals";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksServicePrincipals resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksServicePrincipals to import
  * @param importFromId The id of the existing DataDatabricksServicePrincipals that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.100.0/docs/data-sources/service_principals#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksServicePrincipals to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_service_principals", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.100.0/docs/data-sources/service_principals databricks_service_principals} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksServicePrincipalsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksServicePrincipalsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_service_principals',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.100.0',
        providerVersionConstraint: '1.100.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationIds = config.applicationIds;
    this._displayNameContains = config.displayNameContains;
    this._id = config.id;
    this._servicePrincipals.internalValue = config.servicePrincipals;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_ids - computed: true, optional: true, required: false
  private _applicationIds?: string[]; 
  public get applicationIds() {
    return cdktf.Fn.tolist(this.getListAttribute('application_ids'));
  }
  public set applicationIds(value: string[]) {
    this._applicationIds = value;
  }
  public resetApplicationIds() {
    this._applicationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdsInput() {
    return this._applicationIds;
  }

  // display_name_contains - computed: true, optional: true, required: false
  private _displayNameContains?: string; 
  public get displayNameContains() {
    return this.getStringAttribute('display_name_contains');
  }
  public set displayNameContains(value: string) {
    this._displayNameContains = value;
  }
  public resetDisplayNameContains() {
    this._displayNameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameContainsInput() {
    return this._displayNameContains;
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

  // service_principals - computed: false, optional: true, required: false
  private _servicePrincipals = new DataDatabricksServicePrincipalsServicePrincipalsList(this, "service_principals", false);
  public get servicePrincipals() {
    return this._servicePrincipals;
  }
  public putServicePrincipals(value: DataDatabricksServicePrincipalsServicePrincipals[] | cdktf.IResolvable) {
    this._servicePrincipals.internalValue = value;
  }
  public resetServicePrincipals() {
    this._servicePrincipals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalsInput() {
    return this._servicePrincipals.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applicationIds),
      display_name_contains: cdktf.stringToTerraform(this._displayNameContains),
      id: cdktf.stringToTerraform(this._id),
      service_principals: cdktf.listMapper(dataDatabricksServicePrincipalsServicePrincipalsToTerraform, true)(this._servicePrincipals.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applicationIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      display_name_contains: {
        value: cdktf.stringToHclTerraform(this._displayNameContains),
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
      service_principals: {
        value: cdktf.listMapperHcl(dataDatabricksServicePrincipalsServicePrincipalsToHclTerraform, true)(this._servicePrincipals.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksServicePrincipalsServicePrincipalsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
