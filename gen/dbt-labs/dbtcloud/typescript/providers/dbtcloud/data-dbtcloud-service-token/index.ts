// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/service_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDbtcloudServiceTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the service token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/service_token#service_token_id DataDbtcloudServiceToken#service_token_id}
  */
  readonly serviceTokenId: number;
  /**
  * service_token_permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/service_token#service_token_permissions DataDbtcloudServiceToken#service_token_permissions}
  */
  readonly serviceTokenPermissions?: DataDbtcloudServiceTokenServiceTokenPermissions[] | cdktf.IResolvable;
}
export interface DataDbtcloudServiceTokenServiceTokenPermissions {
}

export function dataDbtcloudServiceTokenServiceTokenPermissionsToTerraform(struct?: DataDbtcloudServiceTokenServiceTokenPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudServiceTokenServiceTokenPermissionsToHclTerraform(struct?: DataDbtcloudServiceTokenServiceTokenPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudServiceTokenServiceTokenPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDbtcloudServiceTokenServiceTokenPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudServiceTokenServiceTokenPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // all_projects - computed: true, optional: false, required: false
  public get allProjects() {
    return this.getBooleanAttribute('all_projects');
  }

  // permission_set - computed: true, optional: false, required: false
  public get permissionSet() {
    return this.getStringAttribute('permission_set');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // writable_environment_categories - computed: true, optional: false, required: false
  public get writableEnvironmentCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('writable_environment_categories'));
  }
}

export class DataDbtcloudServiceTokenServiceTokenPermissionsList extends cdktf.ComplexList {
  public internalValue? : DataDbtcloudServiceTokenServiceTokenPermissions[] | cdktf.IResolvable

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
  public get(index: number): DataDbtcloudServiceTokenServiceTokenPermissionsOutputReference {
    return new DataDbtcloudServiceTokenServiceTokenPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/service_token dbtcloud_service_token}
*/
export class DataDbtcloudServiceToken extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_service_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDbtcloudServiceToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDbtcloudServiceToken to import
  * @param importFromId The id of the existing DataDbtcloudServiceToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/service_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDbtcloudServiceToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_service_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/service_token dbtcloud_service_token} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDbtcloudServiceTokenConfig
  */
  public constructor(scope: Construct, id: string, config: DataDbtcloudServiceTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_service_token',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._serviceTokenId = config.serviceTokenId;
    this._serviceTokenPermissions.internalValue = config.serviceTokenPermissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // service_token_id - computed: false, optional: false, required: true
  private _serviceTokenId?: number; 
  public get serviceTokenId() {
    return this.getNumberAttribute('service_token_id');
  }
  public set serviceTokenId(value: number) {
    this._serviceTokenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTokenIdInput() {
    return this._serviceTokenId;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // service_token_permissions - computed: false, optional: true, required: false
  private _serviceTokenPermissions = new DataDbtcloudServiceTokenServiceTokenPermissionsList(this, "service_token_permissions", true);
  public get serviceTokenPermissions() {
    return this._serviceTokenPermissions;
  }
  public putServiceTokenPermissions(value: DataDbtcloudServiceTokenServiceTokenPermissions[] | cdktf.IResolvable) {
    this._serviceTokenPermissions.internalValue = value;
  }
  public resetServiceTokenPermissions() {
    this._serviceTokenPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTokenPermissionsInput() {
    return this._serviceTokenPermissions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      service_token_id: cdktf.numberToTerraform(this._serviceTokenId),
      service_token_permissions: cdktf.listMapper(dataDbtcloudServiceTokenServiceTokenPermissionsToTerraform, true)(this._serviceTokenPermissions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      service_token_id: {
        value: cdktf.numberToHclTerraform(this._serviceTokenId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_token_permissions: {
        value: cdktf.listMapperHcl(dataDbtcloudServiceTokenServiceTokenPermissionsToHclTerraform, true)(this._serviceTokenPermissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataDbtcloudServiceTokenServiceTokenPermissionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
