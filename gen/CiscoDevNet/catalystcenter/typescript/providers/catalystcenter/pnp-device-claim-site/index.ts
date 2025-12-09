// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/pnp_device_claim_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PnpDeviceClaimSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Config (temaplate) ID. Required if `type` is `Default` or `StackSwitch`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/pnp_device_claim_site#config_id PnpDeviceClaimSite#config_id}
  */
  readonly configId?: string;
  /**
  * List of config (temaplate) parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/pnp_device_claim_site#config_parameters PnpDeviceClaimSite#config_parameters}
  */
  readonly configParameters?: PnpDeviceClaimSiteConfigParameters[] | cdktf.IResolvable;
  /**
  * The device ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/pnp_device_claim_site#device_id PnpDeviceClaimSite#device_id}
  */
  readonly deviceId: string;
  /**
  * Gateway IP. Required if `type` is `CatalystWLC` or `MobilityExpress`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/pnp_device_claim_site#gateway PnpDeviceClaimSite#gateway}
  */
  readonly gateway?: string;
  /**
  * Image ID. Required if `type` is `Default` or `StackSwitch`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/pnp_device_claim_site#image_id PnpDeviceClaimSite#image_id}
  */
  readonly imageId?: string;
  /**
  * Skip image provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/pnp_device_claim_site#image_skip PnpDeviceClaimSite#image_skip}
  */
  readonly imageSkip?: boolean | cdktf.IResolvable;
  /**
  * IP interface name. Required for Catalyst 9800 WLC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/pnp_device_claim_site#ip_interface_name PnpDeviceClaimSite#ip_interface_name}
  */
  readonly ipInterfaceName?: string;
  /**
  * RF profile. Required if `type` is `AccessPoint`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/pnp_device_claim_site#rf_profile PnpDeviceClaimSite#rf_profile}
  */
  readonly rfProfile?: string;
  /**
  * Sensor profile. Required if `type` is `Sensor`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/pnp_device_claim_site#sensor_profile PnpDeviceClaimSite#sensor_profile}
  */
  readonly sensorProfile?: string;
  /**
  * The site ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/pnp_device_claim_site#site_id PnpDeviceClaimSite#site_id}
  */
  readonly siteId: string;
  /**
  * Static IP address. Required if `type` is `CatalystWLC` or `MobilityExpress`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/pnp_device_claim_site#static_ip PnpDeviceClaimSite#static_ip}
  */
  readonly staticIp?: string;
  /**
  * Subnet mask. Required if `type` is `CatalystWLC` or `MobilityExpress`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/pnp_device_claim_site#subnet_mask PnpDeviceClaimSite#subnet_mask}
  */
  readonly subnetMask?: string;
  /**
  * The device type
  *   - Choices: `Default`, `StackSwitch`, `AccessPoint`, `Sensor`, `CatalystWLC`, `MobilityExpress`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/pnp_device_claim_site#type PnpDeviceClaimSite#type}
  */
  readonly type: string;
  /**
  * Vlan ID. Required for Catalyst 9800 WLC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/pnp_device_claim_site#vlan_id PnpDeviceClaimSite#vlan_id}
  */
  readonly vlanId?: string;
}
export interface PnpDeviceClaimSiteConfigParameters {
  /**
  * Name of config parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/pnp_device_claim_site#name PnpDeviceClaimSite#name}
  */
  readonly name: string;
  /**
  * Value of config parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/pnp_device_claim_site#value PnpDeviceClaimSite#value}
  */
  readonly value?: string;
}

export function pnpDeviceClaimSiteConfigParametersToTerraform(struct?: PnpDeviceClaimSiteConfigParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pnpDeviceClaimSiteConfigParametersToHclTerraform(struct?: PnpDeviceClaimSiteConfigParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceClaimSiteConfigParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceClaimSiteConfigParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceClaimSiteConfigParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PnpDeviceClaimSiteConfigParametersList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceClaimSiteConfigParameters[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceClaimSiteConfigParametersOutputReference {
    return new PnpDeviceClaimSiteConfigParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/pnp_device_claim_site catalystcenter_pnp_device_claim_site}
*/
export class PnpDeviceClaimSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_pnp_device_claim_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PnpDeviceClaimSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PnpDeviceClaimSite to import
  * @param importFromId The id of the existing PnpDeviceClaimSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/pnp_device_claim_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PnpDeviceClaimSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_pnp_device_claim_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/pnp_device_claim_site catalystcenter_pnp_device_claim_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PnpDeviceClaimSiteConfig
  */
  public constructor(scope: Construct, id: string, config: PnpDeviceClaimSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_pnp_device_claim_site',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.4',
        providerVersionConstraint: '0.4.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configId = config.configId;
    this._configParameters.internalValue = config.configParameters;
    this._deviceId = config.deviceId;
    this._gateway = config.gateway;
    this._imageId = config.imageId;
    this._imageSkip = config.imageSkip;
    this._ipInterfaceName = config.ipInterfaceName;
    this._rfProfile = config.rfProfile;
    this._sensorProfile = config.sensorProfile;
    this._siteId = config.siteId;
    this._staticIp = config.staticIp;
    this._subnetMask = config.subnetMask;
    this._type = config.type;
    this._vlanId = config.vlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: false, optional: true, required: false
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  public resetConfigId() {
    this._configId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // config_parameters - computed: false, optional: true, required: false
  private _configParameters = new PnpDeviceClaimSiteConfigParametersList(this, "config_parameters", false);
  public get configParameters() {
    return this._configParameters;
  }
  public putConfigParameters(value: PnpDeviceClaimSiteConfigParameters[] | cdktf.IResolvable) {
    this._configParameters.internalValue = value;
  }
  public resetConfigParameters() {
    this._configParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configParametersInput() {
    return this._configParameters.internalValue;
  }

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // image_skip - computed: false, optional: true, required: false
  private _imageSkip?: boolean | cdktf.IResolvable; 
  public get imageSkip() {
    return this.getBooleanAttribute('image_skip');
  }
  public set imageSkip(value: boolean | cdktf.IResolvable) {
    this._imageSkip = value;
  }
  public resetImageSkip() {
    this._imageSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSkipInput() {
    return this._imageSkip;
  }

  // ip_interface_name - computed: false, optional: true, required: false
  private _ipInterfaceName?: string; 
  public get ipInterfaceName() {
    return this.getStringAttribute('ip_interface_name');
  }
  public set ipInterfaceName(value: string) {
    this._ipInterfaceName = value;
  }
  public resetIpInterfaceName() {
    this._ipInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInterfaceNameInput() {
    return this._ipInterfaceName;
  }

  // rf_profile - computed: false, optional: true, required: false
  private _rfProfile?: string; 
  public get rfProfile() {
    return this.getStringAttribute('rf_profile');
  }
  public set rfProfile(value: string) {
    this._rfProfile = value;
  }
  public resetRfProfile() {
    this._rfProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfProfileInput() {
    return this._rfProfile;
  }

  // sensor_profile - computed: false, optional: true, required: false
  private _sensorProfile?: string; 
  public get sensorProfile() {
    return this.getStringAttribute('sensor_profile');
  }
  public set sensorProfile(value: string) {
    this._sensorProfile = value;
  }
  public resetSensorProfile() {
    this._sensorProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensorProfileInput() {
    return this._sensorProfile;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp?: string; 
  public get staticIp() {
    return this.getStringAttribute('static_ip');
  }
  public set staticIp(value: string) {
    this._staticIp = value;
  }
  public resetStaticIp() {
    this._staticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp;
  }

  // subnet_mask - computed: false, optional: true, required: false
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  public resetSubnetMask() {
    this._subnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_id: cdktf.stringToTerraform(this._configId),
      config_parameters: cdktf.listMapper(pnpDeviceClaimSiteConfigParametersToTerraform, false)(this._configParameters.internalValue),
      device_id: cdktf.stringToTerraform(this._deviceId),
      gateway: cdktf.stringToTerraform(this._gateway),
      image_id: cdktf.stringToTerraform(this._imageId),
      image_skip: cdktf.booleanToTerraform(this._imageSkip),
      ip_interface_name: cdktf.stringToTerraform(this._ipInterfaceName),
      rf_profile: cdktf.stringToTerraform(this._rfProfile),
      sensor_profile: cdktf.stringToTerraform(this._sensorProfile),
      site_id: cdktf.stringToTerraform(this._siteId),
      static_ip: cdktf.stringToTerraform(this._staticIp),
      subnet_mask: cdktf.stringToTerraform(this._subnetMask),
      type: cdktf.stringToTerraform(this._type),
      vlan_id: cdktf.stringToTerraform(this._vlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_id: {
        value: cdktf.stringToHclTerraform(this._configId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_parameters: {
        value: cdktf.listMapperHcl(pnpDeviceClaimSiteConfigParametersToHclTerraform, false)(this._configParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PnpDeviceClaimSiteConfigParametersList",
      },
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_skip: {
        value: cdktf.booleanToHclTerraform(this._imageSkip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_interface_name: {
        value: cdktf.stringToHclTerraform(this._ipInterfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rf_profile: {
        value: cdktf.stringToHclTerraform(this._rfProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensor_profile: {
        value: cdktf.stringToHclTerraform(this._sensorProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_ip: {
        value: cdktf.stringToHclTerraform(this._staticIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_mask: {
        value: cdktf.stringToHclTerraform(this._subnetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.stringToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
