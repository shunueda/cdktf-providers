// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerinfraClustertemplateV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#apiserver_port ContainerinfraClustertemplateV1#apiserver_port}
  */
  readonly apiserverPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#cluster_distro ContainerinfraClustertemplateV1#cluster_distro}
  */
  readonly clusterDistro?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#coe ContainerinfraClustertemplateV1#coe}
  */
  readonly coe: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#dns_nameserver ContainerinfraClustertemplateV1#dns_nameserver}
  */
  readonly dnsNameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#docker_storage_driver ContainerinfraClustertemplateV1#docker_storage_driver}
  */
  readonly dockerStorageDriver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#docker_volume_size ContainerinfraClustertemplateV1#docker_volume_size}
  */
  readonly dockerVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#external_network_id ContainerinfraClustertemplateV1#external_network_id}
  */
  readonly externalNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#fixed_network ContainerinfraClustertemplateV1#fixed_network}
  */
  readonly fixedNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#fixed_subnet ContainerinfraClustertemplateV1#fixed_subnet}
  */
  readonly fixedSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#flavor ContainerinfraClustertemplateV1#flavor}
  */
  readonly flavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#floating_ip_enabled ContainerinfraClustertemplateV1#floating_ip_enabled}
  */
  readonly floatingIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#hidden ContainerinfraClustertemplateV1#hidden}
  */
  readonly hidden?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#http_proxy ContainerinfraClustertemplateV1#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#https_proxy ContainerinfraClustertemplateV1#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#id ContainerinfraClustertemplateV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#image ContainerinfraClustertemplateV1#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#insecure_registry ContainerinfraClustertemplateV1#insecure_registry}
  */
  readonly insecureRegistry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#keypair_id ContainerinfraClustertemplateV1#keypair_id}
  */
  readonly keypairId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#labels ContainerinfraClustertemplateV1#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#master_flavor ContainerinfraClustertemplateV1#master_flavor}
  */
  readonly masterFlavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#master_lb_enabled ContainerinfraClustertemplateV1#master_lb_enabled}
  */
  readonly masterLbEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#name ContainerinfraClustertemplateV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#network_driver ContainerinfraClustertemplateV1#network_driver}
  */
  readonly networkDriver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#no_proxy ContainerinfraClustertemplateV1#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#public ContainerinfraClustertemplateV1#public}
  */
  readonly public?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#region ContainerinfraClustertemplateV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#registry_enabled ContainerinfraClustertemplateV1#registry_enabled}
  */
  readonly registryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#server_type ContainerinfraClustertemplateV1#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#tls_disabled ContainerinfraClustertemplateV1#tls_disabled}
  */
  readonly tlsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#volume_driver ContainerinfraClustertemplateV1#volume_driver}
  */
  readonly volumeDriver?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#timeouts ContainerinfraClustertemplateV1#timeouts}
  */
  readonly timeouts?: ContainerinfraClustertemplateV1Timeouts;
}
export interface ContainerinfraClustertemplateV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#create ContainerinfraClustertemplateV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#delete ContainerinfraClustertemplateV1#delete}
  */
  readonly delete?: string;
}

export function containerinfraClustertemplateV1TimeoutsToTerraform(struct?: ContainerinfraClustertemplateV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function containerinfraClustertemplateV1TimeoutsToHclTerraform(struct?: ContainerinfraClustertemplateV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerinfraClustertemplateV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerinfraClustertemplateV1Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerinfraClustertemplateV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1 nhncloud_containerinfra_clustertemplate_v1}
*/
export class ContainerinfraClustertemplateV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_containerinfra_clustertemplate_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContainerinfraClustertemplateV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerinfraClustertemplateV1 to import
  * @param importFromId The id of the existing ContainerinfraClustertemplateV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerinfraClustertemplateV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_containerinfra_clustertemplate_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_clustertemplate_v1 nhncloud_containerinfra_clustertemplate_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerinfraClustertemplateV1Config
  */
  public constructor(scope: Construct, id: string, config: ContainerinfraClustertemplateV1Config) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_containerinfra_clustertemplate_v1',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiserverPort = config.apiserverPort;
    this._clusterDistro = config.clusterDistro;
    this._coe = config.coe;
    this._dnsNameserver = config.dnsNameserver;
    this._dockerStorageDriver = config.dockerStorageDriver;
    this._dockerVolumeSize = config.dockerVolumeSize;
    this._externalNetworkId = config.externalNetworkId;
    this._fixedNetwork = config.fixedNetwork;
    this._fixedSubnet = config.fixedSubnet;
    this._flavor = config.flavor;
    this._floatingIpEnabled = config.floatingIpEnabled;
    this._hidden = config.hidden;
    this._httpProxy = config.httpProxy;
    this._httpsProxy = config.httpsProxy;
    this._id = config.id;
    this._image = config.image;
    this._insecureRegistry = config.insecureRegistry;
    this._keypairId = config.keypairId;
    this._labels = config.labels;
    this._masterFlavor = config.masterFlavor;
    this._masterLbEnabled = config.masterLbEnabled;
    this._name = config.name;
    this._networkDriver = config.networkDriver;
    this._noProxy = config.noProxy;
    this._public = config.public;
    this._region = config.region;
    this._registryEnabled = config.registryEnabled;
    this._serverType = config.serverType;
    this._tlsDisabled = config.tlsDisabled;
    this._volumeDriver = config.volumeDriver;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apiserver_port - computed: false, optional: true, required: false
  private _apiserverPort?: number; 
  public get apiserverPort() {
    return this.getNumberAttribute('apiserver_port');
  }
  public set apiserverPort(value: number) {
    this._apiserverPort = value;
  }
  public resetApiserverPort() {
    this._apiserverPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiserverPortInput() {
    return this._apiserverPort;
  }

  // cluster_distro - computed: true, optional: true, required: false
  private _clusterDistro?: string; 
  public get clusterDistro() {
    return this.getStringAttribute('cluster_distro');
  }
  public set clusterDistro(value: string) {
    this._clusterDistro = value;
  }
  public resetClusterDistro() {
    this._clusterDistro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDistroInput() {
    return this._clusterDistro;
  }

  // coe - computed: false, optional: false, required: true
  private _coe?: string; 
  public get coe() {
    return this.getStringAttribute('coe');
  }
  public set coe(value: string) {
    this._coe = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coeInput() {
    return this._coe;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dns_nameserver - computed: false, optional: true, required: false
  private _dnsNameserver?: string; 
  public get dnsNameserver() {
    return this.getStringAttribute('dns_nameserver');
  }
  public set dnsNameserver(value: string) {
    this._dnsNameserver = value;
  }
  public resetDnsNameserver() {
    this._dnsNameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameserverInput() {
    return this._dnsNameserver;
  }

  // docker_storage_driver - computed: false, optional: true, required: false
  private _dockerStorageDriver?: string; 
  public get dockerStorageDriver() {
    return this.getStringAttribute('docker_storage_driver');
  }
  public set dockerStorageDriver(value: string) {
    this._dockerStorageDriver = value;
  }
  public resetDockerStorageDriver() {
    this._dockerStorageDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerStorageDriverInput() {
    return this._dockerStorageDriver;
  }

  // docker_volume_size - computed: false, optional: true, required: false
  private _dockerVolumeSize?: number; 
  public get dockerVolumeSize() {
    return this.getNumberAttribute('docker_volume_size');
  }
  public set dockerVolumeSize(value: number) {
    this._dockerVolumeSize = value;
  }
  public resetDockerVolumeSize() {
    this._dockerVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerVolumeSizeInput() {
    return this._dockerVolumeSize;
  }

  // external_network_id - computed: false, optional: true, required: false
  private _externalNetworkId?: string; 
  public get externalNetworkId() {
    return this.getStringAttribute('external_network_id');
  }
  public set externalNetworkId(value: string) {
    this._externalNetworkId = value;
  }
  public resetExternalNetworkId() {
    this._externalNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNetworkIdInput() {
    return this._externalNetworkId;
  }

  // fixed_network - computed: false, optional: true, required: false
  private _fixedNetwork?: string; 
  public get fixedNetwork() {
    return this.getStringAttribute('fixed_network');
  }
  public set fixedNetwork(value: string) {
    this._fixedNetwork = value;
  }
  public resetFixedNetwork() {
    this._fixedNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNetworkInput() {
    return this._fixedNetwork;
  }

  // fixed_subnet - computed: false, optional: true, required: false
  private _fixedSubnet?: string; 
  public get fixedSubnet() {
    return this.getStringAttribute('fixed_subnet');
  }
  public set fixedSubnet(value: string) {
    this._fixedSubnet = value;
  }
  public resetFixedSubnet() {
    this._fixedSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedSubnetInput() {
    return this._fixedSubnet;
  }

  // flavor - computed: false, optional: true, required: false
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  public resetFlavor() {
    this._flavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // floating_ip_enabled - computed: false, optional: true, required: false
  private _floatingIpEnabled?: boolean | cdktf.IResolvable; 
  public get floatingIpEnabled() {
    return this.getBooleanAttribute('floating_ip_enabled');
  }
  public set floatingIpEnabled(value: boolean | cdktf.IResolvable) {
    this._floatingIpEnabled = value;
  }
  public resetFloatingIpEnabled() {
    this._floatingIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpEnabledInput() {
    return this._floatingIpEnabled;
  }

  // hidden - computed: false, optional: true, required: false
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  public resetHidden() {
    this._hidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
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

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // insecure_registry - computed: false, optional: true, required: false
  private _insecureRegistry?: string; 
  public get insecureRegistry() {
    return this.getStringAttribute('insecure_registry');
  }
  public set insecureRegistry(value: string) {
    this._insecureRegistry = value;
  }
  public resetInsecureRegistry() {
    this._insecureRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureRegistryInput() {
    return this._insecureRegistry;
  }

  // keypair_id - computed: false, optional: true, required: false
  private _keypairId?: string; 
  public get keypairId() {
    return this.getStringAttribute('keypair_id');
  }
  public set keypairId(value: string) {
    this._keypairId = value;
  }
  public resetKeypairId() {
    this._keypairId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairIdInput() {
    return this._keypairId;
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

  // master_flavor - computed: false, optional: true, required: false
  private _masterFlavor?: string; 
  public get masterFlavor() {
    return this.getStringAttribute('master_flavor');
  }
  public set masterFlavor(value: string) {
    this._masterFlavor = value;
  }
  public resetMasterFlavor() {
    this._masterFlavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterFlavorInput() {
    return this._masterFlavor;
  }

  // master_lb_enabled - computed: false, optional: true, required: false
  private _masterLbEnabled?: boolean | cdktf.IResolvable; 
  public get masterLbEnabled() {
    return this.getBooleanAttribute('master_lb_enabled');
  }
  public set masterLbEnabled(value: boolean | cdktf.IResolvable) {
    this._masterLbEnabled = value;
  }
  public resetMasterLbEnabled() {
    this._masterLbEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterLbEnabledInput() {
    return this._masterLbEnabled;
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

  // network_driver - computed: true, optional: true, required: false
  private _networkDriver?: string; 
  public get networkDriver() {
    return this.getStringAttribute('network_driver');
  }
  public set networkDriver(value: string) {
    this._networkDriver = value;
  }
  public resetNetworkDriver() {
    this._networkDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDriverInput() {
    return this._networkDriver;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
  public set noProxy(value: string) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // public - computed: false, optional: true, required: false
  private _public?: boolean | cdktf.IResolvable; 
  public get public() {
    return this.getBooleanAttribute('public');
  }
  public set public(value: boolean | cdktf.IResolvable) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
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

  // registry_enabled - computed: false, optional: true, required: false
  private _registryEnabled?: boolean | cdktf.IResolvable; 
  public get registryEnabled() {
    return this.getBooleanAttribute('registry_enabled');
  }
  public set registryEnabled(value: boolean | cdktf.IResolvable) {
    this._registryEnabled = value;
  }
  public resetRegistryEnabled() {
    this._registryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryEnabledInput() {
    return this._registryEnabled;
  }

  // server_type - computed: true, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // tls_disabled - computed: false, optional: true, required: false
  private _tlsDisabled?: boolean | cdktf.IResolvable; 
  public get tlsDisabled() {
    return this.getBooleanAttribute('tls_disabled');
  }
  public set tlsDisabled(value: boolean | cdktf.IResolvable) {
    this._tlsDisabled = value;
  }
  public resetTlsDisabled() {
    this._tlsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsDisabledInput() {
    return this._tlsDisabled;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // volume_driver - computed: false, optional: true, required: false
  private _volumeDriver?: string; 
  public get volumeDriver() {
    return this.getStringAttribute('volume_driver');
  }
  public set volumeDriver(value: string) {
    this._volumeDriver = value;
  }
  public resetVolumeDriver() {
    this._volumeDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeDriverInput() {
    return this._volumeDriver;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerinfraClustertemplateV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerinfraClustertemplateV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apiserver_port: cdktf.numberToTerraform(this._apiserverPort),
      cluster_distro: cdktf.stringToTerraform(this._clusterDistro),
      coe: cdktf.stringToTerraform(this._coe),
      dns_nameserver: cdktf.stringToTerraform(this._dnsNameserver),
      docker_storage_driver: cdktf.stringToTerraform(this._dockerStorageDriver),
      docker_volume_size: cdktf.numberToTerraform(this._dockerVolumeSize),
      external_network_id: cdktf.stringToTerraform(this._externalNetworkId),
      fixed_network: cdktf.stringToTerraform(this._fixedNetwork),
      fixed_subnet: cdktf.stringToTerraform(this._fixedSubnet),
      flavor: cdktf.stringToTerraform(this._flavor),
      floating_ip_enabled: cdktf.booleanToTerraform(this._floatingIpEnabled),
      hidden: cdktf.booleanToTerraform(this._hidden),
      http_proxy: cdktf.stringToTerraform(this._httpProxy),
      https_proxy: cdktf.stringToTerraform(this._httpsProxy),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      insecure_registry: cdktf.stringToTerraform(this._insecureRegistry),
      keypair_id: cdktf.stringToTerraform(this._keypairId),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      master_flavor: cdktf.stringToTerraform(this._masterFlavor),
      master_lb_enabled: cdktf.booleanToTerraform(this._masterLbEnabled),
      name: cdktf.stringToTerraform(this._name),
      network_driver: cdktf.stringToTerraform(this._networkDriver),
      no_proxy: cdktf.stringToTerraform(this._noProxy),
      public: cdktf.booleanToTerraform(this._public),
      region: cdktf.stringToTerraform(this._region),
      registry_enabled: cdktf.booleanToTerraform(this._registryEnabled),
      server_type: cdktf.stringToTerraform(this._serverType),
      tls_disabled: cdktf.booleanToTerraform(this._tlsDisabled),
      volume_driver: cdktf.stringToTerraform(this._volumeDriver),
      timeouts: containerinfraClustertemplateV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apiserver_port: {
        value: cdktf.numberToHclTerraform(this._apiserverPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_distro: {
        value: cdktf.stringToHclTerraform(this._clusterDistro),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      coe: {
        value: cdktf.stringToHclTerraform(this._coe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_nameserver: {
        value: cdktf.stringToHclTerraform(this._dnsNameserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      docker_storage_driver: {
        value: cdktf.stringToHclTerraform(this._dockerStorageDriver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      docker_volume_size: {
        value: cdktf.numberToHclTerraform(this._dockerVolumeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_network_id: {
        value: cdktf.stringToHclTerraform(this._externalNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fixed_network: {
        value: cdktf.stringToHclTerraform(this._fixedNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fixed_subnet: {
        value: cdktf.stringToHclTerraform(this._fixedSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor: {
        value: cdktf.stringToHclTerraform(this._flavor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      floating_ip_enabled: {
        value: cdktf.booleanToHclTerraform(this._floatingIpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hidden: {
        value: cdktf.booleanToHclTerraform(this._hidden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_proxy: {
        value: cdktf.stringToHclTerraform(this._httpProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_proxy: {
        value: cdktf.stringToHclTerraform(this._httpsProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure_registry: {
        value: cdktf.stringToHclTerraform(this._insecureRegistry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keypair_id: {
        value: cdktf.stringToHclTerraform(this._keypairId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      master_flavor: {
        value: cdktf.stringToHclTerraform(this._masterFlavor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_lb_enabled: {
        value: cdktf.booleanToHclTerraform(this._masterLbEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_driver: {
        value: cdktf.stringToHclTerraform(this._networkDriver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_proxy: {
        value: cdktf.stringToHclTerraform(this._noProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public: {
        value: cdktf.booleanToHclTerraform(this._public),
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
      registry_enabled: {
        value: cdktf.booleanToHclTerraform(this._registryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server_type: {
        value: cdktf.stringToHclTerraform(this._serverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_disabled: {
        value: cdktf.booleanToHclTerraform(this._tlsDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      volume_driver: {
        value: cdktf.stringToHclTerraform(this._volumeDriver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: containerinfraClustertemplateV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContainerinfraClustertemplateV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
