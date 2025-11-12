// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_cloud_integration_ecosystem_consul
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcosCloudIntegrationEcosystemConsulAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable Configuration; 'disable': Disable Configuration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_cloud_integration_ecosystem_consul#action AcosCloudIntegrationEcosystemConsulA#action}
  */
  readonly action?: string;
  /**
  * '5': 5 seconds; '10': 10 seconds; '15': 15 seconds; '20': 20 seconds;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_cloud_integration_ecosystem_consul#health_check_interval AcosCloudIntegrationEcosystemConsulA#health_check_interval}
  */
  readonly healthCheckInterval?: string;
  /**
  * Configure the host name for bootstrap server(e.g www.a10networks.com)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_cloud_integration_ecosystem_consul#host_name AcosCloudIntegrationEcosystemConsulA#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_cloud_integration_ecosystem_consul#id AcosCloudIntegrationEcosystemConsulA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure the bootstrap server's IPv4 address (the host IPv4 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_cloud_integration_ecosystem_consul#ipv4_address AcosCloudIntegrationEcosystemConsulA#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Configure the bootstrap server's IPv6 address (the host IPv6 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_cloud_integration_ecosystem_consul#ipv6_address AcosCloudIntegrationEcosystemConsulA#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Configure the http port to use (port 8500)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_cloud_integration_ecosystem_consul#port AcosCloudIntegrationEcosystemConsulA#port}
  */
  readonly port?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_cloud_integration_ecosystem_consul#uuid AcosCloudIntegrationEcosystemConsulA#uuid}
  */
  readonly uuid?: string;
  /**
  * service_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_cloud_integration_ecosystem_consul#service_label AcosCloudIntegrationEcosystemConsulA#service_label}
  */
  readonly serviceLabel?: AcosCloudIntegrationEcosystemConsulServiceLabelA[] | cdktf.IResolvable;
}
export interface AcosCloudIntegrationEcosystemConsulServiceLabelA {
  /**
  * Name service group to be monitored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_cloud_integration_ecosystem_consul#service_label_name AcosCloudIntegrationEcosystemConsulA#service_label_name}
  */
  readonly serviceLabelName?: string;
}

export function acosCloudIntegrationEcosystemConsulServiceLabelAToTerraform(struct?: AcosCloudIntegrationEcosystemConsulServiceLabelA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_label_name: cdktf.stringToTerraform(struct!.serviceLabelName),
  }
}


export function acosCloudIntegrationEcosystemConsulServiceLabelAToHclTerraform(struct?: AcosCloudIntegrationEcosystemConsulServiceLabelA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_label_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceLabelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcosCloudIntegrationEcosystemConsulServiceLabelAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AcosCloudIntegrationEcosystemConsulServiceLabelA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceLabelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLabelName = this._serviceLabelName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcosCloudIntegrationEcosystemConsulServiceLabelA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceLabelName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceLabelName = value.serviceLabelName;
    }
  }

  // service_label_name - computed: false, optional: true, required: false
  private _serviceLabelName?: string; 
  public get serviceLabelName() {
    return this.getStringAttribute('service_label_name');
  }
  public set serviceLabelName(value: string) {
    this._serviceLabelName = value;
  }
  public resetServiceLabelName() {
    this._serviceLabelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLabelNameInput() {
    return this._serviceLabelName;
  }
}

export class AcosCloudIntegrationEcosystemConsulServiceLabelAList extends cdktf.ComplexList {
  public internalValue? : AcosCloudIntegrationEcosystemConsulServiceLabelA[] | cdktf.IResolvable

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
  public get(index: number): AcosCloudIntegrationEcosystemConsulServiceLabelAOutputReference {
    return new AcosCloudIntegrationEcosystemConsulServiceLabelAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_cloud_integration_ecosystem_consul thunder_acos_cloud_integration_ecosystem_consul}
*/
export class AcosCloudIntegrationEcosystemConsulA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_acos_cloud_integration_ecosystem_consul";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AcosCloudIntegrationEcosystemConsulA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AcosCloudIntegrationEcosystemConsulA to import
  * @param importFromId The id of the existing AcosCloudIntegrationEcosystemConsulA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_cloud_integration_ecosystem_consul#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AcosCloudIntegrationEcosystemConsulA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_acos_cloud_integration_ecosystem_consul", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_cloud_integration_ecosystem_consul thunder_acos_cloud_integration_ecosystem_consul} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcosCloudIntegrationEcosystemConsulAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AcosCloudIntegrationEcosystemConsulAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_acos_cloud_integration_ecosystem_consul',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._healthCheckInterval = config.healthCheckInterval;
    this._hostName = config.hostName;
    this._id = config.id;
    this._ipv4Address = config.ipv4Address;
    this._ipv6Address = config.ipv6Address;
    this._port = config.port;
    this._uuid = config.uuid;
    this._serviceLabel.internalValue = config.serviceLabel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // health_check_interval - computed: false, optional: true, required: false
  private _healthCheckInterval?: string; 
  public get healthCheckInterval() {
    return this.getStringAttribute('health_check_interval');
  }
  public set healthCheckInterval(value: string) {
    this._healthCheckInterval = value;
  }
  public resetHealthCheckInterval() {
    this._healthCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalInput() {
    return this._healthCheckInterval;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // service_label - computed: false, optional: true, required: false
  private _serviceLabel = new AcosCloudIntegrationEcosystemConsulServiceLabelAList(this, "service_label", false);
  public get serviceLabel() {
    return this._serviceLabel;
  }
  public putServiceLabel(value: AcosCloudIntegrationEcosystemConsulServiceLabelA[] | cdktf.IResolvable) {
    this._serviceLabel.internalValue = value;
  }
  public resetServiceLabel() {
    this._serviceLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLabelInput() {
    return this._serviceLabel.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      health_check_interval: cdktf.stringToTerraform(this._healthCheckInterval),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      port: cdktf.numberToTerraform(this._port),
      uuid: cdktf.stringToTerraform(this._uuid),
      service_label: cdktf.listMapper(acosCloudIntegrationEcosystemConsulServiceLabelAToTerraform, true)(this._serviceLabel.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_interval: {
        value: cdktf.stringToHclTerraform(this._healthCheckInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
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
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_label: {
        value: cdktf.listMapperHcl(acosCloudIntegrationEcosystemConsulServiceLabelAToHclTerraform, true)(this._serviceLabel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AcosCloudIntegrationEcosystemConsulServiceLabelAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
