// https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/data-sources/policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMondooPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Only return enabled policies if set to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/data-sources/policies#assigned_only DataMondooPolicies#assigned_only}
  */
  readonly assignedOnly?: boolean | cdktf.IResolvable;
  /**
  * Catalog type of either `ALL`, `POLICY` or `QUERYPACK`. Defaults to `ALL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/data-sources/policies#catalog_type DataMondooPolicies#catalog_type}
  */
  readonly catalogType?: string;
  /**
  * Space ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/data-sources/policies#space_id DataMondooPolicies#space_id}
  */
  readonly spaceId?: string;
  /**
  * Space MRN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/data-sources/policies#space_mrn DataMondooPolicies#space_mrn}
  */
  readonly spaceMrn?: string;
}
export interface DataMondooPoliciesPolicies {
}

export function dataMondooPoliciesPoliciesToTerraform(struct?: DataMondooPoliciesPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMondooPoliciesPoliciesToHclTerraform(struct?: DataMondooPoliciesPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMondooPoliciesPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMondooPoliciesPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMondooPoliciesPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // assigned - computed: true, optional: false, required: false
  public get assigned() {
    return this.getBooleanAttribute('assigned');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // is_public - computed: true, optional: false, required: false
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }

  // policy_mrn - computed: true, optional: false, required: false
  public get policyMrn() {
    return this.getStringAttribute('policy_mrn');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataMondooPoliciesPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataMondooPoliciesPoliciesOutputReference {
    return new DataMondooPoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/data-sources/policies mondoo_policies}
*/
export class DataMondooPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMondooPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMondooPolicies to import
  * @param importFromId The id of the existing DataMondooPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/data-sources/policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMondooPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/data-sources/policies mondoo_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMondooPoliciesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataMondooPoliciesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mondoo_policies',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.35.0',
        providerVersionConstraint: '0.35.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignedOnly = config.assignedOnly;
    this._catalogType = config.catalogType;
    this._spaceId = config.spaceId;
    this._spaceMrn = config.spaceMrn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_only - computed: true, optional: true, required: false
  private _assignedOnly?: boolean | cdktf.IResolvable; 
  public get assignedOnly() {
    return this.getBooleanAttribute('assigned_only');
  }
  public set assignedOnly(value: boolean | cdktf.IResolvable) {
    this._assignedOnly = value;
  }
  public resetAssignedOnly() {
    this._assignedOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedOnlyInput() {
    return this._assignedOnly;
  }

  // catalog_type - computed: true, optional: true, required: false
  private _catalogType?: string; 
  public get catalogType() {
    return this.getStringAttribute('catalog_type');
  }
  public set catalogType(value: string) {
    this._catalogType = value;
  }
  public resetCatalogType() {
    this._catalogType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogTypeInput() {
    return this._catalogType;
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataMondooPoliciesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
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

  // space_mrn - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assigned_only: cdktf.booleanToTerraform(this._assignedOnly),
      catalog_type: cdktf.stringToTerraform(this._catalogType),
      space_id: cdktf.stringToTerraform(this._spaceId),
      space_mrn: cdktf.stringToTerraform(this._spaceMrn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assigned_only: {
        value: cdktf.booleanToHclTerraform(this._assignedOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      catalog_type: {
        value: cdktf.stringToHclTerraform(this._catalogType),
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
      space_mrn: {
        value: cdktf.stringToHclTerraform(this._spaceMrn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
