// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudL4L7NativeLoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#aaa_domain_dn CloudL4L7NativeLoadBalancer#aaa_domain_dn}
  */
  readonly aaaDomainDn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#active_active CloudL4L7NativeLoadBalancer#active_active}
  */
  readonly activeActive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#allow_all CloudL4L7NativeLoadBalancer#allow_all}
  */
  readonly allowAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#annotation CloudL4L7NativeLoadBalancer#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#auto_scaling CloudL4L7NativeLoadBalancer#auto_scaling}
  */
  readonly autoScaling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#cloud_l4l7_load_balancer_type CloudL4L7NativeLoadBalancer#cloud_l4l7_load_balancer_type}
  */
  readonly cloudL4L7LoadBalancerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#context_aware CloudL4L7NativeLoadBalancer#context_aware}
  */
  readonly contextAware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#custom_resource_group CloudL4L7NativeLoadBalancer#custom_resource_group}
  */
  readonly customResourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#device_type CloudL4L7NativeLoadBalancer#device_type}
  */
  readonly deviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#function_type CloudL4L7NativeLoadBalancer#function_type}
  */
  readonly functionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#id CloudL4L7NativeLoadBalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#instance_count CloudL4L7NativeLoadBalancer#instance_count}
  */
  readonly instanceCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#is_copy CloudL4L7NativeLoadBalancer#is_copy}
  */
  readonly isCopy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#is_instantiation CloudL4L7NativeLoadBalancer#is_instantiation}
  */
  readonly isInstantiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#is_static_ip CloudL4L7NativeLoadBalancer#is_static_ip}
  */
  readonly isStaticIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#l4l7_device_application_security_group CloudL4L7NativeLoadBalancer#l4l7_device_application_security_group}
  */
  readonly l4L7DeviceApplicationSecurityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#l4l7_third_party_device CloudL4L7NativeLoadBalancer#l4l7_third_party_device}
  */
  readonly l4L7ThirdPartyDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#managed CloudL4L7NativeLoadBalancer#managed}
  */
  readonly managed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#max_instance_count CloudL4L7NativeLoadBalancer#max_instance_count}
  */
  readonly maxInstanceCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#min_instance_count CloudL4L7NativeLoadBalancer#min_instance_count}
  */
  readonly minInstanceCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#name CloudL4L7NativeLoadBalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#name_alias CloudL4L7NativeLoadBalancer#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#native_lb_name CloudL4L7NativeLoadBalancer#native_lb_name}
  */
  readonly nativeLbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#package_model CloudL4L7NativeLoadBalancer#package_model}
  */
  readonly packageModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#promiscuous_mode CloudL4L7NativeLoadBalancer#promiscuous_mode}
  */
  readonly promiscuousMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#relation_cloud_rs_ldev_to_cloud_subnet CloudL4L7NativeLoadBalancer#relation_cloud_rs_ldev_to_cloud_subnet}
  */
  readonly relationCloudRsLdevToCloudSubnet?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#scheme CloudL4L7NativeLoadBalancer#scheme}
  */
  readonly scheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#service_type CloudL4L7NativeLoadBalancer#service_type}
  */
  readonly serviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#size CloudL4L7NativeLoadBalancer#size}
  */
  readonly size?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#sku CloudL4L7NativeLoadBalancer#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#static_ip_addresses CloudL4L7NativeLoadBalancer#static_ip_addresses}
  */
  readonly staticIpAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#target_mode CloudL4L7NativeLoadBalancer#target_mode}
  */
  readonly targetMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#tenant_dn CloudL4L7NativeLoadBalancer#tenant_dn}
  */
  readonly tenantDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#trunking CloudL4L7NativeLoadBalancer#trunking}
  */
  readonly trunking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#version CloudL4L7NativeLoadBalancer#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer aci_cloud_l4_l7_native_load_balancer}
*/
export class CloudL4L7NativeLoadBalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_cloud_l4_l7_native_load_balancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudL4L7NativeLoadBalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudL4L7NativeLoadBalancer to import
  * @param importFromId The id of the existing CloudL4L7NativeLoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudL4L7NativeLoadBalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_cloud_l4_l7_native_load_balancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_native_load_balancer aci_cloud_l4_l7_native_load_balancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudL4L7NativeLoadBalancerConfig
  */
  public constructor(scope: Construct, id: string, config: CloudL4L7NativeLoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_cloud_l4_l7_native_load_balancer',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aaaDomainDn = config.aaaDomainDn;
    this._activeActive = config.activeActive;
    this._allowAll = config.allowAll;
    this._annotation = config.annotation;
    this._autoScaling = config.autoScaling;
    this._cloudL4L7LoadBalancerType = config.cloudL4L7LoadBalancerType;
    this._contextAware = config.contextAware;
    this._customResourceGroup = config.customResourceGroup;
    this._deviceType = config.deviceType;
    this._functionType = config.functionType;
    this._id = config.id;
    this._instanceCount = config.instanceCount;
    this._isCopy = config.isCopy;
    this._isInstantiation = config.isInstantiation;
    this._isStaticIp = config.isStaticIp;
    this._l4L7DeviceApplicationSecurityGroup = config.l4L7DeviceApplicationSecurityGroup;
    this._l4L7ThirdPartyDevice = config.l4L7ThirdPartyDevice;
    this._managed = config.managed;
    this._maxInstanceCount = config.maxInstanceCount;
    this._minInstanceCount = config.minInstanceCount;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._nativeLbName = config.nativeLbName;
    this._packageModel = config.packageModel;
    this._promiscuousMode = config.promiscuousMode;
    this._relationCloudRsLdevToCloudSubnet = config.relationCloudRsLdevToCloudSubnet;
    this._scheme = config.scheme;
    this._serviceType = config.serviceType;
    this._size = config.size;
    this._sku = config.sku;
    this._staticIpAddresses = config.staticIpAddresses;
    this._targetMode = config.targetMode;
    this._tenantDn = config.tenantDn;
    this._trunking = config.trunking;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aaa_domain_dn - computed: false, optional: true, required: false
  private _aaaDomainDn?: string[]; 
  public get aaaDomainDn() {
    return cdktf.Fn.tolist(this.getListAttribute('aaa_domain_dn'));
  }
  public set aaaDomainDn(value: string[]) {
    this._aaaDomainDn = value;
  }
  public resetAaaDomainDn() {
    this._aaaDomainDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaDomainDnInput() {
    return this._aaaDomainDn;
  }

  // active_active - computed: true, optional: true, required: false
  private _activeActive?: string; 
  public get activeActive() {
    return this.getStringAttribute('active_active');
  }
  public set activeActive(value: string) {
    this._activeActive = value;
  }
  public resetActiveActive() {
    this._activeActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeActiveInput() {
    return this._activeActive;
  }

  // allow_all - computed: true, optional: true, required: false
  private _allowAll?: string; 
  public get allowAll() {
    return this.getStringAttribute('allow_all');
  }
  public set allowAll(value: string) {
    this._allowAll = value;
  }
  public resetAllowAll() {
    this._allowAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllInput() {
    return this._allowAll;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // auto_scaling - computed: true, optional: true, required: false
  private _autoScaling?: string; 
  public get autoScaling() {
    return this.getStringAttribute('auto_scaling');
  }
  public set autoScaling(value: string) {
    this._autoScaling = value;
  }
  public resetAutoScaling() {
    this._autoScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingInput() {
    return this._autoScaling;
  }

  // cloud_l4l7_load_balancer_type - computed: true, optional: true, required: false
  private _cloudL4L7LoadBalancerType?: string; 
  public get cloudL4L7LoadBalancerType() {
    return this.getStringAttribute('cloud_l4l7_load_balancer_type');
  }
  public set cloudL4L7LoadBalancerType(value: string) {
    this._cloudL4L7LoadBalancerType = value;
  }
  public resetCloudL4L7LoadBalancerType() {
    this._cloudL4L7LoadBalancerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudL4L7LoadBalancerTypeInput() {
    return this._cloudL4L7LoadBalancerType;
  }

  // context_aware - computed: true, optional: true, required: false
  private _contextAware?: string; 
  public get contextAware() {
    return this.getStringAttribute('context_aware');
  }
  public set contextAware(value: string) {
    this._contextAware = value;
  }
  public resetContextAware() {
    this._contextAware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextAwareInput() {
    return this._contextAware;
  }

  // custom_resource_group - computed: true, optional: true, required: false
  private _customResourceGroup?: string; 
  public get customResourceGroup() {
    return this.getStringAttribute('custom_resource_group');
  }
  public set customResourceGroup(value: string) {
    this._customResourceGroup = value;
  }
  public resetCustomResourceGroup() {
    this._customResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResourceGroupInput() {
    return this._customResourceGroup;
  }

  // device_type - computed: true, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // function_type - computed: true, optional: true, required: false
  private _functionType?: string; 
  public get functionType() {
    return this.getStringAttribute('function_type');
  }
  public set functionType(value: string) {
    this._functionType = value;
  }
  public resetFunctionType() {
    this._functionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionTypeInput() {
    return this._functionType;
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

  // instance_count - computed: true, optional: true, required: false
  private _instanceCount?: string; 
  public get instanceCount() {
    return this.getStringAttribute('instance_count');
  }
  public set instanceCount(value: string) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // is_copy - computed: true, optional: true, required: false
  private _isCopy?: string; 
  public get isCopy() {
    return this.getStringAttribute('is_copy');
  }
  public set isCopy(value: string) {
    this._isCopy = value;
  }
  public resetIsCopy() {
    this._isCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCopyInput() {
    return this._isCopy;
  }

  // is_instantiation - computed: true, optional: true, required: false
  private _isInstantiation?: string; 
  public get isInstantiation() {
    return this.getStringAttribute('is_instantiation');
  }
  public set isInstantiation(value: string) {
    this._isInstantiation = value;
  }
  public resetIsInstantiation() {
    this._isInstantiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInstantiationInput() {
    return this._isInstantiation;
  }

  // is_static_ip - computed: true, optional: true, required: false
  private _isStaticIp?: string; 
  public get isStaticIp() {
    return this.getStringAttribute('is_static_ip');
  }
  public set isStaticIp(value: string) {
    this._isStaticIp = value;
  }
  public resetIsStaticIp() {
    this._isStaticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isStaticIpInput() {
    return this._isStaticIp;
  }

  // l4l7_device_application_security_group - computed: true, optional: true, required: false
  private _l4L7DeviceApplicationSecurityGroup?: string; 
  public get l4L7DeviceApplicationSecurityGroup() {
    return this.getStringAttribute('l4l7_device_application_security_group');
  }
  public set l4L7DeviceApplicationSecurityGroup(value: string) {
    this._l4L7DeviceApplicationSecurityGroup = value;
  }
  public resetL4L7DeviceApplicationSecurityGroup() {
    this._l4L7DeviceApplicationSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4L7DeviceApplicationSecurityGroupInput() {
    return this._l4L7DeviceApplicationSecurityGroup;
  }

  // l4l7_third_party_device - computed: true, optional: true, required: false
  private _l4L7ThirdPartyDevice?: string; 
  public get l4L7ThirdPartyDevice() {
    return this.getStringAttribute('l4l7_third_party_device');
  }
  public set l4L7ThirdPartyDevice(value: string) {
    this._l4L7ThirdPartyDevice = value;
  }
  public resetL4L7ThirdPartyDevice() {
    this._l4L7ThirdPartyDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4L7ThirdPartyDeviceInput() {
    return this._l4L7ThirdPartyDevice;
  }

  // managed - computed: true, optional: true, required: false
  private _managed?: string; 
  public get managed() {
    return this.getStringAttribute('managed');
  }
  public set managed(value: string) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
  }

  // max_instance_count - computed: true, optional: true, required: false
  private _maxInstanceCount?: string; 
  public get maxInstanceCount() {
    return this.getStringAttribute('max_instance_count');
  }
  public set maxInstanceCount(value: string) {
    this._maxInstanceCount = value;
  }
  public resetMaxInstanceCount() {
    this._maxInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceCountInput() {
    return this._maxInstanceCount;
  }

  // min_instance_count - computed: true, optional: true, required: false
  private _minInstanceCount?: string; 
  public get minInstanceCount() {
    return this.getStringAttribute('min_instance_count');
  }
  public set minInstanceCount(value: string) {
    this._minInstanceCount = value;
  }
  public resetMinInstanceCount() {
    this._minInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceCountInput() {
    return this._minInstanceCount;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // native_lb_name - computed: true, optional: true, required: false
  private _nativeLbName?: string; 
  public get nativeLbName() {
    return this.getStringAttribute('native_lb_name');
  }
  public set nativeLbName(value: string) {
    this._nativeLbName = value;
  }
  public resetNativeLbName() {
    this._nativeLbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeLbNameInput() {
    return this._nativeLbName;
  }

  // package_model - computed: true, optional: true, required: false
  private _packageModel?: string; 
  public get packageModel() {
    return this.getStringAttribute('package_model');
  }
  public set packageModel(value: string) {
    this._packageModel = value;
  }
  public resetPackageModel() {
    this._packageModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageModelInput() {
    return this._packageModel;
  }

  // promiscuous_mode - computed: true, optional: true, required: false
  private _promiscuousMode?: string; 
  public get promiscuousMode() {
    return this.getStringAttribute('promiscuous_mode');
  }
  public set promiscuousMode(value: string) {
    this._promiscuousMode = value;
  }
  public resetPromiscuousMode() {
    this._promiscuousMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promiscuousModeInput() {
    return this._promiscuousMode;
  }

  // relation_cloud_rs_ldev_to_cloud_subnet - computed: false, optional: true, required: false
  private _relationCloudRsLdevToCloudSubnet?: string[]; 
  public get relationCloudRsLdevToCloudSubnet() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_cloud_rs_ldev_to_cloud_subnet'));
  }
  public set relationCloudRsLdevToCloudSubnet(value: string[]) {
    this._relationCloudRsLdevToCloudSubnet = value;
  }
  public resetRelationCloudRsLdevToCloudSubnet() {
    this._relationCloudRsLdevToCloudSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationCloudRsLdevToCloudSubnetInput() {
    return this._relationCloudRsLdevToCloudSubnet;
  }

  // scheme - computed: true, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // service_type - computed: true, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // size - computed: true, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // sku - computed: true, optional: true, required: false
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // static_ip_addresses - computed: false, optional: true, required: false
  private _staticIpAddresses?: string[]; 
  public get staticIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('static_ip_addresses'));
  }
  public set staticIpAddresses(value: string[]) {
    this._staticIpAddresses = value;
  }
  public resetStaticIpAddresses() {
    this._staticIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpAddressesInput() {
    return this._staticIpAddresses;
  }

  // target_mode - computed: true, optional: true, required: false
  private _targetMode?: string; 
  public get targetMode() {
    return this.getStringAttribute('target_mode');
  }
  public set targetMode(value: string) {
    this._targetMode = value;
  }
  public resetTargetMode() {
    this._targetMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetModeInput() {
    return this._targetMode;
  }

  // tenant_dn - computed: false, optional: false, required: true
  private _tenantDn?: string; 
  public get tenantDn() {
    return this.getStringAttribute('tenant_dn');
  }
  public set tenantDn(value: string) {
    this._tenantDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDnInput() {
    return this._tenantDn;
  }

  // trunking - computed: true, optional: true, required: false
  private _trunking?: string; 
  public get trunking() {
    return this.getStringAttribute('trunking');
  }
  public set trunking(value: string) {
    this._trunking = value;
  }
  public resetTrunking() {
    this._trunking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkingInput() {
    return this._trunking;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aaa_domain_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aaaDomainDn),
      active_active: cdktf.stringToTerraform(this._activeActive),
      allow_all: cdktf.stringToTerraform(this._allowAll),
      annotation: cdktf.stringToTerraform(this._annotation),
      auto_scaling: cdktf.stringToTerraform(this._autoScaling),
      cloud_l4l7_load_balancer_type: cdktf.stringToTerraform(this._cloudL4L7LoadBalancerType),
      context_aware: cdktf.stringToTerraform(this._contextAware),
      custom_resource_group: cdktf.stringToTerraform(this._customResourceGroup),
      device_type: cdktf.stringToTerraform(this._deviceType),
      function_type: cdktf.stringToTerraform(this._functionType),
      id: cdktf.stringToTerraform(this._id),
      instance_count: cdktf.stringToTerraform(this._instanceCount),
      is_copy: cdktf.stringToTerraform(this._isCopy),
      is_instantiation: cdktf.stringToTerraform(this._isInstantiation),
      is_static_ip: cdktf.stringToTerraform(this._isStaticIp),
      l4l7_device_application_security_group: cdktf.stringToTerraform(this._l4L7DeviceApplicationSecurityGroup),
      l4l7_third_party_device: cdktf.stringToTerraform(this._l4L7ThirdPartyDevice),
      managed: cdktf.stringToTerraform(this._managed),
      max_instance_count: cdktf.stringToTerraform(this._maxInstanceCount),
      min_instance_count: cdktf.stringToTerraform(this._minInstanceCount),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      native_lb_name: cdktf.stringToTerraform(this._nativeLbName),
      package_model: cdktf.stringToTerraform(this._packageModel),
      promiscuous_mode: cdktf.stringToTerraform(this._promiscuousMode),
      relation_cloud_rs_ldev_to_cloud_subnet: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationCloudRsLdevToCloudSubnet),
      scheme: cdktf.stringToTerraform(this._scheme),
      service_type: cdktf.stringToTerraform(this._serviceType),
      size: cdktf.stringToTerraform(this._size),
      sku: cdktf.stringToTerraform(this._sku),
      static_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._staticIpAddresses),
      target_mode: cdktf.stringToTerraform(this._targetMode),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
      trunking: cdktf.stringToTerraform(this._trunking),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aaa_domain_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aaaDomainDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      active_active: {
        value: cdktf.stringToHclTerraform(this._activeActive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_all: {
        value: cdktf.stringToHclTerraform(this._allowAll),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_scaling: {
        value: cdktf.stringToHclTerraform(this._autoScaling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_l4l7_load_balancer_type: {
        value: cdktf.stringToHclTerraform(this._cloudL4L7LoadBalancerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context_aware: {
        value: cdktf.stringToHclTerraform(this._contextAware),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_resource_group: {
        value: cdktf.stringToHclTerraform(this._customResourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_type: {
        value: cdktf.stringToHclTerraform(this._functionType),
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
      instance_count: {
        value: cdktf.stringToHclTerraform(this._instanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_copy: {
        value: cdktf.stringToHclTerraform(this._isCopy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_instantiation: {
        value: cdktf.stringToHclTerraform(this._isInstantiation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_static_ip: {
        value: cdktf.stringToHclTerraform(this._isStaticIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l4l7_device_application_security_group: {
        value: cdktf.stringToHclTerraform(this._l4L7DeviceApplicationSecurityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l4l7_third_party_device: {
        value: cdktf.stringToHclTerraform(this._l4L7ThirdPartyDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed: {
        value: cdktf.stringToHclTerraform(this._managed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_instance_count: {
        value: cdktf.stringToHclTerraform(this._maxInstanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_instance_count: {
        value: cdktf.stringToHclTerraform(this._minInstanceCount),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      native_lb_name: {
        value: cdktf.stringToHclTerraform(this._nativeLbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_model: {
        value: cdktf.stringToHclTerraform(this._packageModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      promiscuous_mode: {
        value: cdktf.stringToHclTerraform(this._promiscuousMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_cloud_rs_ldev_to_cloud_subnet: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationCloudRsLdevToCloudSubnet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scheme: {
        value: cdktf.stringToHclTerraform(this._scheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sku: {
        value: cdktf.stringToHclTerraform(this._sku),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._staticIpAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_mode: {
        value: cdktf.stringToHclTerraform(this._targetMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_dn: {
        value: cdktf.stringToHclTerraform(this._tenantDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunking: {
        value: cdktf.stringToHclTerraform(this._trunking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
