// https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service_private_endpoints_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicePrivateEndpointsAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of private endpoint IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service_private_endpoints_attachment#private_endpoint_ids ServicePrivateEndpointsAttachment#private_endpoint_ids}
  */
  readonly privateEndpointIds?: string[];
  /**
  * ClickHouse Service ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service_private_endpoints_attachment#service_id ServicePrivateEndpointsAttachment#service_id}
  */
  readonly serviceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service_private_endpoints_attachment clickhouse_service_private_endpoints_attachment}
*/
export class ServicePrivateEndpointsAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clickhouse_service_private_endpoints_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicePrivateEndpointsAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicePrivateEndpointsAttachment to import
  * @param importFromId The id of the existing ServicePrivateEndpointsAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service_private_endpoints_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicePrivateEndpointsAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clickhouse_service_private_endpoints_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service_private_endpoints_attachment clickhouse_service_private_endpoints_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicePrivateEndpointsAttachmentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ServicePrivateEndpointsAttachmentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'clickhouse_service_private_endpoints_attachment',
      terraformGeneratorMetadata: {
        providerName: 'clickhouse',
        providerVersion: '3.5.4',
        providerVersionConstraint: '3.5.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._privateEndpointIds = config.privateEndpointIds;
    this._serviceId = config.serviceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // private_endpoint_ids - computed: true, optional: true, required: false
  private _privateEndpointIds?: string[]; 
  public get privateEndpointIds() {
    return this.getListAttribute('private_endpoint_ids');
  }
  public set privateEndpointIds(value: string[]) {
    this._privateEndpointIds = value;
  }
  public resetPrivateEndpointIds() {
    this._privateEndpointIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIdsInput() {
    return this._privateEndpointIds;
  }

  // service_id - computed: false, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      private_endpoint_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateEndpointIds),
      service_id: cdktf.stringToTerraform(this._serviceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      private_endpoint_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privateEndpointIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
