// https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_service_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointServiceV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_service_v1#availability_zone EndpointServiceV1#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_service_v1#description EndpointServiceV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_service_v1#enabled EndpointServiceV1#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_service_v1#id EndpointServiceV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_service_v1#ip_addresses EndpointServiceV1#ip_addresses}
  */
  readonly ipAddresses: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_service_v1#name EndpointServiceV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_service_v1#network_id EndpointServiceV1#network_id}
  */
  readonly networkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_service_v1#port EndpointServiceV1#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_service_v1#project_id EndpointServiceV1#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_service_v1#proxy_protocol EndpointServiceV1#proxy_protocol}
  */
  readonly proxyProtocol?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_service_v1#region EndpointServiceV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_service_v1#require_approval EndpointServiceV1#require_approval}
  */
  readonly requireApproval?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_service_v1#service_provider EndpointServiceV1#service_provider}
  */
  readonly serviceProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_service_v1#tags EndpointServiceV1#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_service_v1#visibility EndpointServiceV1#visibility}
  */
  readonly visibility?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_service_v1 sci_endpoint_service_v1}
*/
export class EndpointServiceV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sci_endpoint_service_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EndpointServiceV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EndpointServiceV1 to import
  * @param importFromId The id of the existing EndpointServiceV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_service_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EndpointServiceV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sci_endpoint_service_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/endpoint_service_v1 sci_endpoint_service_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointServiceV1Config
  */
  public constructor(scope: Construct, id: string, config: EndpointServiceV1Config) {
    super(scope, id, {
      terraformResourceType: 'sci_endpoint_service_v1',
      terraformGeneratorMetadata: {
        providerName: 'sci',
        providerVersion: '2.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._ipAddresses = config.ipAddresses;
    this._name = config.name;
    this._networkId = config.networkId;
    this._port = config.port;
    this._projectId = config.projectId;
    this._proxyProtocol = config.proxyProtocol;
    this._region = config.region;
    this._requireApproval = config.requireApproval;
    this._serviceProvider = config.serviceProvider;
    this._tags = config.tags;
    this._visibility = config.visibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
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

  // ip_addresses - computed: false, optional: false, required: true
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // proxy_protocol - computed: true, optional: true, required: false
  private _proxyProtocol?: boolean | cdktf.IResolvable; 
  public get proxyProtocol() {
    return this.getBooleanAttribute('proxy_protocol');
  }
  public set proxyProtocol(value: boolean | cdktf.IResolvable) {
    this._proxyProtocol = value;
  }
  public resetProxyProtocol() {
    this._proxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolInput() {
    return this._proxyProtocol;
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

  // require_approval - computed: true, optional: true, required: false
  private _requireApproval?: boolean | cdktf.IResolvable; 
  public get requireApproval() {
    return this.getBooleanAttribute('require_approval');
  }
  public set requireApproval(value: boolean | cdktf.IResolvable) {
    this._requireApproval = value;
  }
  public resetRequireApproval() {
    this._requireApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireApprovalInput() {
    return this._requireApproval;
  }

  // service_provider - computed: true, optional: true, required: false
  private _serviceProvider?: string; 
  public get serviceProvider() {
    return this.getStringAttribute('service_provider');
  }
  public set serviceProvider(value: string) {
    this._serviceProvider = value;
  }
  public resetServiceProvider() {
    this._serviceProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderInput() {
    return this._serviceProvider;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // visibility - computed: true, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAddresses),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      port: cdktf.numberToTerraform(this._port),
      project_id: cdktf.stringToTerraform(this._projectId),
      proxy_protocol: cdktf.booleanToTerraform(this._proxyProtocol),
      region: cdktf.stringToTerraform(this._region),
      require_approval: cdktf.booleanToTerraform(this._requireApproval),
      service_provider: cdktf.stringToTerraform(this._serviceProvider),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      visibility: cdktf.stringToTerraform(this._visibility),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
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
      proxy_protocol: {
        value: cdktf.booleanToHclTerraform(this._proxyProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_approval: {
        value: cdktf.booleanToHclTerraform(this._requireApproval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_provider: {
        value: cdktf.stringToHclTerraform(this._serviceProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
