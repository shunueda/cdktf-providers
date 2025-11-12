// https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_quota_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointQuotaV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_quota_v1#endpoint EndpointQuotaV1#endpoint}
  */
  readonly endpoint?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_quota_v1#id EndpointQuotaV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_quota_v1#in_use_endpoint EndpointQuotaV1#in_use_endpoint}
  */
  readonly inUseEndpoint?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_quota_v1#in_use_service EndpointQuotaV1#in_use_service}
  */
  readonly inUseService?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_quota_v1#project_id EndpointQuotaV1#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_quota_v1#region EndpointQuotaV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_quota_v1#service EndpointQuotaV1#service}
  */
  readonly service?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_quota_v1 sci_endpoint_quota_v1}
*/
export class EndpointQuotaV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sci_endpoint_quota_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EndpointQuotaV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EndpointQuotaV1 to import
  * @param importFromId The id of the existing EndpointQuotaV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_quota_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EndpointQuotaV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sci_endpoint_quota_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_quota_v1 sci_endpoint_quota_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointQuotaV1Config
  */
  public constructor(scope: Construct, id: string, config: EndpointQuotaV1Config) {
    super(scope, id, {
      terraformResourceType: 'sci_endpoint_quota_v1',
      terraformGeneratorMetadata: {
        providerName: 'sci',
        providerVersion: '2.2.1',
        providerVersionConstraint: '2.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endpoint = config.endpoint;
    this._id = config.id;
    this._inUseEndpoint = config.inUseEndpoint;
    this._inUseService = config.inUseService;
    this._projectId = config.projectId;
    this._region = config.region;
    this._service = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: number; 
  public get endpoint() {
    return this.getNumberAttribute('endpoint');
  }
  public set endpoint(value: number) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // in_use_endpoint - computed: true, optional: true, required: false
  private _inUseEndpoint?: number; 
  public get inUseEndpoint() {
    return this.getNumberAttribute('in_use_endpoint');
  }
  public set inUseEndpoint(value: number) {
    this._inUseEndpoint = value;
  }
  public resetInUseEndpoint() {
    this._inUseEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inUseEndpointInput() {
    return this._inUseEndpoint;
  }

  // in_use_service - computed: true, optional: true, required: false
  private _inUseService?: number; 
  public get inUseService() {
    return this.getNumberAttribute('in_use_service');
  }
  public set inUseService(value: number) {
    this._inUseService = value;
  }
  public resetInUseService() {
    this._inUseService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inUseServiceInput() {
    return this._inUseService;
  }

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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service - computed: true, optional: true, required: false
  private _service?: number; 
  public get service() {
    return this.getNumberAttribute('service');
  }
  public set service(value: number) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint: cdktf.numberToTerraform(this._endpoint),
      id: cdktf.stringToTerraform(this._id),
      in_use_endpoint: cdktf.numberToTerraform(this._inUseEndpoint),
      in_use_service: cdktf.numberToTerraform(this._inUseService),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      service: cdktf.numberToTerraform(this._service),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint: {
        value: cdktf.numberToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      in_use_endpoint: {
        value: cdktf.numberToHclTerraform(this._inUseEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      in_use_service: {
        value: cdktf.numberToHclTerraform(this._inUseService),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
      service: {
        value: cdktf.numberToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
