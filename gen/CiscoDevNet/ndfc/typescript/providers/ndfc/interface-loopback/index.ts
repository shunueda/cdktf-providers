// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_loopback
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceLoopbackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deploy the configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_loopback#deploy InterfaceLoopback#deploy}
  */
  readonly deploy?: boolean | cdktf.IResolvable;
  /**
  * interfaces to configure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_loopback#interfaces InterfaceLoopback#interfaces}
  */
  readonly interfaces: { [key: string]: InterfaceLoopbackInterfaces } | cdktf.IResolvable;
  /**
  * Name of the policy. Supported policies:: `int_loopback`, `int_multisite_loopback`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_loopback#policy InterfaceLoopback#policy}
  */
  readonly policy?: string;
  /**
  * Serial number of switch to configure. This field cannot be specified if `serial_number` inside `interfaces` block is specified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_loopback#serial_number InterfaceLoopback#serial_number}
  */
  readonly serialNumber?: string;
}
export interface InterfaceLoopbackInterfaces {
  /**
  * Administratively enable or disable the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_loopback#admin_state InterfaceLoopback#admin_state}
  */
  readonly adminState?: boolean | cdktf.IResolvable;
  /**
  * Additional CLI commands to be executed for the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_loopback#freeform_config InterfaceLoopback#freeform_config}
  */
  readonly freeformConfig?: string;
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_loopback#interface_description InterfaceLoopback#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Name of the Interface. Example: `loopback1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_loopback#interface_name InterfaceLoopback#interface_name}
  */
  readonly interfaceName: string;
  /**
  * IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_loopback#ipv4_address InterfaceLoopback#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_loopback#ipv6_address InterfaceLoopback#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Route map tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_loopback#route_map_tag InterfaceLoopback#route_map_tag}
  */
  readonly routeMapTag?: string;
  /**
  * Serial number of switch to configure. This field cannot be specified if `serial_number` outside `interfaces` block is specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_loopback#serial_number InterfaceLoopback#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * VRF name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_loopback#vrf InterfaceLoopback#vrf}
  */
  readonly vrf?: string;
}

export function interfaceLoopbackInterfacesToTerraform(struct?: InterfaceLoopbackInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_state: cdktf.booleanToTerraform(struct!.adminState),
    freeform_config: cdktf.stringToTerraform(struct!.freeformConfig),
    interface_description: cdktf.stringToTerraform(struct!.interfaceDescription),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    route_map_tag: cdktf.stringToTerraform(struct!.routeMapTag),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function interfaceLoopbackInterfacesToHclTerraform(struct?: InterfaceLoopbackInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_state: {
      value: cdktf.booleanToHclTerraform(struct!.adminState),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    freeform_config: {
      value: cdktf.stringToHclTerraform(struct!.freeformConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_description: {
      value: cdktf.stringToHclTerraform(struct!.interfaceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_tag: {
      value: cdktf.stringToHclTerraform(struct!.routeMapTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLoopbackInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): InterfaceLoopbackInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminState !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminState = this._adminState;
    }
    if (this._freeformConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformConfig = this._freeformConfig;
    }
    if (this._interfaceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceDescription = this._interfaceDescription;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._routeMapTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapTag = this._routeMapTag;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLoopbackInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminState = undefined;
      this._freeformConfig = undefined;
      this._interfaceDescription = undefined;
      this._interfaceName = undefined;
      this._ipv4Address = undefined;
      this._ipv6Address = undefined;
      this._routeMapTag = undefined;
      this._serialNumber = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminState = value.adminState;
      this._freeformConfig = value.freeformConfig;
      this._interfaceDescription = value.interfaceDescription;
      this._interfaceName = value.interfaceName;
      this._ipv4Address = value.ipv4Address;
      this._ipv6Address = value.ipv6Address;
      this._routeMapTag = value.routeMapTag;
      this._serialNumber = value.serialNumber;
      this._vrf = value.vrf;
    }
  }

  // admin_state - computed: true, optional: true, required: false
  private _adminState?: boolean | cdktf.IResolvable; 
  public get adminState() {
    return this.getBooleanAttribute('admin_state');
  }
  public set adminState(value: boolean | cdktf.IResolvable) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // deployment_status - computed: true, optional: false, required: false
  public get deploymentStatus() {
    return this.getStringAttribute('deployment_status');
  }

  // freeform_config - computed: false, optional: true, required: false
  private _freeformConfig?: string; 
  public get freeformConfig() {
    return this.getStringAttribute('freeform_config');
  }
  public set freeformConfig(value: string) {
    this._freeformConfig = value;
  }
  public resetFreeformConfig() {
    this._freeformConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformConfigInput() {
    return this._freeformConfig;
  }

  // interface_description - computed: false, optional: true, required: false
  private _interfaceDescription?: string; 
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }
  public set interfaceDescription(value: string) {
    this._interfaceDescription = value;
  }
  public resetInterfaceDescription() {
    this._interfaceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDescriptionInput() {
    return this._interfaceDescription;
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // route_map_tag - computed: true, optional: true, required: false
  private _routeMapTag?: string; 
  public get routeMapTag() {
    return this.getStringAttribute('route_map_tag');
  }
  public set routeMapTag(value: string) {
    this._routeMapTag = value;
  }
  public resetRouteMapTag() {
    this._routeMapTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapTagInput() {
    return this._routeMapTag;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // vrf - computed: true, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class InterfaceLoopbackInterfacesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: InterfaceLoopbackInterfaces } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): InterfaceLoopbackInterfacesOutputReference {
    return new InterfaceLoopbackInterfacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_loopback ndfc_interface_loopback}
*/
export class InterfaceLoopback extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_interface_loopback";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceLoopback resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceLoopback to import
  * @param importFromId The id of the existing InterfaceLoopback that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_loopback#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceLoopback to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_interface_loopback", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_loopback ndfc_interface_loopback} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceLoopbackConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceLoopbackConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_interface_loopback',
      terraformGeneratorMetadata: {
        providerName: 'ndfc',
        providerVersion: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploy = config.deploy;
    this._interfaces.internalValue = config.interfaces;
    this._policy = config.policy;
    this._serialNumber = config.serialNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deploy - computed: true, optional: true, required: false
  private _deploy?: boolean | cdktf.IResolvable; 
  public get deploy() {
    return this.getBooleanAttribute('deploy');
  }
  public set deploy(value: boolean | cdktf.IResolvable) {
    this._deploy = value;
  }
  public resetDeploy() {
    this._deploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployInput() {
    return this._deploy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: false, optional: false, required: true
  private _interfaces = new InterfaceLoopbackInterfacesMap(this, "interfaces");
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: { [key: string]: InterfaceLoopbackInterfaces } | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deploy: cdktf.booleanToTerraform(this._deploy),
      interfaces: cdktf.hashMapper(interfaceLoopbackInterfacesToTerraform)(this._interfaces.internalValue),
      policy: cdktf.stringToTerraform(this._policy),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deploy: {
        value: cdktf.booleanToHclTerraform(this._deploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interfaces: {
        value: cdktf.hashMapperHcl(interfaceLoopbackInterfacesToHclTerraform)(this._interfaces.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "InterfaceLoopbackInterfacesMap",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
