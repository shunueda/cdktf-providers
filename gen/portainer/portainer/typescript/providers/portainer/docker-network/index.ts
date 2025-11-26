// https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DockerNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#attachable DockerNetwork#attachable}
  */
  readonly attachable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#config_from DockerNetwork#config_from}
  */
  readonly configFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#config_only DockerNetwork#config_only}
  */
  readonly configOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#driver DockerNetwork#driver}
  */
  readonly driver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#enable_ipv4 DockerNetwork#enable_ipv4}
  */
  readonly enableIpv4?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#enable_ipv6 DockerNetwork#enable_ipv6}
  */
  readonly enableIpv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#endpoint_id DockerNetwork#endpoint_id}
  */
  readonly endpointId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#id DockerNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#ingress DockerNetwork#ingress}
  */
  readonly ingress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#internal DockerNetwork#internal}
  */
  readonly internal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#ipam_driver DockerNetwork#ipam_driver}
  */
  readonly ipamDriver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#ipam_options DockerNetwork#ipam_options}
  */
  readonly ipamOptions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#labels DockerNetwork#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#name DockerNetwork#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#options DockerNetwork#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#scope DockerNetwork#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#swarm_node_id DockerNetwork#swarm_node_id}
  */
  readonly swarmNodeId?: string;
  /**
  * ipam_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#ipam_config DockerNetwork#ipam_config}
  */
  readonly ipamConfig?: DockerNetworkIpamConfig[] | cdktf.IResolvable;
}
export interface DockerNetworkIpamConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#auxiliary_addresses DockerNetwork#auxiliary_addresses}
  */
  readonly auxiliaryAddresses?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#gateway DockerNetwork#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#ip_range DockerNetwork#ip_range}
  */
  readonly ipRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#subnet DockerNetwork#subnet}
  */
  readonly subnet: string;
}

export function dockerNetworkIpamConfigToTerraform(struct?: DockerNetworkIpamConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auxiliary_addresses: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.auxiliaryAddresses),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    ip_range: cdktf.stringToTerraform(struct!.ipRange),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function dockerNetworkIpamConfigToHclTerraform(struct?: DockerNetworkIpamConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auxiliary_addresses: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.auxiliaryAddresses),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_range: {
      value: cdktf.stringToHclTerraform(struct!.ipRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DockerNetworkIpamConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DockerNetworkIpamConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auxiliaryAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.auxiliaryAddresses = this._auxiliaryAddresses;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._ipRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRange = this._ipRange;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DockerNetworkIpamConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auxiliaryAddresses = undefined;
      this._gateway = undefined;
      this._ipRange = undefined;
      this._subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auxiliaryAddresses = value.auxiliaryAddresses;
      this._gateway = value.gateway;
      this._ipRange = value.ipRange;
      this._subnet = value.subnet;
    }
  }

  // auxiliary_addresses - computed: false, optional: true, required: false
  private _auxiliaryAddresses?: { [key: string]: string }; 
  public get auxiliaryAddresses() {
    return this.getStringMapAttribute('auxiliary_addresses');
  }
  public set auxiliaryAddresses(value: { [key: string]: string }) {
    this._auxiliaryAddresses = value;
  }
  public resetAuxiliaryAddresses() {
    this._auxiliaryAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryAddressesInput() {
    return this._auxiliaryAddresses;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // ip_range - computed: false, optional: true, required: false
  private _ipRange?: string; 
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }
  public set ipRange(value: string) {
    this._ipRange = value;
  }
  public resetIpRange() {
    this._ipRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }
}

export class DockerNetworkIpamConfigList extends cdktf.ComplexList {
  public internalValue? : DockerNetworkIpamConfig[] | cdktf.IResolvable

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
  public get(index: number): DockerNetworkIpamConfigOutputReference {
    return new DockerNetworkIpamConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network portainer_docker_network}
*/
export class DockerNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_docker_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DockerNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DockerNetwork to import
  * @param importFromId The id of the existing DockerNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DockerNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_docker_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.18.1/docs/resources/docker_network portainer_docker_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DockerNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DockerNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_docker_network',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.18.1',
        providerVersionConstraint: '1.18.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attachable = config.attachable;
    this._configFrom = config.configFrom;
    this._configOnly = config.configOnly;
    this._driver = config.driver;
    this._enableIpv4 = config.enableIpv4;
    this._enableIpv6 = config.enableIpv6;
    this._endpointId = config.endpointId;
    this._id = config.id;
    this._ingress = config.ingress;
    this._internal = config.internal;
    this._ipamDriver = config.ipamDriver;
    this._ipamOptions = config.ipamOptions;
    this._labels = config.labels;
    this._name = config.name;
    this._options = config.options;
    this._scope = config.scope;
    this._swarmNodeId = config.swarmNodeId;
    this._ipamConfig.internalValue = config.ipamConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachable - computed: false, optional: true, required: false
  private _attachable?: boolean | cdktf.IResolvable; 
  public get attachable() {
    return this.getBooleanAttribute('attachable');
  }
  public set attachable(value: boolean | cdktf.IResolvable) {
    this._attachable = value;
  }
  public resetAttachable() {
    this._attachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachableInput() {
    return this._attachable;
  }

  // config_from - computed: false, optional: true, required: false
  private _configFrom?: string; 
  public get configFrom() {
    return this.getStringAttribute('config_from');
  }
  public set configFrom(value: string) {
    this._configFrom = value;
  }
  public resetConfigFrom() {
    this._configFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFromInput() {
    return this._configFrom;
  }

  // config_only - computed: false, optional: true, required: false
  private _configOnly?: boolean | cdktf.IResolvable; 
  public get configOnly() {
    return this.getBooleanAttribute('config_only');
  }
  public set configOnly(value: boolean | cdktf.IResolvable) {
    this._configOnly = value;
  }
  public resetConfigOnly() {
    this._configOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOnlyInput() {
    return this._configOnly;
  }

  // driver - computed: false, optional: true, required: false
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  public resetDriver() {
    this._driver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // enable_ipv4 - computed: false, optional: true, required: false
  private _enableIpv4?: boolean | cdktf.IResolvable; 
  public get enableIpv4() {
    return this.getBooleanAttribute('enable_ipv4');
  }
  public set enableIpv4(value: boolean | cdktf.IResolvable) {
    this._enableIpv4 = value;
  }
  public resetEnableIpv4() {
    this._enableIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv4Input() {
    return this._enableIpv4;
  }

  // enable_ipv6 - computed: false, optional: true, required: false
  private _enableIpv6?: boolean | cdktf.IResolvable; 
  public get enableIpv6() {
    return this.getBooleanAttribute('enable_ipv6');
  }
  public set enableIpv6(value: boolean | cdktf.IResolvable) {
    this._enableIpv6 = value;
  }
  public resetEnableIpv6() {
    this._enableIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv6Input() {
    return this._enableIpv6;
  }

  // endpoint_id - computed: false, optional: false, required: true
  private _endpointId?: number; 
  public get endpointId() {
    return this.getNumberAttribute('endpoint_id');
  }
  public set endpointId(value: number) {
    this._endpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
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

  // ingress - computed: false, optional: true, required: false
  private _ingress?: boolean | cdktf.IResolvable; 
  public get ingress() {
    return this.getBooleanAttribute('ingress');
  }
  public set ingress(value: boolean | cdktf.IResolvable) {
    this._ingress = value;
  }
  public resetIngress() {
    this._ingress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress;
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

  // ipam_driver - computed: false, optional: true, required: false
  private _ipamDriver?: string; 
  public get ipamDriver() {
    return this.getStringAttribute('ipam_driver');
  }
  public set ipamDriver(value: string) {
    this._ipamDriver = value;
  }
  public resetIpamDriver() {
    this._ipamDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamDriverInput() {
    return this._ipamDriver;
  }

  // ipam_options - computed: false, optional: true, required: false
  private _ipamOptions?: { [key: string]: string }; 
  public get ipamOptions() {
    return this.getStringMapAttribute('ipam_options');
  }
  public set ipamOptions(value: { [key: string]: string }) {
    this._ipamOptions = value;
  }
  public resetIpamOptions() {
    this._ipamOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamOptionsInput() {
    return this._ipamOptions;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // swarm_node_id - computed: false, optional: true, required: false
  private _swarmNodeId?: string; 
  public get swarmNodeId() {
    return this.getStringAttribute('swarm_node_id');
  }
  public set swarmNodeId(value: string) {
    this._swarmNodeId = value;
  }
  public resetSwarmNodeId() {
    this._swarmNodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swarmNodeIdInput() {
    return this._swarmNodeId;
  }

  // ipam_config - computed: false, optional: true, required: false
  private _ipamConfig = new DockerNetworkIpamConfigList(this, "ipam_config", false);
  public get ipamConfig() {
    return this._ipamConfig;
  }
  public putIpamConfig(value: DockerNetworkIpamConfig[] | cdktf.IResolvable) {
    this._ipamConfig.internalValue = value;
  }
  public resetIpamConfig() {
    this._ipamConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamConfigInput() {
    return this._ipamConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attachable: cdktf.booleanToTerraform(this._attachable),
      config_from: cdktf.stringToTerraform(this._configFrom),
      config_only: cdktf.booleanToTerraform(this._configOnly),
      driver: cdktf.stringToTerraform(this._driver),
      enable_ipv4: cdktf.booleanToTerraform(this._enableIpv4),
      enable_ipv6: cdktf.booleanToTerraform(this._enableIpv6),
      endpoint_id: cdktf.numberToTerraform(this._endpointId),
      id: cdktf.stringToTerraform(this._id),
      ingress: cdktf.booleanToTerraform(this._ingress),
      internal: cdktf.booleanToTerraform(this._internal),
      ipam_driver: cdktf.stringToTerraform(this._ipamDriver),
      ipam_options: cdktf.hashMapper(cdktf.stringToTerraform)(this._ipamOptions),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.hashMapper(cdktf.stringToTerraform)(this._options),
      scope: cdktf.stringToTerraform(this._scope),
      swarm_node_id: cdktf.stringToTerraform(this._swarmNodeId),
      ipam_config: cdktf.listMapper(dockerNetworkIpamConfigToTerraform, true)(this._ipamConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attachable: {
        value: cdktf.booleanToHclTerraform(this._attachable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config_from: {
        value: cdktf.stringToHclTerraform(this._configFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_only: {
        value: cdktf.booleanToHclTerraform(this._configOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      driver: {
        value: cdktf.stringToHclTerraform(this._driver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_ipv4: {
        value: cdktf.booleanToHclTerraform(this._enableIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ipv6: {
        value: cdktf.booleanToHclTerraform(this._enableIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint_id: {
        value: cdktf.numberToHclTerraform(this._endpointId),
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
      ingress: {
        value: cdktf.booleanToHclTerraform(this._ingress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      internal: {
        value: cdktf.booleanToHclTerraform(this._internal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipam_driver: {
        value: cdktf.stringToHclTerraform(this._ipamDriver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipam_options: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._ipamOptions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._options),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      swarm_node_id: {
        value: cdktf.stringToHclTerraform(this._swarmNodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipam_config: {
        value: cdktf.listMapperHcl(dockerNetworkIpamConfigToHclTerraform, true)(this._ipamConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DockerNetworkIpamConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
