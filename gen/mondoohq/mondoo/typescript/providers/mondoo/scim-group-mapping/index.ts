// https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/scim_group_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScimGroupMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * SCIM 2.0 Group Display Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/scim_group_mapping#group ScimGroupMapping#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/scim_group_mapping#mappings ScimGroupMapping#mappings}
  */
  readonly mappings: ScimGroupMappingMappings[] | cdktf.IResolvable;
  /**
  * Mondoo Organization Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/scim_group_mapping#org_id ScimGroupMapping#org_id}
  */
  readonly orgId: string;
}
export interface ScimGroupMappingMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/scim_group_mapping#iam_role ScimGroupMapping#iam_role}
  */
  readonly iamRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/scim_group_mapping#org_mrn ScimGroupMapping#org_mrn}
  */
  readonly orgMrn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/scim_group_mapping#space_mrn ScimGroupMapping#space_mrn}
  */
  readonly spaceMrn?: string;
}

export function scimGroupMappingMappingsToTerraform(struct?: ScimGroupMappingMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_role: cdktf.stringToTerraform(struct!.iamRole),
    org_mrn: cdktf.stringToTerraform(struct!.orgMrn),
    space_mrn: cdktf.stringToTerraform(struct!.spaceMrn),
  }
}


export function scimGroupMappingMappingsToHclTerraform(struct?: ScimGroupMappingMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iam_role: {
      value: cdktf.stringToHclTerraform(struct!.iamRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_mrn: {
      value: cdktf.stringToHclTerraform(struct!.orgMrn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space_mrn: {
      value: cdktf.stringToHclTerraform(struct!.spaceMrn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScimGroupMappingMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScimGroupMappingMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRole = this._iamRole;
    }
    if (this._orgMrn !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgMrn = this._orgMrn;
    }
    if (this._spaceMrn !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceMrn = this._spaceMrn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScimGroupMappingMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iamRole = undefined;
      this._orgMrn = undefined;
      this._spaceMrn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iamRole = value.iamRole;
      this._orgMrn = value.orgMrn;
      this._spaceMrn = value.spaceMrn;
    }
  }

  // iam_role - computed: false, optional: false, required: true
  private _iamRole?: string; 
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
  public set iamRole(value: string) {
    this._iamRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole;
  }

  // org_mrn - computed: false, optional: true, required: false
  private _orgMrn?: string; 
  public get orgMrn() {
    return this.getStringAttribute('org_mrn');
  }
  public set orgMrn(value: string) {
    this._orgMrn = value;
  }
  public resetOrgMrn() {
    this._orgMrn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgMrnInput() {
    return this._orgMrn;
  }

  // space_mrn - computed: false, optional: true, required: false
  private _spaceMrn?: string; 
  public get spaceMrn() {
    return this.getStringAttribute('space_mrn');
  }
  public set spaceMrn(value: string) {
    this._spaceMrn = value;
  }
  public resetSpaceMrn() {
    this._spaceMrn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceMrnInput() {
    return this._spaceMrn;
  }
}

export class ScimGroupMappingMappingsList extends cdktf.ComplexList {
  public internalValue? : ScimGroupMappingMappings[] | cdktf.IResolvable

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
  public get(index: number): ScimGroupMappingMappingsOutputReference {
    return new ScimGroupMappingMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/scim_group_mapping mondoo_scim_group_mapping}
*/
export class ScimGroupMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_scim_group_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScimGroupMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScimGroupMapping to import
  * @param importFromId The id of the existing ScimGroupMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/scim_group_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScimGroupMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_scim_group_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/scim_group_mapping mondoo_scim_group_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScimGroupMappingConfig
  */
  public constructor(scope: Construct, id: string, config: ScimGroupMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'mondoo_scim_group_mapping',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.35.3',
        providerVersionConstraint: '0.35.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._group = config.group;
    this._mappings.internalValue = config.mappings;
    this._orgId = config.orgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // mappings - computed: false, optional: false, required: true
  private _mappings = new ScimGroupMappingMappingsList(this, "mappings", false);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: ScimGroupMappingMappings[] | cdktf.IResolvable) {
    this._mappings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings.internalValue;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.stringToTerraform(this._group),
      mappings: cdktf.listMapper(scimGroupMappingMappingsToTerraform, false)(this._mappings.internalValue),
      org_id: cdktf.stringToTerraform(this._orgId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mappings: {
        value: cdktf.listMapperHcl(scimGroupMappingMappingsToHclTerraform, false)(this._mappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScimGroupMappingMappingsList",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
