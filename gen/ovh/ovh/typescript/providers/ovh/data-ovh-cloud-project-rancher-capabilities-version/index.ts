// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_rancher_capabilities_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhCloudProjectRancherCapabilitiesVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_rancher_capabilities_version#project_id DataOvhCloudProjectRancherCapabilitiesVersion#project_id}
  */
  readonly projectId: string;
  /**
  * Rancher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_rancher_capabilities_version#rancher_id DataOvhCloudProjectRancherCapabilitiesVersion#rancher_id}
  */
  readonly rancherId: string;
}
export interface DataOvhCloudProjectRancherCapabilitiesVersionVersions {
}

export function dataOvhCloudProjectRancherCapabilitiesVersionVersionsToTerraform(struct?: DataOvhCloudProjectRancherCapabilitiesVersionVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhCloudProjectRancherCapabilitiesVersionVersionsToHclTerraform(struct?: DataOvhCloudProjectRancherCapabilitiesVersionVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhCloudProjectRancherCapabilitiesVersionVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOvhCloudProjectRancherCapabilitiesVersionVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhCloudProjectRancherCapabilitiesVersionVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cause - computed: true, optional: false, required: false
  public get cause() {
    return this.getStringAttribute('cause');
  }

  // changelog_url - computed: true, optional: false, required: false
  public get changelogUrl() {
    return this.getStringAttribute('changelog_url');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataOvhCloudProjectRancherCapabilitiesVersionVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOvhCloudProjectRancherCapabilitiesVersionVersionsOutputReference {
    return new DataOvhCloudProjectRancherCapabilitiesVersionVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_rancher_capabilities_version ovh_cloud_project_rancher_capabilities_version}
*/
export class DataOvhCloudProjectRancherCapabilitiesVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_rancher_capabilities_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhCloudProjectRancherCapabilitiesVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhCloudProjectRancherCapabilitiesVersion to import
  * @param importFromId The id of the existing DataOvhCloudProjectRancherCapabilitiesVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_rancher_capabilities_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhCloudProjectRancherCapabilitiesVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_rancher_capabilities_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_rancher_capabilities_version ovh_cloud_project_rancher_capabilities_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhCloudProjectRancherCapabilitiesVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhCloudProjectRancherCapabilitiesVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_cloud_project_rancher_capabilities_version',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._projectId = config.projectId;
    this._rancherId = config.rancherId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // rancher_id - computed: false, optional: false, required: true
  private _rancherId?: string; 
  public get rancherId() {
    return this.getStringAttribute('rancher_id');
  }
  public set rancherId(value: string) {
    this._rancherId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rancherIdInput() {
    return this._rancherId;
  }

  // versions - computed: true, optional: false, required: false
  private _versions = new DataOvhCloudProjectRancherCapabilitiesVersionVersionsList(this, "versions", true);
  public get versions() {
    return this._versions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
      rancher_id: cdktf.stringToTerraform(this._rancherId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rancher_id: {
        value: cdktf.stringToHclTerraform(this._rancherId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
