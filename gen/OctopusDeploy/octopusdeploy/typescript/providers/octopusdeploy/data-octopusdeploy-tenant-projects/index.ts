// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/data-sources/tenant_projects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOctopusdeployTenantProjectsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A filter to search by a list of IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/data-sources/tenant_projects#environment_ids DataOctopusdeployTenantProjects#environment_ids}
  */
  readonly environmentIds?: string[];
  /**
  * A filter to search by a list of IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/data-sources/tenant_projects#project_ids DataOctopusdeployTenantProjects#project_ids}
  */
  readonly projectIds?: string[];
  /**
  * The space ID associated with this tenant projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/data-sources/tenant_projects#space_id DataOctopusdeployTenantProjects#space_id}
  */
  readonly spaceId?: string;
  /**
  * A filter to search by a list of IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/data-sources/tenant_projects#tenant_ids DataOctopusdeployTenantProjects#tenant_ids}
  */
  readonly tenantIds?: string[];
}
export interface DataOctopusdeployTenantProjectsTenantProjects {
}

export function dataOctopusdeployTenantProjectsTenantProjectsToTerraform(struct?: DataOctopusdeployTenantProjectsTenantProjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployTenantProjectsTenantProjectsToHclTerraform(struct?: DataOctopusdeployTenantProjectsTenantProjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployTenantProjectsTenantProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployTenantProjectsTenantProjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployTenantProjectsTenantProjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // environment_ids - computed: true, optional: false, required: false
  public get environmentIds() {
    return this.getListAttribute('environment_ids');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}

export class DataOctopusdeployTenantProjectsTenantProjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployTenantProjectsTenantProjectsOutputReference {
    return new DataOctopusdeployTenantProjectsTenantProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/data-sources/tenant_projects octopusdeploy_tenant_projects}
*/
export class DataOctopusdeployTenantProjects extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_tenant_projects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOctopusdeployTenantProjects resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOctopusdeployTenantProjects to import
  * @param importFromId The id of the existing DataOctopusdeployTenantProjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/data-sources/tenant_projects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOctopusdeployTenantProjects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_tenant_projects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/data-sources/tenant_projects octopusdeploy_tenant_projects} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOctopusdeployTenantProjectsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOctopusdeployTenantProjectsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_tenant_projects',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentIds = config.environmentIds;
    this._projectIds = config.projectIds;
    this._spaceId = config.spaceId;
    this._tenantIds = config.tenantIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_ids - computed: false, optional: true, required: false
  private _environmentIds?: string[]; 
  public get environmentIds() {
    return this.getListAttribute('environment_ids');
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

  // project_ids - computed: false, optional: true, required: false
  private _projectIds?: string[]; 
  public get projectIds() {
    return this.getListAttribute('project_ids');
  }
  public set projectIds(value: string[]) {
    this._projectIds = value;
  }
  public resetProjectIds() {
    this._projectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
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

  // tenant_ids - computed: false, optional: true, required: false
  private _tenantIds?: string[]; 
  public get tenantIds() {
    return this.getListAttribute('tenant_ids');
  }
  public set tenantIds(value: string[]) {
    this._tenantIds = value;
  }
  public resetTenantIds() {
    this._tenantIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdsInput() {
    return this._tenantIds;
  }

  // tenant_projects - computed: true, optional: false, required: false
  private _tenantProjects = new DataOctopusdeployTenantProjectsTenantProjectsList(this, "tenant_projects", false);
  public get tenantProjects() {
    return this._tenantProjects;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environmentIds),
      project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectIds),
      space_id: cdktf.stringToTerraform(this._spaceId),
      tenant_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environmentIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenantIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
