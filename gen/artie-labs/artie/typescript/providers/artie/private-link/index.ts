// https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/private_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of AWS Availability Zone IDs where the PrivateLink endpoint is available (e.g., ["use1-az1", "use1-az2"]).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/private_link#az_ids PrivateLink#az_ids}
  */
  readonly azIds: string[];
  /**
  * The data plane name associated with this PrivateLink connection. If not provided, it will be computed by the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/private_link#data_plane_name PrivateLink#data_plane_name}
  */
  readonly dataPlaneName?: string;
  /**
  * The name of the PrivateLink connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/private_link#name PrivateLink#name}
  */
  readonly name: string;
  /**
  * The AWS region of the VPC endpoint (e.g., us-east-1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/private_link#region PrivateLink#region}
  */
  readonly region: string;
  /**
  * The VPC Endpoint ID (e.g., vpce-xxxxxxxxxxxxxxxxx) that connects to Artie's endpoint service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/private_link#vpc_endpoint_id PrivateLink#vpc_endpoint_id}
  */
  readonly vpcEndpointId: string;
  /**
  * The VPC endpoint service name for Artie's service in your AWS region (e.g., com.amazonaws.vpce.us-east-1.vpce-svc-xxxxx).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/private_link#vpc_service_name PrivateLink#vpc_service_name}
  */
  readonly vpcServiceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/private_link artie_private_link}
*/
export class PrivateLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artie_private_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateLink to import
  * @param importFromId The id of the existing PrivateLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/private_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artie_private_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/private_link artie_private_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateLinkConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'artie_private_link',
      terraformGeneratorMetadata: {
        providerName: 'artie',
        providerVersion: '2.3.1',
        providerVersionConstraint: '2.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azIds = config.azIds;
    this._dataPlaneName = config.dataPlaneName;
    this._name = config.name;
    this._region = config.region;
    this._vpcEndpointId = config.vpcEndpointId;
    this._vpcServiceName = config.vpcServiceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // az_ids - computed: false, optional: false, required: true
  private _azIds?: string[]; 
  public get azIds() {
    return this.getListAttribute('az_ids');
  }
  public set azIds(value: string[]) {
    this._azIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azIdsInput() {
    return this._azIds;
  }

  // data_plane_name - computed: true, optional: true, required: false
  private _dataPlaneName?: string; 
  public get dataPlaneName() {
    return this.getStringAttribute('data_plane_name');
  }
  public set dataPlaneName(value: string) {
    this._dataPlaneName = value;
  }
  public resetDataPlaneName() {
    this._dataPlaneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPlaneNameInput() {
    return this._dataPlaneName;
  }

  // dns_entry - computed: true, optional: false, required: false
  public get dnsEntry() {
    return this.getStringAttribute('dns_entry');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vpc_endpoint_id - computed: false, optional: false, required: true
  private _vpcEndpointId?: string; 
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
  public set vpcEndpointId(value: string) {
    this._vpcEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdInput() {
    return this._vpcEndpointId;
  }

  // vpc_service_name - computed: false, optional: false, required: true
  private _vpcServiceName?: string; 
  public get vpcServiceName() {
    return this.getStringAttribute('vpc_service_name');
  }
  public set vpcServiceName(value: string) {
    this._vpcServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcServiceNameInput() {
    return this._vpcServiceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      az_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._azIds),
      data_plane_name: cdktf.stringToTerraform(this._dataPlaneName),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
      vpc_service_name: cdktf.stringToTerraform(this._vpcServiceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      az_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._azIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      data_plane_name: {
        value: cdktf.stringToHclTerraform(this._dataPlaneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._vpcEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_service_name: {
        value: cdktf.stringToHclTerraform(this._vpcServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
