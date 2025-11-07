// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_assignments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatacenterConnectivityTemplateAssignmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of Apstra node IDs of the Interfaces or Systems where the Connectivity Template should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_assignments#application_point_ids DatacenterConnectivityTemplateAssignments#application_point_ids}
  */
  readonly applicationPointIds: string[];
  /**
  * Apstra Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_assignments#blueprint_id DatacenterConnectivityTemplateAssignments#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Connectivity Template ID which should be applied to the Application Points.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_assignments#connectivity_template_id DatacenterConnectivityTemplateAssignments#connectivity_template_id}
  */
  readonly connectivityTemplateId: string;
  /**
  * When `true`, the read-only `ip_link_ids` attribute will be populated. Default behavior skips retrieving `ip_link_ids` to improve performance in scenarios where this information is not needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_assignments#fetch_ip_link_ids DatacenterConnectivityTemplateAssignments#fetch_ip_link_ids}
  */
  readonly fetchIpLinkIds?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_assignments apstra_datacenter_connectivity_template_assignments}
*/
export class DatacenterConnectivityTemplateAssignments extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_connectivity_template_assignments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatacenterConnectivityTemplateAssignments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatacenterConnectivityTemplateAssignments to import
  * @param importFromId The id of the existing DatacenterConnectivityTemplateAssignments that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_assignments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatacenterConnectivityTemplateAssignments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_connectivity_template_assignments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_assignments apstra_datacenter_connectivity_template_assignments} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatacenterConnectivityTemplateAssignmentsConfig
  */
  public constructor(scope: Construct, id: string, config: DatacenterConnectivityTemplateAssignmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_connectivity_template_assignments',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationPointIds = config.applicationPointIds;
    this._blueprintId = config.blueprintId;
    this._connectivityTemplateId = config.connectivityTemplateId;
    this._fetchIpLinkIds = config.fetchIpLinkIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_point_ids - computed: false, optional: false, required: true
  private _applicationPointIds?: string[]; 
  public get applicationPointIds() {
    return cdktf.Fn.tolist(this.getListAttribute('application_point_ids'));
  }
  public set applicationPointIds(value: string[]) {
    this._applicationPointIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationPointIdsInput() {
    return this._applicationPointIds;
  }

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // connectivity_template_id - computed: false, optional: false, required: true
  private _connectivityTemplateId?: string; 
  public get connectivityTemplateId() {
    return this.getStringAttribute('connectivity_template_id');
  }
  public set connectivityTemplateId(value: string) {
    this._connectivityTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityTemplateIdInput() {
    return this._connectivityTemplateId;
  }

  // fetch_ip_link_ids - computed: false, optional: true, required: false
  private _fetchIpLinkIds?: boolean | cdktf.IResolvable; 
  public get fetchIpLinkIds() {
    return this.getBooleanAttribute('fetch_ip_link_ids');
  }
  public set fetchIpLinkIds(value: boolean | cdktf.IResolvable) {
    this._fetchIpLinkIds = value;
  }
  public resetFetchIpLinkIds() {
    this._fetchIpLinkIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchIpLinkIdsInput() {
    return this._fetchIpLinkIds;
  }

  // ip_link_ids - computed: true, optional: false, required: false
  private _ipLinkIds = new cdktf.StringMapMap(this, "ip_link_ids");
  public get ipLinkIds() {
    return this._ipLinkIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_point_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applicationPointIds),
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      connectivity_template_id: cdktf.stringToTerraform(this._connectivityTemplateId),
      fetch_ip_link_ids: cdktf.booleanToTerraform(this._fetchIpLinkIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_point_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applicationPointIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connectivity_template_id: {
        value: cdktf.stringToHclTerraform(this._connectivityTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fetch_ip_link_ids: {
        value: cdktf.booleanToHclTerraform(this._fetchIpLinkIds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
