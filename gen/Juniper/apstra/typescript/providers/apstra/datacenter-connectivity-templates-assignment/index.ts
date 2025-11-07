// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_templates_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatacenterConnectivityTemplatesAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra node ID of the Interface or System where the Connectivity Templates should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_templates_assignment#application_point_id DatacenterConnectivityTemplatesAssignment#application_point_id}
  */
  readonly applicationPointId: string;
  /**
  * Apstra Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_templates_assignment#blueprint_id DatacenterConnectivityTemplatesAssignment#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Set of Connectivity Template IDs which should be applied to the Application Point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_templates_assignment#connectivity_template_ids DatacenterConnectivityTemplatesAssignment#connectivity_template_ids}
  */
  readonly connectivityTemplateIds: string[];
  /**
  * When `true`, the read-only `ip_link_ids` attribute will be populated. Default behavior skips retrieving `ip_link_ids` to improve performance in scenarios where this information is not needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_templates_assignment#fetch_ip_link_ids DatacenterConnectivityTemplatesAssignment#fetch_ip_link_ids}
  */
  readonly fetchIpLinkIds?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_templates_assignment apstra_datacenter_connectivity_templates_assignment}
*/
export class DatacenterConnectivityTemplatesAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_connectivity_templates_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatacenterConnectivityTemplatesAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatacenterConnectivityTemplatesAssignment to import
  * @param importFromId The id of the existing DatacenterConnectivityTemplatesAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_templates_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatacenterConnectivityTemplatesAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_connectivity_templates_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_templates_assignment apstra_datacenter_connectivity_templates_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatacenterConnectivityTemplatesAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: DatacenterConnectivityTemplatesAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_connectivity_templates_assignment',
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
    this._applicationPointId = config.applicationPointId;
    this._blueprintId = config.blueprintId;
    this._connectivityTemplateIds = config.connectivityTemplateIds;
    this._fetchIpLinkIds = config.fetchIpLinkIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_point_id - computed: false, optional: false, required: true
  private _applicationPointId?: string; 
  public get applicationPointId() {
    return this.getStringAttribute('application_point_id');
  }
  public set applicationPointId(value: string) {
    this._applicationPointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationPointIdInput() {
    return this._applicationPointId;
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

  // connectivity_template_ids - computed: false, optional: false, required: true
  private _connectivityTemplateIds?: string[]; 
  public get connectivityTemplateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('connectivity_template_ids'));
  }
  public set connectivityTemplateIds(value: string[]) {
    this._connectivityTemplateIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityTemplateIdsInput() {
    return this._connectivityTemplateIds;
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
      application_point_id: cdktf.stringToTerraform(this._applicationPointId),
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      connectivity_template_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connectivityTemplateIds),
      fetch_ip_link_ids: cdktf.booleanToTerraform(this._fetchIpLinkIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_point_id: {
        value: cdktf.stringToHclTerraform(this._applicationPointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connectivity_template_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connectivityTemplateIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
