// https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/service_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/service_object#app_id ServiceObject#app_id}
  */
  readonly appId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/service_object#backend_address_group ServiceObject#backend_address_group}
  */
  readonly backendAddressGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/service_object#client_tls_profile ServiceObject#client_tls_profile}
  */
  readonly clientTlsProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/service_object#description ServiceObject#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/service_object#http2_enable ServiceObject#http2_enable}
  */
  readonly http2Enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/service_object#id ServiceObject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/service_object#l7dos_profile ServiceObject#l7dos_profile}
  */
  readonly l7DosProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/service_object#name ServiceObject#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/service_object#protocol ServiceObject#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/service_object#service_type ServiceObject#service_type}
  */
  readonly serviceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/service_object#sni ServiceObject#sni}
  */
  readonly sni?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/service_object#source_nat ServiceObject#source_nat}
  */
  readonly sourceNat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/service_object#tls_profile ServiceObject#tls_profile}
  */
  readonly tlsProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/service_object#transport_mode ServiceObject#transport_mode}
  */
  readonly transportMode?: string;
  /**
  * port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/service_object#port ServiceObject#port}
  */
  readonly port?: ServiceObjectPort[] | cdktf.IResolvable;
}
export interface ServiceObjectPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/service_object#backend_ports ServiceObject#backend_ports}
  */
  readonly backendPorts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/service_object#destination_ports ServiceObject#destination_ports}
  */
  readonly destinationPorts: string;
}

export function serviceObjectPortToTerraform(struct?: ServiceObjectPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_ports: cdktf.stringToTerraform(struct!.backendPorts),
    destination_ports: cdktf.stringToTerraform(struct!.destinationPorts),
  }
}


export function serviceObjectPortToHclTerraform(struct?: ServiceObjectPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_ports: {
      value: cdktf.stringToHclTerraform(struct!.backendPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_ports: {
      value: cdktf.stringToHclTerraform(struct!.destinationPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceObjectPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceObjectPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendPorts = this._backendPorts;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceObjectPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendPorts = undefined;
      this._destinationPorts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendPorts = value.backendPorts;
      this._destinationPorts = value.destinationPorts;
    }
  }

  // backend_ports - computed: false, optional: true, required: false
  private _backendPorts?: string; 
  public get backendPorts() {
    return this.getStringAttribute('backend_ports');
  }
  public set backendPorts(value: string) {
    this._backendPorts = value;
  }
  public resetBackendPorts() {
    this._backendPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPortsInput() {
    return this._backendPorts;
  }

  // destination_ports - computed: false, optional: false, required: true
  private _destinationPorts?: string; 
  public get destinationPorts() {
    return this.getStringAttribute('destination_ports');
  }
  public set destinationPorts(value: string) {
    this._destinationPorts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
  }
}

export class ServiceObjectPortList extends cdktf.ComplexList {
  public internalValue? : ServiceObjectPort[] | cdktf.IResolvable

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
  public get(index: number): ServiceObjectPortOutputReference {
    return new ServiceObjectPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/service_object ciscomcd_service_object}
*/
export class ServiceObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciscomcd_service_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceObject to import
  * @param importFromId The id of the existing ServiceObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/service_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciscomcd_service_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/service_object ciscomcd_service_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceObjectConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'ciscomcd_service_object',
      terraformGeneratorMetadata: {
        providerName: 'ciscomcd',
        providerVersion: '25.9.2',
        providerVersionConstraint: '25.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._backendAddressGroup = config.backendAddressGroup;
    this._clientTlsProfile = config.clientTlsProfile;
    this._description = config.description;
    this._http2Enable = config.http2Enable;
    this._id = config.id;
    this._l7DosProfile = config.l7DosProfile;
    this._name = config.name;
    this._protocol = config.protocol;
    this._serviceType = config.serviceType;
    this._sni = config.sni;
    this._sourceNat = config.sourceNat;
    this._tlsProfile = config.tlsProfile;
    this._transportMode = config.transportMode;
    this._port.internalValue = config.port;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: true, required: false
  private _appId?: string[]; 
  public get appId() {
    return cdktf.Fn.tolist(this.getListAttribute('app_id'));
  }
  public set appId(value: string[]) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // backend_address_group - computed: false, optional: true, required: false
  private _backendAddressGroup?: number; 
  public get backendAddressGroup() {
    return this.getNumberAttribute('backend_address_group');
  }
  public set backendAddressGroup(value: number) {
    this._backendAddressGroup = value;
  }
  public resetBackendAddressGroup() {
    this._backendAddressGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendAddressGroupInput() {
    return this._backendAddressGroup;
  }

  // client_tls_profile - computed: false, optional: true, required: false
  private _clientTlsProfile?: number; 
  public get clientTlsProfile() {
    return this.getNumberAttribute('client_tls_profile');
  }
  public set clientTlsProfile(value: number) {
    this._clientTlsProfile = value;
  }
  public resetClientTlsProfile() {
    this._clientTlsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsProfileInput() {
    return this._clientTlsProfile;
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

  // http2_enable - computed: true, optional: true, required: false
  private _http2Enable?: boolean | cdktf.IResolvable; 
  public get http2Enable() {
    return this.getBooleanAttribute('http2_enable');
  }
  public set http2Enable(value: boolean | cdktf.IResolvable) {
    this._http2Enable = value;
  }
  public resetHttp2Enable() {
    this._http2Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2EnableInput() {
    return this._http2Enable;
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

  // l7dos_profile - computed: false, optional: true, required: false
  private _l7DosProfile?: number; 
  public get l7DosProfile() {
    return this.getNumberAttribute('l7dos_profile');
  }
  public set l7DosProfile(value: number) {
    this._l7DosProfile = value;
  }
  public resetL7DosProfile() {
    this._l7DosProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7DosProfileInput() {
    return this._l7DosProfile;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }

  // service_type - computed: false, optional: false, required: true
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: string[]; 
  public get sni() {
    return cdktf.Fn.tolist(this.getListAttribute('sni'));
  }
  public set sni(value: string[]) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // source_nat - computed: true, optional: true, required: false
  private _sourceNat?: boolean | cdktf.IResolvable; 
  public get sourceNat() {
    return this.getBooleanAttribute('source_nat');
  }
  public set sourceNat(value: boolean | cdktf.IResolvable) {
    this._sourceNat = value;
  }
  public resetSourceNat() {
    this._sourceNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNatInput() {
    return this._sourceNat;
  }

  // tls_profile - computed: false, optional: true, required: false
  private _tlsProfile?: number; 
  public get tlsProfile() {
    return this.getNumberAttribute('tls_profile');
  }
  public set tlsProfile(value: number) {
    this._tlsProfile = value;
  }
  public resetTlsProfile() {
    this._tlsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsProfileInput() {
    return this._tlsProfile;
  }

  // transport_mode - computed: false, optional: true, required: false
  private _transportMode?: string; 
  public get transportMode() {
    return this.getStringAttribute('transport_mode');
  }
  public set transportMode(value: string) {
    this._transportMode = value;
  }
  public resetTransportMode() {
    this._transportMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportModeInput() {
    return this._transportMode;
  }

  // port - computed: false, optional: true, required: false
  private _port = new ServiceObjectPortList(this, "port", false);
  public get port() {
    return this._port;
  }
  public putPort(value: ServiceObjectPort[] | cdktf.IResolvable) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appId),
      backend_address_group: cdktf.numberToTerraform(this._backendAddressGroup),
      client_tls_profile: cdktf.numberToTerraform(this._clientTlsProfile),
      description: cdktf.stringToTerraform(this._description),
      http2_enable: cdktf.booleanToTerraform(this._http2Enable),
      id: cdktf.stringToTerraform(this._id),
      l7dos_profile: cdktf.numberToTerraform(this._l7DosProfile),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      service_type: cdktf.stringToTerraform(this._serviceType),
      sni: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sni),
      source_nat: cdktf.booleanToTerraform(this._sourceNat),
      tls_profile: cdktf.numberToTerraform(this._tlsProfile),
      transport_mode: cdktf.stringToTerraform(this._transportMode),
      port: cdktf.listMapper(serviceObjectPortToTerraform, true)(this._port.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      backend_address_group: {
        value: cdktf.numberToHclTerraform(this._backendAddressGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_tls_profile: {
        value: cdktf.numberToHclTerraform(this._clientTlsProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http2_enable: {
        value: cdktf.booleanToHclTerraform(this._http2Enable),
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
      l7dos_profile: {
        value: cdktf.numberToHclTerraform(this._l7DosProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
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
      sni: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sni),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_nat: {
        value: cdktf.booleanToHclTerraform(this._sourceNat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_profile: {
        value: cdktf.numberToHclTerraform(this._tlsProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transport_mode: {
        value: cdktf.stringToHclTerraform(this._transportMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.listMapperHcl(serviceObjectPortToHclTerraform, true)(this._port.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceObjectPortList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
