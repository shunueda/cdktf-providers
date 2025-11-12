// https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/endpoint#container_port Endpoint#container_port}
  */
  readonly containerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/endpoint#container_ports Endpoint#container_ports}
  */
  readonly containerPorts?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/endpoint#default_domain Endpoint#default_domain}
  */
  readonly defaultDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/endpoint#domain Endpoint#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/endpoint#endpoint_type Endpoint#endpoint_type}
  */
  readonly endpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/endpoint#env_id Endpoint#env_id}
  */
  readonly envId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/endpoint#id Endpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/endpoint#internal Endpoint#internal}
  */
  readonly internal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/endpoint#ip_filtering Endpoint#ip_filtering}
  */
  readonly ipFiltering?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/endpoint#load_balancing_algorithm_type Endpoint#load_balancing_algorithm_type}
  */
  readonly loadBalancingAlgorithmType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/endpoint#managed Endpoint#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/endpoint#platform Endpoint#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/endpoint#process_type Endpoint#process_type}
  */
  readonly processType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/endpoint#resource_id Endpoint#resource_id}
  */
  readonly resourceId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/endpoint#resource_type Endpoint#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/endpoint#shared Endpoint#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/endpoint aptible_endpoint}
*/
export class Endpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aptible_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Endpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Endpoint to import
  * @param importFromId The id of the existing Endpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Endpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aptible_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/endpoint aptible_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointConfig
  */
  public constructor(scope: Construct, id: string, config: EndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aptible_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aptible',
        providerVersion: '0.9.18',
        providerVersionConstraint: '0.9.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._containerPort = config.containerPort;
    this._containerPorts = config.containerPorts;
    this._defaultDomain = config.defaultDomain;
    this._domain = config.domain;
    this._endpointType = config.endpointType;
    this._envId = config.envId;
    this._id = config.id;
    this._internal = config.internal;
    this._ipFiltering = config.ipFiltering;
    this._loadBalancingAlgorithmType = config.loadBalancingAlgorithmType;
    this._managed = config.managed;
    this._platform = config.platform;
    this._processType = config.processType;
    this._resourceId = config.resourceId;
    this._resourceType = config.resourceType;
    this._shared = config.shared;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_port - computed: false, optional: true, required: false
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  public resetContainerPort() {
    this._containerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }

  // container_ports - computed: false, optional: true, required: false
  private _containerPorts?: number[]; 
  public get containerPorts() {
    return this.getNumberListAttribute('container_ports');
  }
  public set containerPorts(value: number[]) {
    this._containerPorts = value;
  }
  public resetContainerPorts() {
    this._containerPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortsInput() {
    return this._containerPorts;
  }

  // default_domain - computed: false, optional: true, required: false
  private _defaultDomain?: boolean | cdktf.IResolvable; 
  public get defaultDomain() {
    return this.getBooleanAttribute('default_domain');
  }
  public set defaultDomain(value: boolean | cdktf.IResolvable) {
    this._defaultDomain = value;
  }
  public resetDefaultDomain() {
    this._defaultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDomainInput() {
    return this._defaultDomain;
  }

  // dns_validation_record - computed: true, optional: false, required: false
  public get dnsValidationRecord() {
    return this.getStringAttribute('dns_validation_record');
  }

  // dns_validation_value - computed: true, optional: false, required: false
  public get dnsValidationValue() {
    return this.getStringAttribute('dns_validation_value');
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getNumberAttribute('endpoint_id');
  }

  // endpoint_type - computed: false, optional: true, required: false
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  public resetEndpointType() {
    this._endpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // env_id - computed: false, optional: false, required: true
  private _envId?: number; 
  public get envId() {
    return this.getNumberAttribute('env_id');
  }
  public set envId(value: number) {
    this._envId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdInput() {
    return this._envId;
  }

  // external_hostname - computed: true, optional: false, required: false
  public get externalHostname() {
    return this.getStringAttribute('external_hostname');
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

  // internal - computed: false, optional: true, required: false
  private _internal?: boolean | cdktf.IResolvable; 
  public get internal() {
    return this.getBooleanAttribute('internal');
  }
  public set internal(value: boolean | cdktf.IResolvable) {
    this._internal = value;
  }
  public resetInternal() {
    this._internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal;
  }

  // ip_filtering - computed: false, optional: true, required: false
  private _ipFiltering?: string[]; 
  public get ipFiltering() {
    return this.getListAttribute('ip_filtering');
  }
  public set ipFiltering(value: string[]) {
    this._ipFiltering = value;
  }
  public resetIpFiltering() {
    this._ipFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringInput() {
    return this._ipFiltering;
  }

  // load_balancing_algorithm_type - computed: false, optional: true, required: false
  private _loadBalancingAlgorithmType?: string; 
  public get loadBalancingAlgorithmType() {
    return this.getStringAttribute('load_balancing_algorithm_type');
  }
  public set loadBalancingAlgorithmType(value: string) {
    this._loadBalancingAlgorithmType = value;
  }
  public resetLoadBalancingAlgorithmType() {
    this._loadBalancingAlgorithmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingAlgorithmTypeInput() {
    return this._loadBalancingAlgorithmType;
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: boolean | cdktf.IResolvable; 
  public get managed() {
    return this.getBooleanAttribute('managed');
  }
  public set managed(value: boolean | cdktf.IResolvable) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // process_type - computed: false, optional: true, required: false
  private _processType?: string; 
  public get processType() {
    return this.getStringAttribute('process_type');
  }
  public set processType(value: string) {
    this._processType = value;
  }
  public resetProcessType() {
    this._processType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processTypeInput() {
    return this._processType;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: number; 
  public get resourceId() {
    return this.getNumberAttribute('resource_id');
  }
  public set resourceId(value: number) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: boolean | cdktf.IResolvable; 
  public get shared() {
    return this.getBooleanAttribute('shared');
  }
  public set shared(value: boolean | cdktf.IResolvable) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // virtual_domain - computed: true, optional: false, required: false
  public get virtualDomain() {
    return this.getStringAttribute('virtual_domain');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_port: cdktf.numberToTerraform(this._containerPort),
      container_ports: cdktf.listMapper(cdktf.numberToTerraform, false)(this._containerPorts),
      default_domain: cdktf.booleanToTerraform(this._defaultDomain),
      domain: cdktf.stringToTerraform(this._domain),
      endpoint_type: cdktf.stringToTerraform(this._endpointType),
      env_id: cdktf.numberToTerraform(this._envId),
      id: cdktf.stringToTerraform(this._id),
      internal: cdktf.booleanToTerraform(this._internal),
      ip_filtering: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipFiltering),
      load_balancing_algorithm_type: cdktf.stringToTerraform(this._loadBalancingAlgorithmType),
      managed: cdktf.booleanToTerraform(this._managed),
      platform: cdktf.stringToTerraform(this._platform),
      process_type: cdktf.stringToTerraform(this._processType),
      resource_id: cdktf.numberToTerraform(this._resourceId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      shared: cdktf.booleanToTerraform(this._shared),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container_port: {
        value: cdktf.numberToHclTerraform(this._containerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      container_ports: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._containerPorts),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      default_domain: {
        value: cdktf.booleanToHclTerraform(this._defaultDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_type: {
        value: cdktf.stringToHclTerraform(this._endpointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env_id: {
        value: cdktf.numberToHclTerraform(this._envId),
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
      internal: {
        value: cdktf.booleanToHclTerraform(this._internal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_filtering: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipFiltering),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      load_balancing_algorithm_type: {
        value: cdktf.stringToHclTerraform(this._loadBalancingAlgorithmType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed: {
        value: cdktf.booleanToHclTerraform(this._managed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      process_type: {
        value: cdktf.stringToHclTerraform(this._processType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.numberToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared: {
        value: cdktf.booleanToHclTerraform(this._shared),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
