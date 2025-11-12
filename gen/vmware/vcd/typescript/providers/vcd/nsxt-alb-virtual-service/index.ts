// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtAlbVirtualServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * HTTP, HTTPS, L4, L4_TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service#application_profile_type NsxtAlbVirtualService#application_profile_type}
  */
  readonly applicationProfileType: string;
  /**
  * Optional certificate ID to use for exposing service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service#ca_certificate_id NsxtAlbVirtualService#ca_certificate_id}
  */
  readonly caCertificateId?: string;
  /**
  * Description of ALB Virtual Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service#description NsxtAlbVirtualService#description}
  */
  readonly description?: string;
  /**
  * Edge gateway ID in which ALB Pool should be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service#edge_gateway_id NsxtAlbVirtualService#edge_gateway_id}
  */
  readonly edgeGatewayId: string;
  /**
  * Virtual Service is enabled or disabled (default true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service#enabled NsxtAlbVirtualService#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service#id NsxtAlbVirtualService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPv6 Virtual IP address (VIP) for Virtual Service (VCD 10.4.0+)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service#ipv6_virtual_ip_address NsxtAlbVirtualService#ipv6_virtual_ip_address}
  */
  readonly ipv6VirtualIpAddress?: string;
  /**
  * Preserves Client IP on a Virtual Service (VCD 10.4.1+)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service#is_transparent_mode_enabled NsxtAlbVirtualService#is_transparent_mode_enabled}
  */
  readonly isTransparentModeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of ALB Virtual Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service#name NsxtAlbVirtualService#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service#org NsxtAlbVirtualService#org}
  */
  readonly org?: string;
  /**
  * Pool ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service#pool_id NsxtAlbVirtualService#pool_id}
  */
  readonly poolId: string;
  /**
  * Service Engine Group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service#service_engine_group_id NsxtAlbVirtualService#service_engine_group_id}
  */
  readonly serviceEngineGroupId: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service#vdc NsxtAlbVirtualService#vdc}
  */
  readonly vdc?: string;
  /**
  * Virtual IP address (VIP) for Virtual Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service#virtual_ip_address NsxtAlbVirtualService#virtual_ip_address}
  */
  readonly virtualIpAddress: string;
  /**
  * service_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service#service_port NsxtAlbVirtualService#service_port}
  */
  readonly servicePort?: NsxtAlbVirtualServiceServicePort[] | cdktf.IResolvable;
}
export interface NsxtAlbVirtualServiceServicePort {
  /**
  * Last port in the range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service#end_port NsxtAlbVirtualService#end_port}
  */
  readonly endPort?: number;
  /**
  * Defines if certificate should be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service#ssl_enabled NsxtAlbVirtualService#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * Starting port in the range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service#start_port NsxtAlbVirtualService#start_port}
  */
  readonly startPort: number;
  /**
  * One of 'TCP_PROXY', 'TCP_FAST_PATH', 'UDP_FAST_PATH'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service#type NsxtAlbVirtualService#type}
  */
  readonly type: string;
}

export function nsxtAlbVirtualServiceServicePortToTerraform(struct?: NsxtAlbVirtualServiceServicePort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    start_port: cdktf.numberToTerraform(struct!.startPort),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function nsxtAlbVirtualServiceServicePortToHclTerraform(struct?: NsxtAlbVirtualServiceServicePort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sslEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtAlbVirtualServiceServicePortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtAlbVirtualServiceServicePort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._sslEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslEnabled = this._sslEnabled;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtAlbVirtualServiceServicePort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._sslEnabled = undefined;
      this._startPort = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._sslEnabled = value.sslEnabled;
      this._startPort = value.startPort;
      this._type = value.type;
    }
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // ssl_enabled - computed: false, optional: true, required: false
  private _sslEnabled?: boolean | cdktf.IResolvable; 
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled');
  }
  public set sslEnabled(value: boolean | cdktf.IResolvable) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // start_port - computed: false, optional: false, required: true
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
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
}

export class NsxtAlbVirtualServiceServicePortList extends cdktf.ComplexList {
  public internalValue? : NsxtAlbVirtualServiceServicePort[] | cdktf.IResolvable

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
  public get(index: number): NsxtAlbVirtualServiceServicePortOutputReference {
    return new NsxtAlbVirtualServiceServicePortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service vcd_nsxt_alb_virtual_service}
*/
export class NsxtAlbVirtualService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_alb_virtual_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtAlbVirtualService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtAlbVirtualService to import
  * @param importFromId The id of the existing NsxtAlbVirtualService that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtAlbVirtualService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_alb_virtual_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_virtual_service vcd_nsxt_alb_virtual_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtAlbVirtualServiceConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtAlbVirtualServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_alb_virtual_service',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationProfileType = config.applicationProfileType;
    this._caCertificateId = config.caCertificateId;
    this._description = config.description;
    this._edgeGatewayId = config.edgeGatewayId;
    this._enabled = config.enabled;
    this._id = config.id;
    this._ipv6VirtualIpAddress = config.ipv6VirtualIpAddress;
    this._isTransparentModeEnabled = config.isTransparentModeEnabled;
    this._name = config.name;
    this._org = config.org;
    this._poolId = config.poolId;
    this._serviceEngineGroupId = config.serviceEngineGroupId;
    this._vdc = config.vdc;
    this._virtualIpAddress = config.virtualIpAddress;
    this._servicePort.internalValue = config.servicePort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_profile_type - computed: false, optional: false, required: true
  private _applicationProfileType?: string; 
  public get applicationProfileType() {
    return this.getStringAttribute('application_profile_type');
  }
  public set applicationProfileType(value: string) {
    this._applicationProfileType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationProfileTypeInput() {
    return this._applicationProfileType;
  }

  // ca_certificate_id - computed: false, optional: true, required: false
  private _caCertificateId?: string; 
  public get caCertificateId() {
    return this.getStringAttribute('ca_certificate_id');
  }
  public set caCertificateId(value: string) {
    this._caCertificateId = value;
  }
  public resetCaCertificateId() {
    this._caCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateIdInput() {
    return this._caCertificateId;
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

  // edge_gateway_id - computed: false, optional: false, required: true
  private _edgeGatewayId?: string; 
  public get edgeGatewayId() {
    return this.getStringAttribute('edge_gateway_id');
  }
  public set edgeGatewayId(value: string) {
    this._edgeGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayIdInput() {
    return this._edgeGatewayId;
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

  // ipv6_virtual_ip_address - computed: false, optional: true, required: false
  private _ipv6VirtualIpAddress?: string; 
  public get ipv6VirtualIpAddress() {
    return this.getStringAttribute('ipv6_virtual_ip_address');
  }
  public set ipv6VirtualIpAddress(value: string) {
    this._ipv6VirtualIpAddress = value;
  }
  public resetIpv6VirtualIpAddress() {
    this._ipv6VirtualIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VirtualIpAddressInput() {
    return this._ipv6VirtualIpAddress;
  }

  // is_transparent_mode_enabled - computed: true, optional: true, required: false
  private _isTransparentModeEnabled?: boolean | cdktf.IResolvable; 
  public get isTransparentModeEnabled() {
    return this.getBooleanAttribute('is_transparent_mode_enabled');
  }
  public set isTransparentModeEnabled(value: boolean | cdktf.IResolvable) {
    this._isTransparentModeEnabled = value;
  }
  public resetIsTransparentModeEnabled() {
    this._isTransparentModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTransparentModeEnabledInput() {
    return this._isTransparentModeEnabled;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // pool_id - computed: false, optional: false, required: true
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // service_engine_group_id - computed: false, optional: false, required: true
  private _serviceEngineGroupId?: string; 
  public get serviceEngineGroupId() {
    return this.getStringAttribute('service_engine_group_id');
  }
  public set serviceEngineGroupId(value: string) {
    this._serviceEngineGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEngineGroupIdInput() {
    return this._serviceEngineGroupId;
  }

  // vdc - computed: true, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // virtual_ip_address - computed: false, optional: false, required: true
  private _virtualIpAddress?: string; 
  public get virtualIpAddress() {
    return this.getStringAttribute('virtual_ip_address');
  }
  public set virtualIpAddress(value: string) {
    this._virtualIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualIpAddressInput() {
    return this._virtualIpAddress;
  }

  // service_port - computed: false, optional: true, required: false
  private _servicePort = new NsxtAlbVirtualServiceServicePortList(this, "service_port", true);
  public get servicePort() {
    return this._servicePort;
  }
  public putServicePort(value: NsxtAlbVirtualServiceServicePort[] | cdktf.IResolvable) {
    this._servicePort.internalValue = value;
  }
  public resetServicePort() {
    this._servicePort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortInput() {
    return this._servicePort.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_profile_type: cdktf.stringToTerraform(this._applicationProfileType),
      ca_certificate_id: cdktf.stringToTerraform(this._caCertificateId),
      description: cdktf.stringToTerraform(this._description),
      edge_gateway_id: cdktf.stringToTerraform(this._edgeGatewayId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ipv6_virtual_ip_address: cdktf.stringToTerraform(this._ipv6VirtualIpAddress),
      is_transparent_mode_enabled: cdktf.booleanToTerraform(this._isTransparentModeEnabled),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      pool_id: cdktf.stringToTerraform(this._poolId),
      service_engine_group_id: cdktf.stringToTerraform(this._serviceEngineGroupId),
      vdc: cdktf.stringToTerraform(this._vdc),
      virtual_ip_address: cdktf.stringToTerraform(this._virtualIpAddress),
      service_port: cdktf.listMapper(nsxtAlbVirtualServiceServicePortToTerraform, true)(this._servicePort.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_profile_type: {
        value: cdktf.stringToHclTerraform(this._applicationProfileType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_certificate_id: {
        value: cdktf.stringToHclTerraform(this._caCertificateId),
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
      edge_gateway_id: {
        value: cdktf.stringToHclTerraform(this._edgeGatewayId),
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
      ipv6_virtual_ip_address: {
        value: cdktf.stringToHclTerraform(this._ipv6VirtualIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_transparent_mode_enabled: {
        value: cdktf.booleanToHclTerraform(this._isTransparentModeEnabled),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_id: {
        value: cdktf.stringToHclTerraform(this._poolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_engine_group_id: {
        value: cdktf.stringToHclTerraform(this._serviceEngineGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_ip_address: {
        value: cdktf.stringToHclTerraform(this._virtualIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_port: {
        value: cdktf.listMapperHcl(nsxtAlbVirtualServiceServicePortToHclTerraform, true)(this._servicePort.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NsxtAlbVirtualServiceServicePortList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
