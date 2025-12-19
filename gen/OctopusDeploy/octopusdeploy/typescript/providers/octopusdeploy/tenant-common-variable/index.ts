// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/tenant_common_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TenantCommonVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the library variable set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/tenant_common_variable#library_variable_set_id TenantCommonVariable#library_variable_set_id}
  */
  readonly libraryVariableSetId: string;
  /**
  * The space ID associated with this Tenant Common Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/tenant_common_variable#space_id TenantCommonVariable#space_id}
  */
  readonly spaceId?: string;
  /**
  * The ID of the variable template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/tenant_common_variable#template_id TenantCommonVariable#template_id}
  */
  readonly templateId: string;
  /**
  * The ID of the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/tenant_common_variable#tenant_id TenantCommonVariable#tenant_id}
  */
  readonly tenantId: string;
  /**
  * The value of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/tenant_common_variable#value TenantCommonVariable#value}
  */
  readonly value?: string;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/tenant_common_variable#scope TenantCommonVariable#scope}
  */
  readonly scope?: TenantCommonVariableScope[] | cdktf.IResolvable;
}
export interface TenantCommonVariableScope {
  /**
  * A set of environment IDs to scope this variable to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/tenant_common_variable#environment_ids TenantCommonVariable#environment_ids}
  */
  readonly environmentIds?: string[];
}

export function tenantCommonVariableScopeToTerraform(struct?: TenantCommonVariableScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environmentIds),
  }
}


export function tenantCommonVariableScopeToHclTerraform(struct?: TenantCommonVariableScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environmentIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantCommonVariableScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantCommonVariableScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentIds = this._environmentIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantCommonVariableScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environmentIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environmentIds = value.environmentIds;
    }
  }

  // environment_ids - computed: true, optional: true, required: false
  private _environmentIds?: string[]; 
  public get environmentIds() {
    return cdktf.Fn.tolist(this.getListAttribute('environment_ids'));
  }
  public set environmentIds(value: string[]) {
    this._environmentIds = value;
  }
  public resetEnvironmentIds() {
    this._environmentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdsInput() {
    return this._environmentIds;
  }
}

export class TenantCommonVariableScopeList extends cdktf.ComplexList {
  public internalValue? : TenantCommonVariableScope[] | cdktf.IResolvable

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
  public get(index: number): TenantCommonVariableScopeOutputReference {
    return new TenantCommonVariableScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/tenant_common_variable octopusdeploy_tenant_common_variable}
*/
export class TenantCommonVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_tenant_common_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TenantCommonVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TenantCommonVariable to import
  * @param importFromId The id of the existing TenantCommonVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/tenant_common_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TenantCommonVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_tenant_common_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.1/docs/resources/tenant_common_variable octopusdeploy_tenant_common_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TenantCommonVariableConfig
  */
  public constructor(scope: Construct, id: string, config: TenantCommonVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_tenant_common_variable',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._libraryVariableSetId = config.libraryVariableSetId;
    this._spaceId = config.spaceId;
    this._templateId = config.templateId;
    this._tenantId = config.tenantId;
    this._value = config.value;
    this._scope.internalValue = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // library_variable_set_id - computed: false, optional: false, required: true
  private _libraryVariableSetId?: string; 
  public get libraryVariableSetId() {
    return this.getStringAttribute('library_variable_set_id');
  }
  public set libraryVariableSetId(value: string) {
    this._libraryVariableSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryVariableSetIdInput() {
    return this._libraryVariableSetId;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new TenantCommonVariableScopeList(this, "scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: TenantCommonVariableScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      library_variable_set_id: cdktf.stringToTerraform(this._libraryVariableSetId),
      space_id: cdktf.stringToTerraform(this._spaceId),
      template_id: cdktf.stringToTerraform(this._templateId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      value: cdktf.stringToTerraform(this._value),
      scope: cdktf.listMapper(tenantCommonVariableScopeToTerraform, true)(this._scope.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      library_variable_set_id: {
        value: cdktf.stringToHclTerraform(this._libraryVariableSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.listMapperHcl(tenantCommonVariableScopeToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantCommonVariableScopeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
