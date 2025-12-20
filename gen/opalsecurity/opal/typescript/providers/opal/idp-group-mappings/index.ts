// https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/idp_group_mappings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdpGroupMappingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Okta app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/idp_group_mappings#app_resource_id IdpGroupMappings#app_resource_id}
  */
  readonly appResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/idp_group_mappings#mappings IdpGroupMappings#mappings}
  */
  readonly mappings: IdpGroupMappingsMappings[] | cdktf.IResolvable;
}
export interface IdpGroupMappingsMappings {
  /**
  * The alias of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/idp_group_mappings#alias IdpGroupMappings#alias}
  */
  readonly alias?: string;
  /**
  * The ID of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/idp_group_mappings#group_id IdpGroupMappings#group_id}
  */
  readonly groupId?: string;
  /**
  * A bool representing whether or not the group is hidden from the end user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/idp_group_mappings#hidden_from_end_user IdpGroupMappings#hidden_from_end_user}
  */
  readonly hiddenFromEndUser?: boolean | cdktf.IResolvable;
}

export function idpGroupMappingsMappingsToTerraform(struct?: IdpGroupMappingsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    hidden_from_end_user: cdktf.booleanToTerraform(struct!.hiddenFromEndUser),
  }
}


export function idpGroupMappingsMappingsToHclTerraform(struct?: IdpGroupMappingsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hidden_from_end_user: {
      value: cdktf.booleanToHclTerraform(struct!.hiddenFromEndUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpGroupMappingsMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpGroupMappingsMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._hiddenFromEndUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiddenFromEndUser = this._hiddenFromEndUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpGroupMappingsMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._groupId = undefined;
      this._hiddenFromEndUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._groupId = value.groupId;
      this._hiddenFromEndUser = value.hiddenFromEndUser;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // app_resource_id - computed: true, optional: false, required: false
  public get appResourceId() {
    return this.getStringAttribute('app_resource_id');
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // hidden_from_end_user - computed: true, optional: true, required: false
  private _hiddenFromEndUser?: boolean | cdktf.IResolvable; 
  public get hiddenFromEndUser() {
    return this.getBooleanAttribute('hidden_from_end_user');
  }
  public set hiddenFromEndUser(value: boolean | cdktf.IResolvable) {
    this._hiddenFromEndUser = value;
  }
  public resetHiddenFromEndUser() {
    this._hiddenFromEndUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenFromEndUserInput() {
    return this._hiddenFromEndUser;
  }
}

export class IdpGroupMappingsMappingsList extends cdktf.ComplexList {
  public internalValue? : IdpGroupMappingsMappings[] | cdktf.IResolvable

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
  public get(index: number): IdpGroupMappingsMappingsOutputReference {
    return new IdpGroupMappingsMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/idp_group_mappings opal_idp_group_mappings}
*/
export class IdpGroupMappings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_idp_group_mappings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdpGroupMappings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdpGroupMappings to import
  * @param importFromId The id of the existing IdpGroupMappings that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/idp_group_mappings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdpGroupMappings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_idp_group_mappings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/idp_group_mappings opal_idp_group_mappings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdpGroupMappingsConfig
  */
  public constructor(scope: Construct, id: string, config: IdpGroupMappingsConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_idp_group_mappings',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appResourceId = config.appResourceId;
    this._mappings.internalValue = config.mappings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_resource_id - computed: false, optional: false, required: true
  private _appResourceId?: string; 
  public get appResourceId() {
    return this.getStringAttribute('app_resource_id');
  }
  public set appResourceId(value: string) {
    this._appResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appResourceIdInput() {
    return this._appResourceId;
  }

  // mappings - computed: false, optional: false, required: true
  private _mappings = new IdpGroupMappingsMappingsList(this, "mappings", false);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: IdpGroupMappingsMappings[] | cdktf.IResolvable) {
    this._mappings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_resource_id: cdktf.stringToTerraform(this._appResourceId),
      mappings: cdktf.listMapper(idpGroupMappingsMappingsToTerraform, false)(this._mappings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_resource_id: {
        value: cdktf.stringToHclTerraform(this._appResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mappings: {
        value: cdktf.listMapperHcl(idpGroupMappingsMappingsToHclTerraform, false)(this._mappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdpGroupMappingsMappingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
