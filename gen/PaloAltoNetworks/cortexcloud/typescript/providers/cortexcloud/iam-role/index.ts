// https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/iam_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The component permissions for the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/iam_role#component_permissions IamRole#component_permissions}
  */
  readonly componentPermissions: string[];
  /**
  * The dataset permissions for the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/iam_role#dataset_permissions IamRole#dataset_permissions}
  */
  readonly datasetPermissions?: IamRoleDatasetPermissions[] | cdktf.IResolvable;
  /**
  * The description of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/iam_role#description IamRole#description}
  */
  readonly description?: string;
  /**
  * The name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/iam_role#pretty_name IamRole#pretty_name}
  */
  readonly prettyName: string;
}
export interface IamRoleDatasetPermissions {
  /**
  * Whether to grant access to all datasets in the category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/iam_role#access_all IamRole#access_all}
  */
  readonly accessAll: boolean | cdktf.IResolvable;
  /**
  * The category of the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/iam_role#category IamRole#category}
  */
  readonly category: string;
  /**
  * The permissions for the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/iam_role#permissions IamRole#permissions}
  */
  readonly permissions: string[];
}

export function iamRoleDatasetPermissionsToTerraform(struct?: IamRoleDatasetPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_all: cdktf.booleanToTerraform(struct!.accessAll),
    category: cdktf.stringToTerraform(struct!.category),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
  }
}


export function iamRoleDatasetPermissionsToHclTerraform(struct?: IamRoleDatasetPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_all: {
      value: cdktf.booleanToHclTerraform(struct!.accessAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamRoleDatasetPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IamRoleDatasetPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessAll = this._accessAll;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamRoleDatasetPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessAll = undefined;
      this._category = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessAll = value.accessAll;
      this._category = value.category;
      this._permissions = value.permissions;
    }
  }

  // access_all - computed: false, optional: false, required: true
  private _accessAll?: boolean | cdktf.IResolvable; 
  public get accessAll() {
    return this.getBooleanAttribute('access_all');
  }
  public set accessAll(value: boolean | cdktf.IResolvable) {
    this._accessAll = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAllInput() {
    return this._accessAll;
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class IamRoleDatasetPermissionsList extends cdktf.ComplexList {
  public internalValue? : IamRoleDatasetPermissions[] | cdktf.IResolvable

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
  public get(index: number): IamRoleDatasetPermissionsOutputReference {
    return new IamRoleDatasetPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/iam_role cortexcloud_iam_role}
*/
export class IamRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cortexcloud_iam_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamRole to import
  * @param importFromId The id of the existing IamRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/iam_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cortexcloud_iam_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/iam_role cortexcloud_iam_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamRoleConfig
  */
  public constructor(scope: Construct, id: string, config: IamRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'cortexcloud_iam_role',
      terraformGeneratorMetadata: {
        providerName: 'cortexcloud',
        providerVersion: '1.0.2',
        providerVersionConstraint: '1.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._componentPermissions = config.componentPermissions;
    this._datasetPermissions.internalValue = config.datasetPermissions;
    this._description = config.description;
    this._prettyName = config.prettyName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // component_permissions - computed: false, optional: false, required: true
  private _componentPermissions?: string[]; 
  public get componentPermissions() {
    return cdktf.Fn.tolist(this.getListAttribute('component_permissions'));
  }
  public set componentPermissions(value: string[]) {
    this._componentPermissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentPermissionsInput() {
    return this._componentPermissions;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_ts - computed: true, optional: false, required: false
  public get createdTs() {
    return this.getNumberAttribute('created_ts');
  }

  // dataset_permissions - computed: false, optional: true, required: false
  private _datasetPermissions = new IamRoleDatasetPermissionsList(this, "dataset_permissions", true);
  public get datasetPermissions() {
    return this._datasetPermissions;
  }
  public putDatasetPermissions(value: IamRoleDatasetPermissions[] | cdktf.IResolvable) {
    this._datasetPermissions.internalValue = value;
  }
  public resetDatasetPermissions() {
    this._datasetPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetPermissionsInput() {
    return this._datasetPermissions.internalValue;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_custom - computed: true, optional: false, required: false
  public get isCustom() {
    return this.getBooleanAttribute('is_custom');
  }

  // pretty_name - computed: false, optional: false, required: true
  private _prettyName?: string; 
  public get prettyName() {
    return this.getStringAttribute('pretty_name');
  }
  public set prettyName(value: string) {
    this._prettyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prettyNameInput() {
    return this._prettyName;
  }

  // updated_ts - computed: true, optional: false, required: false
  public get updatedTs() {
    return this.getNumberAttribute('updated_ts');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      component_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._componentPermissions),
      dataset_permissions: cdktf.listMapper(iamRoleDatasetPermissionsToTerraform, false)(this._datasetPermissions.internalValue),
      description: cdktf.stringToTerraform(this._description),
      pretty_name: cdktf.stringToTerraform(this._prettyName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      component_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._componentPermissions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dataset_permissions: {
        value: cdktf.listMapperHcl(iamRoleDatasetPermissionsToHclTerraform, false)(this._datasetPermissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IamRoleDatasetPermissionsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pretty_name: {
        value: cdktf.stringToHclTerraform(this._prettyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
